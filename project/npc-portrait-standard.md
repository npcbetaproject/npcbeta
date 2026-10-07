# NPC Beta portrait standard

Use this standard for all future library NPC portraits.

- Final asset: exactly 960 × 960 pixels, square 1:1, WebP, opaque background.
- Path: docs/images/characters/<npc-id>.webp; lowercase kebab-case matching the stable NPC ID.
- Use the same high-resolution file for Library, Saved, Session and the expanded NPC profile. Do not enlarge low-resolution embedded portraits or make separate low-resolution profile assets.
- Detailed realistic fantasy illustration, natural facial and material texture, muted earthy colours, soft cinematic lighting, grounded medieval clothing.
- One centered character, waist-up, both shoulders in frame. Entire head, hair, ears and hood/hat visible. Aim for 15–20% clear background above the highest head point. Face in upper-middle. Profession props below the face.
- Background appropriate to the NPC, softly focused and secondary. No text, labels, frames, watermark or additional characters.
- Use an approved existing portrait as the style reference. For replacements, preserve the recognizable appearance and established character description.
- Generate square artwork, resize without cropping or stretching, export WebP quality around 90, and verify dimensions and file format.
- Prefer square card and profile image frames. Where an existing frame differs, use object-fit: contain with a matching background to preserve the entire square artwork. Do not use hover zoom that cuts off headroom.
- Preserve existing NPC IDs, descriptions, browser storage and session selections when replacing portraits. Update portrait mappings to the external WebP paths and meaningful imageAlt text. Do not leave an old embedded portrait taking precedence.

## Reusable generation prompt
Create one standalone square NPC Beta fantasy portrait of [name, ancestry, age, appearance, profession, clothing, expression, optional prop], in [appropriate softly blurred setting]. Match the approved reference's detailed realistic fantasy illustration style, natural texture, muted earthy palette and soft cinematic lighting. Centered waist-up framing; full head, hair, ears and headwear visible; both shoulders within the frame; 15–20% background above the highest head point; face in upper-middle; props below the face. No tight closeup, cropped head, text, frames, watermark or other characters. Export exactly 960 × 960 WebP as <npc-id>.webp after generation, without cropping or stretching.

## Verification
Check exact 960 × 960 WebP output, recognizable character, intact head/hair/headwear, and readable face at card size. Check card and expanded profile on desktop and mobile, including Saved and Session. Browser verification is required when integrating; asset verification alone does not confirm website rendering.
