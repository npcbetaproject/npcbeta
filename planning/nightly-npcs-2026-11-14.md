# Nightly NPCs — November 14, 2026

Saturday America/Toronto. Fresh main `216fc2ad4e1c910f52a8977233a8765a914c4d6f`. Exact date branch and PR queries found no existing work; current104 entries contain no November14 records. Publication is explicitly authorized.

## Selected concepts

- Marda Copperleaf — Friendly human coppersmith: needs a borrowed ceremonial basin returned before two households’ shared feast can begin. Varied honest ally.
- Perria Sootmark — Hostile halfling ink maker, sinister: sells cursed contract ink that erases readers’ memories of the agreed terms, profiting from a lender’s broken promises.

Concepts selected randomly from two separate six-option pools with Python secrets.choice. Each demeanor independently drawn with equal probability from Friendly, Indifferent and Hostile: Friendly and Hostile. Saturday does not trigger Thursday’s monster requirement. Initial attitude is distinct from morality.

## Draft for independent content review

GM spoilers: feast negotiation, memory curse, lender fraud and the master bottle’s release condition. Borrowers and clerks are adults. The curse is fantasy-only; no real ink recipe or fraud procedure is provided. Review before JSON index integration.

```json
[
  {
    "id": "marda-copperleaf",
    "slug": "marda-copperleaf",
    "name": "Marda Copperleaf",
    "ancestry": "Human",
    "role": "Coppersmith",
    "group": "townsfolk",
    "subtitle": "One basin for two tables",
    "summary": "Marda makes and repairs copper household wares, greeting visitors with an eager smile and a stream of practical suggestions. A ceremonial basin she lent for a shared feast is now caught between two households that each insist the other should collect it.",
    "tableNote": "Offer to mend a loose clasp while talking, call people by name and sketch possible compromises on the bench with a finger. Say, “Come in, there’s room for another pair of hands! We can polish a basin; getting two proud neighbors to carry it together takes more care.”",
    "personality": "Initially friendly, talkative and eager to be useful; patient with awkward negotiations but unwilling to let her work become a token of someone else’s superiority.",
    "motivations": "Recover the borrowed basin without humiliating either household, preserve the shared feast and keep her workshop’s loans grounded in trust.",
    "adventureHook": "The basin waits in a private courtyard, but neither household will send a cart first: each thinks doing so would acknowledge the other as host. Marda asks the party to collect it before sunset and offers repairs in return. They can arrange a neutral cart, persuade both households to contribute carriers or move the feast to the public market with agreement from both sides. Marda will lend the basin again once its return and care are settled; she refuses to invent a debt or ownership claim merely to force cooperation.",
    "locationIds": [
      "blacksmiths-forge",
      "private-residence",
      "courtyard",
      "market-square"
    ],
    "locationFit": [
      "Metalworkers’ benches",
      "Shared household courtyards"
    ],
    "roleCategoryIds": [
      "merchants-crafters"
    ],
    "locationFitCategoryIds": [
      "settlements",
      "castles-estates"
    ],
    "tags": [
      "ally",
      "quest-giver"
    ],
    "imageAlt": "Warmly smiling elderly human coppersmith with fair freckled skin and a short white bob, wearing a rust-red shirt and slate-grey apron while holding a polished copper bowl in a daylight workshop.",
    "portraitKey": "marda-copperleaf",
    "portraitFit": "contain",
    "image": "images/characters/marda-copperleaf.webp",
    "tokenImage": "images/tokens/marda-copperleaf-token.webp",
    "publishedAt": "2026-11-14T22:00:01-05:00"
  },
  {
    "id": "perria-sootmark",
    "slug": "perria-sootmark",
    "name": "Perria Sootmark",
    "ancestry": "Halfling",
    "role": "Ink maker",
    "group": "townsfolk",
    "subtitle": "The terms nobody remembers",
    "summary": "Perria mixes writing inks and meets questions with a suspicious glare and clipped demands. She secretly sells a moneylender cursed contract ink that erases readers’ memories of the negotiations, letting the lender deny promises made before signing.",
    "tableNote": "Keep one hand over the bottle stopper, challenge anyone who reaches across the counter and answer curiosity as though it were an accusation. Say, “Buying ink or prying? State the color and pay. My customers’ business is none of yours.” Her hostility is defensive and mocking, not an automatic attack.",
    "personality": "Initially hostile, suspicious and quick to belittle unwelcome questions; deliberately exploits other people’s confusion while guarding the reputation of her ordinary inks.",
    "motivations": "Collect a continuing cut of the lender’s proceeds, hide the curse among legitimate commissions and keep the uncursed drafts that make her indispensable to the scheme.",
    "adventureHook": "An adult borrower remembers visiting a lender but cannot recall a promised grace period; two other clients describe the same gap after reading their contracts. Perria keeps the original uncursed drafts in her workshop, alongside orders linking the black bottles to the lender. Before a new group signs at dawn, the party can obtain those drafts, warn the prospective borrowers or persuade an affected clerk to compare the orders with the lender’s copies. Breaking the wax seal on Perria’s master bottle ends the curse on that batch and restores the lost negotiations. Perria offers to release the batch if the party lets her keep the evidence against the lender, creating a choice between immediate relief and a fuller public accounting.",
    "locationIds": [
      "bookbinders-workshop",
      "general-store",
      "private-residence"
    ],
    "locationFit": [
      "Ink workshops",
      "Lenders’ consulting rooms"
    ],
    "roleCategoryIds": [
      "merchants-crafters",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "settlements"
    ],
    "tags": [
      "antagonist",
      "merchant"
    ],
    "imageAlt": "Suspicious olive-skinned halfling ink maker with cropped black hair, a blunt fringe and round copper spectacles, wearing an indigo coat while holding a stoppered black ink bottle with stained fingers in a cramped workshop.",
    "portraitKey": "perria-sootmark",
    "portraitFit": "contain",
    "image": "images/characters/perria-sootmark.webp",
    "tokenImage": "images/tokens/perria-sootmark-token.webp",
    "publishedAt": "2026-11-14T22:00:00-05:00"
  }
]
```

## Independent content review

Contributor content_review30 approved both complete entries before index integration. Marda’s hosting-status transport dispute differs from Korra’s competing canopy claims. Perria’s memory curse includes evidence, intervention options and an explicit restoration condition. Review passed originality against104 records, names/IDs, supported fields, classifications/tags/published locations, Friendly/Hostile consistency, exactly one sinister NPC and spoiler handling. Markdown and JSON match; no required corrections.

## Artwork prompts

Built-in image generation using Garran Vey style reference; finalized portraits, Brakka frame and dragon-only logo for tokens. Marda received one targeted headroom correction.

### marda

Use case: stylized-concept. Original square permanent fantasy NPC portrait. Image1 Garran Vey is STYLE ONLY: expressive ink contours, selective crosshatching, rich gouache colour, graphic shadows. Do not copy identity, sword, forge or pose. Subject Marda Copperleaf, elderly human female coppersmith, fair freckled skin, short straight white bob tucked behind ears, round weathered face with smile lines, bright grey eyes, warmly helpful smile. Rust-red linen work shirt beneath a slate-grey leather apron. She holds a small polished copper bowl below face at lower chest, hammer tucked into apron pocket. Secondary scene daylight copper workshop with hanging pans and wooden bench, no otherpeople. Waist-up, both full shoulders inside frame, entire white hair/head/ears visible. Highest hair at22 percent of square height, generous clear background above. Sharp full-size painted ink-and-colour fantasy illustration, grounded medieval workwear, no photography/skinpores/blur/text/frame/watermark. Opaque square.

### mardaFraming

Use case: identity-preserve. Correct only framing of this Marda Copperleaf illustration: zoom out slightly and add matching copper workshop background above and around sides until highest white hair sits at20 percent of square height with generous clear headroom. Keep exact elderly fair freckled human identity, short white bob, warm smile, rust-red shirt, slate-grey apron, copper bowl, tucked hammer, sharp ink/crosshatching/gouache style and daylight. Complete head/hair/ears and both shoulders inside frame, bowl below face. No new objects/people/text/frame. Opaque square full-size painting.

### perria

Use case: stylized-concept. Original square permanent fantasy NPC portrait. Image1 Garran Vey is STYLE ONLY: expressive ink contours, selective crosshatching, rich gouache colour, graphic shadows; do not copy its identity, forge or weapons. Perria Sootmark, adult female halfling ink maker: olive skin, small round face, cropped straight black hair with blunt fringe, small rounded ears, narrow hazel eyes behind small round copper spectacles. Hostile initial attitude: suspicious frown, tightly set mouth, guarded posture, not monstrous or violent. Indigo-blue medieval work coat with cream shirt, ink-stained fingers holding a stoppered black glass ink bottle at lower chest below face. Secondary backdrop cramped ink workshop with jars, folded paper and a stone mortar, no readable writing and nootherpeople. Waist-up, both full shoulders inside frame, entire hair/head/ears visible. Highest hair at22 percent square height with generous clear background above. Sharp full-size painted ink-and-colour fantasy illustration, grounded clothing, no photography/skinpores/blur/text/frame/watermark. Opaque square.

### mardaToken

Use case: compositing. Circular tabletop token of Marda Copperleaf. Image1 FINAL IDENTITY: elderly fair freckled human female coppersmith, short straight white bob tucked behind ears, round weathered face, grey eyes and warm helpful smile, rust-red shirt/slate-grey apron, sharp ink/crosshatching/gouache painting style. Image2 FRAME ONLY: approved restrained antique brass/burgundy/charcoal circular frame with small diamond ornaments. Image3 BRAND ONLY: dragon head only in subtle small bottom medallion, NO lettering. Center head and upper chest, full white hair/both ears safely inside innercircle, face readable at280px. Subdued copper-brown interior backdrop. Entire circular frame inside square with transparent safety margin. Genuinely transparent exterior, no outside shadow/scenery. No text/nameplate/watermark. High-resolution square.

### perriaToken

Use case: compositing. Circular tabletop token of Perria Sootmark. Image1 FINAL IDENTITY: hostile olive-skinned adult female halfling ink maker, small round face, black cropped hair/blunt fringe, small rounded ears, hazel eyes behind round copper spectacles, suspicious frown and tightly set mouth, indigo coat and cream shirt, sharp ink/crosshatching/gouache style. Image2 FRAME ONLY: approved restrained antique brass/burgundy/charcoal circular frame with small diamond ornaments. Image3 BRAND ONLY: use dragon head only in a subtle small bottom medallion, no lettering. Center head/upperchest, full hair/ears inside innercircle, readable at280px. Subdued brown-violet interior backdrop. Entire circular border inside square with transparent safety margin. Genuinely transparent exterior, no outside shadow/scenery. No text/nameplate/watermark. High-resolution square.


## Asset and integration validation

Portraits960×960 opaque RGB WebP q75/m6: Marda211416 bytes, Perria175352 bytes. Marda exceeds the approximate size target to retain dense ink detail at required quality. Tokens280×280 RGBA WebP q80/m6: Marda23794 bytes, Perria23842 bytes. Both genuinely transparent exteriors and complete restrained brass/burgundy frames with dragon-only emblems. Full-size lossless1254×1254 WebP sources retained at `project/npc-packs/sources/nightly-2026-11-14/<id>-portrait.webp` and `<id>-token.webp`. Full-size portraits and native/70px tokens inspected for identity, full heads/headroom, sharp detail and readable faces.

106 unique records, all104 older records exact; references, published locations, classifications, release order, portrait mappings and dimensions/alpha/decoding pass. Generated106 pages and deterministic check pass. Public-page, role, location-fit, Saved and token DOM suites plus mapping syntax pass. Local Chromium unavailable; required native375px/1440px PR CI browser checks must pass before merge, including uncropped cards/profiles, actual downloads, sharing and Session.
