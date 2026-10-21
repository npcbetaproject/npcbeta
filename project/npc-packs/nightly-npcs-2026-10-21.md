# Nightly NPCs — 2026-10-21

Publication authorized in the task. Started from main c0a0362b2cde4fcaba5cebb40544f852b6823405; today's branch/PR search found no prior batch.

- Borun Claystep — Orc bathhouse keeper: a cheerful stickler for cleanliness whose apprentice is trapped behind a jammed cistern grille as the water rises.
- Rella Quillbrook — Halfling traveling interpreter: a precise, outspoken translator discovers a prisoner's signed confession is a request for an interpreter.

## Content review
A separate contributor reviewed both complete drafts before integration and approved them: distinct professions, playable mannerisms, grounded motivations, clear actions, and appropriate classifications/location links. No blocking content issues.

## Artwork
Built-in image generation used Tessa Brinewick as painted-style reference, then each finished portrait plus Brakka's token and the site dragon as token references. Prompts specified visible brushwork, believable anatomy, earthy palette, soft light, complete heads and shoulders, clear headroom, profession clothing/props, no lettering or extra characters. Token prompts preserved identity and specified brass/burgundy/charcoal circular frames, subtle dragon-only medallions and genuine transparent exteriors.
Portraits exported without cropping or stretching at 960×960 RGB WebP, quality 75/method 6. Tokens exported from high-resolution RGBA originals at 280×280, quality 80/method 6.
Borun portrait: 98,872 bytes; token: 26,988 bytes.
Rella portrait: 88,198 bytes; token: 26,296 bytes.
Lossless PNG originals are retained with the image-generation outputs and in the working batch's artwork-sources directory.

## Integration and validation
Exactly two new IDs/slugs, complete supported fields, explicit portrait mappings, valid nonempty role/location-fit classifications and existing published location links. All prior 52 records preserved.
Generated permanent pages, directory and sitemap; deterministic build check passed.
Public-page DOM, token DOM, role-category DOM, location-fit DOM and Saved-filter DOM checks passed. Image decoding, opaque portraits, token alpha and transparent corners verified; native tokens inspected.
Native desktop/mobile checks run in PR CI because local Playwright is unavailable. Merge only after success, then verify production deployment and live records/pages/assets.

