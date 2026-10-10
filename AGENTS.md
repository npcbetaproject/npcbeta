# NPC Beta project guidance

For new or replacement location artwork and location image compression, follow `project/location-image-standard.md`. New assets use 960 × 540 opaque WebP with quality 72 and method 6; preserve existing dimensions when only compressing.

For any new or replacement library NPC portrait, follow project/npc-portrait-standard.md. Use one exactly 960 × 960 WebP asset for cards and expanded profiles, with full heads and generous headroom. Preserve character IDs and browser storage when updating references.

For every new library NPC, include a nonempty `roleCategoryIds` array from `docs/data/characters/role-categories.json`. Preserve the specific `role` profession. Follow `planning/content-guidelines.md` for occupational classification and overlapping categories.

For every new library NPC, include a nonempty `locationFitCategoryIds` array from `docs/data/characters/location-fit-categories.json`. Assign plausible encounter environments based on profession, description and adventure hook. Preserve `locationIds`, descriptive `locationFit`, and `roleCategoryIds`; follow `planning/content-guidelines.md`.

For NPC Library pack creation, read and follow `project/npc-pack-standard.md` and `project/npc-portrait-standard.md` before proposing or implementing characters.
