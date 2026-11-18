# Nightly NPCs — November 17, 2026

Tuesday America/Toronto; area: Open-Air Marketplaces. Fresh main `8930d6bb2f54a46f647dbcaee603bc326e62f2a8`. Date branch/PR checks found no existing work; current110 records contain no November17 entries. Publication explicitly authorized.

## Selected concepts

- Vessa Linenrook — Indifferent halfling awning maker; Open-Air Marketplaces: needs helpers to clear customers, unload a trapped delivery cart and protect market stock before a storm repair. Varied honest NPC.
- Ulren Threadwake — Indifferent elf banner painter, sinister villain; Open-Air Marketplaces: hides a sleeping curse in festival banners to abduct a witness who can expose his stolen inheritance.

Concepts chosen randomly from separate six-option pools using secrets.choice. Each demeanor independently drawn with equal probability from Friendly, Indifferent and Hostile; both yielded Indifferent. The professions share a market craft setting but differ in work, identity, methods and morality. Tuesday requires a developed villain; Thursday monster rule does not apply. Ulren’s goal is retaining stolen inheritance and winning a festival commission; motivation is recognition after unpaid work; scheme is magical sleep and abduction; resources are hired attendants, hanging access and borrowed enchanted pigment; weakness is the pigment owner’s limited permission and receipt, plus interruptible central banner.

## Draft for independent content review

GM spoilers: inheritance theft, supernatural sleeping curse and planned abduction. All witnesses, attendants and the cart driver are adults. The effect is explicitly magical and supplies no real sedative or abduction instructions. Review before public JSON integration.

```json
[
  {
    "id": "vessa-linenrook",
    "slug": "vessa-linenrook",
    "name": "Vessa Linenrook",
    "ancestry": "Halfling",
    "role": "Awning maker",
    "group": "townsfolk",
    "subtitle": "A safe way out from under canvas",
    "summary": "Vessa repairs and rents canvas awnings in an open-air market, treating interruptions as jobs to be priced and scheduled. A shifted canopy pole has trapped a delivery cart beneath sagging canvas, and she needs the market cleared before she can make a safe repair.",
    "tableNote": "Keep measuring while visitors speak, ask who will pay and give a practical answer without pleasantries. Say, “Two signatures, clear tables and someone to hold the ladder. Then I can start.” She is busy and indifferent, not contemptuous.",
    "personality": "Initially indifferent, task-focused and economical with words; patient with useful assistance and firm about stopping work when bystanders are in danger.",
    "motivations": "Finish a sound repair before the storm, protect the stallholders’ livelihoods and persuade the market stewards to keep delivery lanes clear.",
    "adventureHook": "Before afternoon rain, Vessa needs helpers to move customers away from a sagging market canopy and clear access to a delivery cart trapped beneath it. The adult driver refuses to abandon several fragile crates, while neighboring sellers worry about rain spoiling their stock. Vessa directs the repair once the area is clear. The party can organize an orderly unloading, find temporary covers or persuade the stewards to open a sheltered storage room. She offers a repair to the party’s travel gear in return and insists that nobody crawl beneath the damaged canopy.",
    "locationIds": [
      "market-square",
      "storeroom"
    ],
    "locationFit": [
      "Open-air market stalls",
      "Canvas repair booths"
    ],
    "roleCategoryIds": [
      "merchants-crafters"
    ],
    "locationFitCategoryIds": [
      "settlements"
    ],
    "tags": [
      "merchant",
      "quest-giver"
    ],
    "imageAlt": "Busy dark-brown-skinned halfling awning maker with a short iron-gray braid, wearing a rust-colored work coat and blue apron while holding folded canvas and a wooden measuring rule beneath a market canopy.",
    "portraitKey": "vessa-linenrook",
    "portraitFit": "contain",
    "image": "images/characters/vessa-linenrook.webp",
    "tokenImage": "images/tokens/vessa-linenrook-token.webp",
    "publishedAt": "2026-11-17T22:00:01-05:00"
  },
  {
    "id": "ulren-threadwake",
    "slug": "ulren-threadwake",
    "name": "Ulren Threadwake",
    "ancestry": "Elf",
    "role": "Banner painter",
    "group": "townsfolk",
    "subtitle": "A quiet audience for a stolen name",
    "summary": "Ulren paints festival banners in a riverside open-air market and discusses commissions with detached professionalism. He secretly plans to put the market’s audience to sleep so his hired attendants can abduct the adult witness who knows he stole his late patron’s inheritance.",
    "tableNote": "Inspect a pigment sample, ask for dimensions and pause only to record a delivery address. Say, “Size, colors and the day you need it. Approval is due before I hang anything.” His indifference makes an illicit commission sound like ordinary work.",
    "personality": "Initially indifferent, composed and strictly transactional; hungry for recognition as an independent artist, yet willing to strip others of their freedom to protect a reputation built on theft.",
    "motivations": "Keep the inherited workshop and secure a prestigious festival commission before the witness’s public testimony. Years of unpaid work for his patron explain his grievance without excusing the theft or abduction. Paid attendants, access to the hanging crew and a borrowed enchanted pigment enable his scheme; his dependence on the pigment’s owner leaves evidence he cannot control.",
    "adventureHook": "An adult market attendant asks the party why Ulren has ordered a covered cart for one passenger after the banner unveiling. GM secret: the sleeping curse needs the enchanted central banner on display; removing or covering it prevents the spell, and ordinary paint has no such effect. A loan receipt identifies the pigment’s owner, who insists it was lent only for a private demonstration and will demand its return if told the plan. Before the unveiling, the party can warn and protect the witness, stop the banner being displayed, recover the receipt or persuade an attendant to testify. Ulren offers the stolen inheritance records to keep his workshop, but the witness must remain free to speak.",
    "locationIds": [
      "market-square",
      "dyers-yard",
      "storeroom"
    ],
    "locationFit": [
      "Open-air festival markets",
      "Banner painting booths",
      "Festival supply rooms"
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
    "imageAlt": "Detached pale copper-skinned elf banner painter with straight black hair tied low and long pointed ears, wearing a plum painting smock and holding a brush and rolled ochre banner at an outdoor market workbench.",
    "portraitKey": "ulren-threadwake",
    "portraitFit": "contain",
    "image": "images/characters/ulren-threadwake.webp",
    "tokenImage": "images/tokens/ulren-threadwake-token.webp",
    "publishedAt": "2026-11-17T22:00:00-05:00"
  }
]
```

## Independent content review

Contributor content_review30 reviewed before index integration. Ulren approved immediately. Vessa’s initial two-stallholder feud repeated Korra Needlefern’s canopy dispute; refined the same awning maker/storm repair concept to a distinct cart unloading, customer clearance and temporary shelter problem. Final revised draft approved: originality against110 existing records, supported fields/classifications/links/tags, both Indifferent demeanors, Tuesday marketplace area and fully developed sinister villain. No further corrections.

## Artwork prompts

Built-in image generation, one call per asset. Both initial portraits passed identity, style and framing inspection; no variants or corrections required. Tokens derive from these finalized portraits plus approved Brakka frame and dragon-only logo references.

```json
{
  "portraits": [
    {
      "id": "vessa-linenrook",
      "prompt": "Use case: stylized-concept. One standalone square NPC Beta portrait. Reference image Garran Vey is INK STYLE ONLY, not identity or smithy. Painted fantasy RPG illustration with expressive ink contours, selective crosshatching, rich gouache colour, graphic shadow shapes and believable anatomy. Opaque sharp high-resolution square painting. Centered WAIST-UP full shoulders and entire head/hair/ears inside canvas; highest head point starts 20% down from top, generous plain background above head, face upper-middle, props below face. No tight closeup, cropped heads, photographic textures/skin pores, text, border, watermark or other people. Vessa Linenrook, middle-aged female halfling awning maker with dark brown skin, short iron-gray braid, small rounded ears, practical uninterested focused expression. Rust-colored work coat and indigo-blue apron. Holding folded cream canvas and wooden measuring rule below chest. Outdoor market canvas repair booth under a faded blue canopy, wooden workbench, soft distant empty awnings and cloudy daylight. Compact sturdy halfling proportions. Grounded working craftsperson, not smiling or threatening."
    },
    {
      "id": "ulren-threadwake",
      "prompt": "Use case: stylized-concept. One standalone square NPC Beta portrait. Reference image Garran Vey is INK STYLE ONLY, not identity or smithy. Painted fantasy RPG illustration with expressive ink contours, selective crosshatching, rich gouache colour, graphic shadow shapes and believable anatomy. Opaque sharp high-resolution square painting. Centered WAIST-UP full shoulders and entire head/hair/ears inside canvas; highest head point starts 20% down from top, generous plain background above head, face upper-middle, props below face. No tight closeup, cropped heads, photographic textures/skin pores, text, border, watermark or other people. Ulren Threadwake, adult male elf banner painter, pale copper skin, straight black hair tied in a low tail, prominent long pointed ears, narrow clean-shaven face, indifferent reserved professional expression. Plum painting smock with ochre paint marks over gray linen shirt. Holds a fine paintbrush below face and rolled ochre canvas banner in other hand. Outdoor riverside market workbench, softly receding festival awnings, pigment bowls and rolled fabric. Cool morning light with rich plum and ochre tones. No overt villain symbols or menacing grin, no visible lettering on cloth."
    }
  ],
  "tokens": [
    {
      "id": "vessa-linenrook",
      "prompt": "Use case: compositing. Create one circular virtual tabletop token of Vessa Linenrook from reference1 finalized portrait: preserve this dark-brown-skinned sturdy middle-aged halfling woman, iron-gray braid, small rounded ears, focused indifferent expression, rust work coat and indigo apron, and painted Ink and colour fantasy style. Reference2 Brakka supplies circular FRAME ONLY: restrained antique brass/burgundy/charcoal border with small diamonds. Reference3 logo supplies ONLY tiny dragon head in subtle bottom medallion, no lettering/nameplate. Head and upper chest centered, whole hair and ears inside circle, complete border inside square with transparent safety margin. Subdued market canopy backdrop only INSIDE circle. Genuinely transparent exterior, no exterior shadow. Sharp face readable280px and70px, no text, no extra people. High-resolution square."
    },
    {
      "id": "ulren-threadwake",
      "prompt": "Use case: compositing. Create one circular virtual tabletop token of Ulren Threadwake from reference1 finalized portrait: preserve this pale copper-skinned clean-shaven adult male elf, straight black low-tied hair, whole pointed ears, detached indifferent expression, plum painting smock over gray shirt and Ink and colour painted style. Reference2 Brakka supplies circular FRAME ONLY: restrained antique brass/burgundy/charcoal border with small diamonds. Reference3 logo supplies ONLY tiny dragon head in subtle bottom medallion, no lettering/nameplate. Head and upper chest centered, whole hair and ears inside circle with breathing room, complete border inside square with transparent safety margin. Subdued riverside market backdrop only INSIDE circle. Genuinely transparent exterior, no exterior shadow. Sharp face readable280px and70px, no text, no extra people. High-resolution square."
    }
  ]
}
```

## Final assets and validation

| NPC | Portrait bytes | Token bytes | Lossless portrait source bytes | Lossless token source bytes |
| --- | ---: | ---: | ---: | ---: |
| Vessa Linenrook | 171104 | 27136 | 2313538 | 1803216 |
| Ulren Threadwake | 130968 | 25924 | 2146670 | 1815150 |

Final portraits at `docs/images/characters/<npc-id>.webp`: exact960×960 opaque RGB WebP, quality75/method6. Final tokens at `docs/images/tokens/<npc-id>-token.webp`: exact280×280 RGBA WebP, quality80/method6. Full-resolution1254×1254 VP8L lossless sources retained under `project/npc-packs/sources/nightly-2026-11-17/<npc-id>-portrait.webp` and `<npc-id>-token.webp`. Full-size portraits/tokens and70px tokens visually inspected: matching identities/style, sharp faces, whole heads/ears, generous portrait headroom, complete brass/burgundy/charcoal frame and subtle dragon-only emblem. Token alpha0–255 with transparent corners and edge midpoints, small transparent safety margin. Exported from generated high-resolution PNGs; no enlarged thumbnails.

112 unique stable records with all old110 exactly equal and ordered. Valid published location IDs and nonempty classification arrays; deterministic release order Vessa then Ulren. Only two new profiles plus directory/sitemap/mappings/data/assets/sources/note change; all old NPC pages match main hashes. Shared popup already places Download token beneath introduction alongside Copy link/View full page and uses matching Library/Saved/Session portraits. No shared UI/storage changes.

Passed locally: build and --check, public-page DOM suite (metadata/sharing, focus/scroll/state preservation, stable slugs and cross-tab Session), role/location-fit/Saved-filter DOM suites (combined filters, recent sort and storage preservation), token DOM suite (preview/download placement/reset/Session), mapping JS syntax and record/ref/mapping/image/source validation. Local native Chromium unavailable; existing PR CI375px/1440px checks must pass before merge, including uncropped full-size cards/profiles, sharing/Session/overflow and all token downloads’ actual bytes/filenames. Production deployment and live10-endpoint verification follow merge; results will be recorded in PR.
