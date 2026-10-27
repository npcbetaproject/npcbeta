# Nightly NPCs — 2026-10-26

## Concepts

- Orsa Cinderglass — Indifferent dwarf glazier: discovers wax substituted for chapel window supports before a crowded service.
- Fenwick Siltcap — Hostile gnome well cleaner: needs witnesses to inspect a concealed pipe draining the village well into a private cellar.

Professions and demeanors selected independently by random draws; demeanor pool contains Friendly, Indifferent and Hostile once each. Monday batch follows ordinary professions. Existing 64 records inspected for name, profession and hook collisions. Current main standards and Tessa Brinewick / PR #82 read.

## Draft records for contributor review

```json
[
  {
    "id": "orsa-cinderglass",
    "slug": "orsa-cinderglass",
    "name": "Orsa Cinderglass",
    "ancestry": "Dwarf",
    "role": "Glazier",
    "group": "townsfolk",
    "subtitle": "Wax where iron should be",
    "summary": "Orsa cuts and leads stained glass for chapels and prosperous households, checking every measurement twice. Busy with a delivery, she gives visitors the same level stare she gives a pane that does not quite fit.",
    "tableNote": "Keep measuring while visitors speak, then ask for the detail that affects the job. Say, “Hold that thought—and this edge. Which window, exactly?” A precise answer gets her full attention; flattery does not.",
    "personality": "Initially indifferent, absorbed and methodical; dryly humorous once the work is safe, she values careful hands over impressive claims.",
    "motivations": "Keep her customers safe, protect her apprentices' reputations and find who tampered with her finished work.",
    "adventureHook": "During a final inspection, Orsa finds that two iron support pins beneath a heavy chapel window have been replaced with dark wax. She asks the party to keep worshippers out of that aisle and fetch the caretaker's key to the locked scaffold gate while she braces the frame; the evening service starts within the hour, and fresh wax scraps on the scaffold may identify the saboteur.",
    "locationIds": [
      "glassblowers-workshop",
      "chapel",
      "private-residence"
    ],
    "locationFit": [
      "Glazing workshops",
      "Chapels",
      "Town houses"
    ],
    "roleCategoryIds": [
      "merchants-crafters"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "castles-estates"
    ],
    "tags": [
      "quest-giver"
    ],
    "imageAlt": "Ink and colour illustration of dwarf glazier Orsa Cinderglass with silver hair in a low bun, a slate-blue tunic and ochre apron, holding green glass in a medieval glazing workshop.",
    "portraitKey": "orsa-cinderglass",
    "portraitFit": "contain",
    "image": "images/characters/orsa-cinderglass.webp",
    "tokenImage": "images/tokens/orsa-cinderglass-token.webp",
    "publishedAt": "2026-10-26T22:00:01-04:00"
  },
  {
    "id": "fenwick-siltcap",
    "slug": "fenwick-siltcap",
    "name": "Fenwick Siltcap",
    "ancestry": "Gnome",
    "role": "Well cleaner",
    "group": "townsfolk",
    "subtitle": "Water going the wrong way",
    "summary": "Fenwick clears silt and repairs the linings of village wells with a rope cradle and a battered sounding weight. He greets strangers as potential meddlers and insists that nobody touches his tackle without asking.",
    "tableNote": "Plant yourself between visitors and the well rope, and inspect their boots before meeting their eyes. Say, “Hands off the winch. Tell me who sent you.” Let an offer to witness his findings earn a grudging explanation.",
    "personality": "Initially hostile, defensive and suspicious; exacting about safety, he is stubbornly fair when evidence contradicts his suspicions.",
    "motivations": "Restore the village water supply, prove the falling water level is not his fault and prevent an unsafe descent by an impatient neighbor.",
    "adventureHook": "Fenwick's sounding weight catches on a new clay pipe beneath the village well's waterline. Its route through the lining points toward a wealthy household's cellar, making him suspect a concealed diversion. He asks the party to witness a careful inspection, obtain access to the cellar and help stop any diversion before the livestock troughs run dry tomorrow; he refuses to plug the pipe blindly while someone might be working at its far end.",
    "locationIds": [
      "farm",
      "private-residence",
      "cistern-chamber"
    ],
    "locationFit": [
      "Village wells",
      "Farmyards",
      "Cisterns"
    ],
    "roleCategoryIds": [
      "workers-services"
    ],
    "locationFitCategoryIds": [
      "settlements"
    ],
    "tags": [
      "quest-giver"
    ],
    "imageAlt": "Ink and colour illustration of gnome well cleaner Fenwick Siltcap with a grey moustache, moss-green cap and rust work coat, holding a sounding weight beside a stone village well.",
    "portraitKey": "fenwick-siltcap",
    "portraitFit": "contain",
    "image": "images/characters/fenwick-siltcap.webp",
    "tokenImage": "images/tokens/fenwick-siltcap-token.webp",
    "publishedAt": "2026-10-26T22:00:00-04:00"
  }
]
```

## Contributor review

Independent contributor approved with corrections before JSON integration: locked scaffold gate clarified; pipe direction treated as evidence requiring cellar confirmation. IDs, supported fields, classifications, published locations, originality and demeanors passed.

## Artwork and validation

Built-in image generation used. Portrait prompts: Orsa with silver bun, copper-brown skin, slate-blue tunic, ochre apron and green glass in glazing workshop; Fenwick with grey moustache, pointed ears, moss cap, rust coat, sounding weight and village well. Both reference Garran Vey ink contours, crosshatching and gouache; framing revised for intact heads and generous headroom. Token prompts preserve finalized identities, reference Brakka frame and site dragon-only emblem, transparent exterior. Lossless full-resolution sources retained alongside batch. Portraits exported RGB WebP 960×960 quality 75/method 6; tokens RGBA WebP 280×280 quality 80/method 6 with transparent safety margin.

- orsa-cinderglass image: 177,804 bytes, RGB, (960, 960)
- orsa-cinderglass tokenImage: 27,860 bytes, RGBA, (280, 280)
- fenwick-siltcap image: 197,546 bytes, RGB, (960, 960)
- fenwick-siltcap tokenImage: 25,854 bytes, RGBA, (280, 280)
