# Nightly NPCs — 2026-11-10

Toronto date: Tuesday, November 10, 2026. Exactly two NPCs; no Thursday override. Complete publication authorized. Fresh main: fbb533cccaafeec21ea47cb32e0821d8e3c56cc6. No existing date branch, PR or published records found.

## Concepts and independent demeanor draws

Independent uniform secrets.choice draws from six varied and six sinister candidate concepts selected Torven Loamhall and Ulvara Gravetwine. Independent equal-probability draws from Friendly, Indifferent and Hostile selected Hostile for Torven and Friendly for Ulvara. Initial attitude is separate from morality.

- Torven Loamhall — Hostile human messenger: must deliver two reconciliation letters while their feuding recipients refuse all visitors. Ordinary honest NPC.
- Ulvara Gravetwine — Friendly elf funeral singer, sinister: binds adult mourners' shadows into a hidden choir that she sells to necromancers.

## GM spoilers and review

Torven's hook concerns private correspondence and a family feud. Ulvara's hook includes grief exploitation, magical captivity and the sale of stolen shadows/voices, without graphic injury. Her behavior is an individual crime, not a trait of an ancestry or funeral tradition. All affected mourners are adults and have a clear rescue opportunity. Names and IDs checked against all96 existing records; supported fields, classifications and published locations only. Independent review required before JSON index integration.

## Complete drafts

```json
[
  {
    "id": "torven-loamhall",
    "slug": "torven-loamhall",
    "name": "Torven Loamhall",
    "ancestry": "Human",
    "role": "Messenger",
    "group": "townsfolk",
    "subtitle": "Two sealed chances to make peace",
    "summary": "Torven carries private letters between towns, answering questions with a suspicious glare and a demand for clear instructions. He resents being mistaken for a spy and guards his customers' seals as carefully as his own pay.",
    "tableNote": "Keep one hand on the satchel flap, ask who sent the speaker and cut off guesses about a letter's contents. Say, “You can doubt my manners. You don't get to doubt my seals. Are you helping me reach that door or wasting my daylight?” His initial hostility is defensive pride, not a wish to start a fight.",
    "personality": "Initially hostile, prickly and quick to challenge assumptions; scrupulous about privacy and stubbornly committed to finishing an accepted delivery.",
    "motivations": "Earn the acknowledgments that complete his contract, protect the trust attached to his courier's mark and prove that plain dealing can survive a family feud.",
    "adventureHook": "Torven holds reconciliation letters for the heads of two feuding households, but both gates are closed to unfamiliar visitors. At dawn the families intend to divide their shared bridge and end all cooperation. He offers the party a fee to secure a neutral guarantor and persuade each household to accept its sealed letter. They can negotiate separate deliveries or arrange a witnessed exchange in a public courtyard; opening the letters would undermine the trust needed to make either plan work.",
    "locationIds": [
      "gatehouse",
      "courtyard",
      "caravanserai"
    ],
    "locationFit": [
      "Household gates",
      "Caravan stopping places"
    ],
    "roleCategoryIds": [
      "workers-services"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "roads-travel",
      "castles-estates"
    ],
    "tags": [
      "quest-giver",
      "wanderer"
    ],
    "imageAlt": "Short-haired brown-skinned human messenger with a broad clean-shaven face and a defensive frown, wearing a dusty green coat and blue-grey shawl while holding two sealed letters beside a roadside gate.",
    "portraitKey": "torven-loamhall",
    "portraitFit": "contain",
    "image": "images/characters/torven-loamhall.webp",
    "tokenImage": "images/tokens/torven-loamhall-token.webp",
    "publishedAt": "2026-11-10T22:00:01-05:00"
  },
  {
    "id": "ulvara-gravetwine",
    "slug": "ulvara-gravetwine",
    "name": "Ulvara Gravetwine",
    "ancestry": "Elf",
    "role": "Funeral singer",
    "group": "townsfolk",
    "subtitle": "The choir beneath the chapel",
    "summary": "Ulvara offers gentle condolences and a warm invitation to hear a favorite remembrance song. Beneath that kindness, she steals adult mourners' shadows and sells their captive voices as a hidden choir to necromancers.",
    "tableNote": "Remember a visitor's name, make room beside you and speak as though no concern is too small to hear. Say, “Come, sit a while. Tell me which song they loved, and we'll find a little comfort in it.” Her initial friendliness is practiced and attentive; it remains persuasive when she is trying to conceal a crime.",
    "personality": "Initially friendly, patient and eager to put people at ease; skilled at reading grief and willing to exploit that trust for profit and artistic vanity.",
    "motivations": "Build a choir no living patron could afford, sell bound shadows to wealthy occult buyers and preserve her reputation as a comforting presence at funerals.",
    "adventureHook": "Several adult mourners stop casting shadows after Ulvara sings at a funeral. One hears his own voice answering a dirge beneath the chapel and asks the party to investigate before an occult buyer arrives at midnight. Ulvara keeps the shadows in stoppered black jars in the crypt; opening each jar beside its living owner returns the stolen shadow, while opening it elsewhere lets it flee in confusion. The party can reunite the victims with their jars, interrupt the sale or bargain for the choir's release. Ulvara offers to free one person if the rest of the sale is allowed to proceed.",
    "locationIds": [
      "chapel",
      "crypt"
    ],
    "locationFit": [
      "Funeral chapels",
      "Hidden choir crypts"
    ],
    "roleCategoryIds": [
      "hospitality-entertainment",
      "scholars-magic",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "dungeons-ruins"
    ],
    "tags": [
      "antagonist"
    ],
    "imageAlt": "Warmly smiling pale olive-skinned elf funeral singer with dark auburn hair pinned in a low coil, wearing a deep violet gown and soft grey shawl while holding a closed songbook in a quiet chapel.",
    "portraitKey": "ulvara-gravetwine",
    "portraitFit": "contain",
    "image": "images/characters/ulvara-gravetwine.webp",
    "tokenImage": "images/tokens/ulvara-gravetwine-token.webp",
    "publishedAt": "2026-11-10T22:00:00-05:00"
  }
]
```

## Independent content review

Contributor content_review30 approved both complete drafts against all96 existing records before JSON integration. Torven's sealed-letter mediation is distinct from recent missing-messenger rescues. Ulvara's shadow theft and reunion-based rescue differ from Sarra's released shade and Veyra's funeral-cart captives. Names/IDs, supported fields, classifications/tags, published locations, actionable choices and spoiler handling passed. Hostile Torven remains honest; Friendly Ulvara is explicitly sinister. No required corrections.

## Original artwork and prompts

Built-in image generation used Garran Vey for style only, then the settled portraits plus Brakka frame/site dragon references for tokens. Final prompt set:

- Use case stylized-concept. One original square NPC Beta fantasy portrait of Torven Loamhall, adult human male messenger, medium brown skin, broad clean-shaven face, wide blunt nose, dark eyes, very short cropped black hair, defensive suspicious frown, mouth closed. Dusty green medieval traveling coat, blue-grey wool shoulder shawl, plain leather messenger satchel. Holds TWO folded parchment letters with simple wax seals BELOW face, no writing. Secondary country road and timber household gate, no other people. Garran Vey reference STYLE ONLY: expressive ink contours, selective crosshatching, rich painted gouache colour, graphic shadows and believable anatomy. Do not copy reference face, beard, forge, sword or apron. Centered waist-up with both complete shoulders, entire head/hair/ears visible, highest head point20 percent DOWN from square top with generous clear background overhead. Sharp full-size hand-painted fantasy illustration, not photo/camera texture/skin pores/cartoon exaggeration. No text, border or watermark. Opaque square.

- Framing correction ONLY: slight zoom out so highest hair point begins20 percent DOWN from square top, adding generous clear road/sky background overhead. Preserve exact Torven messenger identity, brown clean-shaven broad face, short cropped dark hair, defensive hostile frown, green coat/blue-grey shawl/satchel, TWO sealed letters, country road and household gate, sharp painted ink/gouache style. Both complete shoulders and waist visible, full head/ears/hair. Do not crop/stretch or change face/expression/style. No text, border or extra characters.

- Use case stylized-concept. One original square NPC Beta fantasy portrait of Ulvara Gravetwine, mature female ELF funeral singer, pale olive skin, soft angular face, long pointed ears, warm green eyes, dark auburn hair pinned in a neat low coil, gentle welcoming smile. Modest deep violet medieval gown with soft grey wool shawl and simple silver clasp; holds a CLOSED plain songbook BELOW face, no writing. Quiet chapel with stone arches and subdued candlelight, softly secondary, no mourners or other people. Garran Vey reference STYLE ONLY: expressive ink contours, selective crosshatching, rich painted gouache colour and clear graphic shadows, believable anatomy. Do not copy reference identity, forge, sword or apron. Centered waist-up, both entire shoulders, full hair/coil/head/ears visible, highest hair point20 percent DOWN from square top with broad clear background overhead. Sharp full-size hand-painted fantasy illustration, not photo/photographic pores/camera textures/cartoon exaggeration. No text, occult effects, evil grimace, border or watermark. Opaque square.

- undefined

- One circular virtual tabletop token. Image1 FINAL IDENTITY Ulvara Gravetwine: mature female elf, pale olive skin, green eyes, dark auburn hair in low coil, long pointed ears, gentle warm welcoming smile, deep violet gown/grey shawl/silver clasp. Preserve exact face/hair/clothes and sharp painted ink/gouache fantasy style. Center head and upper chest, full hair/coil/ears INSIDE circle with breathing room, face readable at280px. Image2 FRAME ONLY approved Brakka restrained antique brass/burgundy/charcoal circular border. Image3 DRAGON ONLY small subtle dragon-head bottom medallion, NO letters/nameplate. Subdued chapel colours inside circle. Whole border within square with small transparent safety margin. Genuinely transparent exterior, no outside shadow/scenery/text/watermark/other people. High-resolution source.

Lossless full-resolution sources: `project/npc-packs/sources/nightly-2026-11-10/<npc-id>-portrait.webp` and `<npc-id>-token.webp`. Deployed assets: `docs/images/characters/<npc-id>.webp` and `docs/images/tokens/<npc-id>-token.webp`. Portrait960 opaque q75/method6; token280 alpha q80/method6. Direct source resize without cropping or upscaling.

## Validation

Local page build and deterministic check passed, generating98 permanent profiles. Existing public-page, role-category, location-fit, Saved-filter and token DOM suites passed, as did portrait-mapping JS syntax. No shared application code, tests or browser storage changed. Exactly2 new records; all old96 deep-equal fresh main;98 unique IDs/slugs and valid published location/classification references.

All deployed WebPs decode at960×960 opaque RGB /280×280 RGBA, with transparent token corners and edge midpoints. All four1254-square source WebPs decode as lossless VP8L. Portraits inspected at full960 size; tokens inspected at280 and70. Actual portrait bytes:Torven177580,Ulvara108252. Token bytes:Torven25802,Ulvara23224. Shared high-resolution mappings cover Library/Saved/Session and tokenImage uses existing below-introduction controls.

Local Chromium is unavailable. Required PR CI must pass native375/1440 cards/profiles, uncropped full-resolution imagery, no hover crop, sharing/keyboard, token download placement/bytes/names and Session checks before merge. Production deployment and actual live record/profile/asset responses must pass after merge.



