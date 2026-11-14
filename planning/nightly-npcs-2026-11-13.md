# Nightly NPCs — November 13, 2026

Friday America/Toronto. Fresh main `543b80bf4ea544e0bfd9e327a23af772c5db9c4b`. Exact date branch and PR queries found no existing work; current102 entries contain no November13 records. Publication is explicitly authorized.

## Selected concepts

- Alwen Brasshoof — Friendly human farrier: needs a calm escort for an injured packhorse carrying a stranded family’s winter provisions. Varied honest ally.
- Sovren Palevial — Indifferent elf physician, sinister: secretly prolongs an adult noble patient’s illness to sell access and control the estate’s decision-maker.

Concepts were selected using Python secrets.choice from separate six-option pools. The first sinister draw, an ostler, overlapped with the farrier’s horse care; it was resampled randomly from the remaining five roles before suggestions to ensure a varied pair. Each demeanor was independently drawn with equal probability from Friendly, Indifferent and Hostile; Friendly and Indifferent were retained. Friday does not trigger Thursday’s monster requirement. Initial attitude is distinct from morality.

## Draft for independent content review

GM spoilers: delivery obstacles, deliberate medical abuse, suppressed patient wishes and paid influence. The patient is an adult and retains agency through written requests for independent care. No real medical methods or recipes are provided. Review before JSON integration.

```json
[
  {
    "id": "alwen-brasshoof",
    "slug": "alwen-brasshoof",
    "name": "Alwen Brasshoof",
    "ancestry": "Human",
    "role": "Farrier",
    "group": "townsfolk",
    "subtitle": "A slow road for a precious load",
    "summary": "Alwen shoes working horses and welcomes worried owners with a smile and patient explanations. She is tending an injured packhorse whose load of winter provisions belongs to a family stranded beyond the ridge.",
    "tableNote": "Offer a stool, lower your voice near an anxious animal and praise anyone who follows careful instructions. Say, “Good, you’ve brought steady hands. We’ll get that food home, but we won’t ask a sore horse to carry our hurry.”",
    "personality": "Initially friendly, encouraging and generous with practical advice; firm about animal welfare and quick to notice when someone needs reassurance.",
    "motivations": "Get the family’s provisions over the ridge, prevent the horse’s injury from worsening and show that careful work matters more than a fast delivery.",
    "adventureHook": "Alwen has removed the pack and asks the party to carry or arrange transport for the provisions while she leads the horse slowly to shelter. The family is waiting at an old rock shelter before the night turns cold. A steep shortcut is too rough for the animal; the longer track passes a shallow ford where recent rain may delay the load. The party can scout the ford, borrow a handcart from the stables or split the food into manageable packs. Alwen offers her farrier services in return and insists that nobody ride the injured horse.",
    "locationIds": [
      "stables",
      "river-ford",
      "rock-shelter"
    ],
    "locationFit": [
      "Stable work bays",
      "Ridge delivery tracks"
    ],
    "roleCategoryIds": [
      "merchants-crafters"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "roads-travel",
      "wilderness"
    ],
    "tags": [
      "ally",
      "quest-giver"
    ],
    "imageAlt": "Smiling olive-brown-skinned human farrier with dark curly hair in a low bun, wearing an ochre shirt, teal waistcoat and dark leather apron while holding a horseshoe in an open stable work bay.",
    "portraitKey": "alwen-brasshoof",
    "portraitFit": "contain",
    "image": "images/characters/alwen-brasshoof.webp",
    "tokenImage": "images/tokens/alwen-brasshoof-token.webp",
    "publishedAt": "2026-11-13T22:00:01-05:00"
  },
  {
    "id": "sovren-palevial",
    "slug": "sovren-palevial",
    "name": "Sovren Palevial",
    "ancestry": "Elf",
    "role": "Physician",
    "group": "townsfolk",
    "subtitle": "The patient never quite recovers",
    "summary": "Sovren serves an adult noble household with a distracted, strictly professional manner. He secretly prolongs his patient’s illness and uses exclusive control of the sickroom to sell access to the estate’s decision-maker.",
    "tableNote": "Close the case before answering, check the hour and ask visitors to state their business briefly. Say, “Name, purpose and length of visit. I have other duties, and the patient requires quiet.” His initial indifference is brisk routine rather than overt intimidation.",
    "personality": "Initially indifferent, preoccupied and transactional; privately controlling and willing to harm a dependent patient to preserve his influence.",
    "motivations": "Keep the noble dependent on his care, collect payments from petitioners seeking private audiences and prevent an independent healer from examining the patient.",
    "adventureHook": "A household steward asks the party to escort an independent healer after noticing that the noble improves whenever Sovren is away. The patient’s own letters request another opinion, but Sovren withholds them and claims all visits are forbidden. The party can recover the letters from his locked case, persuade the household to honor the patient’s wishes or bring the healer through a service passage with the steward’s help. Sovren’s private payment ledger links paid audiences to concessions granted during the illness. Confronted with evidence, he offers the party a share of the fees or threatens to accuse the steward of poisoning; securing the patient’s consent and independent care breaks his leverage.",
    "locationIds": [
      "private-residence",
      "servants-passage",
      "apothecary"
    ],
    "locationFit": [
      "Estate sickroom antechambers",
      "Private consulting rooms"
    ],
    "roleCategoryIds": [
      "faith-healing",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "castles-estates"
    ],
    "tags": [
      "antagonist"
    ],
    "imageAlt": "Bronze-skinned older elf physician with an angular clean-shaven face, pointed ears and black hair silvered at the temples, wearing a forest-green robe while holding a burgundy medical case in an estate antechamber.",
    "portraitKey": "sovren-palevial",
    "portraitFit": "contain",
    "image": "images/characters/sovren-palevial.webp",
    "tokenImage": "images/tokens/sovren-palevial-token.webp",
    "publishedAt": "2026-11-13T22:00:00-05:00"
  }
]
```

## Independent content review

Contributor content_review30 approved both complete drafts before index integration. Alwen’s load-carrying route problem differs from Morla’s replacement-mule negotiation; Sovren’s patient-access scheme includes consent, evidence and independent-care options. Final review passed originality against102 records, names/IDs, supported fields, classifications/tags/published locations, Friendly/Indifferent demeanor consistency, exactly one sinister NPC and spoiler handling. No required corrections.

## Artwork prompts

Built-in image generation with Garran Vey style reference; finalized portrait identity, approved Brakka frame and dragon-only logo for tokens. Sovren received one targeted headroom correction.

### alwen

Use case: stylized-concept. Original square permanent fantasy NPC portrait. Image1 Garran Vey is STYLE ONLY: expressive ink contours, selective crosshatching, rich gouache colour, graphic shadows. Do not copy identity, sword, forge or pose. Alwen Brasshoof, adult human female farrier, sturdy build, olive-brown skin, broad smiling face, dark brown curly hair tied in a low practical bun, a few loose curls, brown eyes. Friendly warm helpful expression. Rolled-sleeve ochre linen shirt, faded teal waistcoat, worn dark leather farrier apron, small horseshoe held below face at lower chest. Secondary backdrop: open stable work bay, timber beams and neatly hung hoof-care tools, no horse or extra character. Waist-up, both full shoulders inside frame, complete head/hair visible, highest hair at20 percent of square height with generous clear background above. Sharp full-size painted ink-and-colour fantasy illustration, grounded medieval workwear, no photography, no skin pores, no blur, no text/frame/watermark. Opaque square.

### sovren

Use case: stylized-concept. Original square permanent fantasy NPC portrait. Image1 Garran Vey is STYLE ONLY: expressive ink contours, selective crosshatching, rich gouache colour, graphic shadows. Do not copy its human identity, forge, sword or pose. Sovren Palevial: older adult male elf physician, bronze skin, long angular clean-shaven face, narrow dark eyes, long black hair with silver temples tied back at nape, complete pointed ears. Indifferent distracted professional expression, glancing toward his closed case instead of viewer, no evil grin. Dark forest-green medieval robe with cream inner collar, simple copper clasp; holds a closed burgundy leather physician's case below face at waist. Secondary scene quiet estate sickroom antechamber with wood panelling and shelves of ceramic jars, no patients/otherpeople. Waist-up, both full shoulders inside canvas, entire hair and ears visible. Highest hair at20 percent square height with generous clear headroom. Sharp full-size painted ink-and-colour fantasy illustration, grounded medieval clothing, no photography/skinpores/blur/text/frame/watermark. Opaque square.

### sovrenFraming

Use case: identity-preserve. Correct only framing of this Sovren Palevial portrait: zoom out slightly and add matching wood-panelled antechamber above and around sides so highest hair sits at20 percent square height, with generous clear background. Keep exact older bronze-skinned elf identity, angular clean-shaven face, pointed ears, black hair with silver temples tied back, indifferent downward glance, forest-green robe, cream collar, copper clasp, closed burgundy physician's case, sharp ink/crosshatching/gouache style and warm lighting. Entire hair/ears/head and both shoulders inside canvas; props below face. No new objects/people/text/frame. Opaque square full-size painting.

### alwenToken

Use case: compositing. Circular tabletop token of Alwen Brasshoof. Image1 FINAL IDENTITY: friendly olive-brown human female farrier, broad smiling face, dark brown curls in low bun with loose curls, brown eyes, ochre shirt, teal waistcoat and dark leather apron, sharp ink/crosshatching/gouache style. Image2 FRAME ONLY: approved restrained antique brass/burgundy/charcoal circular border with small diamond ornaments. Image3 BRAND ONLY: use its dragon head in subtle small bottom medallion, no lettering. Center head and upper chest, entire bun/hair and both ears safely inside inner circle, face readable at280px. Subdued warm stable-brown interior backdrop. Complete border inside square with transparent safety margin. Genuinely transparent exterior, no exterior shadow/scenery. No text/nameplate/watermark. High-resolution square.

### sovrenToken

Use case: compositing. Circular tabletop token of Sovren Palevial. Image1 FINAL IDENTITY: older bronze-skinned male elf physician, long angular clean-shaven face, black hair with silver temples tied back at nape, complete pointed ears, indifferent distracted downward glance, forest-green robe, cream collar and copper clasp, sharp ink/crosshatching/gouache painting style. Image2 FRAME ONLY: approved restrained antique brass/burgundy/charcoal circular border with small diamond ornaments. Image3 BRAND ONLY: dragon head only in subtle small bottom medallion, NO lettering. Center head and upper chest, entire hair and both pointed ears safely inside inner circle, face readable at280px. Subdued warm brown interior backdrop. Entire circular frame inside square with transparent safety margin. Genuinely transparent exterior, no outside shadow/scenery. No text/nameplate/watermark. High-resolution square.


## Asset and integration validation

Portraits960×960 opaque RGB WebP q75/m6: Alwen228182 bytes, Sovren161622 bytes. Alwen exceeds the approximate size target to preserve dense ink detail at required quality. Tokens280×280 RGBA WebP q80/m6: Alwen24942 bytes, Sovren22148 bytes. Both genuinely transparent exteriors and complete restrained brass/burgundy frames with dragon-only emblems. Full-size lossless1254×1254 WebP sources are retained at `project/npc-packs/sources/nightly-2026-11-13/<id>-portrait.webp` and `<id>-token.webp`. Full-size portraits and native/70px tokens inspected for identity, full heads, headroom, sharp detail and readable faces.

104 unique records, all102 older records exact; references, published locations, classifications, release order, mappings and dimensions/alpha/decoding pass. Generated104 pages and deterministic check pass. Public-page, role, location-fit, Saved and token DOM suites plus mapping syntax pass. Local Chromium unavailable; required native375px/1440px PR CI browser checks must pass before merge, including cards/profiles, actual downloads, sharing and Session.
