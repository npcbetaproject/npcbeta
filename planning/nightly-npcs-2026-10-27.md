# Nightly NPCs — 2026-10-27

## Concepts

- Nimra Tallowreed — Indifferent gnome bookbinder: a missing payment folio could wrongly evict a family; needs witnesses and recovered papers before the hearing.
- Marden Copperskein — Friendly human bell founder: a stone-filled bronze shipment threatens replacement of a flood-warning bell before rain reaches the valley.

Tuesday batch: ordinary professions. Two concepts chosen using SystemRandom.sample from six distinct profession/ancestry concepts. Demeanors independently selected using secrets.choice from Friendly, Indifferent and Hostile, one instance each. Current main's 66 records inspected; no name, ID, profession or hook duplicates. Current standards and Tessa Brinewick / PR #82 used as integration references.

## Contributor review

Independent contributor approved Marden and requested two corrections for Nimra before JSON integration: the clerk alleges no payment record (rather than a blank folio); her motivation is exposing alteration (rather than correcting her own binding error). Both corrections applied and contributor confirmed approval. IDs, fields, tags, categories, published locations, demeanor and actionable hook logic reviewed.

## Reviewed records

```json
[
  {
    "id": "nimra-tallowreed",
    "slug": "nimra-tallowreed",
    "name": "Nimra Tallowreed",
    "ancestry": "Gnome",
    "role": "Bookbinder",
    "group": "townsfolk",
    "subtitle": "A page out of place",
    "summary": "Nimra binds ledgers and repairs worn books in a narrow shop smelling of paste and linen. Absorbed in a stubborn spine, she acknowledges visitors with a raised finger and finishes the stitch before hearing their business.",
    "tableNote": "Keep your eyes on the binding, count stitches under your breath, and ask visitors to clear a dry patch of bench. Say, “One moment. Is this a repair, a purchase, or something that cannot wait?” Specific facts earn her attention; dramatic introductions do not.",
    "personality": "Initially indifferent, precise and quietly wry; she revises an opinion readily when shown sound evidence.",
    "motivations": "Expose the ledger's alteration before it harms someone, keep her workshop solvent and protect customers' private records.",
    "adventureHook": "An estate clerk returns a rent ledger Nimra repaired, claiming it contains no record of a tenant family's payment. Nimra recognizes that the numbered pages jump across the binding: the payment folio was removed after delivery. She asks the party to witness the gap, recover yesterday's discarded papers from the estate storeroom and bring the evidence to the steward before tomorrow's eviction hearing.",
    "locationIds": [
      "general-store",
      "academy-library",
      "storeroom"
    ],
    "locationFit": [
      "Bookbinding shops",
      "Libraries",
      "Estate storerooms"
    ],
    "roleCategoryIds": [
      "merchants-crafters"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "castles-estates"
    ],
    "tags": [
      "merchant",
      "quest-giver"
    ],
    "imageAlt": "Gnome bookbinder Nimra Tallowreed with brown skin, greying dark curls, brass spectacles, russet dress and green apron holding a linen-bound ledger and bone folder in her workshop.",
    "portraitKey": "nimra-tallowreed",
    "portraitFit": "contain",
    "image": "images/characters/nimra-tallowreed.webp",
    "tokenImage": "images/tokens/nimra-tallowreed-token.webp",
    "publishedAt": "2026-10-27T22:00:01-04:00"
  },
  {
    "id": "marden-copperskein",
    "slug": "marden-copperskein",
    "name": "Marden Copperskein",
    "ancestry": "Human",
    "role": "Bell founder",
    "group": "townsfolk",
    "subtitle": "Bronze before the river rises",
    "summary": "Marden casts bells for chapels, farms and riverside settlements, greeting every visitor as a welcome extra pair of hands. He talks through each task with cheerful patience and offers a seat even while his foundry is busy.",
    "tableNote": "Greet strangers by name as soon as you hear it, offer water, and demonstrate a point by tapping a little bronze test bell. Say, “Come in, friend. Have you a good ear, a strong back, or news from the river?” His warmth becomes focused urgency when the warning bell is mentioned.",
    "personality": "Initially friendly, talkative and encouraging; quick to trust a practical offer of help and careful never to promise work he cannot finish.",
    "motivations": "Restore the flood warning before heavy rain reaches the valley, pay his crew and recover the bronze bought with the village's pooled savings.",
    "adventureHook": "The village's cracked flood-warning bell must be recast before the forecast rains, but Marden opens the paid-for bronze shipment and finds crates packed with stone. He asks the party to follow the carrier's tally marks to a warehouse by the ferry and recover the metal while his crew prepares the mould; a matching seal on a crate awaiting an upstream barge gives them a lead before morning departure.",
    "locationIds": [
      "blacksmiths-forge",
      "docks-ferry-landing",
      "storeroom"
    ],
    "locationFit": [
      "Foundries",
      "Riverside docks",
      "Warehouses"
    ],
    "roleCategoryIds": [
      "merchants-crafters"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "waterfront"
    ],
    "tags": [
      "merchant",
      "quest-giver"
    ],
    "imageAlt": "Friendly human bell founder Marden Copperskein with deep brown skin, a close-cropped silver beard, ochre shirt and charcoal leather apron holding a small bronze test bell in a medieval foundry.",
    "portraitKey": "marden-copperskein",
    "portraitFit": "contain",
    "image": "images/characters/marden-copperskein.webp",
    "tokenImage": "images/tokens/marden-copperskein-token.webp",
    "publishedAt": "2026-10-27T22:00:00-04:00"
  }
]
```

## Artwork

Built-in image generation. Portraits reference Garran Vey for expressive ink contours, crosshatching, gouache colours and graphic shadows. Nimra: brown-skinned gnome woman with greying dark curls, brass spectacles, russet dress and green apron, ledger and bone folder in a bookbinding shop; indifferent professional expression. Marden: deep brown-skinned bald older human man with short silver beard, ochre shirt, charcoal apron and bronze test bell in a bell foundry; welcoming expression. Square waist-up composition, intact heads and shoulders with generous headroom, no text or photographic textures. Tokens derive from final portraits with Brakka brass/burgundy/charcoal border, subtle dragon-only logo medallion, complete heads and transparent exterior. Lossless full-resolution sources retained with this batch.


## Export verification

Opaque portraits: 960×960 WebP, quality 75/method 6. Tokens: 280×280 WebP quality 80/method 6, alpha exterior with 6px safety margin. All decoded successfully; transparent corners/edge midpoints verified. Lossless original-resolution WebP sources retained.

- docs/images/characters/nimra-tallowreed.webp: 173716 bytes, RGB.
- docs/images/tokens/nimra-tallowreed-token.webp: 27760 bytes, RGBA.
- docs/images/characters/marden-copperskein.webp: 173478 bytes, RGB.
- docs/images/tokens/marden-copperskein-token.webp: 26160 bytes, RGBA.
