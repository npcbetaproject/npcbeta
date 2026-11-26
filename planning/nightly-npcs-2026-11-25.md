# Nightly NPCs — November 25, 2026

Wednesday America/Toronto; area: Temples and Shrines. Fresh main `2b9feb50fe0579502f02bca7256fb8a48646be54`. No existing date branch/PR or published batch;126 records inspected. Publication explicitly authorized.

## Selected concepts

- Tovin Mossribbon — Friendly halfling temple floor polisher; Temples and Shrines: negotiate a procession route around a sleeping stone pilgrim. Varied honest NPC.
- Velren Hushscript — Hostile elf penitential scribe, sinister; Temples and Shrines: animates stolen confessions as whispering threats to extort sanctuary guests.

Concepts randomly chosen with secrets.choice from separate four-option pools; each demeanor independently drawn with equal probability from Friendly, Indifferent and Hostile, yielding Friendly and Hostile. No rerolls. Wednesday retains varied-plus-sinister composition; Monday/Tuesday/Thursday developed-villain and Thursday monster restrictions do not apply. Demeanor is distinct from morality: Tovin’s generosity and Velren’s deliberate theft/extortion establish their conduct. Names/IDs and professions checked against inventory. Tovin shares a first name with Tovin Amberwick but has a distinct full name, ID, ancestry, profession, appearance and hook.

## Draft for independent content review

GM spoilers: wrist inscription/destination, stolen originals, red-thread folio and silent release mechanism. All guests, workers and procession participants are adults. No private confession contents are supplied; the hook protects victims’ control over their accounts. Public index unchanged pending independent contributor review.

```json
[
  {
    "id": "tovin-mossribbon",
    "slug": "tovin-mossribbon",
    "name": "Tovin Mossribbon",
    "ancestry": "Halfling",
    "role": "Temple floor polisher",
    "group": "townsfolk",
    "subtitle": "A stone pilgrim across the procession route",
    "summary": "Tovin polishes a temple’s worn floors and cheerfully guides visitors around the wet patches. An ancient stone pilgrim has fallen asleep across the usual procession route, leaving the stewards divided over whether to wake it or change their plans.",
    "tableNote": "Offer visitors a dry cloth to wipe their boots, introduce everyone by name and explain the problem as though inviting help with a shared chore. Say, “Mind the shine, friend. Our guest has chosen a grand place for a nap—shall we find everyone a little room?” She is initially friendly and eager to hear a workable suggestion.",
    "personality": "Initially friendly, talkative and patient with confused visitors; she respects the stone pilgrim as a guest and dislikes treating ceremony as more important than people.",
    "motivations": "Keep the floor and visitors safe, let the procession proceed with dignity and help the old pilgrim reach the resting place it was seeking.",
    "adventureHook": "Tovin asks the party to speak with the stewards before the procession assembles. The pilgrim’s wrist inscription names the west cloister as its destination, but that door is locked and the caretaker has not heard about its arrival. The party can find the caretaker, arrange a quieter route through the courtyard or wait for the pilgrim to wake and offer directions. Tovin supplies cloths to mark a dry path and accepts postponing the ceremony if no suitable route is available. Helping both visitors and pilgrim earns a welcoming temple contact.",
    "locationIds": [
      "chapel",
      "courtyard"
    ],
    "locationFit": [
      "Temple entrance halls",
      "Shrine cloisters",
      "Temple processional courtyards"
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
    "imageAlt": "Welcoming brown-skinned halfling temple floor polisher with black curls touched gray and an ochre kerchief, wearing a cream work dress and sage apron while holding a cloth and wooden wax pot beside a polishing brush.",
    "portraitKey": "tovin-mossribbon",
    "portraitFit": "contain",
    "image": "images/characters/tovin-mossribbon.webp",
    "tokenImage": "images/tokens/tovin-mossribbon-token.webp",
    "publishedAt": "2026-11-25T22:00:01-05:00"
  },
  {
    "id": "velren-hushscript",
    "slug": "velren-hushscript",
    "name": "Velren Hushscript",
    "ancestry": "Elf",
    "role": "Penitential scribe",
    "group": "townsfolk",
    "subtitle": "Confessions that whisper demands",
    "summary": "Velren copies penitential accounts for adults staying in temple sanctuary and regards questions about his work with open suspicion. He steals sealed originals and animates scraps of their words into whispering threats, demanding payment to keep the accounts private.",
    "tableNote": "Cover the folio with one hand, ask who authorized the visit and answer interruptions with clipped contempt. Say, “These are private papers. State your business, and keep your hands where I can see them.” His initial hostility conceals his own violation of the privacy he invokes.",
    "personality": "Initially hostile, defensive and disdainful of scrutiny; he treats the trust of vulnerable guests as a resource to exploit and insists his copying fees entitle him to more than he was promised.",
    "motivations": "Collect secret payments from sanctuary guests and retain their originals as leverage. He wants a profitable private archive beyond the temple’s oversight.",
    "adventureHook": "A sanctuary guest asks the party to stop a folded paper slip that whispers her name and a demand for money outside her door. GM secret: Velren keeps the stolen originals in a red-thread-bound folio; while it remains tied, he can send the animated scraps after their authors. The party can seek willing testimony, trace the slips to his writing alcove or ask a steward to secure the folio. Untying its thread silences the scraps without exposing the sealed originals. Returning each account privately to its author and preserving the payment demands as evidence can end the extortion without turning the victims’ disclosures into public spectacle.",
    "locationIds": [
      "chapel",
      "academy-library",
      "storeroom"
    ],
    "locationFit": [
      "Temple sanctuary offices",
      "Shrine writing alcoves",
      "Sanctuary record rooms"
    ],
    "roleCategoryIds": [
      "scholars-magic",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "settlements"
    ],
    "tags": [
      "antagonist"
    ],
    "imageAlt": "Suspicious pale elf penitential scribe with long pointed ears and straight black hair tipped silver, wearing an indigo robe and ivory shoulder cloth while guarding a worn leather folio in a temple writing alcove.",
    "portraitKey": "velren-hushscript",
    "portraitFit": "contain",
    "image": "images/characters/velren-hushscript.webp",
    "tokenImage": "images/tokens/velren-hushscript-token.webp",
    "publishedAt": "2026-11-25T22:00:00-05:00"
  }
]
```

## Independent content review

Contributor content_review30 approved before JSON integration: both meaningful Temples and Shrines settings, Friendly honest Tovin and Hostile explicitly sinister Velren, distinct playable hooks with privacy-preserving interventions, originality against126, supported fields, unique full names/IDs, classifications/tags/published locations, spoilers and matching Markdown/JSON. No required corrections.

## Artwork and validation

Built-in image generation created original Ink and colour portraits using Garran Vey only for medium/style. Each token derives from its finalized portrait with Brakka’s brass/burgundy/charcoal border and a small dragon-head-only bottom medallion. Complete heads/hair/ears/headwear, both shoulders and headroom inspected. Final960px portraits,280px tokens and70px tabletop previews reviewed for recognizable identity, sharp facial detail, complete frame and readability. No placeholders, enlarged thumbnails or corrective variants.

| Asset | Dimensions/mode | Bytes | Export |
| --- | --- | ---: | --- |
| Tovin portrait | 960×960 opaque RGB | 187754 | WebP q75/method6 |
| Tovin token | 280×280 RGBA | 24944 | WebP q80/method6 |
| Velren portrait | 960×960 opaque RGB | 156808 | WebP q75/method6 |
| Velren token | 280×280 RGBA | 22352 | WebP q80/method6 |

Tovin’s temple detail slightly exceeds the approximate portrait target at required quality. All4 decode; tokens have alpha0–255, transparent corners/edge midpoints and6px export safety margin. Four full1254×1254 lossless VP8L sources retained in project/npc-packs/sources/nightly-2026-11-25: Tovin portrait2383650/token1808668 bytes; Velren portrait2285870/token1727624 bytes.

128 unique IDs/slugs; all126 previous records exact as JSON values and in original order. Valid role/location-fit memberships and published location refs, two mappings and tokenImage paths.22:00:01/22:00:00 Toronto release ordering.15 intended changed files; all other copied current-main files hash-identical, with untouched remote files preserved via base tree. Shared app/storage unchanged.

Generated pages build/check, public-page tests, Saved/role/location-fit/token DOM suites and mapping syntax passed after export. Existing token actions remain below introduction with Copy link/View full page; Session/storage preservation and stale-action reset covered. Local Chromium unavailable; required PR CI must pass native375/1440 cards/profiles, actual token bytes/filenames, sharing and Session before merge. Verify production and actual live responses afterward; final evidence in PR conversation.

## Generation prompts

Built-in image generation, opaque portraits and transparent_background=true tokens. One prompt per asset, no corrective variants.

```json
{
  "portraits": [
    {
      "id": "tovin-mossribbon",
      "prompt": "Use case: stylized-concept. ONE standalone original square NPC Beta portrait. Garran Vey reference is painted INK/GOUACHE MEDIUM ONLY, not human identity/sword/forge. Expressive ink contours, selective crosshatching, rich gouache colour and graphic shadows, believable anatomy, grounded medieval clothing. Sharp opaque full-resolution square. Centered waist-up, both complete shoulders and ENTIRE head/hair/ears/kerchief visible. Highest head point25 percent down from top, clear generous background above/beside head, face upper-middle, props BELOW face. No tight closeup/cropped head, text/frame/watermark/extra people, photographic pores/camera texture or exaggerated cartoon. Tovin Mossribbon, adult female HALFLING temple floor polisher, compact sturdy halfling proportions, warm medium-brown skin, round kindly face, curly black hair touched gray at temples, ochre kerchief and small gently pointed ears fully visible. FRIENDLY warm helpful broad smile and lively welcoming eyes. Simple cream linen work dress, sage-green apron, rolled sleeves, holding a polishing cloth and small wooden wax pot below chest, long-handled polishing brush beside her. Quiet stone TEMPLE vestibule softly behind, polished floor and plain columns, warm morning window light. Civilian worker, no weapons, no real-world religious logos."
    },
    {
      "id": "velren-hushscript",
      "prompt": "Use case: stylized-concept. ONE standalone original square NPC Beta portrait. Garran Vey reference is painted INK/GOUACHE MEDIUM ONLY, not human identity/sword/forge. Expressive ink contours, selective crosshatching, rich gouache colour and graphic shadows, believable anatomy, grounded medieval clothing. Sharp opaque full-resolution square. Centered waist-up, both complete shoulders and ENTIRE head/hair/ears/kerchief visible. Highest head point25 percent down from top, clear generous background above/beside head, face upper-middle, props BELOW face. No tight closeup/cropped head, text/frame/watermark/extra people, photographic pores/camera texture or exaggerated cartoon. Velren Hushscript, adult male ELF penitential scribe, pale cool skin, long pointed ears fully visible, narrow angular face, straight black chin-length hair with silver tips tucked behind ears, clean-shaven. HOSTILE defensive suspicious narrowed gray eyes and thin unsmiling lips. Plain indigo wool scholar robe, ivory shoulder cloth, ink-stained fingers holding a closed worn leather folio below chest with quill tucked into belt. TEMPLE sanctuary writing alcove softly behind, shelves and sealed paper bundles, cool window light and small amber candle. Sinister agenda embodied in guarded behavior, no gore/weapons/readable writing/real-world religious logos."
    }
  ],
  "tokens": [
    {
      "id": "tovin-mossribbon",
      "prompt": "Create one circular tabletop token. Reference1 is ONLY character identity and painted Ink and colour medium: female medium-brown halfling, complete slightly pointed ears/black-gray curls/ochre kerchief including knot, friendly welcoming smile, cream work dress/sage apron. Preserve exact features/costume/ancestry/expression. Reference2 defines approved Brakka border: thin restrained antique brass/burgundy/charcoal concentric rings, three tiny top/left/right diamonds, small bottom round medallion. Reference3 supplies ONLY subtle red dragon-head silhouette inside bottom medallion; no lettering/nameplate. Center head and upper chest, complete hair/ears/headwear inside circle with extra interior safety space; entire circular border safely inside square with transparent margin. Expressive ink contours/selective crosshatching/rich gouache/graphic shadows, no photographic texture. Subdued interior background, genuinely transparent alpha exterior, NO exterior shadow/background/extra scenery/text/watermark. Crisp readable face at280px."
    },
    {
      "id": "velren-hushscript",
      "prompt": "Create one circular tabletop token. Reference1 is ONLY character identity and painted Ink and colour medium: pale male elf, full long pointed ears/straight black bob with silver tips, hostile suspicious frown, indigo robe and ivory shoulder cloth. Preserve exact features/costume/ancestry/expression. Reference2 defines approved Brakka border: thin restrained antique brass/burgundy/charcoal concentric rings, three tiny top/left/right diamonds, small bottom round medallion. Reference3 supplies ONLY subtle red dragon-head silhouette inside bottom medallion; no lettering/nameplate. Center head and upper chest, complete hair/ears/headwear inside circle with extra interior safety space; entire circular border safely inside square with transparent margin. Expressive ink contours/selective crosshatching/rich gouache/graphic shadows, no photographic texture. Subdued interior background, genuinely transparent alpha exterior, NO exterior shadow/background/extra scenery/text/watermark. Crisp readable face at280px."
    }
  ]
}

```
