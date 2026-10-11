# Delve Preparations

Four approved standalone town NPCs: Brakka Hearthhand (half-orc tavern cook), Elwen Reedmere (elf town librarian), Tovin Amberwick (gnome potion vendor), and Mara Fenwick (human novice town patrol).

Their missing supplier, altered monastery maps, changed potion and suspicious cellar can connect into a dungeon investigation, but each hook works independently. All four appear first under Most Recent.

## Artwork

Built-in image generation created four individual painted fantasy illustrations. Shared prompt direction: visible gouache/oil brushwork, grounded proportions, earthy colors, warm light, centered waist-up figure, full head and shoulders, profession props below face, secondary medieval background, no text or additional people.

- Brakka: olive-green skin, small tusks, black bun, flour-dusted burgundy tunic and linen apron, wrapped travelling meals, tavern hearth.
- Elwen: silver-streaked dark hair, pointed ears, small spectacles, sage and ivory robes, regional map, old library.
- Tovin: auburn hair and beard, ochre waistcoat, teal shirt, stoppered potion, apothecary counter.
- Mara: tied brown hair, nervous determined expression, oversized mail and burgundy tabard, helmet and notebook, watchhouse lane.

Final assets: `docs/images/characters/<npc-id>.webp`, opaque 960 × 960, quality 75, method 6, approximately 94–107 KiB. Original generated PNGs remain available in the generating session. Portraits were visually inspected with complete heads and readable faces.

## Validation

- Exactly four unique additions; all old records and ordering preserved.
- Required Role and Location Fit classifications and concrete location references validated.
- DOM checks passed for latest ordering, profile content, portrait mappings, save/session actions and preservation of prior selections.
- Existing Role and Location Fit DOM suites passed.
- Existing Session cast DOM suite passed with confirmation stub enabled in the validation harness, to accommodate the recently added confirmation dialog.
- WebP dimensions, format and opaque mode verified; whitespace checks passed.
- Full browser desktop/mobile rendering could not be verified: Chromium was absent and its download failed. No browser screenshots are claimed.
