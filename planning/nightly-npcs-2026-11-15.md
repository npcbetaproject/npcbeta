# Nightly NPCs — November 15, 2026

Sunday America/Toronto. Fresh main `397f4c70a553430ed46426d81dde338280de243f`. Exact date branch and PR queries found no existing work; current106 entries contain no November15 records. Publication is explicitly authorized.

## Selected concepts

- Nivven Leafpress — Hostile gnome herbarium keeper: needs an overdue living specimen returned before its once-in-seven-years flowering. Varied honest keeper; hostile demeanor is protective impatience.
- Tavrith Emberquill — Indifferent gnome fireworks maker, sinister: plans a warehouse fire during a festival to destroy evidence of stolen grain.

Concepts selected randomly from two separate six-option pools using Python secrets.choice. Each demeanor independently drawn with equal probability from Friendly, Indifferent and Hostile: Hostile and Indifferent. Sunday does not trigger Thursday’s monster requirement. Shared ancestry does not imply shared morality; professions, appearance, motives and initial attitudes differ.

## Draft for independent content review

GM spoilers: rare flowering deadline, overdue specimen recovery, grain theft and planned arson. The porter is an adult. The arson hook provides no ignition method, fireworks recipe or technical instructions; intervention prioritizes people and evidence. Review before JSON integration.

```json
[
  {
    "id": "nivven-leafpress",
    "slug": "nivven-leafpress",
    "name": "Nivven Leafpress",
    "ancestry": "Gnome",
    "role": "Herbarium keeper",
    "group": "townsfolk",
    "subtitle": "Seven years for one evening’s bloom",
    "summary": "Nivven tends living specimens and pressed plant collections, greeting interruptions with a suspicious glare. An overdue loan is about to flower for the first time in seven years, and he refuses to let careless handling spoil the herbarium’s only chance to record it.",
    "tableNote": "Look at a visitor’s muddy cuffs before their face, move fragile pots out of reach and demand a concrete plan. Say, “If you’ve come to tell me plants grow back, leave. If you can return one intact, explain how.” His hostility is protective impatience, not cruelty.",
    "personality": "Initially hostile, sharp-tongued and distrustful of casual promises; meticulous about records and quietly willing to credit anyone who treats living things carefully.",
    "motivations": "Keep the rare specimen alive, document its brief flowering and make future borrowers respect the collection’s loan agreements.",
    "adventureHook": "A household borrowed Nivven’s potted dusk lily for a courtyard display, but its roots have grown through the pot into a pool’s removable grate. The blossom will open at sunset and fade before morning. Nivven offers access to his plant records for help returning it intact. The party can negotiate with the pool keeper to lower the water and lift pot and grate together, arrange careful transport, or convince Nivven to bring his recording materials and observe the bloom on site. He accepts a sound alternative once it protects both the plant and the record.",
    "locationIds": [
      "academy-library",
      "courtyard",
      "private-residence"
    ],
    "locationFit": [
      "Herbarium workrooms",
      "Household plant displays"
    ],
    "roleCategoryIds": [
      "scholars-magic"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "castles-estates"
    ],
    "tags": [
      "quest-giver"
    ],
    "imageAlt": "Stern dark-brown-skinned gnome herbarium keeper with a bald crown, silver hair fringe and chin beard, wearing wire spectacles and a moss-green robe while holding a terracotta plant pot in a collection workroom.",
    "portraitKey": "nivven-leafpress",
    "portraitFit": "contain",
    "image": "images/characters/nivven-leafpress.webp",
    "tokenImage": "images/tokens/nivven-leafpress-token.webp",
    "publishedAt": "2026-11-15T22:00:01-05:00"
  },
  {
    "id": "tavrith-emberquill",
    "slug": "tavrith-emberquill",
    "name": "Tavrith Emberquill",
    "ancestry": "Gnome",
    "role": "Fireworks maker",
    "group": "townsfolk",
    "subtitle": "A bright display to hide a dark account",
    "summary": "Tavrith supplies festival displays with a bored, strictly transactional manner. She secretly helps a grain thief and plans to burn a warehouse during the celebration, destroying the storage records that expose their theft.",
    "tableNote": "Check the sample case clasp, answer questions without looking up and quote a fee before discussing changes. Say, “Date, budget and where the audience stands. I don’t need the story behind the celebration.” Her indifference conceals calculation rather than open aggression.",
    "personality": "Initially indifferent, busy and sparing with words; ruthlessly practical about concealing her complicity and willing to endanger neighbors to protect her share.",
    "motivations": "Erase the grain trail before the warehouse audit, keep her illicit payment and retain a respectable trade after the theft is forgotten.",
    "adventureHook": "An adult warehouse porter asks the party why Tavrith has paid for the building to be empty during the festival even though no display is booked there. A canceled delivery note and the warehouse tally book connect her patron to grain that never reached the public stores. Before the celebration, the party can secure those records, warn the watch and move spectators away, or persuade the porter to testify and force a public inventory. Tavrith offers to identify the buyer if the party helps recover her stolen share, but the immediate priority is stopping the planned fire and keeping the grain and witnesses safe.",
    "locationIds": [
      "granary",
      "storeroom",
      "market-square",
      "watchhouse"
    ],
    "locationFit": [
      "Display workshops",
      "Festival squares",
      "Grain warehouses"
    ],
    "roleCategoryIds": [
      "merchants-crafters",
      "hospitality-entertainment",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "settlements"
    ],
    "tags": [
      "antagonist",
      "merchant"
    ],
    "imageAlt": "Tawny-skinned gnome fireworks maker with an auburn braid and a neutral sidelong expression, wearing a plum jacket, charcoal apron and brass goggles at her neck while holding a closed sample case in a workshop.",
    "portraitKey": "tavrith-emberquill",
    "portraitFit": "contain",
    "image": "images/characters/tavrith-emberquill.webp",
    "tokenImage": "images/tokens/tavrith-emberquill-token.webp",
    "publishedAt": "2026-11-15T22:00:00-05:00"
  }
]
```

## Independent content review

Contributor content_review30 approved both complete drafts before JSON integration. Nivven’s recovery includes a sound on-site alternative; Tavrith’s post-theft evidence destruction differs from Caldra’s resource monopoly and Nivra’s raid sabotage. Final review passed originality against106 records, names/IDs, supported fields, classifications/tags/published locations, Hostile/Indifferent consistency, actionable choices, exactly one sinister NPC and spoiler handling. Markdown and JSON match; no required corrections.

## Artwork prompts

Built-in image generation with Garran Vey style reference; finalized portraits, Brakka frame and dragon-only logo for tokens. Tavrith received one targeted headroom correction.

### nivven

Use case: stylized-concept. Original square permanent fantasy NPC portrait. Image1 Garran Vey STYLE ONLY: expressive ink contours, selective crosshatching, rich gouache colour, graphic shadows; do not copy identity/forge/weapons. Nivven Leafpress: older adult male gnome herbarium keeper, dark brown skin, bald crown with a short silver hair fringe, long narrow pointed ears, round wire spectacles, square face, short neat silver chin beard. Hostile initial attitude: furrowed brows, suspicious glare and tight disapproving mouth, not violent. Moss-green medieval keeper's robe over a beige shirt, leather belt pouch; carefully holds a small terracotta pot with a living curled-leaf plant and one closed pale bud below face. Secondary herbarium workroom with pressed-leaf cabinets and plants, no readable labels/otherpeople. Waist-up, both full shoulders, entire bald head/hair fringe/ears visible. Highest head at22 percent square height, generous clear background above. Sharp full-size painted ink-and-colour illustration, no photography/skinpores/blur/text/frame/watermark. Opaque square.

### tavrith

Use case: stylized-concept. Original square permanent fantasy NPC portrait. Image1 Garran Vey STYLE ONLY: expressive ink contours, selective crosshatching, rich gouache colour, graphic shadows; do not copy identity/forge/weapons. Tavrith Emberquill: adult female gnome fireworks maker, light tawny skin, broad round face, small pointed ears, hazel eyes, thick auburn hair in a single short braid draped over shoulder, plain brass work goggles resting at neck (not on head). Indifferent bored professional expression, looking slightly away, closed neutral mouth, no evil grin. Muted plum work jacket, ochre shirt, charcoal leather apron; holds a CLOSED wooden sample case with a star-shaped brass clasp at lower chest below face. No lit fireworks, flames or technical diagrams. Secondary medieval workshop with storage drawers, rolls of plain colored paper and simple tools, no legible writing/otherpeople. Waist-up, both full shoulders inside frame; entire hair/head/ears visible, highest hair at22 percent square height with generous headroom. Sharp full-size painted ink-and-colour illustration, no photography/skinpores/blur/text/frame/watermark. Opaque square.

### tavrithFraming

Use case: identity-preserve. Correct only framing of this Tavrith Emberquill illustration: zoom out slightly and add matching workshop background above/around sides until highest auburn hair sits at20 percent square height, generous headroom. Keep exact adult tawny-skinned female gnome identity, round face, small pointed ears, auburn braid, indifferent sidelong expression, plum jacket/ochre shirt/charcoal apron, brass goggles at neck, closed wooden sample case with star clasp below face, sharp ink/crosshatching/gouache style and lighting. Both full shoulders and entire hair/ears inside canvas. No new objects/people/text/frame. Opaque square full-size painting.

### nivvenToken

Use case: compositing. Circular tabletop token of Nivven Leafpress. Image1 FINAL IDENTITY: older dark-brown-skinned male gnome herbarium keeper, bald crown/silver fringe, pointed ears, wire spectacles, short silver chin beard, suspicious stern glare, moss-green robe/beige collar, sharp ink/crosshatching/gouache style. Image2 FRAME ONLY: approved restrained antique brass/burgundy/charcoal circular border with small diamond ornaments. Image3 BRAND ONLY: use dragon head only in subtle small bottom medallion, no lettering. Center head/upperchest, entire baldhead/hairfringe/bothears inside innercircle with safe space, readable at280px. Subdued olive-brown interior backdrop. Entire circular frame inside square with transparent safety margin. Genuinely transparent exterior, no exterior shadow/scenery. No text/nameplate/watermark. High-resolution square.

### tavrithToken

Use case: compositing. Circular tabletop token of Tavrith Emberquill. Image1 FINAL IDENTITY: adult tawny-skinned female gnome fireworks maker, broad round face, hazel eyes, small pointed ears, auburn braid, indifferent bored sidelong expression, muted plum jacket/ochre shirt/charcoal apron and brass goggles at neck, sharp ink/crosshatching/gouache style. Image2 FRAME ONLY: approved restrained antique brass/burgundy/charcoal circular frame with small diamond ornaments. Image3 BRAND ONLY: dragon head only in subtle small bottom medallion, no lettering. Center head and upper chest, entire hair/ears inside innercircle, keep braid visible within circle where possible, readable at280px. Subdued plum-brown interior backdrop. Complete circular border inside square with transparent safety margin. Genuinely transparent exterior, no exterior shadow/scenery. No text/nameplate/watermark. High-resolution square.


## Asset and integration validation

Portraits960×960 opaque RGB WebP q75/m6: Nivven199102 bytes, Tavrith197524 bytes. Both exceed the approximate size target to retain dense ink detail at required quality. Tokens280×280 RGBA WebP q80/m6: Nivven24500 bytes, Tavrith24618 bytes. Both genuinely transparent exteriors and complete restrained brass/burgundy frames with subtle dragon-only emblems. Full-size lossless1254×1254 WebP sources retained at `project/npc-packs/sources/nightly-2026-11-15/<id>-portrait.webp` and `<id>-token.webp`. Full-size portraits and native/70px tokens inspected for identity, full heads/headroom, sharp detail and readable faces.

108 unique records; all106 older records exact. References, published locations, classifications, release order, mappings and image dimensions/decoding/alpha pass. Generated108 pages and deterministic check pass. Public-page, role, location-fit, Saved and token DOM suites plus mapping syntax pass. Local Chromium unavailable; required native375px/1440px PR CI must pass before merge, including uncropped cards/profiles, actual downloads, sharing and Session.
