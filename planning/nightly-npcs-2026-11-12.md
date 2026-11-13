# Nightly NPCs — November 12, 2026

Thursday America/Toronto. Fresh main `020c5c444d69451704acdcbf9628298067dd2750`. Before starting, exact date branch and PR queries found no existing work; current100 records contain no November12 entries. Publication is explicitly authorized.

## Selected concepts

- Brammok Tilehorn — Friendly minotaur stone mason: blocks an unsafe mountain tunnel and needs help finding the missing support crew. Varied encounter NPC, honest and protective.
- Selvik Mirrorfen — Friendly doppelganger witness broker, sinister: impersonates witnesses to condemn an innocent adult and acquire the seized workshop.

Each concept was randomly selected from a separate six-option pool using Python secrets.choice. Each demeanor was independently drawn with equal probability from Friendly, Indifferent and Hostile; both draws were Friendly. Both are Thursday monster/adversary encounters, with distinct motivations, negotiation routes and explicit conflict triggers. Initial demeanor is separate from morality.

## Draft for independent content review

GM spoilers: rescue location, false testimony, planned wrongful conviction and property seizure. All involved workers, accused people and apprentices are adults. Review before JSON index integration.

```json
[
  {
    "id": "brammok-tilehorn",
    "slug": "brammok-tilehorn",
    "name": "Brammok Tilehorn",
    "ancestry": "Minotaur",
    "role": "Stone mason",
    "group": "townsfolk",
    "subtitle": "A friendly face across a closed tunnel",
    "summary": "Brammok repairs mountain stonework and welcomes travelers with cheerful advice. He plants his broad frame across a damaged tunnel entrance until the missing support crew is found and the passage can be made safe.",
    "tableNote": "Offer a seat on a stone block, praise useful questions and sketch the problem in dust with one thick finger. Say, “Good to see willing hands! Tea first, then we find my crew. Nobody goes under that lintel until it can hold its own weight.”",
    "personality": "Initially friendly, patient and eager to explain his craft; stubborn about safety and deeply loyal to the people working beside him.",
    "motivations": "Bring the crew home, keep the mountain route useful and prove that closing a dangerous passage is an act of care rather than a demand for tribute.",
    "adventureHook": "Two adult workers sent to inspect a side opening have not returned, and fresh tool taps sound beyond a fall of loose stone. Brammok offers his repair fee to companions who reach the opening by the mountain trail and locate the crew. The party can help plan a rescue and a temporary detour, or convince him that an alternative support plan is sound. Travelers who try to force the entrance or dismantle the warning barrier meet a dangerous opponent: he grapples intruders and drives them back, but stops when they withdraw or agree to a safe inspection.",
    "locationIds": [
      "mountain-trail",
      "mine-quarry",
      "rock-shelter"
    ],
    "locationFit": [
      "Mountain tunnels",
      "Stonework camps"
    ],
    "roleCategoryIds": [
      "merchants-crafters"
    ],
    "locationFitCategoryIds": [
      "roads-travel",
      "wilderness"
    ],
    "tags": [
      "ally",
      "quest-giver"
    ],
    "imageAlt": "Chestnut-furred minotaur stone mason with kind amber eyes and complete ivory horns, wearing a slate-blue tunic and tan leather apron while holding a wooden mason’s square beside a braced mountain tunnel.",
    "portraitKey": "brammok-tilehorn",
    "portraitFit": "contain",
    "image": "images/characters/brammok-tilehorn.webp",
    "tokenImage": "images/tokens/brammok-tilehorn-token.webp",
    "publishedAt": "2026-11-12T22:00:01-05:00"
  },
  {
    "id": "selvik-mirrorfen",
    "slug": "selvik-mirrorfen",
    "name": "Selvik Mirrorfen",
    "ancestry": "Doppelganger",
    "role": "Witness broker",
    "group": "townsfolk",
    "subtitle": "Every witness has the same helpful smile",
    "summary": "Selvik finds witnesses for legal disputes, greeting anxious clients with warmth and offers of practical help. He secretly impersonates several witnesses to convict an innocent adult craftworker, then buys the seized workshop through a paid intermediary.",
    "tableNote": "Pull out a chair, remember the visitor’s name and offer to take troublesome errands off their hands. Say, “You have enough to worry about. Tell me who needs a witness, and I’ll make the introductions.” His friendly manner remains smooth when questions become inconvenient.",
    "personality": "Initially friendly, attentive and reassuring; exploitative beneath the courtesy, treating trust as a resource he can spend for personal gain.",
    "motivations": "Acquire a profitable workshop cheaply, retain control of the intermediary who will hold it and keep his false identities from being compared.",
    "adventureHook": "The accused craftworker’s adult apprentice notices that three witnesses use the same unusual phrase and asks the party to investigate before the verdict at dusk. The clerk keeps their written statements: all three contain the same distinctive spelling error, and a runner sees each supposed witness return to Selvik’s office. The party can arrange simultaneous questioning, find the intermediary’s purchase agreement or persuade that frightened accomplice to testify. Selvik offers a share of the workshop for silence. If cornered with evidence, he tries to seize the clerk’s statements and escape through the service passage, fighting anyone who prevents his flight; a guaranteed hearing without a mob may persuade him to surrender.",
    "locationIds": [
      "watchhouse",
      "private-residence",
      "servants-passage"
    ],
    "locationFit": [
      "Hearing rooms",
      "Household service passages"
    ],
    "roleCategoryIds": [
      "workers-services",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "castles-estates"
    ],
    "tags": [
      "antagonist",
      "mysterious"
    ],
    "imageAlt": "Pale slate-grey doppelganger witness broker with a narrow face, short silver hair and a welcoming smile, wearing a plum doublet and cream scarf while holding a closed leather ledger in a stone courthouse antechamber.",
    "portraitKey": "selvik-mirrorfen",
    "portraitFit": "contain",
    "image": "images/characters/selvik-mirrorfen.webp",
    "tokenImage": "images/tokens/selvik-mirrorfen-token.webp",
    "publishedAt": "2026-11-12T22:00:00-05:00"
  }
]
```

## Independent content review

Contributor content_review30 approved both complete entries before JSON integration. Selvik’s initial attendance-record clue was replaced with matching spelling errors in retained statements and sightings at his office, removing a contradiction and distinguishing the investigation from Melva’s appointment plot. Final review passed originality against100 records, names/IDs, supported schema, categories/tags/published locations, Friendly demeanors, exactly one sinister NPC, Thursday encounter negotiation/conflict triggers and spoiler handling.

## Artwork prompts

Built-in image generation using Garran Vey style, each finalized portrait identity, Brakka frame and dragon-only logo. Each portrait received one targeted headroom correction.

### brammok

Use case: stylized-concept. Asset: original square fantasy RPG NPC portrait. Reference image1 Garran Vey supplies STYLE ONLY: expressive ink contours, selective crosshatching, rich gouache colour and graphic shadows. Do not copy its human identity, forge, sword or pose. Subject Brammok Tilehorn: adult male minotaur stone mason, broad powerful humanoid body, unmistakable bovine head with chestnut fur, wide muzzle, kind amber eyes, two complete curved ivory horns, small rounded bovine ears and a short dark curly forelock. Friendly approachable expression. Simple faded slate-blue work tunic, worn tan leather mason's apron, stone dust; holds a short wooden mason's square at lower chest level, props below face. Secondary backdrop: mountain tunnel entrance with stonework and timber braces, daylight outside, no other people. Waist-up, both shoulders fully inside frame. Entire horns, ears, forelock and head visible; highest horn tips at 22 percent of square canvas height, clear generous headroom. Sharp painted full-size ink-and-colour illustration, believable anatomy and medieval workwear, no photographic textures, no blur, no text/frame/watermark. Opaque square.

### brammokFraming

Use case: identity-preserve. Correct only framing of this Brammok Tilehorn portrait. Zoom out and add matching tunnel wall above and around sides so the highest ivory horn tip is at 20 percent of canvas height, leaving generous clear headroom. Entire both horns, ears, head, hair, shoulders and apron inside square. Keep exact friendly chestnut-furred minotaur identity, amber eyes, horns, smile, slate-blue tunic, tan apron, wooden mason's square below face, sharp ink/crosshatching/gouache style and mountain tunnel lighting. No new objects or people, no text or frame. Opaque square high-resolution artwork.

### selvik

Use case: stylized-concept. Asset: original square fantasy RPG NPC portrait. Reference image1 Garran Vey supplies STYLE ONLY: expressive ink contours, selective crosshatching, rich gouache colour and graphic shadows. Do not copy its character, forge or weapons. Subject Selvik Mirrorfen, adult doppelganger witness broker in his own recognizable form: slender humanoid, smooth pale slate-grey skin, long narrow face with high cheekbones, thin brows, close-cropped silver hair, slightly tapered ears, milky pale blue eyes with subtle pupils. Warm welcoming smile and open helpful posture; friendly initial attitude masks a malicious agenda. Wears a tidy plum-coloured medieval doublet and cream neck scarf, carries a small closed leather witness ledger at lower chest, one open hand below face. Secondary scene quiet stone courthouse antechamber with wooden benches, no other people. Waist-up, full shoulders inside frame, entire hair and ears visible. Highest hair point at 22 percent of canvas height, generous clear headroom. Sharp full-size painted ink-and-colour illustration, grounded believable clothing, no photography or skin pores, no blur, no text/frame/watermark. Opaque square.

### selvikFraming

Use case: identity-preserve. Correct only framing of this Selvik Mirrorfen illustration: zoom out slightly and add matching courthouse wall above and around sides until highest silver hair sits at 20 percent of square height with generous background above. Keep exact pale slate-grey slender doppelganger identity, narrow face, tapered ears, silver hair, pale blue eyes, friendly smile, plum doublet, cream scarf, closed leather ledger and open hand below face, sharp ink/crosshatching/gouache style and lighting. Both full shoulders and entire hair/ears inside canvas. No new objects, people, text or frame. Opaque square high-resolution painting.


## Asset and integration validation

Final portraits: 960×960 opaque RGB WebP, quality75/method6; Brammok 203,144 bytes, Selvik 148,360 bytes. Brammok exceeds the approximate size target to retain dense ink detail at the required quality. Tokens: 280×280 RGBA WebP, quality80/method6; Brammok 24,354 bytes, Selvik 21,644 bytes. Both genuinely transparent exteriors and complete circular frames pass. Full-size lossless WebP sources are under `project/npc-packs/sources/nightly-2026-11-12/<id>-portrait.webp` and `<id>-token.webp`. Full-size portraits and native/70px tokens inspected: clear heads, headroom, matching identities and readable dragon-only frames.

102 unique records; old100 exactly preserved. Published location links, ordered classifications, release dates and portrait mappings pass. Generated102 pages and deterministic check pass. Public-page, role, location-fit, Saved and token DOM checks pass. Local Chromium is absent; required PR CI supplies native375px/1440px cards, profiles, sharing, download and Session checks before merge.

### brammokToken

Use case: compositing. Circular tabletop token of Brammok Tilehorn. Image1 FINAL IDENTITY: friendly chestnut minotaur stone mason, amber eyes, curly forelock, bovine ears, broad muzzle, TWO COMPLETE curved ivory horns, slate-blue tunic and tan apron, sharp ink/gouache/crosshatching style. Image2 FRAME ONLY: approved restrained antique brass/burgundy/charcoal circular border with small diamond ornaments. Image3 BRAND ONLY: use its dragon head in a subtle small bottom medallion, NO lettering. Center head and upper chest, fit both entire horns and ears INSIDE inner circle with safe space, do not cut tips or let horns overlap frame. Keep face readable at280px. Subdued grey-blue interior background. Entire border inside square with transparent safety margin. Genuinely transparent exterior, no outside shadow/scenery. No text/nameplate/watermark. High-resolution square.

### selvikToken

Use case: compositing. Circular tabletop token of Selvik Mirrorfen. Image1 FINAL IDENTITY: friendly adult slender doppelganger, pale slate-grey skin, narrow high-cheekboned face, short silver hair, slightly tapered ears, pale blue eyes, welcoming smile, plum doublet and cream scarf, sharp ink/crosshatching/gouache style. Image2 FRAME ONLY: approved restrained antique brass/burgundy/charcoal circular border with small diamond ornaments. Image3 BRAND ONLY: use its dragon head in a subtle small bottom medallion, NO lettering. Center face and upper chest; entire hair and both ears safely inside inner circle, face readable at280px. Subdued warm grey interior backdrop. Complete circular border inside square with transparent safety margin. Genuinely transparent exterior, no outside shadow/scenery. No text/nameplate/watermark. High-resolution square.

