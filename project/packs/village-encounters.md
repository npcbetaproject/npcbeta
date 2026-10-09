# Village Encounters

Four approved NPCs for a village market and its surrounding lanes. The pendant investigation and wagon mystery can connect them, but each encounter also works independently.

Pippa’s originally empty hook is completed with an eyewitness clue about a parcel beneath a merchant’s wagon. Her Workers & Services classification reflects a townsfolk encounter rather than employment. Elra also appears under Underworld because her concept explicitly involves theft.

## Portrait production

Generated concurrently with the built-in imagegen tool; Bess Crowley was inspected as the initial visual style reference. Following user feedback that the first portraits were too lifelike, all four were transformed concurrently into more visibly painted fantasy illustrations. A concurrent framing pass added the standard’s generous headroom while preserving the characters. Final assets are batch resized without cropping or stretching and exported as opaque 960 × 960 WebP at quality 90 in `docs/images/characters/`.

## Prompt set

- **Nibbin Copperwheel:** Adult male goblin, moss-green skin, long ears, amber eyes, cheerful shrewd smile, patched ochre coat, leather pouches, copper scales, cluttered supply wagon on a village lane.
- **Elra Duskbrook:** Young adult human woman, tired grey eyes, loosely tied brown hair, dirty fingers, nervous expression, patched slate dress and linen apron, silver crested pendant, village market.
- **Sergeant Harl Fenwick:** Middle-aged human man, greying brown hair, trimmed moustache, patient watchful expression, worn mail and burgundy surcoat, iron helmet at waist, village watchhouse.
- **Pippa Reed:** Human girl about ten, freckles, auburn braids, curious smile, age-appropriate sage tunic and patched vest, wooden dragon, cottage-lined village lane.

Shared direction: detailed realistic fantasy illustration, natural facial and material texture, muted earthy palette, soft cinematic light, grounded medieval clothing; centered square waist-up portrait, both shoulders and complete head/hair/ears visible, generous clear background above head, props below face; opaque background, no additional people, text, frames or watermark.

Reframing prompt: “Reframe this same portrait slightly wider: put the highest hair point 18 percent down from the top of the square, with generous uninterrupted background above. Show centered waist-up figure with both shoulders fully in frame. Preserve this exact character, face, clothing, props, realistic illustration style and scene. Expand the background naturally; no borders, text, additional people, cropping or stretching. Square opaque output.”

## Validation

- Exactly four unique additions; all older records, IDs, dates and relative order preserved.
- All Role/Location Fit category IDs and concrete location references validated; meaningful alt text and shared portrait mappings verified.
- Four opaque WebP assets decode at exactly 960 × 960. Visual inspection confirms complete heads, ears, hair and shoulders with generous headroom.
- All 13 existing DOM regression suites pass.
- Chromium browser pack test passes at 375px and 1440px: all card/profile images load with contain fit, profile content and scroll reset, name/profession search, each combined classification, latest-pack ordering, Saved/Session actions, reload persistence and older selections. Saved and Session portraits open correctly; Session toggle stays hidden in Session profiles. No page errors or horizontal overflow.
- Read-only contributor content review passed.
- Screenshots: `project/screenshots/village-encounters-*.webp`.

## Illustration revision

User direction: make the four portraits less lifelike and more illustrative. This pack-specific request overrides the default realistic rendering while retaining the portrait standard’s asset and framing requirements.

Shared edit prompt: “Transform this portrait into a clearly hand-painted fantasy book illustration. Strong visible gouache/oil brushwork, simplified painted planes of light and shadow, softly drawn contours, selective detail on face, painterly cloth and hair, loosely brushed atmospheric background. Remove photographic skin pores and camera realism; human proportions remain grounded, neither cartoon nor anime nor 3D. Preserve exact character identity, age, expression, hair, clothing colors, equipment, props and setting. Keep the same square centered waist-up composition, full head/ears/hair, both shoulders, and 18–20% headroom. Muted earthy palette with soft warm painted light. One figure, opaque background; no text, watermark, border or additional people.”

Final revised assets replace the same four `docs/images/characters/<npc-id>.webp` files; data, IDs, mappings and storage remain unchanged.

Revised artwork validation: visually inspected all four painted portraits, verified opaque 960 × 960 WebP exports, and reran the complete desktop/mobile pack browser test successfully. Screenshots were refreshed to show the final illustration style.
