# Nightly NPCs — November 18, 2026

Wednesday America/Toronto; area: Temples and Shrines. Fresh main `b8dc640879852f00d98473dd13eea53c9f6b9b5b`. Exact date branch/PR checks found no existing work; current112 records contain no November18 entries. Publication explicitly authorized.

## Selected concepts

- Beldo Quietreed — Indifferent halfling shrine organist; Temples and Shrines: recognizes a warning hidden in a disused organ’s notes before a crowded service. Varied honest NPC.
- Gravven Hollowmoss — Indifferent dwarf shrine quarry agent, sinister; Temples and Shrines: sells consecrated foundation stones and fabricates an omen to force the shrine’s abandonment.

Concepts selected randomly from separate six-option pools using secrets.choice. Each demeanor independently drawn with equal probability from Friendly, Indifferent and Hostile; both yielded Indifferent. Initial attitude is independent of morality. Wednesday retains varied-plus-sinister composition; the Monday/Tuesday/Thursday developed-villain and Thursday monster rules do not apply. Gravven nevertheless has a concrete scheme, resources, evidentiary weakness and intervention paths.

## Draft for independent content review

GM spoilers: magical cistern alarm, stolen consecrated stones and fabricated omen. The organ warning is explicitly enchanted, not a real acoustic diagnostic. All involved staff and visitors are adults. No instructions for damaging foundations or repairing unsafe structures; intervention includes keeping people away and independent inspection. Review before public JSON integration.

```json
[
  {
    "id": "beldo-quietreed",
    "slug": "beldo-quietreed",
    "name": "Beldo Quietreed",
    "ancestry": "Halfling",
    "role": "Shrine organist",
    "group": "townsfolk",
    "subtitle": "Four notes before the doors open",
    "summary": "Beldo prepares music for a hillside shrine and answers interruptions without looking up from his score. While restoring its disused organ to service, he recognizes four unwanted notes as an old warning from the shrine’s enchanted waterworks.",
    "tableNote": "Keep a finger on the score, count a beat before answering and ask visitors to wait until the phrase ends. Say, “If you need a procession tune, leave the order there. If you can hear those four notes, stop the door steward.” His indifference becomes focused urgency when someone can help.",
    "personality": "Initially indifferent, distracted by rehearsal and sparing with conversation; methodical, dependable and willing to postpone a performance rather than put listeners at risk.",
    "motivations": "Reopen the organ for public use, preserve the previous organist’s practical annotations and keep the shrine’s guests safe without turning a solvable problem into panic.",
    "adventureHook": "An old score labels the repeated four-note phrase “cistern overflow”; the organ’s enchantment was designed to carry warnings through the shrine. A crowded service begins within the hour, but nobody has inspected the cistern chamber since the organ fell silent. Beldo asks the party to alert the stewards and help keep visitors outside while the caretaker checks the waterworks. They can locate the caretaker’s missing inspection ledger, arrange a service in the courtyard or find safe access for an inspection. Beldo offers music and introductions for a future gathering in return, and accepts moving the service rather than rushing a repair.",
    "locationIds": [
      "chapel",
      "cistern-chamber",
      "courtyard"
    ],
    "locationFit": [
      "Hillside shrines",
      "Chapel organ lofts",
      "Shrine waterworks"
    ],
    "roleCategoryIds": [
      "hospitality-entertainment",
      "faith-healing"
    ],
    "locationFitCategoryIds": [
      "settlements"
    ],
    "tags": [
      "quest-giver"
    ],
    "imageAlt": "Distracted middle-aged halfling shrine organist with warm beige skin, swept-back sandy-gray curls and round ears, wearing a moss-green coat and cream scarf while holding a rolled score beside wooden organ pipes in a stone chapel.",
    "portraitKey": "beldo-quietreed",
    "portraitFit": "contain",
    "image": "images/characters/beldo-quietreed.webp",
    "tokenImage": "images/tokens/beldo-quietreed-token.webp",
    "publishedAt": "2026-11-18T22:00:01-05:00"
  },
  {
    "id": "gravven-hollowmoss",
    "slug": "gravven-hollowmoss",
    "name": "Gravven Hollowmoss",
    "ancestry": "Dwarf",
    "role": "Shrine quarry agent",
    "group": "townsfolk",
    "subtitle": "An omen priced by the cartload",
    "summary": "Gravven arranges stone deliveries and repairs for a remote shrine with brisk, transactional efficiency. He secretly sells its consecrated foundation stones to collectors and circulates a fabricated omen so the caretakers will abandon the site before an inventory exposes him.",
    "tableNote": "Check the delivery tally, ask which invoice a visitor means and quote transport costs before discussing the shrine. Say, “Stone, distance and number of carts. Prophecies are the caretakers’ business.” He treats the invented omen as someone else’s problem.",
    "personality": "Initially indifferent, professional and impatient with unpriced requests; calculating about other people’s beliefs and willing to endanger a cherished building to conceal his theft.",
    "motivations": "Keep the proceeds from his illicit sales and secure the last collector’s payment before the shrine’s inventory. His authority over deliveries and a hired carter conceal the removals, but the collector’s receipts identify the stones and contradict his account.",
    "adventureHook": "A shrine caretaker asks the party why empty repair crates leave heavier than they arrive. GM secret: Gravven has sold stones marked in the shrine’s old dedication register and spread a false prediction that the site must be deserted before the next moonrise. A buyer is due at the roadside campsite tomorrow. The party can compare the register with the buyer’s receipt, persuade the carter to hold the shipment or bring the caretakers evidence before they leave. Gravven offers the buyer’s identity in exchange for concealing his part. Recovering the stones and arranging an independent safety inspection protects the shrine; exposing the lie lets the caretakers decide its future without coercion.",
    "locationIds": [
      "chapel",
      "storeroom",
      "roadside-campsite"
    ],
    "locationFit": [
      "Remote shrine compounds",
      "Shrine delivery yards",
      "Stone shipment camps"
    ],
    "roleCategoryIds": [
      "merchants-crafters",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "roads-travel",
      "wilderness"
    ],
    "tags": [
      "antagonist",
      "merchant"
    ],
    "imageAlt": "Businesslike ruddy-skinned dwarf shrine quarry agent with a broad nose, short braided black beard and receding black hair, wearing a slate-blue wool coat and brown leather shoulder cape while holding a delivery tally beside stone crates in a shrine courtyard.",
    "portraitKey": "gravven-hollowmoss",
    "portraitFit": "contain",
    "image": "images/characters/gravven-hollowmoss.webp",
    "tokenImage": "images/tokens/gravven-hollowmoss-token.webp",
    "publishedAt": "2026-11-18T22:00:00-05:00"
  }
]
```

## Independent content review

Contributor content_review30 approved before index integration: distinct actionable hooks against112 existing entries, consistent Indifferent demeanor/dialogue, one honest and one sinister NPC, meaningful Temples and Shrines setting, supported fields/classifications/tags/published references, matching Markdown/JSON and spoiler handling. No required corrections.

## Artwork prompts

Built-in image generation, one call per asset. Initial portraits passed identity, framing and painted ink/gouache style inspection; no variants or corrections required. Tokens derive from those finalized portraits plus approved Brakka frame and dragon-only logo references.

```json
{
  "portraits": [
    {
      "id": "beldo-quietreed",
      "prompt": "Use case: stylized-concept. Asset: one standalone square NPC Beta portrait. Reference Garran Vey is MEDIUM/INK STYLE ONLY, not identity or smithy. Painted Ink and colour fantasy RPG illustration, expressive ink contours, selective crosshatching, rich gouache colour and clear graphic shadow shapes, believable anatomy. Sharp high-resolution opaque square painting. Centered waist-up, full shoulders and whole head/hair/ears inside frame, highest head point 20% down from top with generous background above, face upper-middle, props below face. No tight closeup, cut off head, photographic pores or camera textures, text, frame, watermark or other characters. Beldo Quietreed, middle-aged male halfling shrine organist, warm beige skin, swept-back sandy-gray curls, small round ears, clean-shaven round face, distracted indifferent expression. Moss-green wool coat, cream scarf, brown waistcoat. Holding rolled parchment musical score with no legible writing below chest, other hand resting on wooden organ console. Stone chapel organ loft, wooden pipes and softly lit arched window behind, subdued amber and moss-green colors. Compact sturdy halfling proportions, grounded professional musician, no halo or modern objects."
    },
    {
      "id": "gravven-hollowmoss",
      "prompt": "Use case: stylized-concept. Asset: one standalone square NPC Beta portrait. Reference Garran Vey is MEDIUM/INK STYLE ONLY, not identity or smithy. Painted Ink and colour fantasy RPG illustration, expressive ink contours, selective crosshatching, rich gouache colour and clear graphic shadow shapes, believable anatomy. Sharp high-resolution opaque square painting. Centered waist-up, full shoulders and whole head/hair/ears inside frame, highest head point 20% down from top with generous background above, face upper-middle, props below face. No tight closeup, cut off head, photographic pores or camera textures, text, frame, watermark or other characters. Gravven Hollowmoss, middle-aged male dwarf shrine quarry agent, ruddy weathered skin, broad nose, short braided black beard, receding black hair, businesslike indifferent expression. Slate-blue wool coat and brown leather shoulder cape fastened simply. Holds a wooden delivery tally and folded invoice below chest. Remote stone shrine courtyard, transport crates with rough stone blocks and stone arch softly behind, cool daylight with muted blue-brown palette. Broad sturdy dwarf proportions. Subtle calculating professional, no sinister grin, no glowing eyes, no modern objects or legible writing."
    }
  ],
  "tokens": [
    {
      "id": "beldo-quietreed",
      "prompt": "Use case: compositing. Create ONE circular virtual tabletop token of Beldo Quietreed using reference1 finalized portrait: preserve this warm-beige-skinned male halfling, sandy-gray swept-back curls, round ears, clean-shaven round face, distracted indifferent expression, moss-green coat, brown waistcoat and cream scarf, painted Ink and colour fantasy style. Reference2 Brakka is FRAME/LAYOUT ONLY: restrained antique brass, burgundy and charcoal circular frame, small diamonds. Reference3 logo supplies ONLY tiny subtle dragon-head emblem in bottom border medallion, no lettering or nameplate. Center full head and upper chest; entire hair/ears inside circle with breathing room, full border inside square with transparent safety margin. Subdued organ loft background only INSIDE circle. Genuinely transparent exterior, no outside background/shadow. Sharp face readable at280 and70px. No text/extra people. High-resolution square token artwork."
    },
    {
      "id": "gravven-hollowmoss",
      "prompt": "Use case: compositing. Create ONE circular virtual tabletop token of Gravven Hollowmoss using reference1 finalized portrait: preserve this ruddy-skinned broad dwarf, receding black hair, braided black beard, indifferent businesslike expression, slate-blue coat and brown leather shoulder cape, painted Ink and colour fantasy style. Reference2 Brakka is FRAME/LAYOUT ONLY: restrained antique brass, burgundy and charcoal circular frame, small diamonds. Reference3 logo supplies ONLY tiny subtle dragon-head emblem in bottom border medallion, no lettering or nameplate. Center full head and upper chest; entire hair/ears/beard inside circle with breathing room, full border inside square with transparent safety margin. Subdued shrine courtyard only INSIDE circle. Genuinely transparent exterior, no outside background/shadow. Sharp face readable at280 and70px. No text/extra people. High-resolution square token artwork."
    }
  ]
}
```

## Final assets and validation

| NPC | Portrait bytes | Token bytes | Lossless portrait source bytes | Lossless token source bytes |
| --- | ---: | ---: | ---: | ---: |
| Beldo Quietreed | 176352 | 26426 | 2323890 | 1793580 |
| Gravven Hollowmoss | 191324 | 27030 | 2401914 | 1922066 |

Final portraits at `docs/images/characters/<npc-id>.webp`: exact960×960 opaque RGB WebP, quality75/method6. Final tokens at `docs/images/tokens/<npc-id>-token.webp`: exact280×280 RGBA WebP, quality80/method6. Four full1254×1254 VP8L lossless sources retained under `project/npc-packs/sources/nightly-2026-11-18/<npc-id>-portrait.webp` and `<npc-id>-token.webp`. Final portraits/tokens and70px token previews visually inspected: matching identities and painted ink/gouache style, sharp faces, whole heads/hair/ears/beard, generous headroom, complete approved circular frame and small dragon-only emblem. Alpha0–255, transparent corners and edge midpoints, transparent safety margin. Exports come from full-resolution generated PNGs, never enlarged thumbnails. Gravven’s dense artwork is slightly above the approximate portrait byte target; requested quality and exact dimensions retained.

114 unique stable records; all old112 exactly equal and ordered, all old NPC pages match main hashes. Valid published links and nonempty classification arrays. Deterministic newest order Beldo then Gravven. Exactly15 changed files: two profiles, directory/sitemap, data/mappings, four final assets, four sources and batch note. Existing shared popup preserves Download token below introduction beside Copy link/View full page, matching Library/Saved/Session portrait mapping. No shared UI/storage migration or unrelated changes.

Passed locally: build and --check; public-page DOM (server metadata, sharing, focus/scroll/state preservation, stable slugs, Session safety/cross-tab behavior); role/location-fit/Saved-filter DOM suites (combined filters, recent sort, storage preservation); token DOM (download/preview/action placement/reset/Session); mapping JS syntax; record/ref/mapping and image/source validation. Native Chromium unavailable locally. Existing PR CI375px/1440px native browser checks must pass before merge, covering full-size uncropped cards/profiles, sharing/Session/overflow and all token downloads’ bytes/filenames. Production deployment and actual live10-endpoint verification follow merge; outcomes recorded in PR.
