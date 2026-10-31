# Nightly NPCs — 2026-10-30

## Concepts

- Fennick Bramblegate — Friendly halfling schoolmaster: helps an animated stone porter make its wishes heard before its owner resets its memory rune.
- Pellin Waxford — Indifferent gnome instrument tuner: returns a spider egg sac accidentally packed with harp strings before an evening recital.

Friday ordinary-profession batch. SystemRandom sampled two concepts from six candidates, requiring different occupational domains for variety. Each demeanor independently drawn with secrets.choice from Friendly/Indifferent/Hostile, one instance each. Current main's 72 entries and hooks inspected for name/ID/profession duplicates and repetitive plots. Current standards and Tessa Brinewick / PR #82 read.

## Draft records for contributor review

```json
[
  {
    "id": "fennick-bramblegate",
    "slug": "fennick-bramblegate",
    "name": "Fennick Bramblegate",
    "ancestry": "Halfling",
    "role": "Schoolmaster",
    "group": "townsfolk",
    "subtitle": "A pupil with a name of its own",
    "summary": "Fennick teaches letters and numbers to children by day and working adults by lamplight, welcoming anyone willing to try. He turns introductions into gentle word games and keeps a spare slate for visitors who claim they cannot learn.",
    "tableNote": "Offer the nearest bench, learn each visitor's name and find something encouraging to say about their first attempt. Say, “You already know the sound. Now let us give it a shape.” His easy warmth becomes patient determination when someone dismisses a pupil before hearing them.",
    "personality": "Initially friendly, warmly curious and eager to help; generous with time, but persistent when a confident authority mistakes uncertainty for inability.",
    "motivations": "Keep lessons open to everyone, help a new pupil express its wishes and show that learning deserves patient examination.",
    "adventureHook": "An animated stone porter from the quarry attends Fennick's evening lessons and writes a name it has chosen for itself. Its owner calls the new questions a malfunction and orders its memory rune ground smooth at dawn. Fennick asks the party to carry the porter's written request to the reeve, obtain a pause in the work and bring an independent rune carver to hear the pupil before the stonecutter arrives.",
    "locationIds": [
      "academy-library",
      "mine-quarry",
      "watchhouse"
    ],
    "locationFit": [
      "Schoolrooms",
      "Quarry camps",
      "Town offices"
    ],
    "roleCategoryIds": [
      "scholars-magic"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "dungeons-ruins"
    ],
    "tags": [
      "quest-giver"
    ],
    "imageAlt": "Friendly brown-skinned halfling schoolmaster Fennick Bramblegate with greying chestnut curls and neat sidewhiskers wearing an indigo jacket and ochre waistcoat, holding a chalk slate in a modest schoolroom.",
    "portraitKey": "fennick-bramblegate",
    "portraitFit": "contain",
    "image": "images/characters/fennick-bramblegate.webp",
    "tokenImage": "images/tokens/fennick-bramblegate-token.webp",
    "publishedAt": "2026-10-30T22:00:01-04:00"
  },
  {
    "id": "pellin-waxford",
    "slug": "pellin-waxford",
    "name": "Pellin Waxford",
    "ancestry": "Gnome",
    "role": "Instrument tuner",
    "group": "townsfolk",
    "subtitle": "Unwanted company in the string parcel",
    "summary": "Pellin adjusts lutes and harps for working musicians, keeping appointments by the careful rhythm of her tapping foot. Absorbed in a difficult tuning, she acknowledges visitors with a brief nod and finishes the note before asking what they need.",
    "tableNote": "Listen to a plucked string until its sound fades, make one small adjustment and ask a precise question without looking up. Say, “Set that down without touching the strings. Which instrument, and by when?” Useful details get her attention; a long introduction earns another patient pluck.",
    "personality": "Initially indifferent, absorbed and strictly practical; quietly considerate of nervous performers and reluctant to damage a living thing for convenience.",
    "motivations": "Get her customers ready for their performances, replace a troublesome delivery and return an accidentally transported brood safely.",
    "adventureHook": "Fist-sized forest spiders converge on an egg sac caught in the packing around Pellin's new harp strings, following the parcel whenever it moves. She keeps it wrapped and asks the party to return the sac to the silk-gatherer's marked nesting tree, then bring ordinary gut strings from the market before tonight's recital. The parcel's wax tag sketches a forked willow by the lakeshore; the sac must stay intact if the guarding spiders are to settle.",
    "locationIds": [
      "general-store",
      "market-square",
      "forest-clearing",
      "lakeshore"
    ],
    "locationFit": [
      "Instrument workshops",
      "Markets",
      "Forest nesting sites",
      "Lakeside paths"
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
    "imageAlt": "Olive-brown gnome instrument tuner Pellin Waxford with short silver hair and small pointed ears wearing a plum coat and green apron, examining a wooden lute in an instrument workshop.",
    "portraitKey": "pellin-waxford",
    "portraitFit": "contain",
    "image": "images/characters/pellin-waxford.webp",
    "tokenImage": "images/tokens/pellin-waxford-token.webp",
    "publishedAt": "2026-10-30T22:00:00-04:00"
  }
]
```

## Contributor review

Independent contributor reviewed both Markdown drafts before JSON integration and approved without required corrections. All 72 prior entries checked for original names, IDs, professions and hooks. Supported fields, tags, category membership, published locations, actionable logic, deadlines and consistent initial demeanors/dialogue passed.

## Artwork prompts

Built-in image generation uses Garran Vey's ink contours, crosshatching, rich gouache colour and graphic shadows. Fennick: friendly brown-skinned middle-aged halfling man with greying chestnut curls, neat sidewhiskers/moustache, indigo jacket, ochre waistcoat and blank chalk slate in schoolroom. Pellin: indifferent olive-brown gnome woman with short silver hair, small pointed ears, plum coat, moss apron and wooden lute in instrument workshop. Square waist-up composition, complete heads/ears/shoulders, framing adjusted to generous headroom. Tokens derive from finalized portraits using Brakka's brass/burgundy/charcoal circle and subtle site dragon-only bottom medallion, with transparent exterior and intact heads. Full-resolution lossless WebP sources retained with batch.

## Export verification

Opaque 960×960 portraits quality 75/method 6; transparent 280×280 tokens quality 80/method 6 with a 6px transparent safety margin. All decode as WebP; alpha range and transparent corners/edge midpoints verified. Full-resolution lossless WebP sources retained.

- docs/images/characters/fennick-bramblegate.webp: 161524 bytes, RGB.
- docs/images/tokens/fennick-bramblegate-token.webp: 27500 bytes, RGBA.
- docs/images/characters/pellin-waxford.webp: 169388 bytes, RGB.
- docs/images/tokens/pellin-waxford-token.webp: 27780 bytes, RGBA.
