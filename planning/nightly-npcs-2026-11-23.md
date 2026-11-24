# Nightly NPCs — November 23, 2026

Monday America/Toronto; area: Taverns and Taprooms. Fresh main `c0b4dd8df3d59fbe73752b2a2c6ea89844738a66`. No existing date branch/PR or published batch;122 existing NPCs inspected. Publication explicitly authorized.

## Selected concepts

- Dellen Quincebrook — Friendly halfling taproom skittles keeper; Taverns and Taprooms: find a missing weighted kingpin before visiting players are falsely accused. Varied honest NPC.
- Osselin Gloamtoast — Friendly elf toastmaster, sinister developed villain; Taverns and Taprooms: steals future triumphs through a ceremonial cup and sells them to wealthy patrons.

Concepts randomly selected with secrets.choice from separate four-option pools after inspecting inventory. Both demeanor draws independently used equal probability among Friendly, Indifferent and Hostile and yielded Friendly. Demeanor is distinct from morality. Monday requires a developed villain: Osselin has a patronage goal, envy born from professional disappointment, concrete cup/leaf scheme, paid ushers and influential customers, and a contradiction exploitable through public credit. Dellen’s ordinary missing equipment problem resolves without a malicious culprit. No existing names/IDs or recent occupations duplicated.

## Draft for independent content review

GM spoilers: location of kingpin, magical theft, silver leaves/ledger and release through public credit. All performers, workers, patrons and players are adults. User authorization covers these concepts and publication. Public index remains unchanged pending contributor review.

```json
[
  {
    "id": "dellen-quincebrook",
    "slug": "dellen-quincebrook",
    "name": "Dellen Quincebrook",
    "ancestry": "Halfling",
    "role": "Taproom skittles keeper",
    "group": "townsfolk",
    "subtitle": "A kingpin missing before the match",
    "summary": "Dellen maintains a taproom’s skittles lane and welcomes newcomers with patient demonstrations. The weighted kingpin has vanished before a visiting team’s match, and the regulars are starting to blame their guests.",
    "tableNote": "Offer to show visitors the lane, remember their names and make room for beginners. Say, “Come in, friends. Help me find the old kingpin, and I’ll teach you the house throw.” He is initially friendly and wants both teams to enjoy the evening.",
    "personality": "Initially friendly, talkative and generous with encouragement; he values fair play more than his regulars’ pride and dislikes accusations made without evidence.",
    "motivations": "Recover the kingpin, keep the match fair and make visiting players feel welcome rather than suspected.",
    "adventureHook": "Dellen asks the party to check the lane and adjoining storeroom before the teams gather. The kingpin’s brass-weighted base has left a circular mark on a recently moved drinks tray, and a server remembers clearing spare game pieces with the empty cups. The party can follow the tray’s route, speak with the staff or help Dellen organize a friendly practice round while he searches. The pin turns out to be packed with returned festival decorations, not stolen by a rival. Finding it and clearing the visitors’ names earns free use of the lane and a sociable taproom contact.",
    "locationIds": [
      "tavern",
      "storeroom"
    ],
    "locationFit": [
      "Tavern skittles lanes",
      "Taproom games corners"
    ],
    "roleCategoryIds": [
      "hospitality-entertainment"
    ],
    "locationFitCategoryIds": [
      "settlements"
    ],
    "tags": [
      "quest-giver"
    ],
    "imageAlt": "Friendly freckled halfling skittles keeper with curly ginger hair and sideburns, wearing a blue waistcoat, cream shirt and leather apron while polishing a wooden pin beside a tavern lane.",
    "portraitKey": "dellen-quincebrook",
    "portraitFit": "contain",
    "image": "images/characters/dellen-quincebrook.webp",
    "tokenImage": "images/tokens/dellen-quincebrook-token.webp",
    "publishedAt": "2026-11-23T22:00:01-05:00"
  },
  {
    "id": "osselin-gloamtoast",
    "slug": "osselin-gloamtoast",
    "name": "Osselin Gloamtoast",
    "ancestry": "Elf",
    "role": "Toastmaster",
    "group": "townsfolk",
    "subtitle": "A toast that sells tomorrow’s triumph",
    "summary": "Osselin hosts celebrations in tavern private rooms, drawing shy guests into warm speeches about what they hope to achieve. His ceremonial cup steals one future triumph named in a toast, which he stores in engraved silver leaves and sells to wealthy patrons.",
    "tableNote": "Welcome each guest warmly, recall something they are proud of and invite them to speak at their own pace. Say, “Your work deserves an audience, my friend. Tell us the success you hope to celebrate next.” His initial friendliness conceals a deliberate invitation into the cup’s bargain.",
    "personality": "Initially friendly, attentive and encouraging; privately envious of people whose work earns applause. He insists that recognition should go to those who can make proper use of it, while craving praise he has never earned.",
    "motivations": "Build a circle of influential clients by supplying stolen victories, then secure a permanent ceremonial office through their patronage. After years of being overlooked as a performer, he treats other people’s promise as something to trade rather than respect.",
    "adventureHook": "A craftworker who toasted an upcoming exhibition watches a wealthy stranger win with her own distinctive design and asks the party to attend Osselin’s next taproom celebration. GM secret: the cup transfers a named future triumph into a silver leaf hidden in its stem; Osselin sells the leaf and keeps a commission ledger in a rented storeroom. Two well-paid ushers screen his private gatherings, and indebted patrons discourage questions. The party can compare the ledger with guests’ failed ambitions, approach a dissatisfied buyer or secure the cup before another toast. Its binding has an exploitable contradiction: if the buyer publicly credits the person whose triumph was taken, that leaf releases its claim. Osselin needs the stolen success to look deserved, so persuading one patron to acknowledge the source can unravel his reputation. Recovering the cup and unused leaves prevents further theft; returning the leaves restores their owners’ chance to achieve the promised successes through their own efforts, without guaranteeing an outcome.",
    "locationIds": [
      "tavern",
      "inn",
      "storeroom"
    ],
    "locationFit": [
      "Tavern private celebration rooms",
      "Taproom patrons’ suppers"
    ],
    "roleCategoryIds": [
      "hospitality-entertainment",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "settlements"
    ],
    "tags": [
      "antagonist"
    ],
    "imageAlt": "Welcoming dark-brown-skinned elf toastmaster with pointed ears and black braided hair streaked with silver, wearing a bottle-green embroidered coat and wine-red sash while holding a silver cup in a candlelit tavern room.",
    "portraitKey": "osselin-gloamtoast",
    "portraitFit": "contain",
    "image": "images/characters/osselin-gloamtoast.webp",
    "tokenImage": "images/tokens/osselin-gloamtoast-token.webp",
    "publishedAt": "2026-11-23T22:00:00-05:00"
  }
]
```

## Independent content review

Contributor content_review30 approved before JSON integration: Monday Taverns and Taprooms, consistent Friendly/Friendly initial demeanors, honest Dellen and deliberately sinister developed villain Osselin with goal/motivation/scheme/resources/weakness/actionable interventions; originality against122, supported fields, unique names/IDs, valid classifications/tags/published location refs, spoilers and matching Markdown/JSON. No corrections required.

## Artwork and validation

Built-in image generation produced original Ink and colour portraits with Garran Vey as medium/style reference only. Tokens derive from each finalized portrait with the Brakka brass/burgundy/charcoal circular frame and subtle dragon-head-only bottom emblem. Complete heads/hair/ears and both shoulders are visible with headroom. Full-size960px exports,280px tokens and70px tabletop previews visually reviewed for sharp facial detail, identity, complete border and readability. No placeholders, enlarged thumbnails or corrective variants.

| Asset | Dimensions/mode | Bytes | Export |
| --- | --- | ---: | --- |
| Dellen portrait | 960×960 opaque RGB | 190716 | WebP q75/method6 |
| Dellen token | 280×280 RGBA | 23240 | WebP q80/method6 |
| Osselin portrait | 960×960 opaque RGB | 137340 | WebP q75/method6 |
| Osselin token | 280×280 RGBA | 22704 | WebP q80/method6 |

Dellen’s dense taproom detail slightly exceeds the approximate portrait size target at required quality. All4 final files decode; token alpha0–255, transparent corners/edge midpoints,6px export safety margin. Full1254×1254 lossless VP8L sources retained in project/npc-packs/sources/nightly-2026-11-23: Dellen portrait2301068/token1770104 bytes; Osselin portrait2157256/token1729398 bytes.

124 unique IDs/slugs, old122 preserved exactly as JSON values/in original order. Valid role/location-fit IDs and published location refs; two portrait mappings and tokenImage paths. Deterministic22:00:01/22:00:00 Toronto releases.15 intended changed files; all other copied current-main files hash-identical and untouched remote files retained through base tree. Shared app/storage code unchanged. Generated pages build/check, public-page tests, Saved/role/location-fit/token DOM suites and mapping syntax check passed. Download token remains below summary with Copy link/View full page; Session and storage preservation covered by existing tests.

Local Chromium unavailable. Required PR CI must pass native375/1440 card/profile containment, actual token download bytes/names, sharing and Session checks before merge. Verify production success and actual live record/profile/asset responses afterward; final evidence in PR conversation.

## Generation prompts

Built-in image generation; portraits opaque, tokens transparent_background=true. One prompt per asset, no corrective generation.

```json
{
  "portraits": [
    {
      "id": "dellen-quincebrook",
      "prompt": "Use case: stylized-concept. ONE standalone square NPC Beta portrait. Reference Garran Vey is painted ink/gouache MEDIUM ONLY, not his human identity/sword/forge. Expressive ink contours, selective crosshatching, rich gouache colour and graphic shadows, believable anatomy. Full-resolution opaque square fantasy illustration, not photography, no skin-pore camera texture or exaggerated cartoon. Centered WAIST-UP, both full shoulders and ENTIRE head/hair/ears inside frame. Highest hair point25 percent down from TOP; generous clear background above and beside head, face upper-middle, props BELOW face. No text, frame, watermark, extra characters, tight closeup or cropped head. Dellen Quincebrook, adult male HALFLING taproom skittles keeper, compact sturdy build, fair ruddy freckled skin, round cheeks, curly ginger hair and short ginger sideburns, small slightly pointed ears, friendly open smile and helpful expression. Deep blue waistcoat over cream shirt with rolled sleeves and simple brown leather apron, holding a wooden skittle pin and polishing cloth below chest. Warm welcoming medieval TAPROOM with wooden skittles lane and stools softly behind, amber lamplight, no modern bowling equipment, no weapons."
    },
    {
      "id": "osselin-gloamtoast",
      "prompt": "Use case: stylized-concept. ONE standalone square NPC Beta portrait. Reference Garran Vey is painted ink/gouache MEDIUM ONLY, not his human identity/sword/forge. Expressive ink contours, selective crosshatching, rich gouache colour and graphic shadows, believable anatomy. Full-resolution opaque square fantasy illustration, not photography, no skin-pore camera texture or exaggerated cartoon. Centered WAIST-UP, both full shoulders and ENTIRE head/hair/ears inside frame. Highest hair point25 percent down from TOP; generous clear background above and beside head, face upper-middle, props BELOW face. No text, frame, watermark, extra characters, tight closeup or cropped head. Osselin Gloamtoast, adult male ELF toastmaster, dark brown skin, long elegant pointed ears fully visible, angular mature face, black hair with a single silver streak pulled into a low tied braid, clean shaven, FRIENDLY gracious smile, warm attentive amber eyes. Bottle-green formal wool coat with subtle gold embroidery, wine-red sash, neat cream collar, holding one modest silver ceremonial cup low below chest, no crown. Medieval TAVERN private toast room with warm candles and wine-red drapes softly behind. Sinister agenda hidden behind genuinely welcoming manners, no evil grimace, no weapons or gore."
    }
  ],
  "tokens": [
    {
      "id": "dellen-quincebrook",
      "prompt": "Create one circular tabletop token of friendly freckled ruddy male halfling, full curly ginger hair and sideburns, pointed ears, blue waistcoat and cream shirt/leather apron. Reference1 is identity and painted Ink and colour artwork ONLY; preserve exact face/costume/ancestry/friendly expression. Reference2 is approved Brakka frame: thin restrained antique brass/burgundy/charcoal concentric rings, three small diamond ornaments at top/left/right, small round bottom medallion. Reference3 supplies ONLY dragon head silhouette, subtly red inside bottom medallion; no lettering or nameplate. Clear readable head/upper-chest portrait, COMPLETE head/hair/ears inside circle with extra space around hair and ear tips. Expressive ink/selective crosshatching/rich gouache/graphic shadows, no photography. Subdued interior background. Entire circular border fits safely inside square canvas with transparent safety margin. Truly transparent alpha exterior, NO exterior shadow/background/scenery/text/watermark. Crisp at280px."
    },
    {
      "id": "osselin-gloamtoast",
      "prompt": "Create one circular tabletop token of friendly dark-brown-skinned male elf, complete pointed ears, black hair/silver streak and low braid, bottle-green embroidered coat and wine-red sash. Reference1 is identity and painted Ink and colour artwork ONLY; preserve exact face/costume/ancestry/friendly expression. Reference2 is approved Brakka frame: thin restrained antique brass/burgundy/charcoal concentric rings, three small diamond ornaments at top/left/right, small round bottom medallion. Reference3 supplies ONLY dragon head silhouette, subtly red inside bottom medallion; no lettering or nameplate. Clear readable head/upper-chest portrait, COMPLETE head/hair/ears inside circle with extra space around hair and ear tips. Expressive ink/selective crosshatching/rich gouache/graphic shadows, no photography. Subdued interior background. Entire circular border fits safely inside square canvas with transparent safety margin. Truly transparent alpha exterior, NO exterior shadow/background/scenery/text/watermark. Crisp at280px."
    }
  ]
}

```
