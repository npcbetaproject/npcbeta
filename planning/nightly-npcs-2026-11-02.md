# November 2 NPC batch

Monday, 2026-11-02, Toronto. Exactly one varied NPC and one deliberately sinister NPC. User authorized creation, merge and publication. The separate earlier Mosswick/Veyra pair is preserved; it is not the nightly batch. Current-main standards, schema, full 80-record inventory and Tessa Brinewick / PR #82 inspected.

Python secrets.choice selected independently from two six-concept pools. Varied candidates: Dorna Limebrace (dwarf plasterer), Neris Claywhorl (human potter), Ulva Rushsole (orc basket weaver), Sivren Acornlash (elf goatherd), Edda Appleturn (gnome cider presser), Morla Fennstitch (halfling saddler). Sinister candidates: Vesper Rillwake (human matchmaker), Caldra Wispwick (elf perfumer), Gorrin Vellcap (dwarf almoner), Tirra Glassmote (gnome dream interpreter), Nolvik Furrowhand (halfling land agent), Sarra Bonebutton (goblin relic seller). Each NPC independently used equal-probability secrets.choice on Friendly, Indifferent, Hostile; both drew Friendly without rerolls.

- Neris Claywhorl — Friendly human potter; frees a cart-sized tortoise wedged beside her kiln before a claimant hauls it away.
- Tirra Glassmote — Friendly gnome dream interpreter, sinister; plants false prophetic dreams to compel clients to surrender their savings.

GM spoilers / sensitive themes: Tirra uses magical coercion and attempts theft. Her welcoming initial attitude is distinct from her malicious agenda. Neris is an honest artisan, and the tortoise's claimant can be persuaded; no second sinister NPC is intended.

## Complete drafts

```json
[
  {
    "id": "neris-claywhorl",
    "slug": "neris-claywhorl",
    "name": "Neris Claywhorl",
    "ancestry": "Human",
    "role": "Potter",
    "group": "townsfolk",
    "subtitle": "Mind the pots, and the tortoise",
    "summary": "Neris makes sturdy jars in a pottery yard and insists visitors try the handle before praising the glaze. Warm and eager to include newcomers, she offers a place at the workbench even when her own hands are full.",
    "tableNote": "Smile, wipe your palms on your apron and offer someone a small useful job. Say, “Perfect timing, friend. Take that end, and I will keep the pots out of our way.” She thanks careful helpers by name and admits readily when a problem needs skills beyond hers.",
    "personality": "Initially friendly, practical and encouraging; delighted by other people's expertise, but inclined to promise help before checking how much work she already has.",
    "motivations": "Make affordable vessels that last, keep her shared yard welcoming and solve the day's trouble without an animal or neighbor paying for her haste.",
    "adventureHook": "A cart-sized tortoise follows the warmth into Neris's yard and becomes wedged between her unlit kiln and a storage wall. A traveler claiming it arrives with a winch and wants to drag it through the narrow lane before dusk. Neris asks the party to move the pottery racks, coax the animal backward into the square and persuade the claimant to use the broad farm gate instead; she offers payment in coin or sturdy travel jars.",
    "locationIds": [
      "potters-yard",
      "market-square"
    ],
    "locationFit": [
      "Pottery yards",
      "Market squares"
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
    "imageAlt": "Brown-skinned human potter with dark curls under a rust-red headscarf, ochre shirt and clay-dusted indigo apron holding an unfinished jug in a pottery yard.",
    "portraitKey": "neris-claywhorl",
    "portraitFit": "contain",
    "image": "images/characters/neris-claywhorl.webp",
    "tokenImage": "images/tokens/neris-claywhorl-token.webp",
    "publishedAt": "2026-11-02T22:00:01-05:00"
  },
  {
    "id": "tirra-glassmote",
    "slug": "tirra-glassmote",
    "name": "Tirra Glassmote",
    "ancestry": "Gnome",
    "role": "Dream interpreter",
    "group": "townsfolk",
    "subtitle": "Kind words behind borrowed dreams",
    "summary": "Tirra welcomes anxious sleepers to a curtained consultation room, remembers their worries and offers polished glass discs to keep beneath their pillows. Her warm attention conceals a scheme to turn reassuring dreams into commands her clients obey.",
    "tableNote": "Lean forward, remember one small concern and speak as though there is plenty of time. Say, “You have carried this worry alone long enough. Tell me what you saw, and we will make sense of it together.” Keep her welcome gentle even while she steers questions away from the underside of the glass discs.",
    "personality": "Initially friendly, attentive and patient. Deliberately sinister beneath that manner, she treats private fears as tools for controlling people and feels entitled to the wealth she takes from them.",
    "motivations": "Bind prosperous clients to dream-borne commands, make them appear to surrender valuables willingly in public and preserve her reputation as a trusted adviser.",
    "adventureHook": "A client asks the party for help after dreaming the exact command to bring her savings to Tirra at midnight; the same spiral appears in the dream and beneath Tirra's gift disc. The party can pose as new clients to inspect the consultation room, where a brass bowl beneath a loose floorboard links the discs. Removing a client's disc prevents further commands to that sleeper; breaking the bowl's spiral frees every linked client before the collection; Tirra offers a share of the stolen wealth for silence if exposed.",
    "locationIds": [
      "private-residence",
      "market-square"
    ],
    "locationFit": [
      "Consultation rooms",
      "Market neighborhoods"
    ],
    "roleCategoryIds": [
      "scholars-magic",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "settlements"
    ],
    "tags": [
      "antagonist",
      "mysterious"
    ],
    "imageAlt": "Olive-skinned gnome dream interpreter with pointed ears, silver-blond braid and an inviting smile holding a brass dish with glass discs in a softly lit curtained room.",
    "portraitKey": "tirra-glassmote",
    "portraitFit": "contain",
    "image": "images/characters/tirra-glassmote.webp",
    "tokenImage": "images/tokens/tirra-glassmote-token.webp",
    "publishedAt": "2026-11-02T22:00:00-05:00"
  }
]
```

Independent contributor review approved both drafts before JSON integration. Review clarified coerced compliance versus willingness and the separate individual/group countermeasures for Tirra.

## Final artwork and validation

Built-in image generation used Garran Vey as style reference. Neris: brown-skinned human potter, dark curls and rust-red headscarf, ochre shirt, indigo apron and unfinished jug in pottery yard. Tirra: olive-skinned gnome with silver-blond braid, grey eyes, complete pointed ears, friendly smile, moss robe, plum sash, copper pendant, brass dish and three glass discs, blue-curtained room. Expressive ink contours, crosshatching, rich gouache colour and graphic shadows; square waist-up, both shoulders, complete heads and generous overhead background. One targeted framing correction added headroom to Tirra while preserving identity and props.

Each token preserves the finalized portrait identity, uses the approved Brakka brass/burgundy/charcoal frame and small dragon-only bottom medallion, with complete head inside circle and transparent exterior/safety margin. Final portraits: opaque RGB 960×960 WebP quality 75/method 6, Neris 151,494 bytes and Tirra 152,080 bytes. Tokens: RGBA 280×280 WebP quality 80/method 6, Neris 25,448 bytes and Tirra 21,502 bytes. Decoding, dimensions, alpha 0–255, transparent corners/edge midpoints and native/70px visual inspection passed. Four full-resolution lossless sources are retained in project/npc-packs/sources/nightly-2026-11-02/.

Page build/check, public-page DOM, role/location categories and Saved-filter suites passed locally. Required native desktop/mobile/token-download/Session browser checks run in existing PR CI before merge because local Chromium is unavailable. Existing 80 records and browser storage are preserved.
