# Nightly NPCs — November 16, 2026

Monday America/Toronto; area: Taverns and Taprooms. Fresh main `48f33927be6a5d8ade8e3bc0558550b8c06c9e91`. Exact date branch and PR queries found no existing work; current 108 entries contain no November 16 records. Publication explicitly authorized.

## Selected concepts

- Elaris Oakrhyme — Friendly elf itinerant poet; Taverns and Taprooms: two quarreling witnesses hold the ending to a song pointing to a mountain cache. Varied honest NPC.
- Tobren Sablecork — Indifferent halfling cellar landlord, sinister villain; Taverns and Taprooms: holds a water spirit captive to flood rival cellars and force a rental monopoly.

Concepts selected from separate six-option pools using Python secrets.choice; independent equal-probability demeanor draws from Friendly, Indifferent and Hostile yielded Friendly and Indifferent. Monday requires a developed villain, not Thursday monsters. Tobren’s goal is a storage monopoly, motivation is fear of renewed dispossession, scheme is selective flooding and coerced leases, resources are collectors/contracts/drain knowledge, and weakness is receipts proving his own release promise is overdue. Hooks offer warnings, evidence, negotiation, testimony and freeing the spirit.

## Draft for independent content review

GM spoilers: travelers’ cache purpose, captive spirit, extortion scheme, paid debt and release promise. All drovers are adults. Supernatural flooding has no real-world implementation instructions. Review before public index integration.

```json
[
  {
    "id": "elaris-oakrhyme",
    "slug": "elaris-oakrhyme",
    "name": "Elaris Oakrhyme",
    "ancestry": "Elf",
    "role": "Itinerant poet",
    "group": "townsfolk",
    "subtitle": "A final verse between two tables",
    "summary": "Elaris trades songs for supper in mountain-road taverns, eagerly inviting strangers to join the chorus. Two retired drovers remember different endings to a song that may describe a lost travelers’ cache, and she wants both accounts heard before anyone sets out.",
    "tableNote": "Pull out a chair, offer to share the bread and ask visitors which songs they grew up with. Say, “Sit here! I have three verses, two splendidly stubborn witnesses and room for another opinion.” Let her listen enthusiastically rather than perform over someone else’s answer.",
    "personality": "Initially friendly, welcoming and delightfully talkative; curious about ordinary people’s memories and careful to give each singer credit.",
    "motivations": "Preserve the song with its singers’ names, discover what the missing verse actually describes and keep the search from becoming a contest over who deserves to be remembered.",
    "adventureHook": "Elaris gathers the party at a taproom’s long table with two adult drovers: one recalls a stone arch, the other a fallen bell. Each refuses to sing beside the other after an old quarrel over an unpaid room. Elaris offers introductions along the mountain road if the party can hear both versions, settle the room debt or arrange separate performances, then compare the landmarks before searching. The cache contains travelers’ emergency provisions; Elaris argues for recording and replenishing it rather than carrying everything away.",
    "locationIds": [
      "tavern",
      "inn",
      "mountain-trail"
    ],
    "locationFit": [
      "Mountain-road taprooms",
      "Wayside inns",
      "Mountain song landmarks"
    ],
    "roleCategoryIds": [
      "hospitality-entertainment"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "roads-travel",
      "wilderness"
    ],
    "tags": [
      "quest-giver",
      "wanderer"
    ],
    "imageAlt": "Welcoming brown-skinned elf poet with long silver-black hair tied back, prominent pointed ears and an ochre traveling coat, holding a small song notebook at a rustic taproom table.",
    "portraitKey": "elaris-oakrhyme",
    "portraitFit": "contain",
    "image": "images/characters/elaris-oakrhyme.webp",
    "tokenImage": "images/tokens/elaris-oakrhyme-token.webp",
    "publishedAt": "2026-11-16T22:00:01-05:00"
  },
  {
    "id": "tobren-sablecork",
    "slug": "tobren-sablecork",
    "name": "Tobren Sablecork",
    "ancestry": "Halfling",
    "role": "Cellar landlord",
    "group": "townsfolk",
    "subtitle": "The rent rises with the water",
    "summary": "Tobren manages rented taproom cellars with a bored, professional manner. Secretly holding a water spirit beneath his oldest tavern, he threatens rival tenants with selective flooding to force the district’s drink storage into his hands.",
    "tableNote": "Finish adding a column before acknowledging visitors; ask for the property address and discuss every interruption as a maintenance charge. Say, “Cellar number, lease term, payment date. If this is a complaint about damp, put it in writing.” His initial indifference hides deliberate extortion.",
    "personality": "Initially indifferent, strictly transactional and absorbed in paperwork; patient with profitable arrangements, contemptuous of losses he can pass to others and fiercely proud of keeping his literal promises.",
    "motivations": "Build a cellar monopoly so no creditor can dispossess him as his family once was. His leases, hired collectors and knowledge of connected drains give him leverage, but his insistence that his contracts are fair makes a public accounting dangerously persuasive.",
    "adventureHook": "A taproom tenant hires the party after clear water rises around only the barrels of tenants who rejected Tobren’s exclusive lease. A collector’s rent book lists the next target, while a voice beneath Tobren’s oldest tavern offers testimony. GM secret: Tobren promised to release the captive spirit when his original cellar debt was paid; his own stamped receipts prove it was settled last winter. Before the next collection night, the party can warn tenants and move their stock, obtain the receipts and demand release before witnesses, or persuade a collector to bring the rent book to the watch. Tobren may bargain to preserve his remaining leases, but freeing the spirit removes his threat and exposes the scheme.",
    "locationIds": [
      "tavern",
      "inn",
      "storeroom",
      "cistern-chamber"
    ],
    "locationFit": [
      "Rented taproom cellars",
      "Tavern offices",
      "Connected cellar drains"
    ],
    "roleCategoryIds": [
      "merchants-crafters",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "settlements"
    ],
    "tags": [
      "antagonist",
      "merchant"
    ],
    "imageAlt": "Uninterested stout halfling cellar landlord with light olive skin, neatly combed chestnut hair and short side whiskers, wearing a dark teal waistcoat and carrying a rent ledger and brass keys in a tavern cellar office.",
    "portraitKey": "tobren-sablecork",
    "portraitFit": "contain",
    "image": "images/characters/tobren-sablecork.webp",
    "tokenImage": "images/tokens/tobren-sablecork-token.webp",
    "publishedAt": "2026-11-16T22:00:00-05:00"
  }
]
```

## Independent review

Independent contributor content_review30 approved before index integration: originality against 108 existing entries, supported fields/classifications/links, concise playable content, demeanor/dialogue, Monday tavern setting, exactly one honest NPC and one developed sinister villain, and spoiler handling. No corrections required.

## Artwork prompts

Built-in image generation, one asset per call. Both initial portraits needed one targeted zoom-out to preserve whole heads and add generous headroom. Final sources retain identity and original ink/gouache style.

```json
{
  "portraits": [
    {
      "id": "elaris-oakrhyme",
      "prompt": "Use case: stylized-concept. Asset: one standalone square NPC Beta portrait, full-resolution painted Ink and colour fantasy RPG illustration. Reference image is Garran Vey for MEDIUM/INK STYLE ONLY: expressive ink contours, selective crosshatching, rich gouache colour, clear graphic shadow shapes, believable anatomy; do not copy his identity, smithy, sword or clothing. Composition: centered WAIST-UP, both full shoulders, whole head/hair/ears fully visible; highest hair point starts 20% down from the canvas top, substantial background above and beside head, face upper-middle, props below face. Sharp full-size artwork, opaque square background, no text, border, watermark, other characters, photographic skin pores or camera textures. Subject: Elaris Oakrhyme, adult female elf itinerant poet, warm brown skin, long silver-black hair tied back with a simple cord, long clearly pointed ears, open smiling friendly expression. Ochre wool traveling coat over forest-green tunic, small song notebook held below chest. Seated upright at a rustic mountain-road taproom table, an empty wooden chair nearby implied but no people; soft shelves, beams and amber hearthlight behind. Welcoming, grounded and expressive."
    },
    {
      "id": "tobren-sablecork",
      "prompt": "Use case: stylized-concept. Asset: one standalone square NPC Beta portrait, full-resolution painted Ink and colour fantasy RPG illustration. Reference image is Garran Vey for MEDIUM/INK STYLE ONLY: expressive ink contours, selective crosshatching, rich gouache colour, clear graphic shadow shapes, believable anatomy; do not copy his identity, smithy, sword or clothing. Composition: centered WAIST-UP, both full shoulders, whole head/hair/ears fully visible; highest hair point starts 20% down from the canvas top, substantial background above and beside head, face upper-middle, props below face. Sharp full-size artwork, opaque square background, no text, border, watermark, other characters, photographic skin pores or camera textures. Subject: Tobren Sablecork, middle-aged male halfling cellar landlord, stout compact build, light olive skin, neatly combed chestnut hair, short side whiskers, no beard, round ears and small rounded nose. Indifferent bored professional expression, eyes briefly looking up from rent ledger. Dark teal wool waistcoat, cream shirt, burgundy neckcloth, brass key ring hanging from belt, ledger held below chest. Grounded medieval tavern cellar office, casks and shelves softly behind, muted cool teal shadows and warm lamplight. A discreet calculating businessman, no overt evil grin or magical effects."
    }
  ],
  "reframes": [
    {
      "id": "elaris-oakrhyme",
      "prompt": "Use case: identity-preserve. Edit the supplied Elaris Oakrhyme fantasy illustration ONLY to widen the framing: pull back so her complete head, tied silver-black hair, pointed ears, both shoulders and notebook fit comfortably with 20–25% of the square canvas occupied by background ABOVE the highest hair point. Keep precisely the same brown-skinned friendly female elf, facial identity, smiling expression, ochre coat, green tunic, notebook, Ink and colour painting style and taproom setting. Extend surrounding beams and wall naturally; no border, inset, text, photographic texture or extra characters. Opaque square full-size sharp painting."
    },
    {
      "id": "tobren-sablecork",
      "prompt": "Use case: identity-preserve. Edit supplied Tobren Sablecork illustration only to widen framing: pull back to show complete head, hair, round ears, both full shoulders, ledger and keys with 20–25% background above highest hair point. Preserve exactly this stout middle-aged olive-skinned halfling landlord, chestnut combed hair and side whiskers, indifferent professional expression, teal waistcoat, cream shirt, burgundy neckcloth, rent ledger, brass keys and painted Ink and colour style. Extend the same tavern cellar office naturally around him. Sharp opaque square painting, no border, text, watermark or other people; no photographic textures."
    }
  ]
}
```

### Final token prompts

```json
[
  {
    "id": "elaris-oakrhyme",
    "prompt": "Use case: compositing. Create ONE circular virtual tabletop token of Elaris Oakrhyme from reference1 FINAL portrait, preserve her recognizable brown-skinned friendly elf identity, silver-black tied hair, complete long pointed ears, ochre coat and green tunic and Ink and colour painted style. Reference2 Brakka token is FRAME AND LAYOUT ONLY: restrained antique brass, burgundy and charcoal circular border with small diamonds. Reference3 logo supplies only its dragon head for a tiny subtle bottom border medallion, no lettering or nameplate. Center full head and upper chest, whole hair and both ears INSIDE circle with breathing room. Subdued taproom interior inside circle. Entire complete border within square with a small transparent safety margin. GENUINELY TRANSPARENT exterior, no background outside circle and no exterior shadow. Sharp facial detail readable at280px and70px. No text, no extra people. High-resolution square token artwork."
  },
  {
    "id": "tobren-sablecork",
    "prompt": "Use case: compositing. Create ONE circular virtual tabletop token of Tobren Sablecork from reference1 FINAL portrait, preserve this stout middle-aged light olive-skinned halfling landlord, combed chestnut hair and short side whiskers, round ears, indifferent bored expression, teal waistcoat and burgundy neckcloth and Ink and colour painted style. Reference2 Brakka token is FRAME AND LAYOUT ONLY: restrained antique brass, burgundy and charcoal circular border with small diamonds. Reference3 logo supplies only its dragon head for a tiny subtle bottom border medallion; no lettering or nameplate. Center full head and upper chest, whole hair and both round ears INSIDE circle with breathing room. Subdued cellar interior inside circle. Entire complete border within square with a small transparent safety margin. GENUINELY TRANSPARENT exterior, no background outside circle and no exterior shadow. Sharp facial detail readable at280px and70px. No text, no extra people. High-resolution square token artwork."
  }
]
```

## Final assets and validation

| NPC | Portrait bytes | Token bytes | Lossless portrait source bytes | Lossless token source bytes |
| --- | ---: | ---: | ---: | ---: |
| Elaris Oakrhyme | 206236 | 26702 | 2425876 | 1822100 |
| Tobren Sablecork | 188592 | 24634 | 2385582 | 1819996 |

Final portraits: `docs/images/characters/elaris-oakrhyme.webp` and `docs/images/characters/tobren-sablecork.webp`, opaque RGB 960×960 WebP quality75/method6. Final tokens: `docs/images/tokens/elaris-oakrhyme-token.webp` and `docs/images/tokens/tobren-sablecork-token.webp`, RGBA 280×280 WebP quality80/method6. Both decode with alpha range0–255, transparent corners and edge midpoints, complete circular frame and dragon-only emblem. Full-size final portraits and tokens and 70px token previews visually inspected: sharp facial detail, whole heads/ears, generous portrait headroom and complete borders. Approximate portrait size target exceeded for detailed ink artwork; quality and dimensions retained.

Four full-resolution 1254×1254 VP8L lossless WebP sources are retained at `project/npc-packs/sources/nightly-2026-11-16/<npc-id>-portrait.webp` and `<npc-id>-token.webp`. Tokens derive from the settled portraits; all exports come from generated high-resolution PNGs, never enlarged thumbnails. Small transparent safety margin added during token export.

110 unique stable records; the old108 remain exactly equal and in original order. Only two new permanent profiles, directory, sitemap, mappings and asset/source/note files change. Published location IDs and classifications validated. Deterministic release order puts Elaris then Tobren first. Existing shared popup keeps Download token with Copy link/View full page below introduction; main portraits use the same contain mapping in Library/Saved/Session. No browser storage migration or shared implementation changes.

Passed locally: page build and --check, public page DOM suite (metadata, sharing, state/focus/scroll preservation, stable slugs, session deduplication and cross-tab updates), role category, location-fit category, Saved filter and token DOM suites, portrait mapping JS syntax, record/reference/mapping and image/source validation. All old generated NPC pages match main hashes. Local Chromium executable unavailable; existing PR CI native Chromium desktop1440/mobile375 checks must pass before merge, covering full-size uncropped cards, profiles, direct refresh, sharing, Session, overflow and every token’s downloaded bytes/name at both widths. Production deployment and actual live JSON/profile/asset responses must be verified after merge; results recorded in the PR.
