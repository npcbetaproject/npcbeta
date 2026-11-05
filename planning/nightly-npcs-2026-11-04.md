# November 4 NPC batch

Wednesday, 2026-11-04, Toronto. Exactly one varied NPC and one deliberately sinister NPC. User authorized merge and publication. Current-main standards, schema, full 84-record inventory and Tessa Brinewick / PR #82 inspected. No existing date branch/PR or published date pair found.

Random selection used Python secrets.choice independently on six varied concepts and six sinister concepts. Varied pool: Ilvara Rookquill (elf town herald), Joren Thistlepole (human road mender), Ulva Rushsole (orc basket weaver), Morla Fennstitch (halfling saddler), Belda Claymantle (dwarf post runner), Tivren Hazelwink (gnome town crier). Sinister pool: Vesper Rillwake (human matchmaker), Caldra Wispwick (elf perfumer), Gorrin Vellcap (dwarf almoner), Nolvik Furrowhand (halfling land agent), Urvak Cinderlace (orc mercenary quartermaster), Merra Flintveil (gnome debt collector). Demeanors used independent equal-probability choices from Friendly, Indifferent, Hostile. Both drew Friendly without rerolls.

- Tivren Hazelwink — Friendly gnome town crier; recovers a forgotten discharge roll to release spectral watchmen from duty and reopen a gate.
- Caldra Wispwick — Friendly elf perfumer, sinister; plans to burn the wild moonviolet grove to monopolize an ingredient also needed by healers.

GM spoilers / sensitive themes: Caldra commissions arson and deliberately threatens access to a healing ingredient for profit. No practical fire-setting or medical instructions. Moonviolet is a fictional campaign-independent flower; no proprietary setting references. Her welcome is distinct from morality. Tivren is honest, and the spectral watchmen act from duty rather than a malicious agenda.

## Complete drafts

```json
[
  {
    "id": "tivren-hazelwink",
    "slug": "tivren-hazelwink",
    "name": "Tivren Hazelwink",
    "ancestry": "Gnome",
    "role": "Town crier",
    "group": "townsfolk",
    "subtitle": "The last order of the watch",
    "summary": "Tivren carries the town's notices from square to gate, greeting familiar faces between announcements. Warm and eager to help, he treats a newcomer as someone who simply has not heard the useful news yet.",
    "tableNote": "Lift an imaginary bell, lean closer for ordinary conversation and remember the last name someone gives you. Say, “Welcome, friend! The public news can wait a breath. What do you need to know?” When frightened, he rehearses the opening line quietly rather than pretending to be fearless.",
    "personality": "Initially friendly, talkative and civic-minded; proud of clear speech, generous with directions and unexpectedly gentle when announcing a loss.",
    "motivations": "Make sure everyone hears news that affects them, earn trust through accurate announcements and give forgotten people the public acknowledgment they deserve.",
    "adventureHook": "Spectral watchmen begin closing the town gate at dusk, insisting that their long-dead company has never been relieved. Tivren asks the party to recover its signed discharge roll from a record chest in the roof-damaged old barracks so he can read the order aloud with his civic seal. The party must reach the chest through fallen rafters and return before the midnight watch change, when the sentries will bar the gate for another day and strand the waiting supply carts.",
    "locationIds": [
      "market-square",
      "gatehouse",
      "barracks"
    ],
    "locationFit": [
      "Town squares",
      "Gatehouses",
      "Old barracks"
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
    "imageAlt": "Tan-skinned gnome town crier with sandy curls, small moustache and rust-red cap smiling with a brass handbell and rolled parchment beside a stone town gate.",
    "portraitKey": "tivren-hazelwink",
    "portraitFit": "contain",
    "image": "images/characters/tivren-hazelwink.webp",
    "tokenImage": "images/tokens/tivren-hazelwink-token.webp",
    "publishedAt": "2026-11-04T22:00:01-05:00"
  },
  {
    "id": "caldra-wispwick",
    "slug": "caldra-wispwick",
    "name": "Caldra Wispwick",
    "ancestry": "Elf",
    "role": "Perfumer",
    "group": "townsfolk",
    "subtitle": "The last scent of the grove",
    "summary": "Caldra blends perfumes in a tidy workroom, welcoming customers with patient questions and carefully remembered preferences. Her attentive hospitality conceals plans to destroy the wild moonviolet grove and make her stored stock the only local supply.",
    "tableNote": "Offer a clean testing cloth, listen without interrupting and recall one detail from a visitor's last purchase. Say, “You need not choose in a hurry. Tell me the scent you hoped to find, and I will help.” Keep her voice warm when challenged; she describes another person's hardship as an unfortunate cost of doing business.",
    "personality": "Initially friendly, gracious and observant. Deliberately sinister beneath that manner, she is willing to destroy a shared resource and deny healers supplies to gain control of the trade.",
    "motivations": "Eliminate the wild source of moonviolets, force perfumers and healers to buy her reserves at inflated prices and keep her polished reputation intact.",
    "adventureHook": "Caldra's apprentice learns that hired burners will destroy the forest's only moonviolet grove at midnight and brings the party a route sketch and Caldra's signed payment order. The flowers also supply local healers, so the party can escort the apprentice to the watch and stop the crew at the forest clearing, or confront Caldra with the evidence and demand a witnessed cancellation. She offers a share of her stored flowers for silence; saving the grove preserves a source she cannot control.",
    "locationIds": [
      "private-residence",
      "forest-clearing",
      "watchhouse"
    ],
    "locationFit": [
      "Perfume workrooms",
      "Wildflower clearings"
    ],
    "roleCategoryIds": [
      "merchants-crafters",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "wilderness"
    ],
    "tags": [
      "merchant",
      "antagonist"
    ],
    "imageAlt": "Brown-skinned elf perfumer with long pointed ears and black hair in a low bun smiling with a stoppered amber flask and violet flowers in a softly lit workroom.",
    "portraitKey": "caldra-wispwick",
    "portraitFit": "contain",
    "image": "images/characters/caldra-wispwick.webp",
    "tokenImage": "images/tokens/caldra-wispwick-token.webp",
    "publishedAt": "2026-11-04T22:00:00-05:00"
  }
]
```

Independent contributor review approved both complete drafts without required corrections before JSON integration.

## Final artwork and validation

Built-in image generation used Garran Vey as style reference. Tivren: tan gnome, sandy curls hazel eyes small moustache pointed ears, welcoming smile, rust-red cap, indigo civic coat ochre trim cream neckcloth, brass handbell and rolled parchment by a town gate. Caldra: brown-skinned elf, long ears black low bun dark eyes warm smile, cream dress violet waistcoat silver clasp, amber perfume flask and violet sprig in a softly lit workroom. Expressive ink contours, selective crosshatching, rich gouache and graphic shadows; square waist-up, both shoulders, complete heads and generous overhead background. One targeted framing correction added headroom to Caldra while preserving identity and props.

Tokens preserve finalized portrait identities with the approved Brakka antique brass/burgundy/charcoal circular frame and subtle dragon-only bottom medallion, complete hair/headwear/ears and transparent exterior/safety margin. Main portraits: opaque RGB 960×960 WebP quality 75/method 6, Tivren 162,932 bytes and Caldra 97,116 bytes. Tokens: RGBA 280×280 WebP quality 80/method 6, Tivren 26,154 bytes and Caldra 22,206 bytes. Exact dimensions, decoding, token alpha 0–255, transparent corners/edge midpoints and native/70px visual review passed. Four full-resolution lossless sources are retained under project/npc-packs/sources/nightly-2026-11-04/.

Local page build/check (86 pages), public-page DOM, role categories, location-fit categories and Saved checks passed. Local Chromium is unavailable; existing PR CI native 375px/1440px checks must pass before merge, including uncropped cards/profiles, token downloads and Session behavior. All 84 old records and browser storage are preserved.
