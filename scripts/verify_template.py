#!/usr/bin/env python3
"""Serve exported template packages and check every local asset.

Each package is served as the site root. Every referenced local file, plus
every image, font, script, stylesheet, and video in the package, must return
HTTP 200 with a matching content type and a non-empty body.
"""

from __future__ import annotations

import argparse
import mimetypes
import sys
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import quote
from urllib.request import urlopen

sys.path.insert(0, str(Path(__file__).resolve().parent))
import export_template as exporter

mimetypes.add_type("font/woff2", ".woff2")
mimetypes.add_type("font/woff", ".woff")
mimetypes.add_type("image/webp", ".webp")
mimetypes.add_type("text/javascript", ".js")
mimetypes.add_type("text/javascript", ".mjs")
mimetypes.add_type("image/svg+xml", ".svg")
mimetypes.add_type("video/mp4", ".mp4")

EXPECTED = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "javascript",
    ".mjs": "javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".gif": "image/gif",
    ".svg": "image/svg",
    ".woff2": "font/woff2",
    ".woff": "font/woff",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".ico": "image/",
    ".json": "json",
    ".txt": "text/plain",
}
MEDIA_SUFFIXES = {
    ".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".avif", ".ico",
    ".mp4", ".webm", ".woff", ".woff2", ".ttf", ".otf",
    ".css", ".js", ".mjs", ".html",
}


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        return


def _magic_ok(path: Path, body: bytes) -> str | None:
    suffix = path.suffix.lower()
    if suffix == ".png" and not body.startswith(b"\x89PNG"):
        return "not a png"
    if suffix in {".jpg", ".jpeg"} and not body.startswith(b"\xff\xd8"):
        return "not a jpeg"
    if suffix == ".gif" and not body.startswith(b"GIF"):
        return "not a gif"
    if suffix == ".webp" and not (body.startswith(b"RIFF") and body[8:12] == b"WEBP"):
        return "not a webp"
    if suffix == ".woff2" and not body.startswith(b"wOF2"):
        return "not a woff2"
    if suffix == ".mp4" and b"ftyp" not in body[:64]:
        return "not an mp4"
    if suffix == ".svg" and b"<svg" not in body[:500].lower() and b"<?xml" not in body[:200].lower():
        return "not an svg"
    if suffix in {".js", ".mjs", ".css", ".html"} and not body.strip():
        return "empty text"
    return None


def _targets(package: Path) -> list[str]:
    report = exporter.audit_tree(package)
    wanted = set(report["referenced"])
    wanted.add("index.html")
    for path in package.rglob("*"):
        if path.is_file() and path.suffix.lower() in MEDIA_SUFFIXES:
            rel = path.relative_to(package).as_posix()
            if rel in {"PACKAGE.json"}:
                continue
            wanted.add(rel)
    return sorted(wanted)


def check_package(package: Path) -> list[str]:
    errors = []
    report = exporter.audit_tree(package)
    if report["missing"]:
        errors.append(f"missing on disk: {[item['path'] for item in report['missing']]}")
    if report["remote_fonts"]:
        errors.append(f"remote fonts still referenced: {report['remote_fonts'][:4]}")
    html = (package / "index.html").read_text(encoding="utf-8", errors="replace")
    if "<script" not in html.lower():
        errors.append("index.html has no script")
    if package.name == "ant":
        for rel in [
            "script.js",
            "style.css",
            "assets/vendor/gsap.min.js",
            "assets/vendor/ScrollTrigger.min.js",
            "assets/vendor/lenis.min.js",
            "assets/vendor/three.module.min.js",
            "assets/vendor/jsm/postprocessing/EffectComposer.js",
        ]:
            if not (package / rel).is_file():
                errors.append(f"ant vendor missing: {rel}")
            if rel.endswith(".js") and rel not in html and rel != "assets/vendor/three.module.min.js" and rel != "assets/vendor/jsm/postprocessing/EffectComposer.js":
                if Path(rel).name not in html and rel not in html:
                    errors.append(f"ant html does not load {rel}")

    handler = lambda *args, **kwargs: QuietHandler(*args, directory=str(package), **kwargs)
    server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    host, port = server.server_address
    try:
        for rel in _targets(package):
            url = f"http://{host}:{port}/{quote(rel, safe='/')}"
            try:
                with urlopen(url, timeout=30) as response:
                    status = response.status
                    ctype = response.headers.get_content_type()
                    body = response.read()
            except HTTPError as exc:
                errors.append(f"{rel} HTTP {exc.code}")
                continue
            except URLError as exc:
                errors.append(f"{rel} {exc}")
                continue
            if status != 200:
                errors.append(f"{rel} HTTP {status}")
                continue
            if not body:
                errors.append(f"{rel} empty body")
                continue
            expected = EXPECTED.get(Path(rel).suffix.lower())
            if expected and expected not in ctype:
                errors.append(f"{rel} content-type {ctype!r}, expected {expected}")
            # Full magic check needs the header. Videos only read 128 bytes, which includes ftyp.
            problem = _magic_ok(Path(rel), body if Path(rel).suffix.lower() in {".mp4", ".webm"} else body)
            if problem and Path(rel).suffix.lower() != ".webp":
                # webp magic needs 12 bytes; body is complete for non-video.
                errors.append(f"{rel} {problem}")
            elif problem:
                errors.append(f"{rel} {problem}")
    finally:
        server.shutdown()
        server.server_close()
    return errors


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="HTTP-check exported template packages.")
    parser.add_argument("templates", nargs="?", default="templates")
    args = parser.parse_args(argv)
    root = Path(args.templates)
    if not root.is_absolute():
        root = exporter.REPO_ROOT / root
    packages = sorted(path for path in root.iterdir() if path.is_dir() and (path / "index.html").is_file())
    if not packages:
        print(f"no packages in {root}", file=sys.stderr)
        return 1
    failed = 0
    for package in packages:
        errors = check_package(package)
        if errors:
            failed += 1
            print(f"FAIL {package.name}")
            for error in errors:
                print(f"  {error}")
        else:
            print(f"OK   {package.name}")
    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
