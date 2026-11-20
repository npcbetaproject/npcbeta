# Nightly NPCs — November 19, 2026

Thursday America/Toronto; area: Royal Courts and Noble Estates. Fresh main `f72f719d572c965fc0d4dff75427bb7678688870`. Exact date branch/PR checks found no existing work; current114 records contain no November19 entries. Publication explicitly authorized.

## Selected concepts

- Thervos Ashhorn — Friendly minotaur estate fencing master; Royal Courts and Noble Estates: bars a practice hall until missing training blades return and a reckless challenge is withdrawn. Varied principled adversary with a negotiated end and restrained combat trigger.
- Caldraven Duskmere — Indifferent vampire chamberlain, sinister developed villain; Royal Courts and Noble Estates: stages a succession emergency to bind adult courtiers into service and seize the regency.

Concepts selected randomly from separate six-option pools using secrets.choice. Each demeanor independently drawn with equal probability from Friendly, Indifferent and Hostile; yielded Friendly and Indifferent. Both Thursday NPCs are recognizable public-domain monsters/adversaries with court/estate roles. Thervos is not deliberately sinister; initial friendliness does not remove his boundary or adversarial use. Caldraven has a goal (permanent regency), understandable fear of dismissal after long service, a concrete false-emergency scheme, household resources, freely given steward approval as an exploitable limit, negotiation and evidence-based intervention hooks, and a plausible detention/hostility trigger.

## Draft for independent content review

GM spoilers: misplaced blades, living adult heir, intercepted letters, vampiric binding and consent limit. All students, guests, courtiers and heirs referenced are adults. Supernatural oath mechanics are fictional, with no real-world blood ritual or coercion instructions. Thervos favors restraint and accepts negotiated resolution; Caldraven’s motivation does not excuse his scheme. Review before public JSON integration.

```json
[
  {
    "id": "thervos-ashhorn",
    "slug": "thervos-ashhorn",
    "name": "Thervos Ashhorn",
    "ancestry": "Minotaur",
    "role": "Estate fencing master",
    "group": "townsfolk",
    "subtitle": "A welcome at a closed door",
    "summary": "Thervos teaches fencing to a noble household and greets visitors with cheerful encouragement, even while barring its practice hall. Two missing training blades and an adult guest’s reckless challenge have convinced him that the doors must stay closed until everyone agrees to safe terms.",
    "tableNote": "Offer a towel, praise good footwork and make room to talk beside the doorway without letting anyone pass. Say, “Welcome! I’ll gladly hear your challenge after we find my practice blades and agree nobody fights angry.” His warmth is sincere; the closed door is a boundary, not a taunt.",
    "personality": "Initially friendly, helpful and enthusiastic about teaching; calm under insult, stubborn about consent and protective of inexperienced students.",
    "motivations": "Recover the household’s training blades, prevent an angry guest from turning a lesson into a dangerous duel and show that discipline matters more than noble rank.",
    "adventureHook": "A guest asks the party to get past Thervos and open the practice hall before a public challenge. Thervos offers a lesson and introductions if they instead recover the missing blades and persuade the challenger to withdraw the insult or accept a supervised demonstration. A servant saw the blades carried toward the armory for polishing but cannot leave a post to check. The party can trace the loan, negotiate an apology or arrange another day. If anyone forces entry or threatens a student, Thervos blocks and disarms them, using restraint rather than pursuing a defeated opponent. Returning the blades and agreeing to safe terms ends the standoff.",
    "locationIds": [
      "great-hall",
      "courtyard",
      "armory"
    ],
    "locationFit": [
      "Noble practice halls",
      "Estate training courts"
    ],
    "roleCategoryIds": [
      "military-authority"
    ],
    "locationFitCategoryIds": [
      "castles-estates"
    ],
    "tags": [
      "quest-giver",
      "ally"
    ],
    "imageAlt": "Welcoming broad-shouldered minotaur fencing master with chestnut fur, a dark bovine muzzle and short outward-curving cream horns, wearing a navy padded fencing coat and holding a wooden practice sword low in an estate training hall.",
    "portraitKey": "thervos-ashhorn",
    "portraitFit": "contain",
    "image": "images/characters/thervos-ashhorn.webp",
    "tokenImage": "images/tokens/thervos-ashhorn-token.webp",
    "publishedAt": "2026-11-19T22:00:01-05:00"
  },
  {
    "id": "caldraven-duskmere",
    "slug": "caldraven-duskmere",
    "name": "Caldraven Duskmere",
    "ancestry": "Vampire",
    "role": "Chamberlain",
    "group": "townsfolk",
    "subtitle": "An emergency with no missing heir",
    "summary": "Caldraven manages a noble estate with detached precision and presents himself as its indispensable guardian. He has hidden letters proving the adult heir is alive and plans an emergency court oath that will bind the attending adults to his vampiric service, giving him control of the regency.",
    "tableNote": "Check names against a seating plan, answer only the question asked and refer every interruption to the evening’s schedule. Say, “The heir’s absence is already accounted for. Sign in, take your assigned place and await the announcement.” His initial indifference is practiced administrative control.",
    "personality": "Initially indifferent, formal and strictly professional; patient with procedure and chillingly certain that other people’s freedom is an acceptable price for a stable household.",
    "motivations": "Become the estate’s permanent regent after decades of preserving it through sieges, afraid the returning heir will dismiss him. Keys, intercepted correspondence, household influence and loyal night servants support his scheme. He needs the senior steward’s freely given approval to open the emergency court and cannot compel that approval without invalidating the oath.",
    "adventureHook": "The senior steward quietly asks the party to locate a courier who arrived with a letter from the supposedly lost heir. GM secret: Caldraven concealed that letter in his locked office and intends to turn an emergency oath into supernatural servitude. Before the evening court, the party can find the courier’s delivery receipt, recover the letter, secure the steward’s refusal to convene or persuade courtiers to leave. Caldraven offers records of the estate’s old enemies if allowed to retain his post, but insists on controlling the household. He may order his night servants to detain anyone removing the letter or breaking up the court; public proof that the heir lives and the steward’s withheld approval dismantle his pretext and stop the oath.",
    "locationIds": [
      "great-hall",
      "private-residence",
      "servants-passage",
      "guardroom"
    ],
    "locationFit": [
      "Noble evening courts",
      "Chamberlain offices",
      "Estate service corridors"
    ],
    "roleCategoryIds": [
      "military-authority",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "castles-estates"
    ],
    "tags": [
      "antagonist",
      "mysterious"
    ],
    "imageAlt": "Detached pale-skinned vampire chamberlain with sleek silver-black hair, a narrow clean-shaven face and subtle pointed upper canines, wearing a burgundy high-collared court coat and holding a seating ledger in a candlelit noble hall.",
    "portraitKey": "caldraven-duskmere",
    "portraitFit": "contain",
    "image": "images/characters/caldraven-duskmere.webp",
    "tokenImage": "images/tokens/caldraven-duskmere-token.webp",
    "publishedAt": "2026-11-19T22:00:00-05:00"
  }
]
```

## Independent content review

Contributor content_review30 approved before index integration: Thursday monster/adversary requirements, meaningful Royal Courts and Noble Estates setting, distinct negotiation and hostility triggers, Friendly principled Thervos versus Indifferent developed sinister Caldraven, original hooks against114 entries, names/IDs/supported fields/classifications/tags/published locations/spoilers, matching Markdown and JSON. No required corrections.

## Artwork prompts

Built-in image generation, one call per asset. Thervos passed initial portrait inspection including both complete horns. Caldraven received one targeted identity-preserving zoom-out to add generous headroom. Tokens derive from the settled portraits plus approved Brakka frame and dragon-only logo references.

```json
{
  "portraits": [
    {
      "id": "thervos-ashhorn",
      "prompt": "Use case: stylized-concept. Asset: ONE standalone square NPC Beta fantasy portrait. Garran Vey reference is MEDIUM/INK STYLE ONLY, not identity, forge or swordsmith setting. Painted Ink and colour RPG illustration: expressive ink contours, selective crosshatching, rich gouache colours, clear graphic shadow shapes, believable anatomy. Sharp full-resolution opaque square painting. Centered WAIST-UP, both full shoulders and entire head/hair/ears/horns inside frame. Highest head/horn point begins 20% down from canvas top, ample background above and beside head, face upper-middle, props BELOW face. No tight closeup, cropping, text, border, watermark, photographic pores/camera texture or extra characters. Thervos Ashhorn, adult male MINOTAUR estate fencing master: recognizable fully bovine chestnut-furred head, broad dark bull muzzle, short outward-curving cream horns, bovine ears, intelligent kind brown eyes, warm friendly welcoming expression. Strong broad humanoid body with humanlike hands, navy padded medieval fencing coat, tan leather belt, wooden blunt practice sword held low below chest at relaxed angle. Noble estate training hall with tall wood beams, stone arches and empty practice racks softly behind, warm daylight. Whole horn tips fully visible with generous headroom. Not a human with horn headband; not modern sport fencing gear."
    },
    {
      "id": "caldraven-duskmere",
      "prompt": "Use case: stylized-concept. Asset: ONE standalone square NPC Beta fantasy portrait. Garran Vey reference is MEDIUM/INK STYLE ONLY, not identity, forge or swordsmith setting. Painted Ink and colour RPG illustration: expressive ink contours, selective crosshatching, rich gouache colours, clear graphic shadow shapes, believable anatomy. Sharp full-resolution opaque square painting. Centered WAIST-UP, both full shoulders and entire head/hair/ears/horns inside frame. Highest head/horn point begins 20% down from canvas top, ample background above and beside head, face upper-middle, props BELOW face. No tight closeup, cropping, text, border, watermark, photographic pores/camera texture or extra characters. Caldraven Duskmere, adult male VAMPIRE chamberlain, pale cool ivory skin, sleek silver-black hair combed back to neck, narrow clean-shaven face, subtly pointed upper canines visible at gently parted lips, indifferent detached professional expression. Burgundy high-collared wool court coat, charcoal waistcoat, old brass key ring at belt, holding a closed dark seating ledger below chest. Candlelit noble great hall with curtained windows and empty carved seats softly receding behind; moonlit blue shadows and restrained warm candle accents. Grounded medieval court officer, no overt evil grin, no blood, no gore, no glowing eyes, not photorealistic."
    }
  ],
  "reframes": [
    {
      "id": "caldraven-duskmere",
      "prompt": "Use case: identity-preserve. Edit supplied Caldraven Duskmere painted portrait ONLY to widen framing: pull back so the highest hair point is20–25% down from top of square canvas, giving generous clear background above full head and both shoulders. Preserve exactly this pale male vampire's narrow clean-shaven face, silver-black hair, detached indifferent expression, subtle canines, burgundy high-collared coat, charcoal waistcoat, seating ledger and keys, painted ink/gouache fantasy style and candlelit noble hall. Extend same surrounding architecture naturally. Opaque square sharp painting, no border, text, watermark or extra characters; no photographic textures. No identity/clothing changes."
    }
  ],
  "tokens": [
    {
      "id": "thervos-ashhorn",
      "prompt": "Use case: compositing. Create ONE circular virtual tabletop token of Thervos Ashhorn from reference1 FINAL portrait: preserve this chestnut-furred bovine minotaur, dark bull muzzle, short outward-curving cream horns and bovine ears, kind brown eyes and friendly welcoming expression, navy padded fencing coat, painted Ink and colour fantasy style. Reference2 Brakka is FRAME/LAYOUT ONLY: restrained antique brass/burgundy/charcoal circular border, small diamonds. Reference3 logo supplies ONLY tiny subtle dragon-head bottom medallion, no lettering/nameplate. Center complete head and upper chest; BOTH COMPLETE HORN TIPS AND EARS fully INSIDE circle with generous room; do not overlap/crop horns at frame. Keep full border inside square with transparent safety margin. Subdued estate training hall background INSIDE circle only. Genuinely transparent outside circle, no exterior shadow. Sharp face readable at280 and70px. No text or extra people. High-resolution square."
    },
    {
      "id": "caldraven-duskmere",
      "prompt": "Use case: compositing. Create ONE circular virtual tabletop token of Caldraven Duskmere from reference1 FINAL portrait: preserve this pale ivory-skinned adult male vampire, narrow clean-shaven face, silver-black swept-back hair, subtle pointed upper canines, detached indifferent professional expression, burgundy high-collared court coat and charcoal waistcoat, painted Ink and colour fantasy style. Reference2 Brakka is FRAME/LAYOUT ONLY: restrained antique brass/burgundy/charcoal circular border, small diamonds. Reference3 logo supplies ONLY tiny subtle dragon-head bottom medallion, no lettering/nameplate. Center full head and upper chest at a readable size; entire hair and ears inside circle with breathing room, full border inside square with transparent safety margin. Subdued candlelit noble hall INSIDE circle only. Genuinely transparent outside circle, no exterior shadow. Sharp face readable at280 and70px. No text, blood, gore or extra people. High-resolution square."
    }
  ]
}
```

## Final assets and validation

| NPC | Portrait bytes | Token bytes | Lossless portrait source bytes | Lossless token source bytes |
| --- | ---: | ---: | ---: | ---: |
| Thervos Ashhorn | 177586 | 25134 | 2279258 | 1755690 |
| Caldraven Duskmere | 157426 | 24806 | 2290114 | 1792056 |

Final portraits at `docs/images/characters/<npc-id>.webp`: exact960×960 opaque RGB WebP quality75/method6. Final tokens at `docs/images/tokens/<npc-id>-token.webp`: exact280×280 RGBA WebP quality80/method6. Four1254×1254 VP8L lossless sources retained under `project/npc-packs/sources/nightly-2026-11-19/<npc-id>-portrait.webp` and `<npc-id>-token.webp`. Final portraits/tokens and70px token previews visually inspected: matching identities, painted ink/gouache style, sharp faces, complete heads/hair/ears and both minotaur horns, generous portrait headroom, complete approved circular frame and subtle dragon-only emblem. Alpha0–255 with transparent corners/edge midpoints and small safety margin. Exported from generated full-resolution PNGs, never enlarged thumbnails.

116 unique stable records; all old114 exactly equal and ordered, all old NPC pages match main hashes. Published location IDs and nonempty classification arrays validated. Deterministic newest order Thervos then Caldraven. Exactly15 changed files: two profiles, directory/sitemap, data/mappings, four final assets, four sources and batch note. Shared popup keeps Download token below introduction beside Copy link/View full page, with matching Library/Saved/Session portrait mappings. No shared UI/storage migration or unrelated changes.

Passed locally: build and --check; public-page DOM (server metadata, sharing, focus/scroll/state preservation, stable slugs, Session safety/cross-tab updates); role/location-fit/Saved-filter DOM (combined filtering, recent sort, storage preservation); token DOM (preview/download placement/reset/Session); mapping JS syntax; record/reference/mapping/image/source checks. Local Chromium unavailable. Existing PR CI375px/1440px native browser checks must pass before merge, including full-size uncropped cards/profiles, sharing/Session/overflow and every token download’s bytes/filename. Production deployment and actual live10-endpoint verification follow merge; outcomes recorded in PR.
