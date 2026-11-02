# November 1 NPC batch

Toronto date: Sunday, 2026-11-01. Ordinary professions apply. User authorized exactly two entries and publication. Current-main standards and Tessa Brinewick / PR #82 inspected.

Random selection used Python secrets.SystemRandom.sample without replacement from Cobbler, Itinerant dentist, Plasterer, Potter, Basket weaver and Orchard pruner candidates. Each demeanor independently used secrets.choice on Friendly, Indifferent, Hostile with equal probability. Both draws were Indifferent; neither was rerolled.

- Berrit Hoofpatch — Indifferent halfling cobbler; repaired boots march toward an unfinished race.
- Talvo Sedgepin — Indifferent gnome itinerant dentist; arranges a private appointment for a giant barred from town.

## Character drafts

```json
[
  {
    "id": "berrit-hoofpatch",
    "slug": "berrit-hoofpatch",
    "name": "Berrit Hoofpatch",
    "ancestry": "Halfling",
    "role": "Cobbler",
    "group": "townsfolk",
    "subtitle": "One unfinished mile",
    "summary": "Berrit repairs footwear at a narrow market stall, sorting customers by the wear on their soles. He greets interruptions with a distracted nod and keeps stitching until someone gives him a specific problem to solve.",
    "tableNote": "Look at a visitor's shoes before their face, set down each tool in its exact place and speak in short practical sentences. Say, “Put the boot on the bench. Tell me where it pinches.” He treats strange magic as another fault to diagnose, without promising that leatherwork can fix it.",
    "personality": "Initially indifferent, absorbed and precise; dryly observant, with little patience for speculation but no wish to embarrass a customer.",
    "motivations": "Finish reliable repairs, keep his modest stall solvent and return troublesome footwear without passing its danger to someone else.",
    "adventureHook": "After Berrit replaces a split sole, a customer's old racing boots lace themselves shut and march their wearer along a racecourse abandoned years ago. He asks the party to keep the exhausted customer safely tethered while a companion takes the short hill path to the ruined finish arch and persuades its spectral race marshal to accept a late withdrawal before the boots reach the collapsed footbridge.",
    "locationIds": [
      "market-square",
      "ravine-crossing"
    ],
    "locationFit": [
      "Market stalls",
      "Overgrown race routes"
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
    "imageAlt": "Tawny-skinned halfling cobbler with chestnut curls, grey temples and a brown apron holding a worn boot and wooden shoe last in his workshop.",
    "portraitKey": "berrit-hoofpatch",
    "portraitFit": "contain",
    "image": "images/characters/berrit-hoofpatch.webp",
    "tokenImage": "images/tokens/berrit-hoofpatch-token.webp",
    "publishedAt": "2026-11-01T22:00:01-05:00"
  },
  {
    "id": "talvo-sedgepin",
    "slug": "talvo-sedgepin",
    "name": "Talvo Sedgepin",
    "ancestry": "Gnome",
    "role": "Itinerant dentist",
    "group": "townsfolk",
    "subtitle": "An appointment outside the walls",
    "summary": "Talvo carries her dental tools between market towns in a small covered wagon. Busy and strictly professional, she checks her appointment list before acknowledging a newcomer and expects payment terms settled before work begins.",
    "tableNote": "Adjust your spectacles, count folded cloths and ask one clear question at a time. Say, “I have a patient waiting. Can you arrange a quiet space, or shall I ask someone else?” Keep the same level voice with a mayor or a giant; her patient is a person with an appointment, not a spectacle.",
    "personality": "Initially indifferent, businesslike and hard to distract; meticulous about privacy and quietly stubborn when others obstruct her work.",
    "motivations": "Earn a dependable living on the road and see every agreed patient without a crowd interfering.",
    "adventureHook": "A giant with a painful tooth arrives for Talvo's promised appointment, but the guards refuse to let him through the town gate. She hires the party to arrange a quiet treatment space at the caravanserai, obtain the keeper's consent and bring her water and equipment from the market; curious onlookers are already gathering, and the embarrassed patient threatens to leave if he becomes an attraction.",
    "locationIds": [
      "caravanserai",
      "market-square"
    ],
    "locationFit": [
      "Caravan stops",
      "Market towns"
    ],
    "roleCategoryIds": [
      "faith-healing"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "roads-travel"
    ],
    "tags": [
      "quest-giver",
      "wanderer"
    ],
    "imageAlt": "Elderly brown-skinned gnome dentist with pointed ears, silver braided hair and round spectacles holding a closed wooden case and clean linen beside her wagon.",
    "portraitKey": "talvo-sedgepin",
    "portraitFit": "contain",
    "image": "images/characters/talvo-sedgepin.webp",
    "tokenImage": "images/tokens/talvo-sedgepin-token.webp",
    "publishedAt": "2026-11-01T22:00:00-05:00"
  }
]
```

No proprietary setting references, statistics or sensitive treatment details. Independent contributor content review approved both entries before JSON integration. Review clarified that Berrit's enchanted laces stay shut and split party tasks allow a shortcut to the marshal.

## Final artwork and validation

Built-in image generation used Garran Vey as the style reference. Berrit: tawny halfling, chestnut grey-templed curls, sage shirt and brown apron holding boot and wooden last, workshop. Talvo: elderly brown-skinned gnome with silver braided crown, pointed ears, spectacles, plum coat and teal scarf, closed case and folded linen by wagon. Sharp ink contours, crosshatching and rich gouache; square centered waist-up, complete heads with about 20% overhead background. One targeted framing edit for each preserved identity while adding headroom.

Tokens derive from the finalized portraits with Brakka's brass/burgundy/charcoal frame and small dragon-only bottom emblem, complete heads and transparent exterior. Lossless full-resolution portrait and token sources are retained in project/npc-packs/sources/nightly-2026-11-01/. Portraits exported opaque 960px WebP quality 75/method 6: Berrit 158,462 bytes; Talvo 182,392 bytes. Transparent 280px tokens quality 80/method 6: Berrit 25,998 bytes; Talvo 28,866 bytes. Final files decode at exact dimensions; token alpha spans 0–255, corners and edge midpoints transparent. Native and 70px visual review passed.

Existing IDs, records, publication dates, classifications and browser storage are preserved. Required native desktop/mobile checks run in PR CI before merge.
