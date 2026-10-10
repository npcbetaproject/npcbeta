# Along the River Road

Approved four-NPC pack: Torren Reedbank (human fisherman), Elwen Dawnmere (elf acolyte), Wenric Valechord (halfling bard), Captain Mara Thornwick (human bandit captain).

Riverside gossip, wandering ambition and trouble between villages. Each NPC works independently. Optional connection: Torren has seen Mara’s crew crossing the river, Elwen’s shrine lies along their route, and Wenric unknowingly turns their movements into a popular song. These connections are suggestions, not required campaign lore.

Portraits follow the existing painted fantasy-book style, with visible brushwork, grounded proportions, muted earth tones, full heads and 18–20% headroom. One opaque 960 × 960 WebP shared by cards and profiles, using contain fit. Built-in image generation; prompts recorded below.

## Classification

| NPC | Role categories | Location Fit |
|---|---|---|
| Torren | Workers & Services | Settlements, Wilderness, Waterfront |
| Elwen | Faith & Healing, Scholars & Magic | Settlements, Roads & Travel |
| Wenric | Hospitality & Entertainment | Settlements, Roads & Travel |
| Mara | Underworld | Settlements, Roads & Travel, Wilderness |

All four use the same publishedAt timestamp, with deterministic existing stable ordering. Existing data and browser selections remain untouched.

## Portrait prompts

Shared direction: square centered waist-up fantasy-book painting, visible oil/gouache brushwork, muted earthy colours, natural proportions, both shoulders and full head visible with generous headroom. No text, frame, watermark or additional people. Existing Nibbin portrait used as a style reference only. Export without cropping as opaque 960 × 960 WebP.

- **torren-reedbank:** Torren Reedbank, human fisherman in his late fifties, weathered friendly face, grey stubble, tousled greying brown hair, patched moss-green fishing tunic and worn tan vest, coiled fishing net held low across waist, relaxed proud half-smile. Riverside bank with reeds, small wooden boat and distant dark woodland, warm early morning light.
- **elwen-dawnmere:** Elwen Dawnmere, young adult female elf acolyte, long full pointed ears visible, brown hair in a simple braid, earnest thoughtful expression, plain ivory robes with muted blue cord belt, small unbranded sunburst wooden holy symbol, holding a worn journal low at waist. Humble roadside stone shrine and leafy road, gentle morning light.
- **wenric-valechord:** Wenric Valechord, adult male halfling traveling bard, rounded pleasant face, curly auburn hair, inviting smile, colourful but muted patched rust and teal traveling coat over simple shirt, battered wooden lute held below face across waist. Village tavern porch beside rural lane, warm afternoon painted light.
- **captain-mara-thornwick:** Captain Mara Thornwick, human female bandit captain in her late thirties, sharp confident expression, dark brown hair tied back with loose strands, practical weathered charcoal leather armour, faded burgundy scarf, one hand resting near a belt with a sheathed short sword visible low in frame. Roadside treeline between villages, late afternoon soft light, cunning assured stance without violence.

## Verification

Run `tests/along-the-river-road.test.cjs` with Playwright, `NPC_TEST_LOCAL_FILES=1` and `NPC_TEST_CHROME` pointing to Chromium. Checks cover data references, first release order, exact image size and contain fit, desktop/mobile profiles, scroll reset, search, combined filters, Saved, Session and refresh persistence.
