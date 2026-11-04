# November 3 NPC batch

Tuesday, 2026-11-03, Toronto. Exactly one varied NPC and one explicitly sinister NPC; ordinary-profession day. User authorized merge and publication. Current main standards, schema, 82-record inventory and Tessa Brinewick / PR #82 inspected. No existing date batch found.

Random selection used Python secrets.choice separately on six eligible varied concepts and six sinister concepts. Varied pool: Dorna Limebrace (dwarf plasterer), Ulva Rushsole (orc basket weaver), Edda Appleturn (gnome cider presser), Morla Fennstitch (halfling saddler), Joren Thistlepole (human road mender), Ilvara Rookquill (elf town herald). Sinister pool: Vesper Rillwake (human matchmaker), Caldra Wispwick (elf perfumer), Gorrin Vellcap (dwarf almoner), Nolvik Furrowhand (halfling land agent), Sarra Bonebutton (goblin relic seller), Urvak Cinderlace (orc mercenary quartermaster). Demeanors used independent equal-probability draws from Friendly, Indifferent, Hostile: Edda Friendly; Sarra Hostile. No rerolls.

- Edda Appleturn — Friendly gnome cider presser; saves heirloom apple cuttings from a storm-split tree before frost.
- Sarra Bonebutton — Hostile goblin relic seller, sinister; plans to release a captive shade into the market and sell wards at panic prices.

GM spoilers / sensitive themes: Sarra deliberately plans supernatural violence against bystanders and deals in stolen grave goods. Her malice is a personal agenda independent of ancestry and initial attitude. Edda is an honest artisan; the steward's requested deposit is negotiable ordinary business, not another sinister character.

## Complete drafts

```json
[
  {
    "id": "edda-appleturn",
    "slug": "edda-appleturn",
    "name": "Edda Appleturn",
    "ancestry": "Gnome",
    "role": "Cider presser",
    "group": "townsfolk",
    "subtitle": "One tree, another harvest",
    "summary": "Edda presses cider in a small orchard shed, greeting visitors with a cup and a cheerful account of the day's apples. She eagerly finds newcomers a useful job and remembers anyone who handles her old press with care.",
    "tableNote": "Offer a seat, explain one small task and praise a careful attempt before correcting it. Say, “Come in, friend. Taste this batch, then tell me which job your hands would like.” Her chatter slows when she speaks about the old trees, but she still welcomes practical advice.",
    "personality": "Initially friendly, generous and talkative; proud of patient craft and quick to trust someone who treats living things gently.",
    "motivations": "Keep the village supplied with good cider, pass her knowledge to willing learners and preserve an old apple variety that her neighbors cannot replace by buying new trees.",
    "adventureHook": "A storm splits the last tree of Edda's treasured cider-apple variety, leaving its healthy shoots high in unstable branches. She asks the party to help the orchard gardener salvage cuttings and carry them to a sheltered estate courtyard before the night's hard frost. The estate's cold frames stand empty, but its steward wants a repair deposit before granting access; Edda offers the party coin and next harvest's first barrel if they can arrange shelter and transport without losing the shoots.",
    "locationIds": [
      "farm",
      "courtyard"
    ],
    "locationFit": [
      "Orchard farms",
      "Estate courtyards"
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
    "imageAlt": "Freckled older gnome cider presser with grey-streaked auburn braids, russet waistcoat and green apron holding an apple and wooden cup beside an orchard press.",
    "portraitKey": "edda-appleturn",
    "portraitFit": "contain",
    "image": "images/characters/edda-appleturn.webp",
    "tokenImage": "images/tokens/edda-appleturn-token.webp",
    "publishedAt": "2026-11-03T22:00:01-05:00"
  },
  {
    "id": "sarra-bonebutton",
    "slug": "sarra-bonebutton",
    "name": "Sarra Bonebutton",
    "ancestry": "Goblin",
    "role": "Relic seller",
    "group": "townsfolk",
    "subtitle": "A market for fear",
    "summary": "Sarra sells worn charms from a covered market stall and greets questions with a suspicious stare. She keeps a sealed bronze reliquary close, concealing a captive shade she intends to release when frightened customers will pay most for her wards.",
    "tableNote": "Count a visitor's coins, shield the reliquary with your elbow and answer questions with a challenge. Say, “Buying, or just wearing out my patience? Keep your hands where I can see them.” Her bargains remain grudging even when she needs help, and she treats concern for bystanders as a weakness to exploit.",
    "personality": "Initially hostile, defensive and contemptuous of curiosity. Her sinister agenda is deliberate: she means to endanger a crowd for profit and considers unprotected neighbors an acceptable cost.",
    "motivations": "Stage a supernatural attack, sell her genuine protective pendants at panic prices and leave town before anyone links the shade to her stall.",
    "adventureHook": "A buyer recognizes Sarra's bronze reliquary as stolen from a family crypt and asks the party to investigate before the evening market bell. Sarra plans to pull its engraved locking pin at the bell, releasing a shade that avoids anyone wearing one of her wards. The party can seize the reliquary with its pin still in place and deliver it to the watchhouse, or clear the square and expose her scheme to the watch; the matching crypt carving proves the vessel's purpose. Sarra offers stolen relics for silence if cornered.",
    "locationIds": [
      "market-square",
      "crypt"
    ],
    "locationFit": [
      "Relic stalls",
      "Burial crypts"
    ],
    "roleCategoryIds": [
      "merchants-crafters",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "dungeons-ruins"
    ],
    "tags": [
      "merchant",
      "antagonist"
    ],
    "imageAlt": "Slate-green goblin relic seller with pointed ears, swept-back dark hair and suspicious amber eyes holding a sealed bronze reliquary at a shadowed market stall.",
    "portraitKey": "sarra-bonebutton",
    "portraitFit": "contain",
    "image": "images/characters/sarra-bonebutton.webp",
    "tokenImage": "images/tokens/sarra-bonebutton-token.webp",
    "publishedAt": "2026-11-03T22:00:00-05:00"
  }
]
```

Independent contributor review approved both complete drafts without requested corrections before JSON integration.

## Final artwork and validation

Built-in image generation used Garran Vey as style reference. Edda: older freckled gnome, grey-streaked auburn short braids, pointed ears, cheerful smile, russet waistcoat cream sleeves green apron, red apple and wooden cider cup, orchard press shed. Sarra: slate-green goblin, swept dark hair, complete pointed ears, suspicious amber eyes, guarded unsmiling expression, charcoal coat bone buttons burgundy scarf, sealed bronze reliquary and copper ward pendants at a covered stone-walled market stall. Sharp ink contours, crosshatching, rich painted gouache and graphic shadows; centered square waist-up, both shoulders and complete heads with generous overhead background. A targeted framing edit added headroom to Sarra while preserving identity and props.

Tokens derive from each finalized portrait with the approved Brakka antique brass/burgundy/charcoal circle and small dragon-only bottom medallion, complete heads inside circle and transparent exterior/safety margin. Opaque RGB 960×960 portraits at quality 75/method 6: Edda 211,392 bytes, Sarra 145,906 bytes. Edda's detailed orchard is above the approximate size target; full-size visual inspection passed at the standard quality. RGBA 280×280 tokens quality 80/method 6: Edda 27,552 bytes, Sarra 24,802 bytes. Exact decode/dimensions, token alpha 0–255, transparent corners and edge midpoints, native and 70px visual review passed. Four full-resolution lossless sources are retained under project/npc-packs/sources/nightly-2026-11-03/.

Local page build/check (84 pages), public-page DOM, token DOM, role categories, location-fit categories and Saved-filter checks passed. Local Chromium is unavailable; existing PR CI native 375px/1440px checks must pass before merge, including cards/profiles, downloads and Session behavior. All 82 previous records and browser storage are preserved.
