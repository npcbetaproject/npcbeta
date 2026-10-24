# Nightly NPCs — 2026-10-23

Independent equal-probability demeanor draws using Python secrets.choice: Hostile, Friendly.

- Dagna Slatewake — dwarf miller, Hostile: a suspicious miller needs help clearing an illegal upstream dam before her customers' grain spoils.
- Ivo Fernstep — halfling falconer, Friendly: a welcoming bird trainer's returning hawk carries a cut jess and evidence of a missing courier's route.

## Complete draft records

```json
[
  {
    "id": "dagna-slatewake",
    "name": "Dagna Slatewake",
    "ancestry": "Dwarf",
    "role": "Miller",
    "subtitle": "The wheel has stopped, but the rent has not",
    "summary": "Dagna runs a riverside grain mill with flour on her sleeves and an iron-gray braid over one shoulder. She challenges unfamiliar visitors from the doorway, convinced that another polite inquiry means someone wants her work for less.",
    "tableNote": "Plant your feet in the doorway and brush flour from a sleeve while listening. Start sharply: “If you've come to tell me water runs downhill, save your breath. Someone upstream has stopped it.” Let specific offers of work earn a grudging invitation inside.",
    "personality": "Initially hostile, suspicious and curt; she respects people who keep a bargain and refuses to pass her losses on to hungry customers.",
    "motivations": "Get the mill turning before her customers' damp grain spoils and keep her two workers paid.",
    "adventureHook": "A new timber dam upstream has diverted the millrace into an estate's private fishpond. Dagna asks the party to accompany her to the river ford, document the diversion and open the old sluice; hired guards hold the bank, and pulling the wrong timbers could flood the nearby farm.",
    "locationIds": [
      "river-ford",
      "farm"
    ],
    "locationFit": [
      "Riverside mills",
      "River crossings and farms"
    ],
    "roleCategoryIds": [
      "workers-services"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "wilderness"
    ],
    "imageAlt": "Ink and colour illustration of dwarf miller Dagna Slatewake with an iron-gray braid, flour-dusted teal tunic and rust-brown apron, holding a grain scoop in a timber watermill.",
    "publishedAt": "2026-10-23T22:00:01-04:00",
    "slug": "dagna-slatewake",
    "group": "townsfolk",
    "tags": [
      "quest-giver"
    ],
    "portraitKey": "dagna-slatewake",
    "portraitFit": "contain",
    "image": "images/characters/dagna-slatewake.webp",
    "tokenImage": "images/tokens/dagna-slatewake-token.webp"
  },
  {
    "id": "ivo-fernstep",
    "name": "Ivo Fernstep",
    "ancestry": "Halfling",
    "role": "Falconer",
    "subtitle": "A returning hawk and a missing courier",
    "summary": "Ivo trains hawks in an estate's mews and welcomes visitors with a spare glove and an invitation to watch. His chestnut curls never stay tidy, and he explains each bird's habits as readily as another person might introduce old friends.",
    "tableNote": "Offer a safe place to stand and lower your voice when a bird settles. Smile and say, “Come closer, friend—slowly. She likes a quiet introduction, same as anyone.” Ask a visitor's name, remember it and patiently demonstrate instead of scolding mistakes.",
    "personality": "Initially friendly, helpful and eager to share his craft; he notices nervousness and makes room for people to learn.",
    "motivations": "Find the missing courier and keep his hawks safe while helping the search.",
    "adventureHook": "Ivo's escaped hawk returns with a freshly cut jess and blue courier cloth tangled in its anklet. He last saw the bird circling a rock shelter off the mountain trail, where couriers shelter from rain; he asks the party to search it with him before the approaching storm washes away any tracks.",
    "locationIds": [
      "courtyard",
      "mountain-trail",
      "rock-shelter"
    ],
    "locationFit": [
      "Estate mews",
      "Upland trails"
    ],
    "roleCategoryIds": [
      "workers-services"
    ],
    "locationFitCategoryIds": [
      "castles-estates",
      "wilderness",
      "roads-travel"
    ],
    "imageAlt": "Ink and colour illustration of smiling halfling falconer Ivo Fernstep with chestnut curls and a moss-green vest, holding a small brown hawk on a leather glove beside estate mews.",
    "publishedAt": "2026-10-23T22:00:00-04:00",
    "slug": "ivo-fernstep",
    "group": "townsfolk",
    "tags": [
      "quest-giver"
    ],
    "portraitKey": "ivo-fernstep",
    "portraitFit": "contain",
    "image": "images/characters/ivo-fernstep.webp",
    "tokenImage": "images/tokens/ivo-fernstep-token.webp"
  }
]
```

## Content review

Independent contributor reviewed both drafts before indexing. Dagna approved. Ivo's motivation was corrected to reflect the hawk's return, and the search location now follows Ivo's knowledge of the courier shelter rather than the bird pointing toward it. Names, classifications, existing locations and consistent demeanors reviewed.

## Artwork plan and prompts

Built-in image generation. Garran Vey is the Ink and colour style reference. Each finalized portrait supplies its own token identity; Brakka Hearthhand supplies the frame and the site logo supplies the dragon-only emblem. Lossless sources retained in project/npc-packs/sources/nightly-npcs-2026-10-23/.

- Dagna: middle-aged sturdy brown-skinned dwarf, iron-gray braid, defensive brow, flour-dusted teal tunic and rust apron, grain scoop below face, timber watermill.
- Ivo: adult tawny-skinned halfling, chestnut curls and sideburns, welcoming smile, moss-green vest and cream shirt, falconry glove and brown hawk below face, estate mews.
- Both portraits: centered waist-up, both shoulders, full head and ears, 18–20% clear headroom, expressive ink contours, selective crosshatching and rich gouache colour, no lettering.
- Both tokens: finalized portrait identity, full head inside restrained antique brass/burgundy/charcoal circle, subtle dragon-only medallion, no text, fully transparent exterior and safety margin.

## Asset and integration validation

| NPC | Portrait | Token |
| --- | --- | --- |
| Dagna Slatewake | 960×960 RGB WebP, 203,836 bytes | 280×280 RGBA WebP, 28,800 bytes |
| Ivo Fernstep | 960×960 RGB WebP, 180,198 bytes | 280×280 RGBA WebP, 28,596 bytes |

Both final portraits were reframed through image generation to add generous clear headroom while preserving identity. Each token was generated from its finalized portrait and approved references, then exported from the lossless source into a 272px image on a transparent 280px canvas for a 4px safety margin. Portrait exports: quality 75/method 6. Tokens: quality 80/method 6. Files decode correctly; tokens have transparent corners and alpha range 0–255. Facial detail, full heads, complete borders and dragon emblems inspected at native size. Lossless PNG sources retained beside this batch's assets.

Exactly two new records. All 58 previous records remain identical. Shared portrait mappings added without storage or UI implementation changes. Both new slugs, existing category/location references, ordering, permanent pages, directory and sitemap verified.

Local checks passed: 60-page build and deterministic check; public-page DOM; token DOM; role categories; location-fit categories; Saved-filter DOM. Local Chromium installation failed due to a truncated browser download; existing PR CI native 375px/1440px browser checks must pass before merging, including full-resolution uncropped cards, profiles, token downloads and Session behavior.
