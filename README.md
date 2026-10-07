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

## Support Us

Open **Support Us** in the shared desktop/mobile navigation. Support helps fund
NPCs, locations and tools that remain free for every Game Master. All six
additions are labeled Planned and are not yet available.

Configure the single `supportUrl` in `docs/js/pro.js` with your real HTTPS Patreon
URL. Both actions become **Become a Patron** links to that URL. Empty or
non-HTTPS values display **Patreon support coming soon**, without a placeholder
link. No account or URL is supplied by default.

The hero reuses the embedded Cassian Holt portrait. Set `heroImage` in
`docs/js/pro.js` to a site-relative image such as
`images/characters/pro-hero.webp` to replace it, and update the alt text in
`docs/index.html`. Failed images show the decorative fallback.

`#support` opens Support Us directly; the legacy `#pro` route and `setView("pro")`
remain compatible. Internal pro-prefixed CSS/DOM names are retained for style
compatibility, with no Pro messaging displayed to visitors. Navigation order is
Library, Locations, Name Generator, Saved, Session, Support Us in both menus.
Browser storage keys and saved/session data formats remain unchanged.

Run `node tests/pro.dom.test.cjs` for support integration checks and
`node tests/pro.test.cjs` with the local server on port 8000 for browser layout,
keyboard, scroll, storage and overflow checks at five viewport widths.

## High-resolution NPC portraits

Eight additional NPCs use 960 × 960 WebP files under `docs/images/characters/`.
`docs/js/character-portraits.js` extends the existing portrait map, loaded after
`portraits.js`; cards, detailed profiles and Session reuse the same source.
Their `portraitFit: "contain"` keeps the complete image within existing frames
on desktop/mobile, with ivory space where aspect ratios differ. The zoom-on-hover
is disabled for these images. Original NPC portraits and IDs are retained.
Each new record includes ancestry, profession (`role`), summary, portrayal note,
adventure hook, descriptive alt text, tags and location-fit filters.

## Generated NPC visuals

`docs/js/generated-visuals.js` supplies one renderer for the generator preview,
Tonight’s cast and Session. `GENERATED_LOCATION_TEMPLATES` explicitly maps stable
generator setting IDs to location-template IDs; `null` means no equivalent.
Village/city street use Market Square as representative settlement artwork;
monastery uses Chapel. Art paths come from template `image` metadata and retain
safe relative-path validation. Missing/broken art uses a parchment/location symbol.

`PROFESSION_ICON_ROLES` shares existing library role SVGs across stable profession
IDs; `EXTRA_PROFESSION_ICONS` adds trade, nautical and music symbols. Unmapped IDs
use a generic person. The badge stays crisp while only the background is muted.
Images/icons are decorative because adjacent text states both fields. Existing
stored records keep their IDs/labels and need no migration; no image data is saved.
Library NPCs retain portraits in both cast views. Rerolls update the current preview;
saved cast entries keep the location/profession they had when added to Session.

Run `node tests/generated-visuals.dom.test.cjs` for mapping, reroll, saved-record,
shared-visual and fallback checks.

The original four NPCs also use 960 × 960 external WebP portraits. All library
portraits follow `project/npc-portrait-standard.md`, referenced by `AGENTS.md`.

## Publication sorting and dungeon pack

Library and Locations default to **Most recent**, ordered by `publishedAt` (ISO 8601), newest first. Existing publication dates come from the first Git commit containing each record. Equal dates retain JSON order; missing or invalid dates sort last. Set publication dates when adding future packs. Name sorting remains available, plus Role for NPCs. Sorting controls are available on mobile too.

Dungeon Chambers contains Ritual Chamber, Forgotten Storeroom and Prison Cells, with 1920 × 1080 WebP illustrations under `docs/images/locations/`. These are Underground / Abandoned templates and create independent editable Session instances using the existing storage format.

## Complete location artwork

All 39 location templates have dedicated WebP artwork. The 26 previously unillustrated templates use `docs/images/locations/<template-id>-location.webp`, at 1920 × 1080. Each illustration has descriptive alt text. Existing artwork, template IDs, publication dates and session storage formats are preserved. The original Prison Cells template has its own `prison-cells-location.webp`, separate from the Dungeon Chambers illustration. Generated NPC visuals automatically reuse the new artwork through existing setting mappings; missing-image fallbacks remain available.

## Broad NPC role filters

Library, Saved and Session use the eight categories in `docs/data/characters/role-categories.json`, with All Roles selected initially. Each library NPC has a nonempty `roleCategoryIds` array while retaining its specific `role` profession. Multiple categories use OR; categories, search and location fit use AND. Exact professions remain searchable. All Roles or Clear filters removes category restrictions; sorting and saved/session keys are unchanged.

Generated Session NPCs are classified by the same configuration’s profession-ID mapping at display time, without rewriting personal data or changing Name Generator options. Future NPC packs must include valid category IDs; see `planning/content-guidelines.md`.

Run `node tests/role-categories.dom.test.cjs` for category validation, overlap, All Roles, combined search/location filters, Saved/Session compatibility, generated Session professions and sort preservation.

With the preview server running on port 8000, `node tests/role-categories.test.cjs` checks category controls and overflow at desktop and mobile widths.

## NPC location fit categories

Library, Saved and Session share the six ordered categories in `docs/data/characters/location-fit-categories.json`, initially selecting All Locations. Library NPCs use `locationFitCategoryIds`; multiple selections use OR, combined with Role and search using AND. All Locations removes only the location restriction, while Clear filters resets both groups. Existing descriptive `locationFit`, specific `locationIds`, IDs, storage and default Most recent sorting are preserved. The Locations page filters and Name Generator options are unchanged.

Generated Session records use the configuration’s location-ID mapping without a migration; unknown legacy IDs remain visible under All Locations. Future NPC packs must include valid `locationFitCategoryIds`; see `planning/content-guidelines.md`.

Run `node tests/location-fit-categories.dom.test.cjs` for assignment validation, overlap, combined filters, Saved/Session, reset and storage checks. With Chromium installed and the repository served at localhost:8000, run `node tests/location-fit-categories.test.cjs` for rendered checks at five desktop/mobile widths.

## Complete Name Generator location imagery

Wizard’s Tower, Ship, Mine / Quarry, Academy / Library and Traveling Carnival now have illustrated location templates, completing background coverage for all 23 existing Name Generator locations. The Locations library contains 44 illustrated templates. Generator previews and generated Cast/Session cards reuse the same location files beneath the silhouette. Existing generator choices, profession mappings, location filters and stored records are unchanged.

Descriptions, setting assignments and final image prompts are documented in `project/location-packs/missing-generator-locations.md`. Validate the five new templates and legacy generated records with `node tests/missing-generator-locations.dom.test.cjs`. Run `node tests/missing-generator-locations.test.cjs` with Chromium and localhost:8000, or use the supported `NPC_TEST_CHROME` and `NPC_TEST_LOCAL_FILES=1` overrides for an alternate executable and local-file routing.
