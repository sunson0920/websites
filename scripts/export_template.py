#!/usr/bin/env python3
"""Build a self-contained template drop from a site folder.

The package keeps HTML, CSS, page scripts, vendor JS, images, video, fonts,
and any other local file the page references. Relative paths stay relative.
Root-absolute local paths such as /img/logo.png are rewritten so the folder
still works when it is not served from the domain root.

Google Fonts stylesheets are downloaded and the font files are saved under
assets/fonts/. Widgets such as platform.twitter.com/widgets.js stay remote.

Usage:
  python3 scripts/export_template.py ant
  python3 scripts/export_template.py --all
  python3 scripts/export_template.py --all --out templates
"""

from __future__ import annotations

import argparse
import html
import json
import os
import re
import shutil
import sys
import urllib.error
import urllib.request
import zipfile
from pathlib import Path
from urllib.parse import unquote, urlparse

REPO_ROOT = Path(__file__).resolve().parent.parent
SKIP_SITE_DIRS = {"templates", "scripts", "dist", "node_modules"}
TEXT_SUFFIXES = {".html", ".css", ".js", ".mjs", ".svg"}
ASSET_SUFFIXES = {
    ".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".avif", ".ico",
    ".mp4", ".webm", ".mp3", ".wav",
    ".woff", ".woff2", ".ttf", ".otf",
    ".css", ".js", ".mjs", ".json",
}
CHROME_PREFIXES = ("assets/tpl/", "assets/vendor/", "assets/fonts/")
WIDGET_HOSTS = {"platform.twitter.com", "platform.x.com"}
FONT_HOSTS = {"fonts.googleapis.com", "fonts.gstatic.com"}
BROWSER_UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
)
GOOGLE_FONT_RE = re.compile(r"https://fonts\.googleapis\.com/css2?\?[^\"')\s]+", re.I)
PRECONNECT_RE = re.compile(
    r"""<link\b[^>]*\bhref\s*=\s*(['"])https://fonts\.(?:googleapis|gstatic)\.com/?\1[^>]*>\s*""",
    re.I,
)
GSTATIC_RE = re.compile(
    r"url\(\s*(['\"]?)(https://fonts\.gstatic\.com/[^)'\"]+)\1\s*\)",
    re.I,
)
ATTR_RE = re.compile(
    r"""(?:\b(?:src|href|poster)\s*=\s*|(?:\bcontent\s*=\s*))(['"])(.*?)\1""",
    re.I,
)
SRCSET_RE = re.compile(r"""\bsrcset\s*=\s*(['"])(.*?)\1""", re.I)
URL_RE = re.compile(r"""url\(\s*(['"]?)([^'")]+)\1\s*\)""", re.I)
IMPORT_CSS_RE = re.compile(r"""@import\s+(?:url\()?(['"])([^'"]+)\1""", re.I)
JS_FROM_RE = re.compile(r"""\bfrom\s+(['"])([^'"]+)\1""")
JS_IMPORT_BARE_RE = re.compile(r"""\bimport\s+(['"])([^'"]+)\1""")
STR_ASSET_RE = re.compile(
    r"""(['"])((?:\./|\.\./)?(?:assets|img|css|js|fonts|video)/[^"'?#\s]+)\1"""
)
IMPORTMAP_RE = re.compile(
    r"""<script[^>]*type=['"]importmap['"][^>]*>(.*?)</script>""",
    re.I | re.S,
)
ATTR_ROOT_RE = re.compile(
    r"""(?P<attr>\b(?:src|href|poster)\s*=\s*)(?P<q>['"])/(?P<path>[^'"]+)(?P=q)""",
    re.I,
)
CSS_ROOT_RE = re.compile(
    r"""url\(\s*(?P<q>['"]?)/(?P<path>[^'")]+)(?P=q)\s*\)""",
    re.I,
)
DROP_TXT = """\
This folder is a complete static site drop.
Keep index.html together with every CSS file, JS file, assets/, img/, fonts/, and video.
Serve the folder as the site root (Vercel root directory = this folder).
ES modules need a static server; opening index.html as a file will not run them.
Do not upload HTML and CSS alone. Images, fonts, and vendor JS are required.
Twitter embed widgets stay on platform.twitter.com. Everything else the page paints with is local.
"""


def discover_sites(repo: Path) -> list[Path]:
    sites = []
    for path in sorted(repo.iterdir()):
        if not path.is_dir() or path.name.startswith("."):
            continue
        if path.name in SKIP_SITE_DIRS:
            continue
        if (path / "index.html").is_file():
            sites.append(path)
    return sites


def _read(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def _write(path: Path, text: str) -> None:
    path.write_text(text, encoding="utf-8", newline="\n")


def _split_ref(url: str) -> tuple[str, str]:
    raw = html.unescape(url.strip())
    cut = raw.split("#", 1)[0]
    if "?" in cut:
        path, query = cut.split("?", 1)
        return unquote(path), "?" + query
    return unquote(cut), ""


def _is_skipped_url(url: str) -> bool:
    value = url.strip()
    if not value or value.startswith(("#", "data:", "blob:", "mailto:", "tel:", "javascript:")):
        return True
    return any(ch in value for ch in " \t\n<>{}|*")


def _classify(url: str) -> str:
    value = html.unescape(url.strip())
    if value.startswith("//"):
        value = "https:" + value
    if value.startswith(("http://", "https://")):
        host = (urlparse(value).hostname or "").lower()
        if host in WIDGET_HOSTS:
            return "widget"
        if host in FONT_HOSTS:
            return "font"
        return "remote"
    return "local"


def _resolve_local(url: str, from_file: Path, site_root: Path) -> str | None:
    path, _query = _split_ref(url)
    if not path or path.endswith("/"):
        return None
    if path.startswith("/"):
        target = (site_root / path.lstrip("/")).resolve()
    else:
        target = (from_file.parent / path).resolve()
    try:
        rel = target.relative_to(site_root.resolve())
    except ValueError:
        return None
    return rel.as_posix()


def _load_import_maps(site_root: Path) -> list[tuple[Path, dict]]:
    maps = []
    for html_path in sorted(site_root.rglob("*.html")):
        for match in IMPORTMAP_RE.finditer(_read(html_path)):
            try:
                data = json.loads(match.group(1))
            except json.JSONDecodeError:
                continue
            imports = data.get("imports") if isinstance(data, dict) else None
            if isinstance(imports, dict):
                maps.append((html_path, imports))
    return maps


def _resolve_specifier(spec: str, from_file: Path, site_root: Path, maps: list[tuple[Path, dict]]) -> str | None:
    if spec.startswith(("./", "../", "/")):
        return _resolve_local(spec, from_file, site_root)
    for map_file, imports in maps:
        if spec in imports:
            return _resolve_local(str(imports[spec]), map_file, site_root)
        best = None
        for key, target in imports.items():
            if key.endswith("/") and spec.startswith(key):
                if best is None or len(key) > len(best[0]):
                    best = (key, str(target))
        if best:
            key, target = best
            if not target.endswith("/"):
                target += "/"
            return _resolve_local(target + spec[len(key):], map_file, site_root)
    return None


def _iter_source_files(site_root: Path) -> list[Path]:
    files = []
    for path in site_root.rglob("*"):
        if not path.is_file() or path.suffix.lower() not in TEXT_SUFFIXES:
            continue
        if path.name.endswith(".min.js"):
            continue
        files.append(path)
    return files


def _refs_in_text(text: str, suffix: str) -> list[str]:
    found: list[str] = []
    found.extend(match.group(2) for match in ATTR_RE.finditer(text))
    for match in SRCSET_RE.finditer(text):
        for part in match.group(2).split(","):
            token = part.strip().split()
            if token:
                found.append(token[0])
    found.extend(match.group(2) for match in URL_RE.finditer(text))
    found.extend(match.group(2) for match in IMPORT_CSS_RE.finditer(text))
    if suffix in {".js", ".mjs", ".html", ".svg"}:
        found.extend(match.group(2) for match in JS_FROM_RE.finditer(text))
        found.extend(match.group(2) for match in JS_IMPORT_BARE_RE.finditer(text))
        found.extend(match.group(2) for match in STR_ASSET_RE.finditer(text))
    return found


def _resolve_ref(url: str, from_file: Path, site_root: Path, maps: list[tuple[Path, dict]]) -> str | None:
    """Map one local URL or import specifier onto a path inside the site.

    Import-map specifiers (``three``, ``three/addons/...``) win over a
    same-named relative path. Root-absolute and relative URLs stay filesystem
    paths so ``assets/logo.png`` is the file next to the page.
    """
    cleaned = html.unescape(url.strip())
    if cleaned.startswith(("./", "../", "/")):
        return _resolve_local(cleaned, from_file, site_root)
    mapped = _resolve_specifier(cleaned, from_file, site_root, maps)
    if mapped is not None:
        return mapped
    path_only, _query = _split_ref(cleaned)
    if "/" in path_only or Path(path_only).suffix.lower() in ASSET_SUFFIXES:
        return _resolve_local(cleaned, from_file, site_root)
    return None


def audit_tree(site_root: Path) -> dict:
    """Resolve local references in HTML, CSS, and JS against files on disk."""
    maps = _load_import_maps(site_root)
    missing = []
    widgets = []
    remote_fonts = []
    bare = []
    referenced = []
    seen_missing = set()
    seen_ref = set()

    for path in _iter_source_files(site_root):
        text = _read(path)
        rel_file = path.relative_to(site_root).as_posix()
        for url in _refs_in_text(text, path.suffix.lower()):
            if _is_skipped_url(url):
                continue
            kind = _classify(url)
            if kind == "widget":
                widgets.append(html.unescape(url.strip()))
                continue
            if kind == "font":
                remote_fonts.append(html.unescape(url.strip()).split("#", 1)[0])
                continue
            if kind == "remote":
                continue
            path_only, _query = _split_ref(url)
            # Import-map prefixes ("three/addons/") and MIME types ("video/mp4")
            # are not files. A real asset path has a file extension.
            if path_only.endswith("/"):
                continue
            if (
                not url.startswith(("./", "../", "/"))
                and "/" not in path_only
                and Path(path_only).suffix.lower() not in ASSET_SUFFIXES
                and _resolve_specifier(html.unescape(url.strip()), path, site_root, maps) is None
            ):
                continue
            resolved = _resolve_ref(url, path, site_root, maps)
            if not resolved or Path(resolved).suffix.lower() not in ASSET_SUFFIXES:
                if url.endswith(".js") and not path_only.endswith("/"):
                    bare.append({"from": rel_file, "specifier": url})
                continue
            if resolved not in seen_ref:
                seen_ref.add(resolved)
                referenced.append(resolved)
            if not (site_root / resolved).is_file() and resolved not in seen_missing:
                seen_missing.add(resolved)
                missing.append({"path": resolved, "from": rel_file, "url": url})
    return {
        "referenced": referenced,
        "missing": missing,
        "remote_widgets": sorted(set(widgets)),
        "remote_fonts": sorted(set(remote_fonts)),
        "unresolved_bare": bare,
    }


def _rewrite_root_paths(site_root: Path) -> list[dict]:
    rewritten = []
    for path in _iter_source_files(site_root):
        text = _read(path)
        original = text

        def file_for(raw: str) -> tuple[Path, str, str] | None:
            disk, suffix = _split_ref(raw)
            if not disk or any(ch in disk for ch in "*()"):
                return None
            target = site_root / disk
            if not target.is_file():
                return None
            rel = Path(os.path.relpath(target.resolve(), start=path.parent.resolve())).as_posix()
            return target, rel, suffix

        def attr_sub(match: re.Match) -> str:
            found = file_for(match.group("path"))
            if not found:
                return match.group(0)
            _target, rel, suffix = found
            quote = match.group("q")
            rewritten.append({
                "file": path.relative_to(site_root).as_posix(),
                "from": "/" + match.group("path"),
                "to": rel + suffix,
            })
            return f"{match.group('attr')}{quote}{rel}{suffix}{quote}"

        def css_sub(match: re.Match) -> str:
            found = file_for(match.group("path"))
            if not found:
                return match.group(0)
            _target, rel, suffix = found
            quote = match.group("q")
            rewritten.append({
                "file": path.relative_to(site_root).as_posix(),
                "from": "/" + match.group("path"),
                "to": rel + suffix,
            })
            return f"url({quote}{rel}{suffix}{quote})"

        text = ATTR_ROOT_RE.sub(attr_sub, text)
        text = CSS_ROOT_RE.sub(css_sub, text)
        if text != original:
            _write(path, text)
    return rewritten


def _default_fetch(url: str, accept: str | None, cache: dict) -> tuple[bytes, str]:
    if url in cache:
        return cache[url]
    headers = {"User-Agent": BROWSER_UA}
    if accept:
        headers["Accept"] = accept
    request = urllib.request.Request(url, headers=headers)
    last_error = None
    for _attempt in range(3):
        try:
            with urllib.request.urlopen(request, timeout=60) as response:
                payload = response.read()
                ctype = response.headers.get_content_type()
                cache[url] = (payload, ctype)
                return payload, ctype
        except (urllib.error.URLError, TimeoutError) as exc:
            last_error = exc
    raise RuntimeError(f"failed to download {url}: {last_error}")


def _font_filename(url: str) -> str:
    path = urlparse(url).path.strip("/")
    name = re.sub(r"[^A-Za-z0-9._-]+", "-", path.replace("/", "-"))
    return name or "font.bin"


def _vendor_google_fonts(site_root: Path, fetch, cache: dict) -> dict:
    """Download Google Fonts CSS and woff/woff2 files into assets/fonts/."""
    urls: list[str] = []
    files = [p for p in _iter_source_files(site_root)]
    for path in files:
        for match in GOOGLE_FONT_RE.finditer(_read(path)):
            url = html.unescape(match.group(0))
            if url not in urls:
                urls.append(url)
    if not urls:
        return {"stylesheet": None, "files": [], "sources": [], "errors": []}

    font_dir = site_root / "assets" / "fonts" / "google"
    font_dir.mkdir(parents=True, exist_ok=True)
    css_parts = []
    saved = []
    errors = []
    url_to_file = {}
    for url in urls:
        try:
            css_bytes, _ctype = fetch(url, "text/css,*/*;q=0.1", cache)
        except Exception as exc:
            errors.append(f"{url} ({exc})")
            continue
        css = css_bytes.decode("utf-8", errors="replace")

        def replace_font(match: re.Match, css_url=url) -> str:
            font_url = match.group(2)
            try:
                if font_url not in url_to_file:
                    data, _font_type = fetch(font_url, "*/*", cache)
                    filename = _font_filename(font_url)
                    dest = font_dir / filename
                    dest.write_bytes(data)
                    url_to_file[font_url] = filename
                    saved.append(f"assets/fonts/google/{filename}")
                filename = url_to_file[font_url]
            except Exception as exc:
                errors.append(f"{font_url} from {css_url} ({exc})")
                return match.group(0)
            return f'url("google/{filename}")'

        css_parts.append(GSTATIC_RE.sub(replace_font, css).strip())

    stylesheet = site_root / "assets" / "fonts" / "google.css"
    if css_parts:
        header = "/* Vendored from Google Fonts. Files under google/ use the SIL Open Font License. */\n"
        _write(stylesheet, header + "\n\n".join(css_parts) + "\n")
    elif stylesheet.exists():
        stylesheet.unlink()

    if css_parts:
        for path in files:
            text = _read(path)
            rel = Path(os.path.relpath(stylesheet, start=path.parent)).as_posix()

            def replace_css(match: re.Match, rel_css=rel) -> str:
                found = html.unescape(match.group(0))
                if found in urls:
                    return rel_css
                return match.group(0)

            updated = GOOGLE_FONT_RE.sub(replace_css, text)
            if path.suffix.lower() == ".html":
                updated = PRECONNECT_RE.sub("", updated)
            if updated != text:
                _write(path, updated)

    return {
        "stylesheet": "assets/fonts/google.css" if css_parts else None,
        "files": saved,
        "sources": urls,
        "errors": errors,
    }


def _restore_shared_chrome(repo: Path, site_name: str, package_root: Path, source_root: Path | None) -> list[dict]:
    restored = []
    report = audit_tree(package_root)
    for item in report["missing"]:
        rel = item["path"]
        if not rel.startswith(CHROME_PREFIXES):
            continue
        donor = None
        for sibling in sorted(repo.iterdir()):
            if not sibling.is_dir() or sibling.name in {site_name, *SKIP_SITE_DIRS} or sibling.name.startswith("."):
                continue
            candidate = sibling / rel
            if candidate.is_file():
                donor = candidate
                break
        if donor is None:
            continue
        dest = package_root / rel
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(donor, dest)
        if source_root is not None:
            src_dest = source_root / rel
            if not src_dest.exists():
                src_dest.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(donor, src_dest)
        restored.append({"path": rel, "from": donor.relative_to(repo).as_posix()})
    return restored


def _zip_package(package_root: Path, zip_path: Path) -> None:
    if zip_path.exists():
        zip_path.unlink()
    stored = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif", ".mp4", ".webm", ".woff", ".woff2"}
    with zipfile.ZipFile(zip_path, "w") as archive:
        for path in sorted(package_root.rglob("*")):
            if not path.is_file():
                continue
            mode = zipfile.ZIP_STORED if path.suffix.lower() in stored else zipfile.ZIP_DEFLATED
            archive.write(path, path.relative_to(package_root.parent).as_posix(), compress_type=mode)


def _package_files(package_root: Path) -> list[str]:
    return sorted(
        path.relative_to(package_root).as_posix()
        for path in package_root.rglob("*")
        if path.is_file() and path.name not in {"PACKAGE.json", "DROP.txt"}
    )


def export_site(
    source: Path,
    dest: Path,
    *,
    repo: Path | None = None,
    vendor_fonts: bool = True,
    fetch=None,
    font_cache: dict | None = None,
    write_zip: bool = True,
    restore_into_source: bool = False,
) -> dict:
    """Copy one site folder into a complete template package."""
    source = source.resolve()
    dest = dest.resolve()
    if dest == source or source in dest.parents:
        raise ValueError(f"refusing to export {source} into itself ({dest})")
    if dest.exists():
        shutil.rmtree(dest)
    shutil.copytree(source, dest, ignore=shutil.ignore_patterns(".DS_Store", "*.zip"))

    rewritten = _rewrite_root_paths(dest)
    fonts = {"stylesheet": None, "files": [], "sources": [], "errors": []}
    if vendor_fonts:
        fonts = _vendor_google_fonts(dest, fetch or _default_fetch, font_cache if font_cache is not None else {})
    restored = []
    if repo is not None:
        restored = _restore_shared_chrome(
            repo,
            source.name,
            dest,
            source if restore_into_source else None,
        )
    report = audit_tree(dest)
    _write(dest / "DROP.txt", DROP_TXT)
    manifest = {
        "name": source.name,
        "source": source.name,
        "entry": "index.html",
        "files": _package_files(dest),
        "referenced": report["referenced"],
        "missing": report["missing"],
        "remote_widgets": report["remote_widgets"],
        "remote_fonts": report["remote_fonts"],
        "unresolved_bare": report["unresolved_bare"],
        "root_paths_rewritten": rewritten,
        "vendored_fonts": fonts,
        "restored_chrome": restored,
    }
    _write(dest / "PACKAGE.json", json.dumps(manifest, indent=2) + "\n")
    if write_zip:
        _zip_package(dest, dest.parent / f"{source.name}.zip")
    return manifest


def export_all(repo: Path, out_root: Path, **kwargs) -> dict:
    out_root.mkdir(parents=True, exist_ok=True)
    cache = {}
    packages = []
    for site in discover_sites(repo):
        print(f"export {site.name}", flush=True)
        manifest = export_site(
            site,
            out_root / site.name,
            repo=repo,
            font_cache=cache,
            restore_into_source=True,
            **kwargs,
        )
        missing = len(manifest["missing"])
        font_errors = len(manifest["vendored_fonts"]["errors"])
        print(
            f"  files={len(manifest['files'])} missing={missing} "
            f"fonts={len(manifest['vendored_fonts']['files'])} font_errors={font_errors} "
            f"rewritten={len(manifest['root_paths_rewritten'])}",
            flush=True,
        )
        packages.append({
            "name": site.name,
            "files": len(manifest["files"]),
            "missing": manifest["missing"],
            "remote_widgets": manifest["remote_widgets"],
            "remote_fonts": manifest["remote_fonts"],
            "vendored_fonts": manifest["vendored_fonts"]["files"],
            "font_errors": manifest["vendored_fonts"]["errors"],
            "root_paths_rewritten": manifest["root_paths_rewritten"],
            "restored_chrome": manifest["restored_chrome"],
            "js": [item for item in manifest["files"] if item.endswith(".js")],
        })
    summary = {"packages": packages}
    _write(out_root / "manifest.json", json.dumps(summary, indent=2) + "\n")
    return summary


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Export a site folder as a complete template drop.")
    parser.add_argument("sites", nargs="*", help="Site folder names or paths. Defaults to every site when --all is set.")
    parser.add_argument("--all", action="store_true", help="Export every site folder in the repo.")
    parser.add_argument("--out", default="templates", help="Output directory (default: templates).")
    parser.add_argument("--no-fonts", action="store_true", help="Leave Google Fonts remote.")
    parser.add_argument("--no-zip", action="store_true", help="Skip the zip archive.")
    args = parser.parse_args(argv)

    repo = REPO_ROOT
    out_root = Path(args.out)
    if not out_root.is_absolute():
        out_root = repo / out_root
    if args.all or not args.sites:
        summary = export_all(
            repo,
            out_root,
            vendor_fonts=not args.no_fonts,
            write_zip=not args.no_zip,
        )
    else:
        out_root.mkdir(parents=True, exist_ok=True)
        cache = {}
        built = []
        for name in args.sites:
            source = Path(name)
            if not source.is_absolute():
                source = repo / name
            if not (source / "index.html").is_file():
                print(f"not a site folder: {source}", file=sys.stderr)
                return 1
            manifest = export_site(
                source,
                out_root / source.name,
                repo=repo,
                vendor_fonts=not args.no_fonts,
                font_cache=cache,
                write_zip=not args.no_zip,
                restore_into_source=True,
            )
            built.append(manifest)
            print(f"export {source.name}: files={len(manifest['files'])} missing={len(manifest['missing'])}")
        summary = {"packages": [
            {
                "name": item["name"],
                "missing": item["missing"],
                "font_errors": item["vendored_fonts"]["errors"],
            }
            for item in built
        ]}

    problems = 0
    for package in summary["packages"]:
        problems += len(package.get("missing") or [])
        problems += len(package.get("font_errors") or [])
    return 1 if problems else 0


if __name__ == "__main__":
    raise SystemExit(main())
