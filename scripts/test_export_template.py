#!/usr/bin/env python3
"""Unit tests for the template exporter. No network."""

from __future__ import annotations

import json
import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import export_template as exporter


def fake_fetch(url, accept, cache):
    if url in cache:
        return cache[url]
    if "platform.twitter.com" in url:
        raise AssertionError("widget should stay remote")
    if "fonts.googleapis.com" in url:
        payload = (
            "@font-face{font-family:'Bungee';font-weight:400;"
            "src:url(https://fonts.gstatic.com/s/bungee/v1/a.woff2) format('woff2');}"
        ).encode()
        result = (payload, "text/css")
    elif "fonts.gstatic.com" in url:
        result = (b"wOF2fake", "font/woff2")
    else:
        raise AssertionError(url)
    cache[url] = result
    return result


class ExportTemplateTest(unittest.TestCase):
    def _site(self, root: Path) -> Path:
        site = root / "demo"
        (site / "assets" / "vendor" / "jsm" / "postprocessing").mkdir(parents=True)
        (site / "assets" / "vendor" / "jsm" / "shaders").mkdir(parents=True)
        (site / "assets" / "fonts").mkdir(parents=True)
        (site / "assets" / "tpl").mkdir(parents=True)
        (site / "img").mkdir()
        (site / "assets" / "logo.png").write_bytes(b"\x89PNG\r\n\x1a\nlogo")
        (site / "img" / "ig.png").write_bytes(b"\x89PNG\r\n\x1a\nicon")
        (site / "assets" / "fonts" / "local.woff2").write_bytes(b"wOF2local")
        (site / "assets" / "tpl" / "bg1.webp").write_bytes(b"RIFFbg")
        (site / "assets" / "vendor" / "three.module.min.js").write_text(
            "from 'assets/not-real.js';\nexport default 1;\n", encoding="utf-8"
        )
        (site / "assets" / "vendor" / "jsm" / "shaders" / "CopyShader.js").write_text(
            "export const CopyShader = {};\n", encoding="utf-8"
        )
        (site / "assets" / "vendor" / "jsm" / "postprocessing" / "EffectComposer.js").write_text(
            "import { CopyShader } from '../shaders/CopyShader.js';\nexport const EffectComposer = CopyShader;\n",
            encoding="utf-8",
        )
        (site / "style.css").write_text(
            "@font-face{font-family:Local;src:url(assets/fonts/local.woff2)}\n",
            encoding="utf-8",
        )
        (site / "script.js").write_text(
            "import * as THREE from 'three';\n"
            "import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';\n"
            "console.log(THREE, EffectComposer);\n",
            encoding="utf-8",
        )
        (site / "index.html").write_text(
            "<!doctype html><html><head>\n"
            "<link rel=\"stylesheet\" href=\"style.css\">\n"
            "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n"
            "<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n"
            "<link href=\"https://fonts.googleapis.com/css2?family=Bungee&display=swap\" rel=\"stylesheet\">\n"
            "<script type=\"importmap\">"
            '{"imports":{"three":"./assets/vendor/three.module.min.js","three/addons/":"./assets/vendor/jsm/"}}'
            "</script>\n"
            "</head><body>\n"
            "<img src=\"assets/logo.png\">\n"
            "<img src=\"/img/ig.png\">\n"
            "<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n"
            "<script src=\"assets/vendor/gsap.min.js\"></script>\n"
            "<script type=\"module\" src=\"script.js\"></script>\n"
            "</body></html>\n",
            encoding="utf-8",
        )
        (site / "assets" / "vendor" / "gsap.min.js").write_text(
            "window.gsap = {};\n", encoding="utf-8"
        )
        return site

    def test_package_includes_js_fonts_images_and_vendor(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            site = self._site(root)
            out = root / "templates" / "demo"
            manifest = exporter.export_site(
                site,
                out,
                repo=root,
                vendor_fonts=True,
                fetch=fake_fetch,
                font_cache={},
                write_zip=True,
            )
            html = (out / "index.html").read_text(encoding="utf-8")
            self.assertIn('src="img/ig.png"', html)
            self.assertNotIn('src="/img/ig.png"', html)
            self.assertIn("assets/fonts/google.css", html)
            self.assertNotIn("fonts.googleapis.com", html)
            self.assertNotIn("fonts.gstatic.com", html)
            self.assertIn("platform.twitter.com/widgets.js", html)
            for rel in [
                "index.html",
                "style.css",
                "script.js",
                "assets/logo.png",
                "img/ig.png",
                "assets/fonts/local.woff2",
                "assets/fonts/google.css",
                "assets/fonts/google/s-bungee-v1-a.woff2",
                "assets/vendor/gsap.min.js",
                "assets/vendor/three.module.min.js",
                "assets/vendor/jsm/postprocessing/EffectComposer.js",
                "assets/vendor/jsm/shaders/CopyShader.js",
                "assets/tpl/bg1.webp",
                "DROP.txt",
            ]:
                self.assertTrue((out / rel).is_file(), rel)
            self.assertEqual(manifest["missing"], [])
            self.assertIn("https://platform.twitter.com/widgets.js", manifest["remote_widgets"])
            self.assertEqual(manifest["remote_fonts"], [])
            self.assertTrue((root / "templates" / "demo.zip").is_file())
            referenced = set(manifest["referenced"])
            self.assertIn("assets/vendor/three.module.min.js", referenced)
            self.assertIn("assets/vendor/jsm/postprocessing/EffectComposer.js", referenced)
            self.assertIn("assets/vendor/jsm/shaders/CopyShader.js", referenced)
            self.assertNotIn("assets/not-real.js", referenced)

    def test_reports_missing_token_art_without_inventing_it(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            site = self._site(root)
            html_path = site / "index.html"
            html_path.write_text(
                html_path.read_text(encoding="utf-8").replace(
                    '<img src="assets/logo.png">',
                    '<img src="assets/logo.png"><img src="assets/missing-meme.png">',
                ),
                encoding="utf-8",
            )
            out = root / "templates" / "demo"
            manifest = exporter.export_site(
                site, out, repo=root, vendor_fonts=False, write_zip=False
            )
            self.assertIn("assets/missing-meme.png", [item["path"] for item in manifest["missing"]])
            self.assertFalse((out / "assets" / "missing-meme.png").exists())

    def test_restores_shared_template_chrome_only(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            donor = root / "other"
            (donor / "assets" / "tpl").mkdir(parents=True)
            (donor / "assets" / "tpl" / "bg1.webp").write_bytes(b"RIFFshared")
            (donor / "index.html").write_text("<!doctype html><title>other</title>\n", encoding="utf-8")
            site = root / "needs"
            (site / "assets").mkdir(parents=True)
            (site / "index.html").write_text(
                "<!doctype html><link rel=\"stylesheet\" href=\"style.css\">\n",
                encoding="utf-8",
            )
            (site / "style.css").write_text(
                ".hero{background:url(assets/tpl/bg1.webp)}\n",
                encoding="utf-8",
            )
            out = root / "templates" / "needs"
            manifest = exporter.export_site(
                site,
                out,
                repo=root,
                vendor_fonts=False,
                write_zip=False,
                restore_into_source=True,
            )
            self.assertEqual(manifest["missing"], [])
            self.assertTrue((out / "assets" / "tpl" / "bg1.webp").is_file())
            self.assertTrue((site / "assets" / "tpl" / "bg1.webp").is_file())
            self.assertEqual((out / "assets" / "tpl" / "bg1.webp").read_bytes(), b"RIFFshared")
            package = json.loads((out / "PACKAGE.json").read_text(encoding="utf-8"))
            self.assertEqual(package["restored_chrome"][0]["path"], "assets/tpl/bg1.webp")


if __name__ == "__main__":
    unittest.main()
