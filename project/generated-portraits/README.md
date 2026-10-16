# Generated NPC grayscale portraits

100 reusable portraits: ten faces/clothing variants for each of ten profession types. These assets belong to the random generator, not the public NPC Library portrait standard.

- Runtime assets: `docs/images/generated-npcs/<type>/<type>-01.webp` through `-10.webp`.
- Mapping: `docs/data/generator/portraits.json`; all 97 current profession IDs have one type.
- Format: opaque grayscale WebP, 70 × 70 pixels, method 6. Highest integer quality that fits a strict 1,000-byte cap per asset (quality 52–82). Total: 98,632 bytes.
- `portrait-collection.webp` shows the actual decoded compressed assets. `export-summary.json` records sizes and quality settings.
- FNV-1a 32-bit hash of the normalized, lowercase first name modulo the type's portrait count selects the portrait. Surname and location do not affect the selection. Rerolling profession selects from its corresponding type.
- Saved generated NPCs persist `portraitId`. Existing records acquire a portrait ID on first load, preserving their other data. Never rename/remove published portrait IDs; append new entries. Persisted IDs take priority over recalculation.
- Portraits are decorative, lazy loaded and grayscale in all views. Image errors restore the prior location/silhouette fallback. Location background images are loaded only for fallback visuals.
- Officials currently covers the steward; this generator has no noble profession. Underworld professions use plausible merchant/traveller/guard clothing rather than adding another type. Existing filter categories are unchanged.

## Artwork production

Generated with the built-in image generation tool as ten production atlases, each an exact 5-column × 2-row layout without gutters, labels or borders; sliced into separate square assets, converted to grayscale, resized with Lanczos and WebP encoded. Original atlases are generation intermediates, not runtime dependencies.

Shared prompt: "Ten grayscale fantasy NPC bust portraits in an exact uniform five-column by two-row grid, square cells, 5:2 landscape canvas, no gutters, borders, labels or text. Full heads with generous headroom, plain light gray backgrounds. Storybook fantasy illustration, hand-painted broad simple shapes, strong readable faces, minimal texture for tiny 70px thumbnails. Not photographic or caricature; nothing crosses cell boundaries."

People, in reading order: young human woman with cropped hair; weathered human man with short beard; older dwarf woman with braided hair; young elf man; adult orc woman with subtle tusks; dwarf man with braided beard; older human woman; goblin man; adult halfling woman with curly hair; middle-aged elf woman.

Clothing prompts by type:

| Type | Clothing |
| --- | --- |
| Labourers | Plain rough linen work tunics |
| Merchants | Simple vests over shirts |
| Guards | Padded coats and chainmail collars, no helmets |
| Scholars | Scholarly robes and high collars, no pointed hats |
| Travellers | Outdoor cloaks and leather collars, no raised hoods |
| Artisans | Sturdy shirts and leather work aprons |
| Faith | Modest clerical robes, no real-world religious symbols |
| Hospitality | Linen shirts and cloth aprons |
| Officials | Fine formal coats and restrained embroidery |
| Entertainers | Theatrical collars and decorative vests, no clown makeup |

## Validation

Run `node tests/generated-visuals.dom.test.cjs` and `node tests/generator.dom.test.cjs` with jsdom installed. With the repository served at localhost:8000, run `node tests/generated-visuals.test.cjs` with Playwright/Chromium; `NPC_TEST_CHROME` can select an existing executable. Tests cover all mapping/assets, the 1KB cap, name normalization and deterministic selection, all ten portrait slots, saved IDs, migration, undo, fallback, session-first loading and five responsive viewport widths.
