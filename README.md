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
