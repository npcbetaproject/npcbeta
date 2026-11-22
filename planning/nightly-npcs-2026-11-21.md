# Nightly NPCs — November 21, 2026

Saturday America/Toronto; area: Wilderness Outposts. Fresh main `9cc0d0fd85acfc6555ee911e59924f0cd343de89`. Date branch/PR checks found no existing work; current118 records contain no November21 entries. Publication explicitly authorized.

## Selected concepts

- Udrik Amberbark — Indifferent dwarf resin tapper; Wilderness Outposts: retrieves a marked resin batch from an abandoned storehouse without disturbing a nesting colony. Varied honest NPC.
- Vessra Blacktally — Hostile goblin outpost paymaster, sinister; Wilderness Outposts: steals the winter wage chest and plans a false evacuation leaving the unpaid adult crew without shelter.

Concepts selected randomly from separate six-option pools using secrets.choice. Independent equal-probability demeanor draws from Friendly, Indifferent and Hostile yielded Indifferent and Hostile. Demeanor is distinct from morality; Vessra’s theft and knowingly dangerous false relief plan establish her sinister agenda. Saturday retains varied-plus-sinister composition, without the Monday/Tuesday/Thursday villain or Thursday monster requirements. Udrik’s nesting swallows are an access/logistics problem, not an animal attack; waiting is an accepted solution. Vessra’s dispatched relief fraud has concrete payroll/transport evidence, unlike an invented supernatural omen.

## Draft for independent content review

GM spoilers: resin ownership marks, stolen wages, false evacuation, empty lower camp and private freight wagon. All workers and officials referenced are adults. The hook prioritizes keeping the crew sheltered and arranging genuine relief; it gives no real-world instructions for exposure or financial crime. Review before public JSON integration.

```json
[
  {
    "id": "udrik-amberbark",
    "slug": "udrik-amberbark",
    "name": "Udrik Amberbark",
    "ancestry": "Dwarf",
    "role": "Resin tapper",
    "group": "townsfolk",
    "subtitle": "A marked batch beneath occupied rafters",
    "summary": "Udrik gathers and grades pine resin from a small woodland outpost, talking about yields while his hands remain busy. A batch he paid to store at an abandoned neighboring station is ready for collection, but nesting swallows now occupy the rafters above its loading hatch.",
    "tableNote": "Check a bucket seal while visitors speak, ask what carrying gear they brought and answer in short practical phrases. Say, “Three marked tubs, no broken seals. Tell me how you’ll move them without wrecking the nests.” He is initially indifferent and focused on the job, not hostile to help.",
    "personality": "Initially indifferent, absorbed in quantities and schedules; patient with careful work and unwilling to destroy a nesting colony merely to save himself a journey.",
    "motivations": "Recover the paid-for resin intact, keep his own outpost supplied for repairs and leave the swallows undisturbed until their young have fledged.",
    "adventureHook": "Udrik offers a share of his next resin delivery for help collecting three tubs bearing his pinecone mark. The usual loading hatch would disturb nests directly above it. The party can inspect the station with him, negotiate access through a neighboring forester’s side door or organize smaller loads through a clear passage. Udrik accepts delaying collection if no safe route is available, but wants the batch recorded and protected from weather in the meantime. A careful solution earns a reliable supply contact at his woodland outpost.",
    "locationIds": [
      "hunters-cabin",
      "abandoned-logging-camp",
      "forest-clearing"
    ],
    "locationFit": [
      "Woodland resin stations",
      "Remote supply storehouses",
      "Forest work outposts"
    ],
    "roleCategoryIds": [
      "workers-services"
    ],
    "locationFitCategoryIds": [
      "wilderness"
    ],
    "tags": [
      "merchant",
      "quest-giver"
    ],
    "imageAlt": "Busy dark-brown-skinned dwarf resin tapper with a square gray-streaked beard and cropped black hair, wearing a moss-brown work jacket and leather apron while holding a sealed wooden resin bucket outside a forest outpost.",
    "portraitKey": "udrik-amberbark",
    "portraitFit": "contain",
    "image": "images/characters/udrik-amberbark.webp",
    "tokenImage": "images/tokens/udrik-amberbark-token.webp",
    "publishedAt": "2026-11-21T22:00:01-05:00"
  },
  {
    "id": "vessra-blacktally",
    "slug": "vessra-blacktally",
    "name": "Vessra Blacktally",
    "ancestry": "Goblin",
    "role": "Outpost paymaster",
    "group": "townsfolk",
    "subtitle": "The relief wagon that was never ordered",
    "summary": "Vessra keeps the accounts of a remote prospecting outpost and greets questions with sharp suspicion. She has stolen its winter wage chest and issued a false evacuation order claiming that relief wagons will take the adult crew to shelter, although she has arranged no such transport.",
    "tableNote": "Shut the ledger when someone approaches, demand a written reason for every question and treat casual concern as an accusation. Say, “Show me whose authority you’re questioning these accounts under. Otherwise get out of my office.” Her hostility guards a deliberate theft, not a harmless misunderstanding.",
    "personality": "Initially hostile, defensive and contemptuous of scrutiny; quick to invoke procedure while ignoring the obligations that protect the workers whose wages she controls.",
    "motivations": "Leave with the stolen wages before the next accounts inspection and blame the missing chest on confusion during evacuation. She has hired a private northbound freight wagon, while her false order sends the crew toward an unstaffed lower camp.",
    "adventureHook": "An adult camp worker asks the party why the paymaster’s closure notice promises relief wagons that do not appear in the dispatch book. GM secret: Vessra plans to send the unpaid crew out of its winter quarters and move the wage chest north on her own hired wagon. The outpost charter guarantees shelter until relief arrives, and the freight receipt names the wagon she hired. Before the announced departure, the party can secure those records, help the crew remain in safe quarters, verify the empty lower camp or intercept the private wagon. Vessra offers a portion of the money for silence. Recovering the chest and exposing the false order lets the crew arrange a genuine relief plan rather than walk into the wilderness without shelter.",
    "locationIds": [
      "hunters-cabin",
      "storeroom",
      "roadside-campsite"
    ],
    "locationFit": [
      "Remote prospecting outposts",
      "Outpost pay offices",
      "Winter supply camps"
    ],
    "roleCategoryIds": [
      "workers-services",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "wilderness"
    ],
    "tags": [
      "antagonist"
    ],
    "imageAlt": "Suspicious olive-green-skinned goblin outpost paymaster with long pointed ears, a sharp face and black hair in a tight topknot, wearing a plum wool coat and fingerless gloves while clutching a closed ledger in a remote timber office.",
    "portraitKey": "vessra-blacktally",
    "portraitFit": "contain",
    "image": "images/characters/vessra-blacktally.webp",
    "tokenImage": "images/tokens/vessra-blacktally-token.webp",
    "publishedAt": "2026-11-21T22:00:00-05:00"
  }
]
```

## Independent content review

Contributor content_review30 approved before index integration: meaningful Wilderness Outposts setting, distinct actionable hooks with protective alternatives, Indifferent honest Udrik versus Hostile explicitly sinister Vessra, names/IDs/supported fields/classifications/tags/published locations, originality against118 records, spoiler handling and matching Markdown/JSON. No required corrections.

## Artwork and validation

Built-in image generation produced original full-size painted ink-and-colour portraits, following Garran Vey only for medium and rendering style. The matching tokens use each portrait for identity, Brakka Hearthhand for the approved brass/burgundy/charcoal circular frame and the logo only for its small dragon-head emblem. No text or nameplates. No placeholders or enlarged thumbnails. Full heads, hair and ears remain visible with headroom. Both token portraits retain the same features and costumes. Full-size and 70px token inspections passed.

| Asset | Final dimensions / mode | Bytes | Encoding |
| --- | --- | ---: | --- |
| Udrik portrait | 960×960 opaque RGB | 217300 | WebP quality75/method6 |
| Udrik token | 280×280 RGBA | 23996 | WebP quality80/method6 |
| Vessra portrait | 960×960 opaque RGB | 164904 | WebP quality75/method6 |
| Vessra token | 280×280 RGBA | 22804 | WebP quality80/method6 |

Udrik’s dense forest artwork exceeds the approximate portrait size target to retain sharp full-size detail at the required quality. All four WebPs decoded successfully. Tokens have alpha0–255 with transparent corners and edge midpoints, with a six-pixel export safety margin around the resized frame. Source artwork retained as full1254×1254 lossless VP8L WebP under project/npc-packs/sources/nightly-2026-11-21. Source bytes: Udrik portrait2499590/token1773842; Vessra portrait2270120/token1633130.

120 unique IDs/slugs; all118 previous records remain byte-equivalent as JSON values in their original order. All prior local repository files match fresh main except the15 intended files. Valid role/location classifications and published location IDs, two portrait mappings and tokenImage paths verified. Release ordering uses22:00:01 and22:00:00 Toronto. Generated pages, directory and sitemap build/check and public-page tests passed. Saved filter, role categories, location-fit DOM and token DOM tests passed, including storage preservation, mixed Session behavior and action placement below introduction with Copy link/View full page. Shared app/storage code was not changed.

Local native Chromium is unavailable. Existing PR CI must pass the native desktop/mobile public-page suite, including contained960px portraits, token downloads and Session behavior, before merge. Production deployment and live profile/record/asset checks are required after merge; final evidence recorded in the PR conversation.

## Generation prompts

Each prompt below was sent to built-in image generation; tokens used transparent_background=true. Portraits used transparent_background=false. No corrective regeneration was needed.

```json
{
  "portraits": [
    {
      "id": "udrik-amberbark",
      "prompt": "Use case: stylized-concept. ONE standalone square NPC Beta portrait. Garran Vey reference is MEDIUM/INK STYLE ONLY, not identity, forge or sword. Painted Ink and colour fantasy RPG illustration: expressive ink contours, selective crosshatching, rich gouache colour, clear graphic shadow shapes and believable anatomy. Sharp full-resolution opaque square artwork. Centered WAIST-UP, both complete shoulders and whole head/hair/ears/headwear inside canvas. Highest head point20% down from top with generous background above and beside head, face upper-middle, props BELOW face. No tight closeup, cropped head, text, frame, watermark, photographic pores/camera textures or extra characters. Udrik Amberbark, adult male DWARF resin tapper, dark brown skin, square gray-streaked beard, cropped black hair, small round ears, busy indifferent expression, broad sturdy dwarf build. Moss-brown wool work jacket and practical leather apron, resin-stained gloves, holding a sealed wooden bucket with a simple pinecone brand below chest. Outside remote timber forest outpost, pines, stacked timber and a workbench softly behind, cool woodland daylight with amber-brown highlights. Grounded medieval forest worker, no weapons or modern gear."
    },
    {
      "id": "vessra-blacktally",
      "prompt": "Use case: stylized-concept. ONE standalone square NPC Beta portrait. Garran Vey reference is MEDIUM/INK STYLE ONLY, not identity, forge or sword. Painted Ink and colour fantasy RPG illustration: expressive ink contours, selective crosshatching, rich gouache colour, clear graphic shadow shapes and believable anatomy. Sharp full-resolution opaque square artwork. Centered WAIST-UP, both complete shoulders and whole head/hair/ears/headwear inside canvas. Highest head point20% down from top with generous background above and beside head, face upper-middle, props BELOW face. No tight closeup, cropped head, text, frame, watermark, photographic pores/camera textures or extra characters. Vessra Blacktally, adult female GOBLIN outpost paymaster, olive-green skin, long pointed ears, sharp angular face, black hair in a tight topknot with full topknot visible. Hostile suspicious defensive expression, narrowed eyes and firmly pressed lips, not smiling. Plum wool coat, charcoal waistcoat, fingerless gloves, clutching a closed dark ledger below chest. Remote wilderness timber pay office, shuttered window showing snowy pines softly behind, account chests and shelves, muted cool forest light and small amber lamplight. Compact goblin anatomy, professional clothing, no weapons or violence, no modern objects or readable text."
    }
  ],
  "tokens": [
    {
      "id": "udrik-amberbark",
      "prompt": "Create a matching tabletop circular character token using reference 1 as the ONLY character identity and painted ink-and-gouache artwork: udrik-amberbark. Reference 2 defines the approved Brakka frame: replicate its thin antique brass rim, burgundy and charcoal concentric accents, three tiny diamond ornaments at top/left/right, and small bottom round medallion. Reference 3 supplies ONLY the dragon head silhouette for that bottom medallion: subtle red dragon head only, no lettering, no NPC Beta words. Preserve reference 1's facial features, ancestry, skin, hairstyle and costume, expression. Recompose a clear bust with the COMPLETE head, all hair and ears fully inside the circle, extra safety space above hair; square grey-streaked beard, cropped black hair, dark brown skin, moss-brown jacket, indifferent professional expression. Painted fantasy illustration, crisp at small scale, no photographic texture. Subdued painted background inside circle. Perfectly round full visible frame; entire exterior outside frame MUST be truly transparent alpha, no exterior shadow, no square background. Frame fits safely within canvas with small transparent margin. No text or nameplate."
    },
    {
      "id": "vessra-blacktally",
      "prompt": "Create a matching tabletop circular character token using reference 1 as the ONLY character identity and painted ink-and-gouache artwork: vessra-blacktally. Reference 2 defines the approved Brakka frame: replicate its thin antique brass rim, burgundy and charcoal concentric accents, three tiny diamond ornaments at top/left/right, and small bottom round medallion. Reference 3 supplies ONLY the dragon head silhouette for that bottom medallion: subtle red dragon head only, no lettering, no NPC Beta words. Preserve reference 1's facial features, ancestry, skin, hairstyle and costume, expression. Recompose a clear bust with the COMPLETE head, all hair and ears fully inside the circle, extra safety space above hair; include both long pointed ears and entire topknot, hostile guarded frown, plum coat. Painted fantasy illustration, crisp at small scale, no photographic texture. Subdued painted background inside circle. Perfectly round full visible frame; entire exterior outside frame MUST be truly transparent alpha, no exterior shadow, no square background. Frame fits safely within canvas with small transparent margin. No text or nameplate."
    }
  ]
}

```
