# NPC Beta project guidance

For any new or replacement library NPC portrait, follow project/npc-portrait-standard.md. Use one exactly 960 × 960 WebP asset for cards and expanded profiles, with full heads and generous headroom. Preserve character IDs and browser storage when updating references.

Export NPC portraits as opaque WebP with quality 75 and method 6; review visible detail before publishing. These settings supersede older NPC pack export settings.

For every new library NPC, include a nonempty `roleCategoryIds` array from `docs/data/characters/role-categories.json`. Preserve the specific `role` profession. Follow `planning/content-guidelines.md` for occupational classification and overlapping categories.

For every new library NPC, include a nonempty `locationFitCategoryIds` array from `docs/data/characters/location-fit-categories.json`. Assign plausible encounter environments based on profession, description and adventure hook. Preserve `locationIds`, descriptive `locationFit`, and `roleCategoryIds`; follow `planning/content-guidelines.md`.

For NPC Library pack creation, read and follow `project/npc-pack-standard.md` and `project/npc-portrait-standard.md` before proposing or implementing characters.

For every public library NPC creation task, provide a stable permanent page and the shared popup’s **Copy link** and **View full page** actions. Copy the absolute production URL with brief confirmation; open the full page in a new tab without changing the popup’s current URL, tab, scroll or active session. Preserve these actions when replacing portraits or updating records. Run the public-page generator and verify the new NPC’s page, metadata, sitemap, links and existing session identity. This requirement applies to individual NPCs and packs, not private generated Session NPCs. While the permanent-page feature is awaiting review, build on or include that feature rather than omitting it; do not merge it without authorization.
