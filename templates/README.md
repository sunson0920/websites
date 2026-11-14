# Complete template drops

A drop that keeps only HTML and CSS leaves the page without images, fonts, and JavaScript. Each package here is the whole site: the page, its CSS, its scripts, vendor JS, images, video, and fonts.

## Build

From the repo root:

```bash
python3 scripts/export_template.py ant
python3 scripts/export_template.py --all
```

Output:

- `templates/<site>/` is the folder to serve or upload
- `templates/<site>.zip` is that same folder, for import
- `templates/<site>/PACKAGE.json` lists the files, anything still missing, and paths that were rewritten
- `templates/<site>/DROP.txt` is the short rule for keeping the folder together
- `templates/manifest.json` summarizes every package

## Serve or upload

Use the package directory as the site root. On Vercel, set the project root to that folder. `index.html` has to stay next to `assets/`, `css/`, `js/`, `img/`, and `fonts/`. Uploading the HTML alone drops the art and the motion again.

`ant` loads its scripts as ES modules, so open it through a static server:

```bash
python3 -m http.server 4173 --directory templates/ant
```

Then open `http://127.0.0.1:4173/`.

## What is in the package

- HTML
- CSS files, plus the styles already written into the page
- Page scripts and vendor JS. For `ant` that is GSAP, ScrollTrigger, Lenis, Three.js, and the local Three.js addons the page imports
- Images, video, and template chrome such as `assets/tpl/`
- Fonts. Google Fonts stylesheets are downloaded into `assets/fonts/` and the page is pointed at those files. Those font files stay under the SIL Open Font License

Relative paths stay relative. A root-absolute local path such as `/img/logo.png` is rewritten so the folder still works when it is not the domain root. `maya/` used paths like that for the video, social icons, and favicon; those source paths are relative now.

Twitter's embed script (`platform.twitter.com/widgets.js`) stays on Twitter's CDN. Buy links and chart embeds stay on the venues already in the page.

## Import

Unzip `templates/<site>.zip` and import that directory, or import the zip. `site.json` is included. It is the Studio input record. The file a host serves is `index.html`, which already points at the local assets.

Meme Site Studio is not in this repository. Regenerating a page inside Studio can point fonts at Google again, and a Studio export that keeps only HTML and CSS will drop the files this package bundled. Run this exporter when the drop has to look like the site.

## Audit

Every site folder already had its referenced images, video, and scripts on disk. No token logo or meme was missing, so none was replaced with made-up art. Shared template chrome (`assets/tpl/`, vendor JS, fonts) is copied with the package. If a chrome file is referenced and missing, the exporter copies that exact file from another site in this repo when it exists. It does not copy another token's logo or memes.

`templates/manifest.json` records vendored font files, remote widgets, rewritten paths, and any path that is still missing.
