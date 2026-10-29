# Nightly NPCs — 2026-10-28

## Concepts

- Sarra Hearthsedge — Friendly halfling midwife: needs a safe route to a stranded expectant parent after a landslide blocks the road.
- Rinna Sootfeather — Indifferent goblin street puppeteer: a borrowed puppet warns of danger in a condemned warehouse; wants evidence before her next show.

Wednesday ordinary-profession batch. Concepts sampled with SystemRandom from six original candidates, requiring different occupational domains for variety (a same-domain care pair was rejected). Final pair demeanors independently drawn using secrets.choice from Friendly/Indifferent/Hostile, one instance each. Current main's 68 entries inspected for duplicate names, IDs, professions and recent hook repetition. Standards and Tessa Brinewick / PR #82 read.

## Draft records for contributor review

```json
[
  {
    "id": "sarra-hearthsedge",
    "slug": "sarra-hearthsedge",
    "name": "Sarra Hearthsedge",
    "ancestry": "Halfling",
    "role": "Midwife",
    "group": "townsfolk",
    "subtitle": "The road beyond the landslide",
    "summary": "Sarra travels between outlying households with clean linen, a worn satchel and a ready welcome. She learns visitors' names quickly and treats an offer of help as the beginning of a friendship.",
    "tableNote": "Make room on the bench, ask after the visitor's household, and thank people for small practical kindnesses. Say, “Come sit, dear. Tell me what the road is like, and we will find a way.” Her warmth stays steady when plans need changing.",
    "personality": "Initially friendly, warmly attentive and encouraging; practical about difficult journeys and firm about respecting the privacy of the families she visits.",
    "motivations": "Reach the households relying on her, train a reliable travelling assistant and keep isolated neighbors connected to help.",
    "adventureHook": "A landslide blocks Sarra's route to an expectant parent staying at an isolated farmhouse. The family has asked her to arrive before nightfall, but the only remaining path ends at a ferry landing whose keeper closes at dusk. She asks the party to check the old river path for washouts, arrange a crossing and escort her mule; she can pay modestly and introduce them to households along the route.",
    "locationIds": [
      "private-residence",
      "farm",
      "docks-ferry-landing"
    ],
    "locationFit": [
      "Outlying homes",
      "Farmsteads",
      "Ferry landings"
    ],
    "roleCategoryIds": [
      "faith-healing",
      "workers-services"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "roads-travel",
      "waterfront"
    ],
    "tags": [
      "quest-giver"
    ],
    "imageAlt": "Friendly older halfling midwife Sarra Hearthsedge with copper-brown skin, greying auburn braid, blue-green dress and terracotta shawl holding folded linen and a leather satchel at a cottage doorway.",
    "portraitKey": "sarra-hearthsedge",
    "portraitFit": "contain",
    "image": "images/characters/sarra-hearthsedge.webp",
    "tokenImage": "images/tokens/sarra-hearthsedge-token.webp",
    "publishedAt": "2026-10-28T22:00:01-04:00"
  },
  {
    "id": "rinna-sootfeather",
    "slug": "rinna-sootfeather",
    "name": "Rinna Sootfeather",
    "ancestry": "Goblin",
    "role": "Street puppeteer",
    "group": "townsfolk",
    "subtitle": "A warning between shows",
    "summary": "Rinna stages dry little comedies from a patched booth, watching the collection bowl as closely as the crowd. Between performances she answers visitors without looking up from the puppet she is mending.",
    "tableNote": "Keep adjusting a puppet's sleeve while visitors speak, then ask a short question about time or payment. Say, “The next show starts at six. If this takes longer, tell me now.” A useful answer earns a place behind the booth; flattery gets a distracted nod.",
    "personality": "Initially indifferent, businesslike and dryly observant; generous with a well-earned laugh, but unwilling to turn every interruption into a public spectacle.",
    "motivations": "Keep her pitch and regular income, return borrowed equipment intact and learn whether an unexpected warning puts real people in danger.",
    "adventureHook": "A wooden bird puppet lent to Rinna for the fair speaks without her hand inside it, repeating, “Lower warehouse. The beam is moving.” The condemned warehouse beside her pitch is due to be emptied at dusk. She asks the party to persuade the salvage foreman to pause work, inspect the lower floor and trace the voice before her next show; she wants evidence before announcing a curse to a paying crowd.",
    "locationIds": [
      "market-square",
      "docks-ferry-landing",
      "storeroom"
    ],
    "locationFit": [
      "Market squares",
      "Dockside warehouses",
      "Street performance pitches"
    ],
    "roleCategoryIds": [
      "hospitality-entertainment"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "waterfront"
    ],
    "tags": [
      "quest-giver"
    ],
    "imageAlt": "Goblin puppeteer Rinna Sootfeather with olive-green skin, long pointed ears, short black hair, plum tunic, mustard scarf and patched russet coat examining a wooden bird glove puppet beside a market booth.",
    "portraitKey": "rinna-sootfeather",
    "portraitFit": "contain",
    "image": "images/characters/rinna-sootfeather.webp",
    "tokenImage": "images/tokens/rinna-sootfeather-token.webp",
    "publishedAt": "2026-10-28T22:00:00-04:00"
  }
]
```

## Contributor review

Independent contributor reviewed both Markdown drafts before index integration and approved with no required corrections. Compared all 68 prior entries; supported fields, original names/professions/hooks, tags, classifications, published locations, dialogue/demeanor consistency and concrete hook logic passed.

## Artwork prompts

Built-in image generation, Garran Vey reference for ink contours, crosshatching, rich gouache and graphic shadows. Sarra: friendly older copper-brown halfling woman, greying auburn braid, teal dress and terracotta shawl, linen and satchel at a cottage doorway. Rinna: indifferent olive-green goblin woman, short dark hair, long ears, plum tunic/mustard scarf/russet coat, wooden bird glove puppet at a market booth. Both square waist-up with intact heads/shoulders and generous headroom; framing adjusted from first generation to preserve more overhead space. Tokens derive from finalized portraits with Brakka brass/burgundy/charcoal frame and small dragon-only medallion from site logo, complete heads/ears, transparent exterior and safety margin. Lossless full-resolution WebP sources retained with batch.

## Export verification

Opaque 960×960 portraits quality 75/method 6; transparent 280×280 tokens quality 80/method 6 with 6px exterior safety margin. All decode as WebP; genuine alpha and transparent corners/edge midpoints verified. Full-resolution lossless WebP sources retained.

- docs/images/characters/sarra-hearthsedge.webp: 223640 bytes, RGB.
- docs/images/tokens/sarra-hearthsedge-token.webp: 29700 bytes, RGBA.
- docs/images/characters/rinna-sootfeather.webp: 159232 bytes, RGB.
- docs/images/tokens/rinna-sootfeather-token.webp: 25944 bytes, RGBA.
