# Nightly NPCs — 2026-11-08

Toronto date: Sunday, November 8, 2026. Exactly two NPCs; no Thursday override. Full publication authorized by the user. Fresh main:3b6c85db048f8a9eafdbba96364e082180c1ffb5. No existing date branch, PR or published records found.

## Concepts and random demeanor

Independent uniform secrets.choice draws from six varied and six sinister candidate concepts selected Pella Rainskein and Merrow Vexthread. Independent equal-probability draws from Friendly, Indifferent and Hostile selected Friendly for Pella and Hostile for Merrow. Attitude is separate from morality.

- Pella Rainskein — Friendly halfling laundress: finds a missing messenger's badge in an unclaimed bundle and seeks its owner. Ordinary varied NPC; helpful and honest.
- Merrow Vexthread — Hostile halfling tailor, sinister: sews listening charms into formal coats to blackmail negotiating envoys.

## GM spoilers and review

Pella's hook involves a trapped adult awaiting rescue, without graphic injury. Merrow's hook involves magical surveillance, blackmail and abuse of professional trust. These are individual choices, not ancestry traits. Names, IDs and roles inspected against all92 existing records; only supported fields/classifications and published locations used. Independent review required before JSON index integration.

## Complete drafts

```json
[
  {
    "id": "pella-rainskein",
    "slug": "pella-rainskein",
    "name": "Pella Rainskein",
    "ancestry": "Halfling",
    "role": "Laundress",
    "group": "townsfolk",
    "subtitle": "A badge in the wash",
    "summary": "Pella washes clothes in a cottage yard, greeting customers with a warm smile and more questions than they expect. She remembers everyone's usual collection day and notices when a familiar bundle goes unclaimed.",
    "tableNote": "Offer a stool, keep folding as you talk and ask after each companion by name. Say, “Come in, love. I've a dry place for your cloak, and a small worry you might help me with.” Her initial friendliness is practical hospitality; she listens carefully between cheerful digressions.",
    "personality": "Initially friendly, talkative and eager to help; observant about small changes in routine and stubborn when others dismiss a missing neighbor.",
    "motivations": "Earn a steady living, return every customer's belongings safely and make sure people who live alone are missed when something goes wrong.",
    "adventureHook": "Pella finds a brass messenger's badge in an unclaimed shirt bundle after its owner misses both collection day and his relief shift. She remembers that he mentioned a last delivery to the icehouse and asks the party to check its loading passage before the workers return at dawn. A fallen stack of ice has jammed the inner door, trapping the messenger beyond it. Pella can identify the right entrance and fetch porters; the party must clear a route or open the service hatch to bring him out.",
    "locationIds": [
      "private-residence",
      "icehouse"
    ],
    "locationFit": [
      "Cottage wash yards",
      "Icehouse loading passages"
    ],
    "roleCategoryIds": [
      "workers-services"
    ],
    "locationFitCategoryIds": [
      "settlements"
    ],
    "tags": [
      "ally",
      "quest-giver"
    ],
    "imageAlt": "Friendly freckled halfling laundress with short grey curls under a coral kerchief, wearing a green dress and blue apron while holding folded linen and a small brass badge in a wash yard.",
    "portraitKey": "pella-rainskein",
    "portraitFit": "contain",
    "image": "images/characters/pella-rainskein.webp",
    "tokenImage": "images/tokens/pella-rainskein-token.webp",
    "publishedAt": "2026-11-08T22:00:01-05:00"
  },
  {
    "id": "merrow-vexthread",
    "slug": "merrow-vexthread",
    "name": "Merrow Vexthread",
    "ancestry": "Halfling",
    "role": "Tailor",
    "group": "townsfolk",
    "subtitle": "Every private word has a price",
    "summary": "Merrow fits formal coats with exacting skill and a sneer for anyone questioning his prices. Hidden listening charms let him overhear negotiating envoys, whose private concessions become the terms of his blackmail.",
    "tableNote": "Brush an imaginary speck from a sleeve, criticize a customer's posture and refuse casual handling of the cloth. Say, “Keep your hands off that coat. If you want explanations, pay for a fitting.” His initial hostility is brittle pride; he becomes calculating rather than apologetic when cornered.",
    "personality": "Initially hostile, arrogant and easily offended by scrutiny; meticulous about his craft and willing to ruin a client's reputation for personal gain.",
    "motivations": "Turn privileged access to envoys into wealth, force lucrative clothing contracts through blackmail and keep his illicit listening work hidden behind professional prestige.",
    "adventureHook": "An envoy receives a demand quoting a concession discussed only behind closed doors. She hires the party to inspect her new formal coat before tonight's negotiations. Charms beneath its lining relay speech to a locked workbox in Merrow's shop; matching stitches appear in the other envoys' coats. The party can disable the charms before the talks, recover the workbox and written demands as evidence, or feed Merrow a false concession to catch him selling it. He offers to destroy his notes if allowed to keep the payments already extorted.",
    "locationIds": [
      "general-store",
      "great-hall"
    ],
    "locationFit": [
      "Tailoring shops",
      "Diplomatic receptions"
    ],
    "roleCategoryIds": [
      "merchants-crafters",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "castles-estates"
    ],
    "tags": [
      "merchant",
      "antagonist"
    ],
    "imageAlt": "Dark-brown-skinned halfling tailor with tied-back black hair, a thin moustache and an arrogant expression, wearing an ochre waistcoat and plum neckcloth while holding a folded charcoal coat.",
    "portraitKey": "merrow-vexthread",
    "portraitFit": "contain",
    "image": "images/characters/merrow-vexthread.webp",
    "tokenImage": "images/tokens/merrow-vexthread-token.webp",
    "publishedAt": "2026-11-08T22:00:00-05:00"
  }
]
```

## Independent content review

Contributor content_review30 approved both drafts against the92-record inventory before JSON integration. Supported fields/IDs/classifications/locations, distinct hooks, Friendly Pella/Hostile Merrow portrayal, exactly one ordinary honest NPC and one sinister NPC, spoiler handling and respectful presentation passed without required corrections. Pella's accidental icehouse rescue is distinct from Della's earlier supplier-linked captivity investigation.

## Original artwork and prompts

Built-in image generation used Garran Vey for style only, followed by finalized portraits plus Brakka frame/site dragon references for tokens. Final prompt set:

- Use case stylized-concept. One original square NPC Beta fantasy portrait of Pella Rainskein, friendly older female HALFLING laundress, fair freckled skin, round cheeks, bright hazel eyes, short curly grey hair under a plain faded coral kerchief. Warm eager-to-help smile. Modest moss-green linen dress, cream sleeves rolled up and blue work apron. Holds a folded clean shirt and a small plain brass messenger badge BELOW face. Secondary quiet medieval wash yard, wooden tub, hanging plain linen and stone cottage, no other people. Reference Garran Vey STYLE ONLY: expressive ink contours, selective crosshatching, rich painted gouache colour and clear graphic shadows, believable anatomy. Do not copy reference identity, forge, sword or apron design. Centered WAIST-UP both complete shoulders, full head/hair/kerchief/ears inside square, highest head point20 PERCENT DOWN FROM TOP, generous clear background overhead, face upper-middle. Sharp full-size hand-painted fantasy illustration, not photo/skin pores/camera textures/cartoon exaggeration. No text, lettering, frame, watermark or extra characters. Opaque square.

- Framing correction ONLY: slight zoom out so highest kerchief point begins20 percent DOWN from top edge of square (currently13%). Preserve exact Pella older female halfling identity, freckles, grey curls/coral kerchief, warm friendly smile, green dress/blue apron, folded shirt and brass badge, wash yard and sharp painted ink/gouache style. Both complete shoulders, entire head/kerchief/ears and waist visible, generous clear yard background overhead. No cropping/stretching or identity/expression changes. No text/border/other characters.

- Use case stylized-concept. One original square NPC Beta fantasy portrait of Merrow Vexthread, adult male HALFLING tailor with deep brown skin, angular narrow face, dark eyes, long straight black hair tied in a short low tail, thin neatly trimmed moustache, small rounded ears. Hostile arrogant unsmiling expression, one eyebrow raised, mouth closed. Well-fitted ochre wool waistcoat over cream linen shirt, plum neckcloth, dark trousers, a plain cloth measuring ribbon around neck. Holds a folded charcoal formal coat and needlework BELOW face, no sharp object brandished. Secondary modest medieval tailoring shop, wooden dress stand and folded cloth shelves, no other characters. Reference image STYLE ONLY: expressive ink contours, selective crosshatching, rich painted gouache colours, clear graphic shadows and believable anatomy. Do not copy reference face/forge/sword/apron. Centered waist-up, both complete shoulders, entire head/hair/ears visible, highest hair point20 PERCENT DOWN FROM TOP of square with generous clear shop background overhead. Sharp full-size hand-painted fantasy illustration, not photographic, no camera textures/skin pores/cartoon exaggeration. No text, labels, border, watermark or occult effects. Opaque square.

- undefined

- One circular virtual tabletop token. Image1 FINAL IDENTITY Merrow Vexthread: male halfling tailor, deep brown skin, tied-back black hair with low tail, thin moustache, hostile arrogant unsmiling expression, ochre waistcoat/cream shirt/plum neckcloth. Preserve exact face/hair/clothes and sharp painted ink-and-gouache fantasy style. Center head and upper chest, complete hair/tail/ears safely INSIDE circle, readable at280px. Image2 FRAME ONLY approved Brakka restrained antique brass/burgundy/charcoal circular border. Image3 DRAGON ONLY small subtle dragon-head bottom medallion, no letters/nameplate. Muted tailor shop inside circle. Whole border within square with small transparent safety margin. Genuinely transparent exterior, no exterior scenery/shadow. No text, watermark or extra people. High-resolution source.

Lossless full-resolution sources: `project/npc-packs/sources/nightly-2026-11-08/<npc-id>-portrait.webp` and `<npc-id>-token.webp`. Deployed assets: `docs/images/characters/<npc-id>.webp` and `docs/images/tokens/<npc-id>-token.webp`. Portrait960 opaque q75/method6; token280 alpha q80/method6. Direct resize from lossless originals without cropping or upscaling.

## Validation

Local page build and deterministic check passed, generating94 permanent profiles. Existing public-page, role-category, location-fit, Saved-filter and token DOM suites passed, as did portrait-mapping JS syntax. No shared application code, tests or browser storage changed. Exactly2new records; all old92 deep-equal fresh main;94 unique IDs/slugs and valid published location/classification references.

All deployed WebPs decode at960×960 opaque RGB /280×280 RGBA, with transparent token corners and edge midpoints. All four1254-square source WebPs decode as lossless VP8L. Portraits inspected at full960 size; tokens inspected at280 and70. Actual portrait bytes: Pella196072, Merrow180416. Token bytes:Pella25700, Merrow24456. Portrait size guidance is approximate; requested quality75/method6 retained with sharp detail. Shared mappings cover Library/Saved/Session and tokenImage uses existing below-introduction controls.

Local Chromium is unavailable. Required PR CI must pass native375/1440 cards/profiles, uncropped full-resolution imagery, no hover crop, sharing/keyboard, token download placement/bytes/names and Session checks before merge. Production deployment and actual live record/profile/asset responses must pass after merge.



