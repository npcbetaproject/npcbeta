# Nightly NPCs — 2026-10-29

## Concepts

- Orrik Ashmuzzle — Friendly werewolf camp lookout: bargains to restore safety ropes removed for a dangerous bog shortcut; will block anyone deliberately endangering the crossing.
- Veyra Thornhush — Hostile dryad orchard guardian: holds a charcoal crew's tools over disputed cutting rights; a fallen-wood bargain and boundary inspection can avert a fight.

Thursday monster/adversary batch. Concepts sampled with SystemRandom from six original folklore-monster candidates (troll, minotaur, dryad, harpy, werewolf and revenant). Each demeanor independently drawn using secrets.choice from Friendly/Indifferent/Hostile, one instance each. Current main's 70 entries inspected for name, ID, ancestry/profession and hook collisions. Both use familiar folklore creatures, offer negotiation, have distinct motivations, and name specific triggers for becoming opponents without requiring inherent evil or indiscriminate violence. Current standards and Tessa Brinewick / PR #82 read.

## Draft records for contributor review

```json
[
  {
    "id": "orrik-ashmuzzle",
    "slug": "orrik-ashmuzzle",
    "name": "Orrik Ashmuzzle",
    "ancestry": "Werewolf",
    "role": "Camp lookout",
    "group": "townsfolk",
    "subtitle": "A welcome behind the warning rope",
    "summary": "Orrik keeps watch over woodcutters sheltering in an abandoned logging camp, speaking cheerfully through a grey-furred wolf's muzzle. He welcomes travelers to the fire and explains the double-knotted ropes that mark firm ground through the surrounding bog.",
    "tableNote": "Greet each arrival warmly, offer a dry seat and explain the rope markers with patient enthusiasm. Say, “Welcome, friend. Follow the double knots and you will miss the bog.” His voice drops when anyone cuts a safety rope or tries to force a loaded cart onto the untested shortcut; he offers one clear warning before blocking the route.",
    "personality": "Initially friendly, helpful and eager to put strangers at ease; protective of the workers in his care and stubborn when a profitable shortcut puts them at risk.",
    "motivations": "Keep the woodcutters safe, restore a reliable route before the next shift and earn respect for his work rather than fear of his shape.",
    "adventureHook": "A timber buyer's crew removes Orrik's safety ropes, insisting that a shorter bog route will carry more carts. Workers return before dawn, and Orrik's sounding pole sinks through the new path's crust. He offers the party free guidance if they persuade the foreman to restore the marked route and help check the crossing. If anyone deliberately cuts the remaining ropes or forces loaded carts onto the unsafe ground, he will physically block them.",
    "locationIds": [
      "abandoned-logging-camp",
      "marsh-boardwalk",
      "roadside-campsite"
    ],
    "locationFit": [
      "Logging camps",
      "Bog crossings",
      "Woodland campsites"
    ],
    "roleCategoryIds": [
      "workers-services"
    ],
    "locationFitCategoryIds": [
      "roads-travel",
      "wilderness"
    ],
    "tags": [
      "quest-giver"
    ],
    "imageAlt": "Grey-furred werewolf lookout Orrik Ashmuzzle with amber eyes and upright ears wearing a green wool vest, cream shirt and rust cloak beside a rope coil in a timber camp.",
    "portraitKey": "orrik-ashmuzzle",
    "portraitFit": "contain",
    "image": "images/characters/orrik-ashmuzzle.webp",
    "tokenImage": "images/tokens/orrik-ashmuzzle-token.webp",
    "publishedAt": "2026-10-29T22:00:01-04:00"
  },
  {
    "id": "veyra-thornhush",
    "slug": "veyra-thornhush",
    "name": "Veyra Thornhush",
    "ancestry": "Dryad",
    "role": "Orchard guardian",
    "group": "townsfolk",
    "subtitle": "No axe beyond the wall",
    "summary": "Veyra tends an old orchard whose fruit feeds the neighboring farms, guarding its boundary with a pruning hook and a sharp tongue. She blocks strangers at the wall and assumes any wagon carries an axe until its owner proves otherwise.",
    "tableNote": "Stand across the path, study hands before faces and answer grand introductions with a curt question. Say, “Another grand promise. Show me what is under that canvas.” She hears a practical bargain out, but refuses flattery; lighting a fire inside the orchard or cutting a living tree turns her warning into force.",
    "personality": "Initially hostile, suspicious and mocking of careless promises; exact about boundaries and willing to honor a clearly stated agreement.",
    "motivations": "Keep the living orchard intact, preserve the farms' shared harvest and secure a fuel arrangement that does not require destroying healthy trees.",
    "adventureHook": "A charcoal crew arrives with paid cutting rights that place the orchard's oldest trees outside its protected boundary. Veyra seizes their tools and bars the cart track; the crew threatens to return with hired guards at dusk. She will release the tools if the party brokers access to fallen timber and gets the disputed boundary inspected. If anyone starts felling the living trees while talks continue, she will physically drive them out.",
    "locationIds": [
      "farm",
      "forest-clearing",
      "charcoal-burners-kiln"
    ],
    "locationFit": [
      "Old orchards",
      "Woodland boundaries",
      "Charcoal camps"
    ],
    "roleCategoryIds": [
      "workers-services"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "wilderness"
    ],
    "tags": [
      "antagonist",
      "quest-giver"
    ],
    "imageAlt": "Stern dryad orchard guardian Veyra Thornhush with tawny bark skin, green eyes and compact copper-leaf branch hair wearing a moss-green gown and russet shawl beside an old orchard wall.",
    "portraitKey": "veyra-thornhush",
    "portraitFit": "contain",
    "image": "images/characters/veyra-thornhush.webp",
    "tokenImage": "images/tokens/veyra-thornhush-token.webp",
    "publishedAt": "2026-10-29T22:00:00-04:00"
  }
]
```

## Contributor review

Independent contributor reviewed both Markdown drafts before JSON integration. Veyra passed immediately; Orrik's confrontation was revised to a distinct unsafe-bog-route dispute after the reviewer identified overlap with an older entry. Revised Orrik and Veyra both approved. Originality, supported fields, valid tags/categories/locations, demeanor consistency, motivations, negotiation and explicit conflict triggers passed against all 70 prior records.

## Artwork prompts

Built-in image generation with Garran Vey style reference: expressive ink contours, selective crosshatching, rich gouache colours and graphic shadows. Orrik: upright grey-furred werewolf with silver muzzle, amber eyes, friendly closed-mouth expression, green vest, cream shirt, rust cloak and rope coil at a timber camp. Veyra: stern dryad with tawny bark skin, green eyes, compact copper-leaf branch hair, moss-green gown, russet shawl and lowered pruning hook in old orchard. Full heads/ears/leaves and shoulders, square waist-up composition; framing adjusted to generous headroom. Tokens derive from finalized portraits with Brakka brass/burgundy/charcoal border, subtle site dragon-only medallion, complete head shapes and transparent exterior. Lossless full-resolution WebP sources retained with batch.

## Export verification

Opaque 960×960 portraits quality 75/method 6; transparent 280×280 tokens quality 80/method 6, with a 6px exterior safety margin. All decode as WebP; alpha range and transparent corners/edge midpoints verified. Full-resolution lossless WebP sources retained.

- docs/images/characters/orrik-ashmuzzle.webp: 170680 bytes, RGB.
- docs/images/tokens/orrik-ashmuzzle-token.webp: 28230 bytes, RGBA.
- docs/images/characters/veyra-thornhush.webp: 219686 bytes, RGB.
- docs/images/tokens/veyra-thornhush-token.webp: 29792 bytes, RGBA.
