# November 5 Thursday NPC batch

Thursday, 2026-11-05, Toronto. Exactly two monster/adversary encounters, one varied non-sinister guardian and one deliberately sinister criminal. Both have roleplaying motives, negotiation paths and explicit conflict triggers. User authorized creation, merge and publication. Current-main standards, schema, full 86-record inventory and Tessa Brinewick / PR #82 inspected. No existing date branch/PR or published date pair found.

Python secrets.choice independently selected from six eligible varied monster concepts and six sinister monster/adversary concepts. Varied pool: Brondel Chalkhorn (minotaur stone hauler), Sivra Slatewing (gargoyle roof guardian), Olfen Kettlemoss (ogre waystation cook), Lethro Acornheel (satyr boundary guide), Yssra Ridgethroat (harpy cliff path keeper), Vikra Kilnscale (kobold kiln tender). Sinister pool: Neral Vellmask (doppelganger employment broker), Mavra Siltspindle (hag reed basket seller), Rusk Vanehook (goblin cult recruiter), Odrissa Nighttoll (vampire bridge reeve), Vorrak Blackwrit (ogre debt enforcer), Hessra Palevine (lamia caravan oracle). Independent equal-probability demeanor choices from Friendly, Indifferent, Hostile both drew Friendly, without rerolls.

- Lethro Acornheel — Friendly satyr boundary guide; offers safe passage for help repairing a broken marker and respect for the crossing's restrictions.
- Vorrak Blackwrit — Friendly ogre debt enforcer, sinister; rigs debt-settlement games to trap adults in forced quarry labor.

GM spoilers / sensitive themes: fraudulent debt, captivity and forced adult labor, with no graphic descriptions. Vorrak's malice is his personal agenda, separate from ancestry or welcoming demeanor. Lethro protects a living boundary and offers alternatives rather than seeking harm. Satyrs and ogres are recognizable public-domain folklore types; no named proprietary lore or mechanics.

## Complete drafts

```json
[
  {
    "id": "lethro-acornheel",
    "slug": "lethro-acornheel",
    "name": "Lethro Acornheel",
    "ancestry": "Satyr",
    "role": "Boundary guide",
    "group": "townsfolk",
    "subtitle": "A courteous pause at the thorn arch",
    "summary": "Lethro guides travelers along the woodland boundary, welcoming them with an easy smile and a choice of routes. This horned satyr explains the crossing's restrictions before asking for payment, and accepts useful news as readily as bread.",
    "tableNote": "Offer two clear choices, tilt your head as though listening to the trees and thank anyone who asks before touching a marker. Say, “Welcome, friends. A little patience here will save us all a long walk.” Keep his voice kind when he refuses passage; friendliness does not make him abandon his duty.",
    "personality": "Initially friendly, patient and curious about travelers; generous with local knowledge, but firm about agreements that protect the path and neighboring farms.",
    "motivations": "Keep the boundary's living thorn barrier contained, earn a modest living guiding crossings and persuade hurried travelers that a safe route is worth a short delay.",
    "adventureHook": "A wagon clips the boundary stone, dropping its capstone into the ravine below. Until it is repaired, uncovered iron makes the thorn arch close across the path. Lethro offers a longer detour or a quiet crossing with iron gear wrapped in felt if the party helps retrieve and replace the capstone. Repair earns his escort; trying to smash the stone or burn through the barrier makes him block the party by force, because breaking the boundary would release the thorns toward nearby farms.",
    "locationIds": [
      "forest-clearing",
      "ravine-crossing"
    ],
    "locationFit": [
      "Woodland boundaries",
      "Ravine crossings"
    ],
    "roleCategoryIds": [
      "workers-services"
    ],
    "locationFitCategoryIds": [
      "roads-travel",
      "wilderness"
    ],
    "tags": [
      "quest-giver",
      "wanderer"
    ],
    "imageAlt": "Brown-skinned satyr boundary guide with curled goat horns, russet curls and a short goatee smiling in a moss-green cloak beside a woodland marker.",
    "portraitKey": "lethro-acornheel",
    "portraitFit": "contain",
    "image": "images/characters/lethro-acornheel.webp",
    "tokenImage": "images/tokens/lethro-acornheel-token.webp",
    "publishedAt": "2026-11-05T22:00:01-05:00"
  },
  {
    "id": "vorrak-blackwrit",
    "slug": "vorrak-blackwrit",
    "name": "Vorrak Blackwrit",
    "ancestry": "Ogre",
    "role": "Debt enforcer",
    "group": "townsfolk",
    "subtitle": "A friendly throw, a longer debt",
    "summary": "Vorrak welcomes debtors to his roadside counting room with a meal and a cheerful offer to settle matters over dice. The broad-shouldered ogre rigs these games to renew paid debts and send innocent people into forced quarry labor.",
    "tableNote": "Greet visitors by name, pull out a chair and explain every demand as though you are doing them a favor. Say, “Sit, friend. No need for a sour face over a number. One little game can put this behind us.” Keep smiling while you move the bench across the doorway; his hospitality is a means of control.",
    "personality": "Initially friendly, sociable and reassuring. Deliberately sinister beneath that manner, he treats coerced labor as a business asset and knows that his supposed settlements are fraudulent.",
    "motivations": "Keep paid debts alive through rigged games, profit from quarry labor contracts and preserve the appearance that his victims freely accepted the terms.",
    "adventureHook": "A carter's sibling asks the party to stop a dawn wagon carrying three adult debtors whom Vorrak has trapped through rigged settlement games. His marked dice and the carters' original paid bonds expose the fraud. The party can demand a public reckoning before neutral witnesses, bring the evidence to the watch or free the captives from the counting-room storeroom. Vorrak offers their release for a safe exit if cornered, but blocks the door and fights if the party tries to take the captives or dice without a deal.",
    "locationIds": [
      "caravanserai",
      "storeroom",
      "watchhouse"
    ],
    "locationFit": [
      "Roadside counting rooms",
      "Caravan stops"
    ],
    "roleCategoryIds": [
      "workers-services",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "roads-travel"
    ],
    "tags": [
      "antagonist"
    ],
    "imageAlt": "Broad grey-brown ogre debt enforcer with close-cropped dark hair and small tusks smiling in a teal coat and ochre waistcoat with a wooden dice cup and folded paper.",
    "portraitKey": "vorrak-blackwrit",
    "portraitFit": "contain",
    "image": "images/characters/vorrak-blackwrit.webp",
    "tokenImage": "images/tokens/vorrak-blackwrit-token.webp",
    "publishedAt": "2026-11-05T22:00:00-05:00"
  }
]
```

Independent contributor review approved both drafts without required corrections before JSON integration, including comparison with Orrik and existing racketeers.

## Final artwork and validation

Built-in image generation used Garran Vey as the style reference. Lethro: brown satyr with russet curls short goatee pointed ears and two complete curled goat horns, friendly smile, moss-green cloak wooden leaf clasp cream tunic, staff and folded felt by a woodland marker. Vorrak: massive grey-brown ogre with close dark hair, small tusks and amiable smile, teal coat ochre waistcoat, dice cup and folded tally paper in a roadside counting room. Sharp ink contours, selective crosshatching, rich painted gouache and graphic shadows; square waist-up with complete heads and generous overhead background. Targeted framing corrections added headroom to both and brought Vorrak's broad shoulders fully inside the frame.

Tokens derive from finalized portraits, preserving horns/ears/tusks/identity within the approved Brakka antique brass/burgundy/charcoal circular border and subtle dragon-only bottom medallion. Transparent exterior and safety margin, no text/nameplate. Opaque RGB 960×960 WebP portraits quality 75/method 6: Lethro 285,354 bytes; Vorrak 158,618 bytes. Lethro's dense woodland detail exceeds the approximate file-size target; full-size visual review passed at standard quality. RGBA 280×280 WebP tokens quality 80/method 6: Lethro 26,706 bytes; Vorrak 24,222 bytes. Decoding/dimensions, token alpha 0–255, transparent corners/edge midpoints and native/70px visual checks passed. Four full-resolution lossless sources are retained under project/npc-packs/sources/nightly-2026-11-05/.

Local page build/check (88 pages), public-page DOM, token DOM, role categories, location-fit categories and Saved checks passed. Local Chromium is unavailable; existing PR CI native 375px/1440px checks must pass before merge, including uncropped cards/profiles, token downloads, sharing and Session behavior. All 86 previous records and browser storage are preserved.
