# Nightly NPCs — November 11, 2026

America/Toronto date: Wednesday, November 11. Base main: `eee0dae9849097279595083ee058a7735b8ba44d`. No matching date branch, PR or published records existed before starting this isolated branch. This batch creates exactly two public Library NPCs; the previous 98 records remain unchanged. Publication is explicitly authorized.

## Selected concepts

- Nemmik Glowfen — Friendly gnome lamplighter: must return a willing borrowed will-o’-the-wisp while keeping the market road lit. Established varied approach; honest ally.
- Melva Hushwillow — Indifferent halfling marriage broker, sinister: arranges an estate union using an impostor and plans the captive adult heir’s murder after the ceremony.

Concepts were selected randomly from two separate six-concept pools. Each demeanor was independently drawn with equal probability from Friendly, Indifferent and Hostile using Python secrets.choice; the draws were Friendly and Indifferent. Initial demeanor is distinct from morality. Wednesday does not trigger the Thursday adversary requirement.

## Draft for independent content review

GM spoilers: the hooks reveal the wisp’s agreement and Melva’s identity fraud, imprisonment and planned murder. All marriage participants are adults. Review before adding either record to the JSON index.

```json
[
  {
    "id": "nemmik-glowfen",
    "slug": "nemmik-glowfen",
    "name": "Nemmik Glowfen",
    "ancestry": "Gnome",
    "role": "Lamplighter",
    "group": "townsfolk",
    "subtitle": "A light borrowed until moonrise",
    "summary": "Nemmik tends the market lamps and greets late shoppers with cheerful advice. With the oil delivery overdue, a willing will-o’-the-wisp lights his hand lantern under a promise that he will escort it home by moonrise.",
    "tableNote": "Beam at newcomers, offer directions before they ask and address the light as a colleague. Say, “Glad you’re here! My bright friend has kept its promise; now I need to keep mine. Can you lend us a pair of hands?”",
    "personality": "Initially friendly, eager to help and prone to explaining every practical detail; treats promises to unusual neighbors as seriously as contracts with townsfolk.",
    "motivations": "Keep the market safe after dusk, repay the wisp’s freely offered help and earn enough trust to borrow emergency supplies next time.",
    "adventureHook": "The market’s last reserve oil is locked in a store whose keeper is stranded beside a broken cart on the marsh boardwalk. Nemmik offers his evening’s pay for help bringing the keeper back before moonrise, when he must escort the willing wisp home. The party can recover the keeper and unlock the reserve, or negotiate a short extension with the wisp while arranging another light source. Keeping the wisp against its wishes would break Nemmik’s promise and cost the market a useful neighbor.",
    "locationIds": [
      "market-square",
      "storeroom",
      "marsh-boardwalk"
    ],
    "locationFit": [
      "Market lanes",
      "Marsh approaches"
    ],
    "roleCategoryIds": [
      "workers-services"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "wilderness"
    ],
    "tags": [
      "ally",
      "quest-giver"
    ],
    "imageAlt": "Cheerful dark-brown-skinned gnome lamplighter with close grey curls and a curled moustache, wearing an ochre shirt and charcoal-blue work coat while holding a brass lantern with a blue-white glow in a dusk market lane.",
    "portraitKey": "nemmik-glowfen",
    "portraitFit": "contain",
    "image": "images/characters/nemmik-glowfen.webp",
    "tokenImage": "images/tokens/nemmik-glowfen-token.webp",
    "publishedAt": "2026-11-11T22:00:01-05:00"
  },
  {
    "id": "melva-hushwillow",
    "slug": "melva-hushwillow",
    "name": "Melva Hushwillow",
    "ancestry": "Halfling",
    "role": "Marriage broker",
    "group": "townsfolk",
    "subtitle": "A union built around a stolen name",
    "summary": "Melva arranges marriages between adult heirs with brisk schedules and a strictly transactional manner. She secretly places an impostor in an estate union to gain control of household appointments, and intends to have the real heir killed once the vows are witnessed.",
    "tableNote": "Check a folded contract while others speak, answer only the question asked and quote a fee before discussing arrangements. Say, “Names, date and witnesses. Leave the family history out unless it changes the terms.” Keep her indifferent businesslike manner even when a client becomes emotional.",
    "personality": "Initially indifferent, distracted by appointments and impatient with irrelevant detail; calculating about other people’s loyalties and unmoved by the harm behind her arrangements.",
    "motivations": "Install a dependent impostor in an influential household, collect a continuing share of its patronage and remove the captive heir who could expose her bargain.",
    "adventureHook": "An adult betrothed asks the party why their intended no longer remembers a shared journey. Melva’s appointment book contains two simultaneous fittings for the same heir: one in the great hall and one behind a locked servants’ passage. The second leads to the real adult heir, held until an escort paid by Melva arrives after the ceremony to kill them. The party can extract the captive before the escort comes, confront the impostor for testimony or warn the betrothed and halt the ceremony. Melva offers payment for silence, but an exposed appointment book gives the household grounds to investigate her network.",
    "locationIds": [
      "private-residence",
      "great-hall",
      "servants-passage"
    ],
    "locationFit": [
      "Estate receiving rooms",
      "Household service passages"
    ],
    "roleCategoryIds": [
      "workers-services",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "castles-estates"
    ],
    "tags": [
      "antagonist"
    ],
    "imageAlt": "Composed tawny-brown-skinned halfling marriage broker with short black hair and a grey streak, wearing a moss-green gown and russet shawl while holding a folded contract in an estate receiving room.",
    "portraitKey": "melva-hushwillow",
    "portraitFit": "contain",
    "image": "images/characters/melva-hushwillow.webp",
    "tokenImage": "images/tokens/melva-hushwillow-token.webp",
    "publishedAt": "2026-11-11T22:00:00-05:00"
  }
]
```

## Content review

Independent contributor content_review30 approved both complete drafts before index integration: names/IDs, supported fields, classifications, tags, published locations, originality against all 98 entries, actionable hooks, demeanor consistency and exactly one sinister NPC passed. No required corrections.

## Artwork prompts

Built-in image generation; Garran Vey style reference, finalized portrait identity references, approved Brakka frame and dragon-only site logo. Melva received one targeted headroom correction.

### nemmik

Use case: stylized-concept. Asset: original permanent fantasy NPC portrait, square high-resolution artwork. Input image 1 is STYLE ONLY: expressive ink contours, selective crosshatching, rich opaque gouache colour and graphic shadows; do not copy its character, forge, weapons or composition. Subject: Nemmik Glowfen, an older adult male gnome lamplighter, dark brown skin, close grey curls, curled grey moustache, broad cheerful round face, small pointed ears. Ochre shirt beneath a charcoal-blue practical work coat. He holds a small brass hand lantern at chest level containing a subtle blue-white will-o'-the-wisp glow, his willing temporary helper. Scene: dusk market lane, softly detailed stone lamp posts and shuttered stalls, no other people. Warm helpful welcoming expression. Waist-up, both full shoulders and complete head, hair and ears visible. Put the highest hair at 22 percent of canvas height, leaving generous clear background above; face large enough to read, hands and lantern below face. Crisp full-size painted fantasy RPG illustration, sharp linework, no photography, no photorealistic skin, no blur, no text, no watermark, no frame. Opaque square image.

### melva

Use case: stylized-concept. Asset: original permanent fantasy NPC portrait, square high-resolution artwork. Input image 1 is STYLE ONLY: expressive ink contours, selective crosshatching, rich opaque gouache colour and graphic shadows; do not copy its character, forge or weapons. Subject: Melva Hushwillow, middle-aged adult female halfling marriage broker, tawny brown skin, rounded small ears, short sleek black hair with a prominent grey streak, composed round face, neutral distracted professional expression. Neat moss-green gown and russet shawl, small seal pouch at her belt; holds a folded parchment contract at lower chest level, no readable marks. Scene: quiet estate receiving room with panelled walls and a small vase of dry flowers, no other people. She is secretly sinister but presents as an indifferent transactional professional, no evil grin. Waist-up, both full shoulders and complete head, hair and ears visible. Highest hair at 22 percent of canvas height with generous clear background above. Crisp full-size painted fantasy RPG illustration, sharp linework, rich gouache, no photography or photorealistic skin, no blur, no text, no watermark, no frame. Opaque square image.

### melvaFraming

Use case: identity-preserve. Edit this finalized Melva Hushwillow illustration only to widen its framing: zoom out enough to put the highest hair at 20–22 percent of square canvas height, adding matching panelled wall above and scene around the sides. Keep the same face, age, halfling ears, black hair and grey streak, indifferent expression, moss-green gown, russet shawl, folded contract, belt pouch, sharp ink and gouache painting style, colours and lighting. Both shoulders fully inside frame. No cropping, no new objects, no additional people, no text or frame. Opaque square high-resolution artwork.


## Asset and integration validation

Final portraits: 960×960 opaque RGB WebP, quality75/method6; Nemmik 192,010 bytes, Melva 131,382 bytes. Nemmik exceeds the approximate size target to retain dense ink detail at the required quality. Tokens: 280×280 RGBA WebP, quality80/method6; Nemmik 25,612 bytes, Melva 21,528 bytes. Both genuinely transparent exteriors and complete circular frames pass. Full-size lossless WebP sources are under `project/npc-packs/sources/nightly-2026-11-11/<id>-portrait.webp` and `<id>-token.webp`. Full-size portraits and native/70px tokens inspected: clear heads, headroom, matching identities and readable dragon-only frames.

100 unique records; old98 exactly preserved. Published location links, ordered classifications, release dates and portrait mappings pass. Generated100 pages and deterministic check pass. Public-page, role, location-fit, Saved and token DOM checks pass. Local Chromium is absent; required PR CI supplies native375px/1440px cards, profiles, sharing, download and Session checks before merge.
