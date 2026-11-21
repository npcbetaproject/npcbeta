# Nightly NPCs — November 20, 2026

Friday America/Toronto; area: Trade Roads. Fresh main `bc25f31c47cd806fce6956df103bb39b7c173159`. Exact date branch/PR checks found no existing work; current116 records contain no November20 entries. Publication explicitly authorized.

## Selected concepts

- Poldren Tansypot — Indifferent halfling roadside cook; Trade Roads: feeds stranded drovers without taking a consignment promised to the next waystation. Varied honest NPC.
- Wendel Sootsaffron — Indifferent halfling salt trader, sinister; Trade Roads: plants a stolen cursed reliquary in another trader’s cargo so its pursuers target an innocent convoy.

Concepts chosen randomly from separate six-option pools using secrets.choice; independent equal-probability demeanor draws from Friendly, Indifferent and Hostile both yielded Indifferent. Shared ancestry and initial attitude do not imply shared morality: jobs, appearance, goals and hooks differ. Friday retains varied-plus-sinister composition; special Monday/Tuesday/Thursday villain and Thursday monster rules do not apply. Wendel’s danger-transfer scheme differs from Sarra Bonebutton’s release-a-shade market scheme: no opening the reliquary, wards or undead release, and the living guardians can hear evidence and lift the false mark.

## Draft for independent content review

GM spoilers: sealed consignment promise, planted stolen reliquary, false supernatural carrier mark and delivery-slip evidence. All travelers/carters/drovers/guardians are adults. Curse mechanics are fictional. The hook prioritizes warning, evidence, return and protection rather than attacking the innocent convoy. Review before public JSON integration.

```json
[
  {
    "id": "poldren-tansypot",
    "slug": "poldren-tansypot",
    "name": "Poldren Tansypot",
    "ancestry": "Halfling",
    "role": "Roadside cook",
    "group": "townsfolk",
    "subtitle": "Supper without breaking a promise",
    "summary": "Poldren serves hot meals from a cooking wagon at a busy trade-road stopping place, answering questions while counting portions. A closed ford has stranded more drovers than he can feed, but he refuses to open a food consignment already promised to the next waystation.",
    "tableNote": "Count bowls before faces, keep stirring during introductions and ask how many people need feeding. Say, “How many portions, and what can you trade? Those sacks belong to the next stop.” His indifference comes from concentrating on the work, not a lack of concern.",
    "personality": "Initially indifferent, busy and strictly practical; dependable about other people’s supplies and quietly pleased when a useful plan feeds everyone without breaking a promise.",
    "motivations": "Give the stranded adults a proper supper, deliver the promised consignment intact and keep his cooking wagon welcome along the trade road.",
    "adventureHook": "A closed ford leaves adult drovers camped beside Poldren’s wagon with cold travel rations and little dry fuel. He asks the party to negotiate for spare firewood and cooking supplies at the nearby caravanserai, organize a shared meal from the travelers’ own provisions or arrange a sheltered cooking place until the crossing reopens. He will cook and share his remaining ingredients, but will not take from the sealed onward consignment. Successful helpers receive meals at his next roadside stop and introductions to drovers who know the route.",
    "locationIds": [
      "roadside-campsite",
      "river-ford",
      "caravanserai"
    ],
    "locationFit": [
      "Trade-road stopping places",
      "Caravan cooking wagons",
      "Stranded drover camps"
    ],
    "roleCategoryIds": [
      "hospitality-entertainment"
    ],
    "locationFitCategoryIds": [
      "roads-travel"
    ],
    "tags": [
      "merchant",
      "quest-giver"
    ],
    "imageAlt": "Busy tan-skinned halfling roadside cook with a shaved crown, short curly dark hair at the sides and a neat mustache, wearing a faded ochre shirt and charcoal apron while holding a wooden ladle beside a cooking wagon on a trade road.",
    "portraitKey": "poldren-tansypot",
    "portraitFit": "contain",
    "image": "images/characters/poldren-tansypot.webp",
    "tokenImage": "images/tokens/poldren-tansypot-token.webp",
    "publishedAt": "2026-11-20T22:00:01-05:00"
  },
  {
    "id": "wendel-sootsaffron",
    "slug": "wendel-sootsaffron",
    "name": "Wendel Sootsaffron",
    "ancestry": "Halfling",
    "role": "Salt trader",
    "group": "townsfolk",
    "subtitle": "A stolen burden in someone else’s sacks",
    "summary": "Wendel trades sacks of salt along a caravan road with a bored, transactional manner. He has hidden a stolen curse-bearing reliquary in another trader’s cargo so its pursuing guardians will target that innocent convoy while he escapes with his payment.",
    "tableNote": "Brush salt dust from a cuff, check a weight and quote a price without asking about the buyer’s journey. Say, “Weight, grade and where you want it delivered. I don’t discuss another trader’s cargo.” His indifference conceals a deliberate transfer of danger.",
    "personality": "Initially indifferent, professional and sparing with words; calculating about risk and willing to sacrifice fellow travelers’ safety to keep the proceeds of his theft.",
    "motivations": "Keep the collector’s advance, pass beyond the guardians’ patrol route and leave an innocent trader to answer for the stolen object. His signed delivery slip is the evidence he overlooked.",
    "adventureHook": "At a trade-road campsite, a carter asks why one salt sack has grown rimed with dark frost despite a warm evening. GM secret: Wendel planted a sealed reliquary whose curse marks its current carrier as the thief; its living sworn guardians follow that mark and may attack unless stopped to hear evidence. Wendel’s signed delivery slip and the carter’s account identify who supplied the sack. Before the guardians reach the next stopping place, the party can warn the convoy, intercept them with the evidence and arrange the object’s return, or find Wendel before he departs the caravanserai. The guardians can lift the false mark once the reliquary is returned; opening it is unnecessary. Wendel offers the collector’s name in exchange for passage, but the innocent convoy still needs protection.",
    "locationIds": [
      "roadside-campsite",
      "caravanserai",
      "storeroom"
    ],
    "locationFit": [
      "Trade-road salt convoys",
      "Caravanserai loading yards",
      "Roadside cargo camps"
    ],
    "roleCategoryIds": [
      "merchants-crafters",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "roads-travel"
    ],
    "tags": [
      "antagonist",
      "merchant"
    ],
    "imageAlt": "Uninterested olive-skinned halfling salt trader with a straight auburn bob, narrow face and clean-shaven chin, wearing a dark green traveling coat and maroon scarf while holding a folded delivery slip beside covered salt sacks at a caravanserai.",
    "portraitKey": "wendel-sootsaffron",
    "portraitFit": "contain",
    "image": "images/characters/wendel-sootsaffron.webp",
    "tokenImage": "images/tokens/wendel-sootsaffron-token.webp",
    "publishedAt": "2026-11-20T22:00:00-05:00"
  }
]
```

## Independent content review

Contributor content_review30 approved before index integration: meaningful Trade Roads setting, consistent Indifferent attitudes, one honest cook and one sinister trader, Wendel’s scheme distinct from Sarra’s shade release, actionable evidence/negotiation/curse-removal paths, original names/IDs and supported fields/classifications/tags/published locations/spoilers. Markdown and JSON match; no required corrections.

## Artwork prompts

Built-in image generation, one call per asset. Both initial portraits passed identity, framing and painted ink/gouache style inspection; no variants or corrections required. Tokens derive from settled portraits plus approved Brakka frame and dragon-only logo references.

```json
{
  "portraits": [
    {
      "id": "poldren-tansypot",
      "prompt": "Use case: stylized-concept. Asset: ONE standalone square NPC Beta portrait. Garran Vey reference is MEDIUM/INK STYLE ONLY, not identity, forge or sword. Painted Ink and colour fantasy RPG illustration: expressive ink contours, selective crosshatching, rich gouache colour, clear graphic shadow shapes, believable anatomy. Sharp full-resolution opaque square artwork. Centered WAIST-UP with both full shoulders and entire head/hair/ears inside canvas. Highest head point20% down from top, generous background above and beside head, face upper-middle, props BELOW face. No tight closeup, cropped head, text, border, watermark, photographic skin pores/camera texture or extra characters. Poldren Tansypot, middle-aged male halfling roadside cook: warm tan skin, shaved crown with short dark curls at sides, neat small mustache, small rounded ears, round face, busy indifferent expression looking briefly up from work. Faded ochre linen shirt and charcoal apron, simple leather belt. Holds a wooden ladle below chest beside a large cooking pot and cooking wagon, empty trade road and caravan stopping ground softly behind. Warm late-afternoon daylight, muted ochre/charcoal/wood tones. Compact sturdy halfling proportions, grounded medieval professional. No chef hat or modern kitchen."
    },
    {
      "id": "wendel-sootsaffron",
      "prompt": "Use case: stylized-concept. Asset: ONE standalone square NPC Beta portrait. Garran Vey reference is MEDIUM/INK STYLE ONLY, not identity, forge or sword. Painted Ink and colour fantasy RPG illustration: expressive ink contours, selective crosshatching, rich gouache colour, clear graphic shadow shapes, believable anatomy. Sharp full-resolution opaque square artwork. Centered WAIST-UP with both full shoulders and entire head/hair/ears inside canvas. Highest head point20% down from top, generous background above and beside head, face upper-middle, props BELOW face. No tight closeup, cropped head, text, border, watermark, photographic skin pores/camera texture or extra characters. Wendel Sootsaffron, adult male halfling salt trader: light olive skin, straight auburn chin-length bob, narrow clean-shaven face, small rounded ears, uninterested indifferent professional expression. Dark forest-green traveling coat and maroon scarf, plain practical trader clothes. Holds a folded delivery slip with no readable writing below chest; covered burlap salt sacks and an empty caravanserai loading yard softly behind, trade-road setting. Cool morning light with green/maroon/cream tones, compact halfling proportions. No villain grin, no magical effects or visible cursed object, no modern objects."
    }
  ],
  "tokens": [
    {
      "id": "poldren-tansypot",
      "prompt": "Use case: compositing. Create ONE circular virtual tabletop token of Poldren Tansypot from reference1 FINAL portrait, preserving this tan-skinned middle-aged male halfling cook, shaved crown/dark curly side hair, neat mustache, round face and small rounded ears, busy indifferent expression, faded ochre shirt and charcoal apron, painted Ink and colour fantasy RPG style. Reference2 Brakka is FRAME/LAYOUT ONLY: restrained antique brass/burgundy/charcoal circular border with small diamonds. Reference3 logo supplies ONLY tiny subtle dragon-head bottom medallion, no lettering/nameplate. Center whole head and upper chest, all hair/ears inside circle with breathing room; complete border inside square with transparent safety margin. Subdued roadside cooking-wagon background INSIDE circle only. Genuinely transparent exterior, no exterior shadow. Sharp face readable at280 and70px. No text, extra people or modern objects. High-resolution square."
    },
    {
      "id": "wendel-sootsaffron",
      "prompt": "Use case: compositing. Create ONE circular virtual tabletop token of Wendel Sootsaffron from reference1 FINAL portrait, preserving this light olive-skinned adult male halfling, auburn chin-length bob, narrow clean-shaven face, small rounded ears, indifferent uninterested expression, forest-green coat and maroon scarf, painted Ink and colour fantasy RPG style. Reference2 Brakka is FRAME/LAYOUT ONLY: restrained antique brass/burgundy/charcoal circular border with small diamonds. Reference3 logo supplies ONLY tiny subtle dragon-head bottom medallion, no lettering/nameplate. Center whole head and upper chest, all hair/ears inside circle with breathing room; complete border inside square with transparent safety margin. Subdued caravanserai background INSIDE circle only. Genuinely transparent exterior, no exterior shadow. Sharp face readable at280 and70px. No text, extra people or magical effects. High-resolution square."
    }
  ]
}
```

## Final assets and validation

| NPC | Portrait bytes | Token bytes | Lossless portrait source bytes | Lossless token source bytes |
| --- | ---: | ---: | ---: | ---: |
| Poldren Tansypot | 213774 | 26670 | 2523536 | 1921150 |
| Wendel Sootsaffron | 179204 | 26588 | 2277180 | 1881612 |

Final portraits at `docs/images/characters/<npc-id>.webp`: exact960×960 opaque RGB WebP quality75/method6. Final tokens at `docs/images/tokens/<npc-id>-token.webp`: exact280×280 RGBA WebP quality80/method6. Four1254×1254 VP8L lossless sources retained under `project/npc-packs/sources/nightly-2026-11-20/<npc-id>-portrait.webp` and `<npc-id>-token.webp`. Final portraits/tokens and70px token previews visually inspected: matching identities, painted ink/gouache style, sharp faces, complete heads/hair/ears, generous portrait headroom, complete approved brass/burgundy/charcoal frame and subtle dragon-only emblem. Alpha0–255 with transparent corners/edge midpoints and a small safety margin. Exports come from full-resolution generated PNGs, never enlarged thumbnails. Poldren’s dense artwork exceeds the approximate portrait size target; requested quality and exact dimensions retained.

118 unique stable records; all old116 exactly equal and ordered, all old NPC pages match main hashes. Valid published location IDs and nonempty classifications. Newest order Poldren then Wendel. Exactly15 changed files: two profiles, directory/sitemap, data/mappings, four assets, four sources and batch note. Existing shared popup keeps Download token below introduction beside Copy link/View full page, with matching Library/Saved/Session portrait mappings. No shared UI/storage migrations or unrelated changes.

Passed locally: build and --check; public-page DOM (metadata, sharing, focus/scroll/state preservation, stable slugs, Session safety/cross-tab updates); role/location-fit/Saved-filter DOM (combined filtering, recent sort, storage preservation); token DOM (preview/download/action placement/reset/Session); mapping JS syntax; record/ref/mapping/image/source validation. Native Chromium unavailable locally. Existing PR CI375px/1440px browser checks must pass before merge, covering full-size uncropped cards/profiles, sharing/Session/overflow and every token download’s bytes/filename. Production deployment and actual live10-endpoint verification follow merge; outcomes recorded in PR.
