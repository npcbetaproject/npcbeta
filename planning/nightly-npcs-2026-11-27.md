# Nightly NPCs — November 27, 2026

Friday America/Toronto; area: Trade Roads. Fresh main `14c6df142a7afd26ef1469af443ff1cb15c03d2b`. No existing date branch/PR or published batch; 130 records inspected. Exactly two NPCs and publication explicitly authorized.

## Selected concepts

- Nollis Barrelbrook — Friendly gnome traveling cooper; Trade Roads: repairs a convoy’s leaking water cask at a dry roadside stop. Varied non-sinister professional.
- Nestra Coilwhistle — Indifferent gnome whistle seller, sinister; Trade Roads: enchanted safety whistles reveal caravans to her hired highway robbers.

Concepts selected with secrets.choice from separate four-option pools. Demeanors independently drawn with equal probability from Friendly, Indifferent and Hostile; no rerolls. Both happened to be gnomes, with distinct professions, appearance and personalities. Friday does not require monsters or the expanded villain brief. Neither recent road cook/salt trader nor earlier gnome dentist repeats this profession or hook.

## Draft for independent content review

GM spoilers: paired whistle signals, locked sales case, payment book and hired robbers. All carters, guards and travelers are adults. Drafts reviewed before public index integration. Gnome is a recognizable public-domain folklore ancestry. Proposed classifications follow occupation; Nestra’s Underworld assignment reflects organized robbery rather than her demeanor.

```json
[
  {
    "id": "nollis-barrelbrook",
    "slug": "nollis-barrelbrook",
    "name": "Nollis Barrelbrook",
    "ancestry": "Gnome",
    "role": "Traveling cooper",
    "group": "townsfolk",
    "subtitle": "A sound hoop before the water runs out",
    "summary": "Nollis repairs barrels for caravans along a dry trade road and greets each arriving wagon like an old friend. A split hoop has left a convoy’s drinking-water cask leaking at his roadside workbench.",
    "tableNote": "Welcome visitors, offer a place in the shade and enthusiastically explain one useful detail about a barrel. Say, “Come into the shade! Hold this end, and I will show you how we keep everyone’s water inside the wood.” He is initially friendly, helpful and talkative.",
    "personality": "Initially friendly and eager to include strangers in useful work; proud of careful repairs, generous with advice and prone to explaining a craft problem long after others understand it.",
    "motivations": "Keep the convoy supplied until its next watering place, earn repeat work through reliable repairs and teach someone a skill they can use after he moves on.",
    "adventureHook": "Nollis asks the party to borrow a sound iron hoop from a carter resting at the nearby caravanserai. The carter needs that hoop for an empty cask promised to another customer; the party can arrange a replacement, negotiate a short loan or help transfer the water into clean spare vessels while Nollis repairs the damaged hoop. He supplies his labor and will accept a delayed departure rather than risk the convoy’s drinking water. Saving the supply earns a dependable traveling craftsman and introductions along the route.",
    "locationIds": [
      "roadside-campsite",
      "caravanserai",
      "cooperage"
    ],
    "locationFit": [
      "Trade-road caravan stops",
      "Roadside barrel-repair benches",
      "Caravanserai loading yards"
    ],
    "roleCategoryIds": [
      "merchants-crafters"
    ],
    "locationFitCategoryIds": [
      "roads-travel"
    ],
    "tags": [
      "quest-giver",
      "wanderer"
    ],
    "imageAlt": "Smiling older gnome traveling cooper with warm tan skin, a short silver beard, rounded ears and a low rust-red cap, wearing a blue work shirt and leather apron with a small hoop driver beside a barrel on a dusty trade road.",
    "portraitKey": "nollis-barrelbrook",
    "portraitFit": "contain",
    "image": "images/characters/nollis-barrelbrook.webp",
    "tokenImage": "images/tokens/nollis-barrelbrook-token.webp",
    "publishedAt": "2026-11-27T22:00:01-05:00"
  },
  {
    "id": "nestra-coilwhistle",
    "slug": "nestra-coilwhistle",
    "name": "Nestra Coilwhistle",
    "ancestry": "Gnome",
    "role": "Whistle seller",
    "group": "townsfolk",
    "subtitle": "Safety signals sold to highway robbers",
    "summary": "Nestra sells polished caravan whistles from a small stand beside the trade road, discussing prices with detached efficiency. Her enchanted stock sends each sounded signal to a matching whistle carried by highway robbers she employs.",
    "tableNote": "Keep sorting the stock while visitors speak, state the price and answer questions as routine transactions. Say, “One whistle per wagon. The price includes its case. Decide before the convoy moves.” She is initially indifferent and gives no unsolicited welcome.",
    "personality": "Initially indifferent, businesslike and impatient with bargaining; she treats travelers as sales figures and calmly shifts blame when her own decisions put them in danger.",
    "motivations": "Make caravan crews dependent on her supposed safety equipment and take a share of the cargo stolen by her accomplices. She wants enough money to establish a permanent roadside shop and knowingly funds attacks to obtain it.",
    "adventureHook": "A caravan guard hires the party after robbers arrive whenever a purchased whistle is sounded, even after the convoy changes its route. GM secret: Nestra keeps the paired whistles in a locked sales case until her accomplices collect them; a sounded note lets its paired holder hear the signal and see a fleeting image of the sender’s surroundings. The party can compare purchase receipts, watch a collection or secure the case before the next departure. The magic only works while a whistle is blown, so warning the crews and retiring the compromised whistles prevents further signals without silencing ordinary calls for help. Nestra offers the robbers’ meeting place for safe passage, but her payment book and a collector’s testimony can establish her role. Recovering the paired stock and warning the convoy stops her immediate scheme; the hired gang still needs to be confronted, diverted or reported.",
    "locationIds": [
      "roadside-campsite",
      "caravanserai",
      "bridge-tollhouse"
    ],
    "locationFit": [
      "Trade-road sales stands",
      "Caravanserai departure yards",
      "Roadside toll queues"
    ],
    "roleCategoryIds": [
      "merchants-crafters",
      "underworld"
    ],
    "locationFitCategoryIds": [
      "roads-travel"
    ],
    "tags": [
      "merchant",
      "antagonist"
    ],
    "imageAlt": "Reserved adult gnome whistle seller with deep brown skin, dark hazel eyes, rounded ears and black hair in a compact braided coil, wearing a muted plum coat over a cream blouse and holding an open wooden case of small brass whistles beside a trade road.",
    "portraitKey": "nestra-coilwhistle",
    "portraitFit": "contain",
    "image": "images/characters/nestra-coilwhistle.webp",
    "tokenImage": "images/tokens/nestra-coilwhistle-token.webp",
    "publishedAt": "2026-11-27T22:00:00-05:00"
  }
]
```

## Independent content review

Another contributor approved both complete drafts before JSON integration. Originality against 130 records, IDs, supported fields, classifications, tags, published locations, spoiler handling, Trade Roads setting and independently drawn demeanor consistency passed. No corrections required. Nollis is honest and Friendly; Nestra is Indifferent and deliberately sinister, with evidence and ways to stop her whistle signals.

## Artwork and prompts

Built-in image generation produced both painted portraits, followed by a targeted headroom correction for each. Matching tokens used each final portrait for identity, Brakka for the frame and the site logo for the dragon-only medallion. Final art visually inspected. Full-resolution lossless WebP sources retained in `project/npc-packs/sources/nightly-2026-11-27/`. Production portraits: opaque 960x960 quality 75/method 6. Tokens: 280x280 RGBA quality 80/method 6 with transparent exterior and safety margin.

```json
[{"id":"nollis-barrelbrook","portrait":"Use case: stylized-concept. Create one standalone square painted fantasy RPG NPC portrait for NPC Beta. Reference image is Garran Vey for ink-and-colour style ONLY, not his identity. Subject: Nollis Barrelbrook, older adult male gnome traveling cooper, short compact build, warm tan skin, bright brown eyes, large rounded ears, short neat silver beard and bushy silver eyebrows. Low rust-red wool cap, blue work shirt, worn leather apron. Friendly welcoming smile and open attentive posture; holds a small wooden-handled hoop driver BELOW his face, beside the top of a wooden water barrel. Scene: dry dusty medieval trade road stop, shaded workbench and softly secondary wagons and caravanserai wall; no other characters. Style: expressive ink contours, selective crosshatching, rich gouache colour, graphic shadows, believable anatomy, grounded medieval clothing. Painted illustration, no photo textures or camera effects. Composition: centered waist-up with BOTH shoulders and entire head, cap and ears visible. Highest point of cap at 20 percent down from canvas top; generous uninterrupted headroom above, face upper-middle. Props below face. Square full-resolution artwork, opaque background, no cropping or stretching. No text, frame, labels, watermark, montage or extra characters.","headroomCorrection":"Use case: identity-preserve. Reframe this finished square NPC portrait only: zoom the entire character and immediate work area out slightly so the highest point of his red cap is 20 percent down from the top edge, with clear sky/background above it. Keep square composition and naturally extend the same trade-road awning/background. Keep his EXACT face, older gnome identity, friendly smile, rounded ears, silver beard, red cap, blue shirt, apron, barrel, hand anatomy, tool, color palette and ink/gouache painted style unchanged. Both shoulders and full head remain visible. No new people, text, frame or watermark. This is a headroom correction, not a redesign.","token":"Create a circular virtual tabletop character token. Reference 1 is the FINAL portrait for exact identity and Ink and colour painted style: Nollis Barrelbrook, older male gnome traveling cooper with warm tan skin, brown eyes, short silver beard, rounded ears, low rust-red wool cap, blue shirt and leather apron, welcoming friendly smile. Preserve his exact face and costume. Reference 2 is the Brakka token FRAME reference: match restrained antique brass, burgundy and charcoal thin circular border with three tiny diamond ornaments top/left/right and small bottom medallion. Reference 3 provides ONLY the dragon-head emblem for that bottom medallion; no NPC Beta lettering. Head and upper chest bust, face readable at small size, COMPLETE cap, hair, both ears, beard and chin inside circle with breathing room. Subdued trade-road painted background inside circle only. Entire ring inside square with narrow transparent safety margin on all sides. True alpha transparency outside border, no exterior shadow, no text, labels, nameplate or extra people. Crisp high-resolution square source for 280x280 export."},{"id":"nestra-coilwhistle","portrait":"Use case: stylized-concept. Create one standalone square painted fantasy RPG NPC portrait for NPC Beta. Reference image is Garran Vey for ink-and-colour style ONLY, not his identity. Subject: Nestra Coilwhistle, adult female gnome caravan whistle seller, short compact build, deep brown skin, dark hazel eyes, large rounded ears and black hair arranged in a compact braided coil. Muted plum wool coat over cream linen blouse, practical leather belt. Cool indifferent businesslike expression, lips closed, attentive but no welcome; not angry or smiling. Holds a small open wooden display case with a few small polished brass whistles BELOW her face at waist level. Scene: medieval trade-road sales stand beside a caravan departure yard; softly secondary canvas awning, dusty road and distant loaded wagons, no other characters. Style: expressive ink contours, selective crosshatching, rich gouache colour, clear graphic shadows, believable anatomy and grounded medieval clothing. Painted illustration, no photographic skin pores, camera effects or exaggerated cartoon. Composition: centered waist-up BOTH shoulders in frame; complete head, braided coil and both ears. Highest point of hair at 20 percent down from canvas top, with generous clear background above; face upper-middle; props below face. Square full-resolution artwork opaque background; no cropping or stretching. No text, frame, labels, watermark, montage or extra characters.","headroomCorrection":"Use case: identity-preserve. Reframe this finished square NPC portrait only: zoom the entire character and display case out slightly so the highest point of her braided hair is 20 percent down from the top edge with clear background above it. Keep square composition and naturally extend the same trade-road stand/awning/background. Keep her EXACT face, adult female gnome identity, deep brown skin, cool indifferent closed-mouth expression, rounded ears, black braided coil, plum coat, cream blouse, open brass-whistle case, hand anatomy, color palette and ink/gouache painted style unchanged. Both shoulders and full head remain visible. No new people, text, frame or watermark. This is a headroom correction, not a redesign.","token":"Create a circular virtual tabletop character token. Reference 1 is the FINAL portrait for exact identity and Ink and colour painted style: Nestra Coilwhistle, adult female gnome whistle seller, deep brown skin, dark hazel eyes, rounded ears, black hair in compact braided coil, muted plum coat over cream blouse, cool indifferent businesslike closed-mouth expression. Preserve her exact face and costume. Reference 2 is the Brakka token FRAME reference: match restrained antique brass, burgundy and charcoal thin circular border with three tiny diamond ornaments top/left/right and small bottom medallion. Reference 3 provides ONLY the dragon-head emblem for that bottom medallion; no NPC Beta lettering. Head and upper chest bust, face readable at small size, COMPLETE braided hair coil, both ears and chin inside circle with breathing room. Subdued trade-road painted background inside circle only. Entire ring inside square with narrow transparent safety margin on all sides. True alpha transparency outside border, no exterior shadow, no text, labels, nameplate or extra people. Crisp high-resolution square source for 280x280 export."}]
```

## Validation before PR

PASS: 132 unique IDs/slugs; all 130 previous records unchanged; valid classifications and published location IDs; one portrait mapping per new NPC; permanent pages, directory and sitemap built and checked. Public-page, token DOM, Saved-filter, role/location-fit DOM and JavaScript syntax checks passed.

Final opaque 960x960 RGB portraits and 280x280 RGBA tokens decode as WebP; token alpha spans 0–255 with transparent corners and edge midpoints. Full-size exports and 70px token previews visually inspected: complete heads/ears/cap/braid, generous portrait headroom, readable faces and complete dragon-only frames. Actual sizes: Nollis portrait 214,618 bytes, token 27,194 bytes; Nestra portrait 198,100 bytes, token 26,262 bytes. Fine painted detail retained at standard quality 75 despite portraits exceeding the approximate size target. Four full 1254x1254 lossless VP8L sources retained: Nollis portrait 2,540,924 bytes and token 1,900,588 bytes; Nestra portrait 2,491,984 bytes and token 1,841,716 bytes.

Local Chromium executable unavailable; existing PR CI must pass native 375/1440 card/profile, Session and actual token-download checks before merge. Production deployment and live HTTP/record/asset verification pending; final results will be recorded on PR. No shared UI or storage code changed.
