# Generated NPC grayscale portraits

300 reusable portraits: thirty faces/clothing variants for each of ten profession types. These assets belong to the random generator, not the public NPC Library portrait standard.

- Runtime assets: `docs/images/generated-npcs/<type>/<type>-01.webp` through `-30.webp`.
- Mapping: `docs/data/generator/portraits.json`; all 97 current profession IDs have one type.
- Format: opaque grayscale WebP, 280 × 280 pixels, quality 75, method 6. The larger artwork replaces the original 70px thumbnails; the 300 runtime portraits total 2,187,574 bytes, ranging from 3,970 to 10,454 bytes each. See `export-summary.json` for per-file sizes.
- `portrait-collection.webp` shows the actual decoded compressed assets. `export-summary.json` records sizes and quality settings.
- FNV-1a 32-bit hash of the normalized, lowercase first name modulo the type's portrait count selects the portrait. Surname and location do not affect the selection. Rerolling profession selects from its corresponding type.
- Saved generated NPCs persist `portraitId`. Existing records acquire a portrait ID on first load, preserving their other data. Never rename/remove published portrait IDs; append new entries. Persisted IDs take priority over recalculation.
- Portraits are decorative, lazy loaded and grayscale in all views. Image errors restore the prior location/silhouette fallback. Location background images are loaded only for fallback visuals.
- Officials currently covers the steward; this generator has no noble profession. Underworld professions use plausible merchant/traveller/guard clothing rather than adding another type. Existing filter categories are unchanged.

## Artwork production

Generated with the built-in image generation tool as thirty production atlases, each an exact 5-column × 2-row layout without gutters, labels or borders; sliced into separate square assets, converted to grayscale, resized with Lanczos and WebP encoded. High-resolution grayscale atlas sources are retained in `sources/` for reproducible exports. They are not downloaded by the app. Run `python scripts/export-generated-portraits.py` to rebuild all 300 assets.

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

Run `node tests/generated-visuals.dom.test.cjs` and `node tests/generator.dom.test.cjs` with jsdom installed. With the repository served at localhost:8000, run `node tests/generated-visuals.test.cjs` with Playwright/Chromium; `NPC_TEST_CHROME` can select an existing executable. Tests cover all mappings/assets, the 280px resolution, name normalization and deterministic selection, all thirty portrait slots, saved IDs, migration, undo, fallback, session-first loading and five responsive viewport widths.

## Expansion to twenty looks

IDs 01–10 retain the original character identities, exported from their original artwork at 280px. IDs 11–20 add: older bald human man with a white moustache; young dwarf woman with a blunt bob; middle-aged elf man with short curls; human woman with a long braid and hooked nose; elderly halfling man with receding hair; young orc man with cropped hair; middle-aged human woman with short curls; elderly goblin woman; dwarf man with an eyepatch; elf woman with short silver hair.

New artwork uses the same built-in generation workflow, five-by-two atlas layout, grayscale storybook style and type-specific clothing. The prompt asks for clear eye/facial detail for 280px exports, full heads including hair and ears, generous cell margins, and no labels, borders or gutters. Export all sources as opaque grayscale WebP at quality 75/method 6.

Existing saved `portraitId` values remain unchanged. New rolls hash into the expanded pool of twenty; unsaved names without a persisted portrait ID may therefore select a different face than in the earlier ten-image pool.


## Expansion to thirty looks

IDs 21–30 add an elderly human woman with silver braid; young human man with wavy shoulder-length hair and glasses; middle-aged dwarf woman with swept hair; older elf man with long dark hair; young orc woman with tight braids; bald dwarf man with forked beard; middle-aged human man with prominent cheekbones; young goblin woman with curly hair; older halfling woman with pinned curls; and an androgynous young elf with chin-length hair. Each type uses its established occupational clothing.

Existing saved portrait IDs and all 200 earlier assets are preserved. New rolls use the expanded thirty-image pool; names without a saved portrait ID can select a different face. Built-in image generation produced the ten new source atlases using the shared layout and style prompt with these new subjects.
