# Nightly NPCs — 2026-10-31

## Concepts

- Ylven Nettleshoe — Friendly elf shepherd: guides a nearly weightless flock to shelter before the evening wind rises.
- Korra Needlefern — Friendly orc dyer: brokers a peaceful compromise between rival households claiming the same communal festival canopy.

Saturday ordinary-profession batch. SystemRandom sampled two concepts from six original candidates, requiring different occupational domains. Each demeanor independently drawn with secrets.choice from Friendly/Indifferent/Hostile, one instance each; both draws happened to be Friendly. Current main's 74 entries and recent hooks inspected for name/ID/profession duplication and repetitive plots. Current standards and Tessa Brinewick / PR #82 read.

## Draft records for contributor review

```json
[
  {
    "id": "ylven-nettleshoe",
    "slug": "ylven-nettleshoe",
    "name": "Ylven Nettleshoe",
    "ancestry": "Elf",
    "role": "Shepherd",
    "group": "townsfolk",
    "subtitle": "Keep a gentle hold on the tether",
    "summary": "Ylven tends a small flock between meadow and woodland, recognizing each sheep by its voice. He welcomes travelers with a quiet smile and a place beside the fold, explaining his work as though they have all afternoon to learn.",
    "tableNote": "Speak softly, offer a simple task and praise careful hands before giving advice. Say, “Take this tether, friend. Let her choose her footing; we can be patient.” Even when hurried, he names the next useful step instead of scolding a frightened animal or helper.",
    "personality": "Initially friendly, patient and quietly encouraging; observant about animals and ready to admit when an unfamiliar problem needs another pair of hands.",
    "motivations": "Keep his flock safe, learn which meadow plants caused the strange change and repay neighbors who lend practical help.",
    "adventureHook": "After grazing pale puffballs, six of Ylven's sheep become light enough to drift above the grass whenever a gust passes. He has tethered them safely in a hollow, but stronger evening winds are approaching. He asks the party to help guide the buoyant flock to an old stonefold beneath a rock shelter, keeping the tethers clear of branches, then bring a sample of the puffballs to the village apothecary before the rest of the flock returns to that meadow tomorrow.",
    "locationIds": [
      "farm",
      "forest-clearing",
      "rock-shelter"
    ],
    "locationFit": [
      "Sheepfolds",
      "Woodland meadows",
      "Sheltered grazing camps"
    ],
    "roleCategoryIds": [
      "workers-services"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "wilderness"
    ],
    "tags": [
      "quest-giver"
    ],
    "imageAlt": "Friendly dark-skinned elf shepherd Ylven Nettleshoe with long black hair in a low braid and pointed ears wearing a moss-green tunic and ochre cape, holding a wooden crook and raw wool beside a stone sheepfold.",
    "portraitKey": "ylven-nettleshoe",
    "portraitFit": "contain",
    "image": "images/characters/ylven-nettleshoe.webp",
    "tokenImage": "images/tokens/ylven-nettleshoe-token.webp",
    "publishedAt": "2026-10-31T22:00:01-04:00"
  },
  {
    "id": "korra-needlefern",
    "slug": "korra-needlefern",
    "name": "Korra Needlefern",
    "ancestry": "Orc",
    "role": "Dyer",
    "group": "townsfolk",
    "subtitle": "Enough shade for both processions",
    "summary": "Korra dyes cloth for households and public celebrations, greeting customers with an armful of samples and an enthusiastic account of every shade. She remembers people's favorite colors and is quick to offer a practical kindness while talking through the job.",
    "tableNote": "Spread cloth samples across the table, greet visitors by name once introduced and interrupt yourself to offer them a seat. Say, “Come closer! That blue looks different in the shade. Tell me what we are celebrating.” Her cheerful chatter becomes focused diplomacy when customers begin arguing.",
    "personality": "Initially friendly, helpful and overly talkative; proud of her craft, quick to laugh at her own mistakes and determined that a celebration should not leave neighbors humiliated.",
    "motivations": "Keep the communal canopy intact, honor the work stitched into it by earlier dyers and help both households enjoy their festival without a public quarrel.",
    "adventureHook": "Two rival households claim the same communal canopy for processions starting at opposite ends of the market at noon. The steward proposes cutting it in two, which would split its old central picture panel. Korra asks the party to borrow a spare frame and plain canopy cloth from the traveling carnival, then persuade the household representatives to accept a shared schedule or the loan while she repairs the communal cloth's worn ties.",
    "locationIds": [
      "dyers-yard",
      "market-square",
      "traveling-carnival"
    ],
    "locationFit": [
      "Dye yards",
      "Markets",
      "Festival grounds"
    ],
    "roleCategoryIds": [
      "merchants-crafters"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "roads-travel"
    ],
    "tags": [
      "merchant",
      "quest-giver"
    ],
    "imageAlt": "Friendly olive-grey orc dyer Korra Needlefern with small lower tusks, short black curls and an ochre kerchief wearing a burgundy tunic and indigo apron, holding fabric swatches with violet-stained hands in a dye yard.",
    "portraitKey": "korra-needlefern",
    "portraitFit": "contain",
    "image": "images/characters/korra-needlefern.webp",
    "tokenImage": "images/tokens/korra-needlefern-token.webp",
    "publishedAt": "2026-10-31T22:00:00-04:00"
  }
]
```

## Contributor review

Independent contributor reviewed both Markdown drafts before JSON integration and approved without required corrections. Checked all 74 prior entries for original names, IDs, professions and hooks. Supported fields, tags, role/location categories, published location references, actionable deadlines and distinct portrayals of Friendly demeanor all passed.

## Artwork prompts

Built-in image generation uses Garran Vey's expressive ink contours, crosshatching, rich gouache and graphic shadows. Ylven: friendly dark-brown elf man with long black low braid, pointed ears, green wool tunic, ochre cape, wooden crook and raw wool at a meadow stone sheepfold. Korra: friendly olive-grey orc woman with small tusks, black curls/ochre kerchief, burgundy tunic, indigo apron, violet-stained hands and dyed fabric swatches in a dye yard. Square waist-up framing, complete heads/hair/ears/shoulders, adjusted to generous headroom. Tokens derive from final portraits using Brakka's brass/burgundy/charcoal circle and small site dragon-only bottom medallion with transparent exterior. Full-resolution lossless WebP sources retained with batch.

## Export verification

Opaque 960×960 portraits quality 75/method 6; transparent 280×280 tokens quality 80/method 6 with 6px exterior safety margin. All decode as WebP; alpha range and transparent corners/edge midpoints verified. Full-resolution lossless WebP sources retained.

- docs/images/characters/ylven-nettleshoe.webp: 176726 bytes, RGB.
- docs/images/tokens/ylven-nettleshoe-token.webp: 29928 bytes, RGBA.
- docs/images/characters/korra-needlefern.webp: 185078 bytes, RGB.
- docs/images/tokens/korra-needlefern-token.webp: 28448 bytes, RGBA.
