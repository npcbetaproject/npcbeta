# Nightly NPCs — 2026-11-09

Toronto date: Monday, November9,2026. Exactly two NPCs; no Thursday override. Full publication authorized. Fresh main:124debf897b042460c58a82096da957441a49c6c. No existing date branch, PR or published records found.

## Concepts and random demeanor

Independent uniform secrets.choice draws from six varied and six sinister candidate concepts selected Olyra Flintpetal and Nivra Copperchime. Independent equal-probability draws from Friendly, Indifferent and Hostile selected Indifferent for each. Initial attitude does not determine morality.

- Olyra Flintpetal — Indifferent elf basket weaver: needs reed-cutting access after nesting marsh birds close the only safe harvesting bank. Ordinary honest NPC.
- Nivra Copperchime — Indifferent gnome clock repairer, sinister: plans to silence the town warning clock during a paid raid on the granary.

## GM spoilers and review

Olyra's hook involves negotiating wildlife-sensitive harvesting access, without injury or cruelty. Nivra's hook includes paid sabotage, theft and endangering a town's food supply, without graphic violence or practical sabotage instructions. These are individual choices, not ancestry traits. Names and IDs checked against all94 current records. Supported fields, classifications and published location references only. Independent review required before JSON index integration.

## Complete drafts

```json
[
  {
    "id": "olyra-flintpetal",
    "slug": "olyra-flintpetal",
    "name": "Olyra Flintpetal",
    "ancestry": "Elf",
    "role": "Basket weaver",
    "group": "townsfolk",
    "subtitle": "A quiet way through the reeds",
    "summary": "Olyra weaves sturdy baskets at a market stall, giving customers precise prices while her hands keep working. She gathers her own reeds and treats delays as problems to solve rather than invitations to complain.",
    "tableNote": "Test a reed between finger and thumb, leave a pause before answering and ask what the customer needs to carry. Say, “If you want the wide basket, come back tomorrow. If you know a quiet route through the marsh, we can discuss a trade.” Her initial indifference is concentration, not dislike.",
    "personality": "Initially indifferent, practical and absorbed in her craft; patient with useful suggestions and careful about taking more from the marsh than it can spare.",
    "motivations": "Fill her orders without wasting materials, preserve reliable reed beds and keep working access through agreements the marsh keeper can trust.",
    "adventureHook": "Nesting cranes close the only firm reed-cutting bank just as Olyra needs material for a large fish-trap basket order. The marsh keeper will permit cutting on the far bank if the party scouts and marks a quiet punt route that avoids the nesting islets; the old channel stakes have sunk into the silt. Olyra offers finished baskets and a share of her fee for the survey. They can negotiate limited access to her already-cut bundles instead, but must agree how to carry them out without crossing the nests.",
    "locationIds": [
      "market-square",
      "marsh-boardwalk"
    ],
    "locationFit": [
      "Market craft stalls",
      "Reed-cutting marsh banks"
    ],
    "roleCategoryIds": [
      "merchants-crafters"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "wilderness"
    ],
    "tags": [
      "merchant",
      "quest-giver"
    ],
    "imageAlt": "Olive-brown-skinned elf basket weaver with a silver braid and a neutral focused expression, wearing a rust tunic and sage apron while holding an unfinished basket beside a marsh boardwalk.",
    "portraitKey": "olyra-flintpetal",
    "portraitFit": "contain",
    "image": "images/characters/olyra-flintpetal.webp",
    "tokenImage": "images/tokens/olyra-flintpetal-token.webp",
    "publishedAt": "2026-11-09T22:00:01-05:00"
  },
  {
    "id": "nivra-copperchime",
    "slug": "nivra-copperchime",
    "name": "Nivra Copperchime",
    "ancestry": "Gnome",
    "role": "Clock repairer",
    "group": "townsfolk",
    "subtitle": "The alarm is part of the price",
    "summary": "Nivra repairs the town's warning clock with a flat voice and an exact account of every part. He has accepted payment to leave its alarm silent while raiders empty the granary.",
    "tableNote": "Count small parts, answer only the question asked and glance toward the mechanism when someone mentions the time. Say, “It will be ready when I said. Do you need a repair, or are you here to watch me work?” His initial indifference remains matter-of-fact when he starts bargaining over his secret.",
    "personality": "Initially indifferent, methodical and strictly transactional; meticulous about mechanisms, but willing to endanger others when the payment suits him.",
    "motivations": "Collect the raiders' promised share, make the clock failure appear accidental and retain the repair contract that gives him trusted access to the alarm.",
    "adventureHook": "A granary porter finds a raider's payment note naming the hour when the warning clock will be silent. Nivra has fitted a sham alarm linkage beneath the gatehouse mechanism, and the raid is due tonight. The party can inspect and restore the linkage, arrange an independent alarm or warn the granary watch while preserving the note as evidence. Nivra offers the raiders' meeting place in exchange for safe custody if exposed; left unwatched, he tries to remove the faulty parts before they can be examined.",
    "locationIds": [
      "gatehouse",
      "granary"
    ],
    "locationFit": [
      "Gatehouse clock alcoves",
      "Granary watch posts"
    ],
    "roleCategoryIds": [
      "merchants-crafters",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "settlements"
    ],
    "tags": [
      "antagonist"
    ],
    "imageAlt": "Older freckled gnome clock repairer with receding silver hair, round brass spectacles and a businesslike expression, wearing a midnight-blue coat while holding a brass gear and wooden mechanism.",
    "portraitKey": "nivra-copperchime",
    "portraitFit": "contain",
    "image": "images/characters/nivra-copperchime.webp",
    "tokenImage": "images/tokens/nivra-copperchime-token.webp",
    "publishedAt": "2026-11-09T22:00:00-05:00"
  }
]
```

## Independent content review

Contributor content_review30 reviewed both drafts against all94 current entries and approved integration without required corrections. Supported schema/IDs/classifications/locations/tags, consistent Indifferent initial attitudes, exactly one honest ordinary NPC and one deliberately sinister NPC, distinct actionable hooks and spoiler handling passed.

## Original artwork and prompts

Built-in image generation used Garran Vey for style only, followed by the settled portraits plus Brakka frame/site dragon references for tokens. Final prompt set:

- Use case stylized-concept. One original square NPC Beta fantasy portrait of Olyra Flintpetal, adult female ELF basket weaver, olive-brown skin, long pointed ears, grey-green eyes, silver hair in one thick braid over shoulder, neutral absorbed professional expression, mouth closed, initially indifferent. Plain rust linen tunic with rolled cream sleeves and muted sage work apron; holds an unfinished wicker basket and several reeds BELOW face. Softly secondary reed-cutting bank and wooden marsh boardwalk in daylight, no birds or other characters. Reference Garran Vey STYLE ONLY: expressive ink contours, selective crosshatching, rich painted gouache colour, clear graphic shadows and believable anatomy. Do not copy his face, forge, sword or apron design. Centered waist-up, both complete shoulders, full head/hair/braid/ears visible. Highest hair point20 percent DOWN FROM TOP edge of square with generous clear background overhead. Sharp full-size painted fantasy illustration, not photo, no camera textures/skin pores/cartoon exaggeration. No text, border or watermark. Opaque square.

- Framing correction ONLY: zoom out slightly so highest hair point begins20 percent DOWN from top of square, adding broad clear marsh/sky background above full head. Preserve exact Olyra elf identity, olive-brown face, grey-green eyes, silver braid, full pointed ears, neutral indifferent expression, rust tunic/sage apron, unfinished basket/reeds and marsh boardwalk, sharp painted ink/gouache style. Full both shoulders and waist visible; no cropping/stretching or face/style changes. No text, border, other characters or birds.

- Use case stylized-concept. One original square NPC Beta fantasy portrait of Nivra Copperchime, older male GNOME clock repairer, pale freckled complexion, short receding silver hair, complete small pointed ears, round brass spectacles, clean-shaven broad face, neutral businesslike indifferent expression, mouth closed, focused on his work. Midnight-blue medieval work coat with ochre collar over plain cream shirt, holds a small brass gear and a wooden clock movement BELOW face. Quiet gatehouse repair alcove with timber bench and simple brass mechanisms, background secondary, no other people. Reference STYLE ONLY: expressive ink contours, selective crosshatching, rich painted gouache colour, graphic shadows and believable anatomy. Do not copy reference identity/forge/sword/apron. Centered waist-up, both full shoulders, entire head/hair/ears inside frame; highest hair point20 percent DOWN from square top with broad clear background overhead. Sharp full-size painted fantasy illustration, not photograph, no photographic pores/camera textures or cartoon exaggeration. No lettering, numerals, clock face, occult effects, frame, watermark or evil grin. Opaque square.

- Framing correction ONLY: zoom out slightly so highest hair point begins20 percent DOWN from square top, generous clear gatehouse wall overhead. Preserve exact Nivra older gnome identity, receding silver hair, freckled broad face, complete pointed ears, round spectacles, neutral indifferent expression, midnight-blue coat/ochre collar, small gear and wooden movement, gatehouse repair alcove, sharp painted ink/gouache style. Both complete shoulders and waist visible, no cropping/stretching, no face/expression/style change. No text, numerals, border or other characters.

- One circular virtual tabletop token. Image1 FINAL IDENTITY Olyra Flintpetal: female elf basketweaver, olive-brown face, grey-green eyes, long pointed ears, thick silver braid over shoulder, neutral indifferent expression, rust tunic and sage apron. Preserve exact face/hair/clothes and sharp painted ink/gouache fantasy style. Center head and upper chest, ALL hair/braid/ears inside circle with breathing room, readable at280px. Image2 FRAME ONLY approved Brakka restrained antique brass/burgundy/charcoal circular border. Image3 DRAGON ONLY small subtle dragon-head bottom medallion, NO letters/nameplate. Subdued marsh colours inside circle. Whole border within square plus small transparent safety margin. Genuinely transparent exterior, no outside scenery/shadow/text/watermark/extra characters. High-resolution source.

- undefined

Lossless full-resolution sources: `project/npc-packs/sources/nightly-2026-11-09/<npc-id>-portrait.webp` and `<npc-id>-token.webp`. Deployed assets: `docs/images/characters/<npc-id>.webp` and `docs/images/tokens/<npc-id>-token.webp`. Portrait960 opaque q75/method6; token280 alpha q80/method6. Direct source resize without cropping or upscaling.

## Validation

Local page build and deterministic check passed, generating96 permanent profiles. Existing public-page, role-category, location-fit, Saved-filter and token DOM suites passed, as did portrait-mapping JS syntax. No shared application code, tests or browser storage changed. Exactly2 new records; all old94 deep-equal fresh main;96 unique IDs/slugs and valid published location/classification references.

All deployed WebPs decode at960×960 opaque RGB /280×280 RGBA, with transparent token corners and edge midpoints. All four1254-square source WebPs decode as lossless VP8L. Portraits inspected at full960 size; tokens inspected at280 and70. Actual portrait bytes:Olyra159916,Nivra158710. Token bytes:Olyra24552,Nivra25108. Shared high-resolution mappings cover Library/Saved/Session and tokenImage uses existing below-introduction controls.

Local Chromium is unavailable. Required PR CI must pass native375/1440 cards/profiles, uncropped full-resolution imagery, no hover crop, sharing/keyboard, token download placement/bytes/names and Session checks before merge. Production deployment and actual live record/profile/asset responses must pass after merge.



