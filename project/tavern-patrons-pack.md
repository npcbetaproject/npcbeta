# Tavern Patrons pack

Four ordinary, slightly gritty human village regulars, approved for creation on 2026-10-08. Each stands alone in another campaign; no shared plot or campaign setting is required.

| NPC | Profession | Portrayal | Local complication | Role categories | Location Fit |
| --- | --- | --- | --- | --- | --- |
| Harl “Split Lip” Mercer | Farmhand | Loud laugh, clenched mug, defensive about his brother | Family debt and missing wages | Workers & Services | Settlements |
| Mara Flint | Charcoal burner | Long silences, practical questions about payment | Broken cart and a suspicious midnight delivery | Workers & Services | Settlements; Wilderness |
| Jory Pike | Poacher | Watches the door and saves scraps for his old hound | Someone is moving his snares onto a public path | Workers & Services; Underworld | Settlements; Wilderness |
| Bess Crowley | Washerwoman | Dry insults, rough hands, concern beneath the humour | Bloodied laundry and a missing apprentice | Workers & Services | Settlements |

All four reference the existing `tavern` location template. The current character schema stores motivation and complications in `tableNote` and `adventureHook`; no new content fields or filters were added. All four share `publishedAt: 2026-10-09T00:42:32Z`. Stable date sorting preserves the editorial order above and puts the pack ahead of older entries. Existing NPC records and release dates are preserved.

## Portraits

The built-in imagegen tool produced four separate square portraits using `docs/images/characters/harira-ashhaven.webp` only as a style/framing reference. The finals are opaque 960 × 960 WebP, quality 90, resized without cropping or stretching, in `docs/images/characters/`. Card, Saved, Session and expanded profile reuse those files through the existing portrait mapping. Jory's dog remains part of his written portrayal; the waist-up portrait contains Jory alone.

## Final generation prompts

### harl-mercer

Use case: stylized-concept. Asset: NPC Beta Library portrait. Use the supplied image ONLY as a style and framing reference, depicting a DIFFERENT character. One standalone square 1:1 detailed realistic medieval fantasy illustration, natural skin and fabric textures, muted earthy colours, soft cinematic light. Gritty rural village tavern, worn timber walls and cloudy daylight mixed with warm hearth light, softly blurred background. Centered waist-up, both shoulders and full head/hair/headwear visible, 18–20% empty background above highest head point, face in upper-middle, hands/props below face. Ordinary working-class patron, no heroic armour, no magic, no ornate costume, no text, border, watermark, extra humanoid characters. Harl 'Split Lip' Mercer, human male farmhand aged about 35, broad shoulders, tousled brown hair, uneven stubble, tired reddish eyes, small healed split in lower lip. Worn muddy brown linen shirt, rolled sleeves and frayed olive waistcoat, calloused hands around a battered wooden ale mug at lower waist. Seated beside a scratched tavern table, defensive expression and tense jaw.

### mara-flint

Use case: stylized-concept. Asset: NPC Beta Library portrait. Use the supplied image ONLY as a style and framing reference, depicting a DIFFERENT character. One standalone square 1:1 detailed realistic medieval fantasy illustration, natural skin and fabric textures, muted earthy colours, soft cinematic light. Gritty rural village tavern, worn timber walls and cloudy daylight mixed with warm hearth light, softly blurred background. Centered waist-up, both shoulders and full head/hair/headwear visible, 18–20% empty background above highest head point, face in upper-middle, hands/props below face. Ordinary working-class patron, no heroic armour, no magic, no ornate costume, no text, border, watermark, extra humanoid characters. Mara Flint, human woman charcoal burner aged about 42, lean strong build, dark hair roughly tied back, soot-smudged cheeks, steady grey eyes, weathered face. Patched charcoal-grey wool coat over faded russet linen shirt, work gloves tucked into belt. Hands cupping one plain earthenware ale cup at waist, seated near blurred timber door, quiet watchful expression.

### jory-pike

Use case: stylized-concept. Asset: NPC Beta Library portrait. Use the supplied image ONLY as a style and framing reference, depicting a DIFFERENT character. One standalone square 1:1 detailed realistic medieval fantasy illustration, natural skin and fabric textures, muted earthy colours, soft cinematic light. Gritty rural village tavern, worn timber walls and cloudy daylight mixed with warm hearth light, softly blurred background. Centered waist-up, both shoulders and full head/hair/headwear visible, 18–20% empty background above highest head point, face in upper-middle, hands/props below face. Ordinary working-class patron, no heroic armour, no magic, no ornate costume, no text, border, watermark, extra humanoid characters. Jory Pike, human male poacher aged about 50, wiry build, greying dark beard, weather-beaten face, narrow wary eyes, battered soft brown felt cap fully in frame. Faded olive wool jerkin, patched brown coat, a little cord hanging from belt, one rough hand on a pewter ale mug. Seated in village tavern nook with a shadowy doorway behind. No dog in this waist-up portrait; no trophies, weapons or dead animals.

### bess-crowley

Use case: stylized-concept. Asset: NPC Beta Library portrait. Use the supplied image ONLY as a style and framing reference, depicting a DIFFERENT character. One standalone square 1:1 detailed realistic medieval fantasy illustration, natural skin and fabric textures, muted earthy colours, soft cinematic light. Gritty rural village tavern, worn timber walls and cloudy daylight mixed with warm hearth light, softly blurred background. Centered waist-up, both shoulders and full head/hair/headwear visible, 18–20% empty background above highest head point, face in upper-middle, hands/props below face. Ordinary working-class patron, no heroic armour, no magic, no ornate costume, no text, border, watermark, extra humanoid characters. Bess Crowley, human woman washerwoman aged about 55, sturdy build, lined face, grey hair under plain loosely tied cream kerchief entirely in frame, sharp amused eyes and knowing half-smile. Faded burgundy wool dress, worn oatmeal linen apron, visibly work-roughened reddish hands with a clean folded linen cloth resting below waist. Seated at a village tavern table, earthy practical appearance, no bloody cloth.

## Validation

- Confirmed four unique IDs, valid role/location classifications and a valid existing tavern reference; all older character records remain identical.
- Decoded all four final assets as opaque 960 × 960 WebP.
- Ran existing role-category, location-fit-category, recent-sort and generated-visual DOM checks.
- `tests/tavern-patrons.test.cjs` checks desktop/mobile portraits and profiles, Most Recent order, complete profile content, scroll reset, search, combined filters and Saved/Session with existing selections.

Run the browser check with Chromium and the repository served at localhost:8000. The existing alternative-executable/local-file-routing conventions are supported: `NPC_TEST_CHROME=/path/to/chromium NPC_TEST_LOCAL_FILES=1 node tests/tavern-patrons.test.cjs`.
