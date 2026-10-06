# NPC Beta

NPC Beta is a lightweight, static-first catalog for documenting characters and
locations. The repository separates editorial planning, working drafts, and the
publishable site so content can move through a clear review process.

## Project structure

```text
planning/                Editorial plans and reference material
drafts/
  characters/            Character drafts
  locations/             Location drafts
docs/                     Static website
  css/                    Stylesheets
  js/                     Browser JavaScript
  data/characters/        Published character data
  data/locations/         Published location data
  images/characters/      Published character images
  images/locations/       Published location images
```

Empty working and image directories contain `.gitkeep` placeholders so Git
preserves the intended structure.

## Preview the site

Run a local static server from the repository root:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000/docs/>.

## Adding content

1. Start a draft in the appropriate `drafts/` directory.
2. Follow the rules in [`planning/content-guidelines.md`](planning/content-guidelines.md).
3. Use the shared vocabulary in [`planning/tag-definitions.md`](planning/tag-definitions.md).
4. After review, add the published record to the relevant JSON index under
   `docs/data/` and place its image under `docs/images/`.

## Quick Name Generator

Open **Name Generator** to roll an NPC, select a setting/profession, undo the last
change, or add the result to Session. Tonight’s cast and Session include both
library profiles and personal generated NPCs. Copy copies the name only.
Generated NPCs are stored locally in this browser, without portraits or a server.

Edit `docs/data/generator/names.json` to maintain the four name-part lists.
Edit `docs/data/generator/options.json` to maintain setting types and professions:
use unique lowercase hyphenated IDs, define each profession once, and reference
its ID from each location’s nonempty `professionIds` list. Setting IDs are
independent of the location profile library. Invalid or unavailable data displays
an error and can be retried by reopening the generator.

Original `npc-beta-saved` and `npc-beta-session` library ID keys are retained.
Generator state and generated session records use `npc-beta:generator:v1:state`
and `npc-beta:generator:v1:session`. If browser storage is unavailable or full,
changes continue in memory and a warning explains that they cannot be saved.

For automated checks, install test-only dependencies (the static site needs none):

```bash
npm install --no-save --package-lock=false jsdom playwright
node tests/generator.dom.test.cjs
npx playwright install chromium
```

With the preview server running on port 8000, run
`node tests/generator.test.cjs` for browser and responsive layout checks.

## Locations library

**Locations** offers 36 generic templates, filtered by Setting and Condition.
Selections match any value within a group and both groups together; search matches
names and descriptions. Clear filters also clears the search.

**Add to Session** creates an independent personal instance every time, so you can
use two inns with different names, notes and conditions. Edit these in the Session
Locations section. NPC counts and Tonight’s cast continue to count NPCs only.
Instances persist under `npc-beta:locations:v1:session`; existing NPC storage and
Name Generator keys remain unchanged. Templates and other instances are never
changed by session edits. Storage failures show a warning and keep edits in memory.

Maintain templates in `docs/data/locations/templates.json`; keep stable unique
lowercase hyphenated IDs, a name and description, a nonempty `settings` array,
`condition` (`maintained`, `abandoned`, `ruined` or `null`), `image` and `imageAlt`.
Human-readable filter labels are in `docs/data/locations/labels.json`. The existing
`docs/data/locations/index.json` remains available for specific location profiles
and NPC links; generator setting options remain separate.

Images are optional: `image: null` uses an inline SVG landscape fallback. To reuse
an existing image, set a site-relative path such as
`images/locations/inn.webp` (relative to `docs/index.html`) and descriptive
`imageAlt`. Remote, absolute, parent-relative and data URLs are rejected. Broken
images fall back automatically. Image bytes are never stored in localStorage.

Run `node tests/locations.dom.test.cjs` for location integration checks and
`node tests/locations.test.cjs` for browser checks with the preview server running.
