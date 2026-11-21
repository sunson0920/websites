# For agents

## The MCP server

`https://claudiagallery.vip/mcp` speaks the Model Context Protocol over Streamable HTTP. It is public and read-only: no account, no key, no state.

It helps an agent make a music video with Claudia the way the films are made now. Start with `get_recipe`: the current method on one page (what makes the films good, the checkpoints where the person decides, her reference sheets, prompting a model that does exactly what it reads, lip sync from the song's own vocal, the cut, the review). Then `claudia_canon`, `plan_film` for the stages and a dollar estimate, `get_kit` for the code, and `write_shot` and `check_prompt` for every Seedance prompt before it costs anything.

### Connect

Claude Code:

```sh
claude mcp add --transport http claudia https://claudiagallery.vip/mcp
```

Claude (web and desktop): Settings → Connectors → Add custom connector, and paste `https://claudiagallery.vip/mcp`.

Cursor, Windsurf and other clients that take a JSON config:

```json
{
  "mcpServers": {
    "claudia": {
      "url": "https://claudiagallery.vip/mcp"
    }
  }
}
```

Codex CLI (`~/.codex/config.toml`):

```toml
[mcp_servers.claudia]
url = "https://claudiagallery.vip/mcp"
```

Clients that only speak stdio can bridge with `npx mcp-remote https://claudiagallery.vip/mcp`.

### Tools

### `get_recipe`

The current method for a Claudia music video on one page (about 15k characters): what makes the films good, the six checkpoints where the person decides, her reference sheets, how to prompt a model that does exactly what it reads, lip sync from the song's own vocal, sync as a path, the cut and the review, and the ten costliest mistakes. Call this first; where an older guide disagrees, the recipe is newer.

Arguments: none.

### `claudia_canon`

Who Claudia is: the constants (hair, the one clay streak, the star clip, face, age), the identity text to paste into image prompts (full and short forms), her face-on reference sheets for image and video models, the never-list, and her looks by id. detail="looks" gives every look's wardrobe text, "voice" her voice and manner, "norms" the norms for releasing songs with her, "all" everything.

Arguments: `detail`, `include_images`.

### `plan_film`

A plan for a Claudia film: the scale (quick, studio, full) and why, a dollar estimate for Seedance 2.5 (her takes with her face sheet on Higgsfield's API, where the films ran them; shots with no person on Replicate) checked against your budget, what is missing, the first questions to ask the person (with defaults), the stages with the six checkpoints and the kit command for each, and the toolkit specs for your kind of film.

Arguments: `scale`, `song_seconds`, `has`, `budget_usd`, `kind`, `video_model`.

### `get_kit`

Runnable code for the method's steps, as a downloadable zip: lyric scoring on the beat, the song map and line table from the stems, the shot book (windows, gated vocal, prompts, lint), a Seedance 2.5 runner for Replicate or Higgsfield's API with your own key, a ledger and a spend cap, sync of each take as a path, the cut, review sheets and the flash check. Returns the README: install, the walkthrough and the file formats.

Arguments: none.

### `write_shot`

Write a Seedance 2.5 shot of Claudia in the current form: for a sung shot, the window (the song's lead-vocal stem cut to exactly the take's whole-second length, opening on ~0.7 s of silence, silent outside the shot's own lines), her face-on sheet as @Image2, a whole-second timeline with the exact words and one plain clause of movement per segment, few requirements; also silent and no-face shots. Returns the request settings, the prompt, its check (check_prompt) and the cost at list. Give lines with their song times from the line table (the kit's songmap). For Grok Imagine (model grok-imagine), it writes the short first-frame-only form and its OpenRouter cost.

Arguments: `kind`, `lines`, `actions`, `first_frame`, `last_frame`, `look`, `wardrobe`, `goal`, `world`, `camera`, `before`, `after`, `seconds`, `start`, `resolution`, `aspect`, `mic`, `sheet`, `model`.

### `check_prompt`

Lint an image or video prompt against what the films learned: mood words the model obeys literally (dry, deadpan, knowing, smirk…), standing posture rules that freeze her (no head tilt, eyes on the lens…), no movement written, a smile on her mouth while she sings, singing from the first second (no silent opening), sentences said twice, length, a full stop inside a line she sings straight through, a look past the lens or behind her, no reference sheet, a broken whole-second timeline, no line against on-screen text. Pass kind="video" for a Seedance prompt. Returns findings with fixes and a verdict.

Arguments: `prompt`, `kind`, `model`.

### `get_guide`

One article of the Claudia wiki as Markdown. recipe: the current method on one page (start here). start: scale, accounts, checkpoints, spending, the first conversation. consistency: keeping her herself. song: lyrics, Suno, picking by ear. storyboard: the hook, the bar map, pacing. midjourney: plates. seedance: her takes, lip sync from the song's vocal, templates. motion: motion design and the edit. pipeline: the ten productions and their numbers. toolkit: the spec of every tool (88). formats: the files. failures: every failure and its fix. Long guides return their outline unless you give a section (words from a heading) or an offset.

Arguments: `topic`, `section`, `offset`, `max_chars`.

### `get_record`

A film's making-of document as Markdown: readme (the story, the stack, every step, the numbers), prompts-midjourney, prompts-seedance (for downforce, dont-let-me-scroll, whitepill, the-cake-is-not-a-lie, aero and fable prompts-video: their Wan 3.0 and Seedance 2.5 jobs, whitepill's MiniMax H3 previz and Kling 4.0 tests, the cake's GPT Image 2.5 frames and aero's Midjourney video loops; aero's prompts-midjourney also holds its GPT Image 2.5 instructions), prompts-images (fable, which has no prompts-midjourney: its set plates painted in SVG and every GPT Image 2.6 Sunburst still), prompts-suno, and for bliss also xp-desktop-and-sound (how the XP desktop engine and its sound layer were built). They are long (up to about 700 KB): read in pages with offset and max_chars; the reply says where the next page starts.

Arguments: `film`, `doc`, `offset`, `max_chars`.

### `build_prompt`

Write an image prompt for Claudia from the canon. model="gpt_image": a first frame of her for a video take, the way FABLE wrote its stills: the place (from your plate, if you have one), then 'the woman on the reference sheet' with her identity text once, her outfit, one natural pose, the light, the framing, the frame filled edge to edge, no lettering; returns the images to attach (her face sheet), the prompt, a check and the price. model="midjourney" (the default): framing first, her identity text (full form for close and medium shots, short form for full length and wider), a look's wardrobe or your own, the scene, one of the films' style families, ending 'no text, no letters, no logos', for worlds, plates and the gallery's style (in the recent films Midjourney did not hold her face).

Arguments: `scene`, `framing`, `look`, `wardrobe`, `style`, `light`, `aspect`, `mic`, `model`, `mood`, `sings`, `plate`, `outfit_image`.

### `search_images`

Full-text search over every prompt in the gallery (3,723 Midjourney images), plus ids, batches and looks. All words must match (falls back to any word). Plates used in the film and the director's picks rank first on ties. Example queries: 'chroma-key green', 'porcelain mask', 'robotaxi night', 'sky gown hill', 'cockpit guards', 'racing suit yoke', 'red coat staircase', 'capsules wheat poppies', 'porcelain boom chamber', 'puffer glass lagoon'.

Arguments: `query`, `film`, `set`, `limit`.

### `browse_images`

Page through the gallery's Midjourney images. Filter by film, by set (in_film: plates used in the finished film; her: any image with Claudia; all), by batch, look or framing. Returns compact entries: id, film, batch, job, variant, flags, size, image URLs and the start of the prompt. Use get_image for the full prompt.

Arguments: `film`, `set`, `batch`, `look`, `framing`, `offset`, `limit`.

### `get_image`

One Midjourney image by id (e.g. 'sp-02-open.siren-mcu.2'): the exact prompt and parameters it ran with, whether it is a plate in the finished film, the director's verdict if any, its sibling variants, the batch note and URLs at three sizes. Set include_image to receive the picture itself so you can look at her.

Arguments: `id`, `include_image`, `size`.

### `list_films`

The ten music videos Claudia stars in, one line each (id, release, length, logline, page, records). With film=<id>: that film in full (its facts and numbers, world, credits, versions, stream and the list of its making-of documents).

Arguments: `film`.

### `get_skill`

How to install the Claudia agent skill (the recipe, the canon, every guide and every film's records as files, with a stdlib fetch script), where the kit is, and the site's other machine-readable endpoints.

Arguments: none.

### Resources and prompts

Resources: `claudia://canon`, `claudia://wiki` (every article by category), `claudia://use` (what you may do, and the norms for releasing songs with her), `claudia://guide/{topic}`, `claudia://record/{film}/{doc}` and `claudia://llms`, all Markdown. Prompts: `claudia_film` (start a music video with her: the recipe, the first conversation, the plan, the checkpoints), `claudia_still` (a Midjourney prompt for a new scene) and `claudia_shot` (a Seedance 2.5 shot in the current form). The first resources to read are `claudia://recipe` and `claudia://kit`.

Making a film: the `claudia_film` prompt, or `get_recipe` → `claudia_canon` → `plan_film(kind="sung", scale="studio", song_seconds=200, has=["suno", "gpt_image", "replicate", "coding_agent"])` → `get_kit` → for each shot `write_shot(lines=[{words, start, end}], actions=[…], look=…)` → `check_prompt(prompt)` → the person reads the prompts and the cost → the takes.

Studying the images: `search_images("chroma-key green")` → `get_image(id, include_image=true)` → `build_prompt(scene=…, look="cyber-trench")`. Going deeper: `get_guide("seedance")` returns the guide's outline; `get_guide("seedance", section="lip sync")` one section.

## The kit

[https://claudiagallery.vip/kit/](https://claudiagallery.vip/kit/): runnable Python for each step (lyric scoring, the song's line table from the vocal stem, shots and prompts, a runner with a spend cap, sync along a path, the cut, review sheets) and her two reference sheets. It prints every prompt and its cost and spends nothing until you say so.

```sh
curl -sL https://claudiagallery.vip/kit/claudia-kit.zip -o claudia-kit.zip && unzip -o claudia-kit.zip
```

## The skill

The same knowledge as files, for agents that load skills (Claude Code, the Claude apps, others that read `SKILL.md`): the canon and the method in `SKILL.md`, the whole wiki (from the recipe to the toolkit spec) and every film's making-of in `references/`, the kit in `kit/`, and a script that searches the gallery and downloads images (Python standard library only).

```sh
curl -sL https://claudiagallery.vip/skill/claudia-skill.zip -o claudia-skill.zip
unzip -o claudia-skill.zip -d ~/.claude/skills/
```

Or read it first: [https://claudiagallery.vip/skill/SKILL.md](https://claudiagallery.vip/skill/SKILL.md).

## llms.txt and Markdown

[https://claudiagallery.vip/llms.txt](https://claudiagallery.vip/llms.txt) indexes the site for language models; [llms-full.txt](https://claudiagallery.vip/llms-full.txt) is the canon and the whole wiki in one file. Every page has a Markdown twin: add `.md` to its path without the trailing slash (`/claudia.md`, `/wiki/seedance.md`, `/record/bliss/prompts-midjourney.md`).

## JSON

| Endpoint | What |
|---|---|
| `/api/index.json` | the site, the endpoints and the item fields |
| `/api/canon.json` | the character as data |
| `/api/films.json` | the ten films, their numbers and documents |
| `/api/films/{film}.json` | one film's batches and every image with its prompt |
| `/api/images.json` | all 3,723 images with prompts (about 5.8 MB) |
| `/api/images/{id}.json` | one image |
| `/api/guides.json`, `/api/records.json` | the guides and the making-of documents |

Image files: `/img/{batch}/{job}-{n}.s.webp` (fits 720 px), `.m.webp` (fits 1800 px), `.full.jpg` (native, up to 2944 px). Everything is served with `Access-Control-Allow-Origin: *`.

## Use

Claudia is an open character; see [Use her](https://claudiagallery.vip/use/). Please keep agents polite: cache what you fetch, and prefer the small images unless you need the full ones.
