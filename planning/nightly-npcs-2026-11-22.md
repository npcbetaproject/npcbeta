# Nightly NPCs — November 22, 2026

Sunday America/Toronto; area: Ancient Dungeon Ruins. Fresh main `4974ece2294ca189395513418598ea565233233c`. Date branch/PR checks found no existing batch and the120 published records contain no November22 entries. Publication explicitly authorized.

## Selected concepts

- Merris Reedknuckle — Indifferent halfling excavation hauler; Ancient Dungeon Ruins: recover a borrowed sled before a subterranean stream carries it into a sealed chamber. Varied honest NPC.
- Zerrek Thornseal — Friendly goblin ruin concession broker, sinister; Ancient Dungeon Ruins: sells duplicate excavation rights and provokes deadly feuds to seize the finds.

Concepts drawn with secrets.choice from separate six-option pools after inspecting120 records. Each demeanor independently drawn with equal probability from Friendly, Indifferent and Hostile. Demeanor is distinct from morality. Sunday requires the varied-plus-sinister pair in Ancient Dungeon Ruins; Thursday monster and Monday/Tuesday/Thursday developed-villain restrictions do not apply. Names, professions and hooks checked for collisions and recent repetition.

## Draft for independent content review

GM spoilers: duplicate excavation rights, deliberate false theft reports, arranged confrontation and carriers using the service passage. All expedition members referenced are adults. Both hooks permit negotiation and protective alternatives. Public JSON remains unchanged pending another contributor’s review.

```json
[
  {
    "id": "merris-reedknuckle",
    "slug": "merris-reedknuckle",
    "name": "Merris Reedknuckle",
    "ancestry": "Halfling",
    "role": "Excavation hauler",
    "group": "townsfolk",
    "subtitle": "A borrowed sled in the rising channel",
    "summary": "Merris moves excavated stone and supplies through ancient underground galleries, measuring every load before she takes a contract. Her borrowed hauling sled has slipped into a rising stream and caught against the partly open door of a forgotten storeroom.",
    "tableNote": "Keep winding a rope while visitors talk, ask how much weight their gear can bear and discuss the task without ceremony. Say, “The sled belongs to someone else. Tell me what you can anchor, and we can get to work.” She is initially indifferent and occupied with the recovery.",
    "personality": "Initially indifferent, practical and absorbed in her work; she takes borrowed equipment seriously and refuses to risk another worker merely to save a tool.",
    "motivations": "Return the sled intact, finish hauling the excavation spoil and keep a reputation for bringing borrowed gear back in working order.",
    "adventureHook": "Merris offers hauling work or a share of her fee for recovering the sled before the stream pushes it through the storeroom door. Its iron runners are caught on the stone sill, and a dry service ledge provides a place to inspect the obstruction without entering the current. The party can find a sound anchor, clear the accessible end of the sill or arrange help from the excavation crew. Merris accepts abandoning the sled if recovery would put people in danger, but asks for its owner’s brass plate back if that can be retrieved safely. Success earns a capable hauler who knows the ruin’s supply routes.",
    "locationIds": [
      "forgotten-storeroom",
      "cistern-chamber",
      "cavern-pool"
    ],
    "locationFit": [
      "Ancient dungeon service galleries",
      "Flooded excavation passages",
      "Underground supply stations"
    ],
    "roleCategoryIds": [
      "workers-services"
    ],
    "locationFitCategoryIds": [
      "dungeons-ruins"
    ],
    "tags": [
      "quest-giver"
    ],
    "imageAlt": "Busy brown-skinned halfling excavation hauler with a round freckled face and dark auburn braid, wearing an ochre shirt, faded blue work vest and leather hauling straps while holding rope and a wooden sled handle in an ancient stone gallery.",
    "portraitKey": "merris-reedknuckle",
    "portraitFit": "contain",
    "image": "images/characters/merris-reedknuckle.webp",
    "tokenImage": "images/tokens/merris-reedknuckle-token.webp",
    "publishedAt": "2026-11-22T22:00:01-05:00"
  },
  {
    "id": "zerrek-thornseal",
    "slug": "zerrek-thornseal",
    "name": "Zerrek Thornseal",
    "ancestry": "Goblin",
    "role": "Ruin concession broker",
    "group": "townsfolk",
    "subtitle": "Two crews, one promised vault",
    "summary": "Zerrek welcomes explorers to an ancient dungeon with maps and offers to arrange exclusive excavation rights. He knowingly sells the same vault to rival crews, then feeds each false reports of theft so they will fight while his hired carriers take the finds.",
    "tableNote": "Greet everyone by name, offer a dry seat and praise their expedition before explaining his generous terms. Say, “Friends, you’ve found the right desk. Let’s make certain all that hard work pays.” His initial friendliness is sincere in manner, while his promises conceal a malicious scheme.",
    "personality": "Initially friendly, attentive and eager to make introductions; he treats other people’s ambitions as openings to exploit and dismisses the harm caused by his bargains.",
    "motivations": "Gain control of the ruin’s most valuable finds without paying for an excavation. He wants the rival crews blamed for the violence while his carriers move the goods through a disused service passage.",
    "adventureHook": "Two adult expedition leaders bring the party different contracts that each grant exclusive rights to the same burial vault. GM secret: Zerrek has arranged a confrontation at the vault and hired carriers to remove its finds through a side passage during the dispute. The contracts bear the same boundary sketch, and one carrier’s receipt names the service entrance. The party can bring the crews together before the confrontation, compare the documents, watch the side passage or persuade a carrier to explain the delivery. Zerrek offers a profitable new claim for silence, but his scheme depends on the crews never speaking directly. Exposing the duplicate grants and recovering the finds deprives him of both the haul and his reputation.",
    "locationIds": [
      "burial-vault",
      "guardroom",
      "forgotten-storeroom"
    ],
    "locationFit": [
      "Ancient dungeon excavation camps",
      "Ruined vault entrances",
      "Underground concession offices"
    ],
    "roleCategoryIds": [
      "workers-services",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "dungeons-ruins"
    ],
    "tags": [
      "antagonist"
    ],
    "imageAlt": "Friendly moss-green goblin ruin concession broker with long pointed ears, amber eyes and swept-back silver-gray hair, wearing a rust-red tunic and dark teal cloak while offering an open hand beside a leather document case in an ancient dungeon hall.",
    "portraitKey": "zerrek-thornseal",
    "portraitFit": "contain",
    "image": "images/characters/zerrek-thornseal.webp",
    "tokenImage": "images/tokens/zerrek-thornseal-token.webp",
    "publishedAt": "2026-11-22T22:00:00-05:00"
  }
]
```

## Independent content review

Contributor content_review30 approved before public JSON integration: both meaningful Ancient Dungeon Ruins settings, distinct actionable hooks, honest Indifferent Merris and Friendly deliberately sinister Zerrek, supported fields, classifications, tags and published locations, originality against120 records, spoiler handling and matching Markdown/JSON. No required corrections.

## Artwork and validation

Built-in image generation created both original portraits in the approved Ink and colour style, referencing Garran Vey for medium only. Tokens reference the finished portrait for identity, Brakka Hearthhand for the brass/burgundy/charcoal frame, and the logo for its small dragon-only emblem. Full heads, hair and ears remain visible with background above; both shoulders and profession props are shown. Final960px portraits,280px tokens and70px tabletop token previews were visually reviewed for sharpness, identity and complete frames. No placeholders, enlarged thumbnails or corrective regeneration.

| Asset | Final dimensions / mode | Bytes | Encoding |
| --- | --- | ---: | --- |
| Merris portrait | 960×960 opaque RGB | 205060 | WebP quality75/method6 |
| Merris token | 280×280 RGBA | 23640 | WebP quality80/method6 |
| Zerrek portrait | 960×960 opaque RGB | 209468 | WebP quality75/method6 |
| Zerrek token | 280×280 RGBA | 24624 | WebP quality80/method6 |

Portraits exceed the approximate size target to preserve dense painted ruin detail at required quality. Tokens use a six-pixel export safety margin; alpha extrema0–255 and corners/edge midpoints are transparent. All4 decode correctly. Full1254×1254 lossless VP8L WebP sources retained under project/npc-packs/sources/nightly-2026-11-22: Merris portrait2413438/token1801830 bytes; Zerrek portrait2419902/token1847624 bytes.

122 unique IDs/slugs; old120 records preserved exactly as JSON values and in original order. Valid classifications, location references, two mappings and tokenImage paths verified. Release times22:00:01/22:00:00 Toronto place the pair first deterministically.15 intended changed files; all other copied current-main files remain hash-identical, and the atomic tree preserves all untouched remote files. Shared app/storage code unchanged.

Generated pages build/check and public-page tests passed after final assets were exported. Saved/role/location-fit DOM suites passed including storage preservation and mixed Session behavior. Token DOM tests passed including download/action placement below introduction alongside Copy link/View full page and no stale action. Local Chromium is unavailable; existing required PR native browser CI must pass375/1440 cards/profiles, token bytes/filenames and Session checks before merge. Production deployment and actual live responses must be verified after merge; final evidence recorded in the PR conversation.

## Generation prompts

Built-in image generation; portraits opaque, tokens transparent_background=true. One prompt per asset, no corrective variants.

```json
{
  "portraits": [
    {
      "id": "merris-reedknuckle",
      "prompt": "Use case: stylized-concept. One standalone square NPC Beta portrait. Reference Garran Vey is STYLE/MEDIUM ONLY, not character identity, sword or forge. Painted Ink and colour fantasy RPG illustration, expressive ink contours, selective crosshatching, rich gouache colour and graphic shadows, believable anatomy, grounded medieval clothing. Opaque sharp full-resolution square. Centered waist-up; both complete shoulders and ENTIRE head/hair/ears visible with 20 percent clear background ABOVE highest hair point. Face upper-middle, profession props below face. No close crop, text, labels, frames, photographic pores, camera texture, watermark or extra people. Merris Reedknuckle, adult female HALFLING excavation hauler: medium warm brown skin, round freckled face, broad small nose, thick dark auburn hair in a low braid, small gently pointed ears, compact sturdy halfling proportions. Indifferent busy professional expression, relaxed closed mouth, not smiling. Ochre wool shirt, faded blue practical sleeveless work vest, leather hauling straps and patched canvas gloves; holding a coil of hemp rope and wooden sled handle BELOW chest. Ancient underground stone gallery, worn carved blocks, small water channel and sled softly behind, warm lantern light and cool reflected water. Not a warrior, no weapons."
    },
    {
      "id": "zerrek-thornseal",
      "prompt": "Use case: stylized-concept. One standalone square NPC Beta portrait. Reference Garran Vey is STYLE/MEDIUM ONLY, not character identity, sword or forge. Painted Ink and colour fantasy RPG illustration, expressive ink contours, selective crosshatching, rich gouache colour and graphic shadows, believable anatomy, grounded medieval clothing. Opaque sharp full-resolution square. Centered waist-up; both complete shoulders and ENTIRE head/hair/ears visible with 20 percent clear background ABOVE highest hair point. Face upper-middle, profession props below face. No close crop, text, labels, frames, photographic pores, camera texture, watermark or extra people. Zerrek Thornseal, adult male GOBLIN ruin concession broker: muted moss-green skin, long pointed ears fully visible, angular friendly face, sly bright amber eyes, narrow chin, swept-back short silver-grey hair, no beard. Warm helpful welcoming smile, palm open in greeting, morality hidden behind friendly demeanor. Elegant but travel-worn rust-red tunic and dark teal short cloak with brass clasp, leather document case and rolled parchment below chest; no modern suit, no readable writing. Ancient dungeon entry hall, eroded stone pillars and excavation crates softly behind, lantern warmth against blue underground shadows. Civilian broker, no weapons or gore."
    }
  ],
  "tokens": [
    {
      "id": "merris-reedknuckle",
      "prompt": "Create one circular tabletop token. Reference1 is ONLY character identity and painted Ink and colour style: female brown-skinned freckled halfling, entire auburn braid and gently pointed ears, ochre shirt and faded blue work vest, indifferent professional closed-mouth expression. Preserve recognizable exact features, costume and expression. Reference2 defines approved Brakka frame: restrained thin antique brass/burgundy/charcoal concentric border, three tiny diamond ornaments top/left/right, small bottom medallion. Reference3 supplies ONLY red dragon head silhouette in bottom medallion; no lettering or nameplate. Recompose head and upper chest with COMPLETE head/hair/ears inside circle, generous interior safety space around highest hair and ear tips. Match expressive ink/selective crosshatching/rich gouache/graphic shadows; no photographic texture. Subdued painted interior background, entire circular frame visible safely inside square canvas. Exterior outside border genuinely transparent alpha, NO exterior shadow, square background, extra scenery, text or watermark. Crisp readable face at280px."
    },
    {
      "id": "zerrek-thornseal",
      "prompt": "Create one circular tabletop token. Reference1 is ONLY character identity and painted Ink and colour style: male moss-green goblin, both complete long pointed ears and swept-back silver-grey hair, amber eyes, rust-red tunic and teal cloak with brass clasp, welcoming friendly smile. Preserve recognizable exact features, costume and expression. Reference2 defines approved Brakka frame: restrained thin antique brass/burgundy/charcoal concentric border, three tiny diamond ornaments top/left/right, small bottom medallion. Reference3 supplies ONLY red dragon head silhouette in bottom medallion; no lettering or nameplate. Recompose head and upper chest with COMPLETE head/hair/ears inside circle, generous interior safety space around highest hair and ear tips. Match expressive ink/selective crosshatching/rich gouache/graphic shadows; no photographic texture. Subdued painted interior background, entire circular frame visible safely inside square canvas. Exterior outside border genuinely transparent alpha, NO exterior shadow, square background, extra scenery, text or watermark. Crisp readable face at280px."
    }
  ]
}

```
