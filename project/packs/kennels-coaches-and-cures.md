# Kennels, coaches and cures

Three NPCs requested and authorized for live publication on 2026-10-14:
- Brenna Ironleash — Human Dog Trainer. Tough with handlers, patient with dogs; breeds and trains loyal working hounds.
- Osric Rutledge — Human Stagecoach Driver. Former sailor, gravelly wit, careful with passengers and his team.
- Tansy Briarwell — Halfling Herbal Medicine Merchant. Market stand, practical remedies, honest limits.

The user explicitly requested three NPCs and publication, superseding the four-character proposal default. Read-only contributor review passed content, categories, tags, location references and unique IDs/slugs.

## Artwork

Built-in image generation, with docs/images/characters/harira-ashhaven.webp used only as the approved style reference. Each generated source was square and resized without cropping or stretching to opaque 960 × 960 WebP, quality 75, method 6. Outputs are docs/images/characters/{brenna-ironleash,osric-rutledge,tansy-briarwell}.webp. Original PNG outputs remain in the generating session.

Shared prompt: One standalone square NPC Beta fantasy portrait. Detailed realistic fantasy illustration, natural facial/material texture, muted earthy colours, soft cinematic light. Centered waist-up, both shoulders visible, entire head/hair/ears/hat visible, clear background above head. Props below face. Soft simple occupational background. No text, watermark, frame or other people. Do not reproduce reference person.

- Brenna: Tough human woman around 50, strong build, weathered face, dark silver-streaked practical braid, stern assessing eyes, old eyebrow scar, russet leather jerkin over olive wool, brass training whistle, coiled lead and reward pouch, timber kennels and fenced training yard; calm confidence, no cruelty.
- Osric: Grizzled human male around 65, windburned creased face, grey beard and eyebrows, wry smile, battered broad-brimmed felt hat, patched brown driving cape, wool waistcoat, neckerchief, gloved hands and slack reins; simple coach wheel and coaching yard, clearly a coach driver.
- Tansy: Female halfling herbal medicine merchant, grey-threaded dark curls, freckled warm brown skin, sage headscarf, moss green dress and linen apron, herb scissors, dried herbs and amber jar; simple market stall with jars and hanging herbs, no magical glow.

## Integration and validation

Existing NPC records, IDs, dates, Saved and Session storage are preserved. New records share the latest release date and appear first under Most Recent. The same portraits serve cards, popups, Session and permanent public pages. Generated public pages, directory and sitemap are committed together; popup Copy link and View full page actions remain available.

Checks:
- WebP decoding, opaque 960 × 960 dimensions and asset sizes (about 98–133 KB).
- scripts/build-npc-pages.cjs --check and tests/public-npc-pages.test.cjs.
- tests/saved-filter.dom.test.cjs.
- tests/kennels-coaches-and-cures.test.cjs: 375px/1440px portrait loading, contain fit, profile content/scroll, public-page actions, ordering, profession search, combined categories, Saved filter, Session and previous selections.
- Visual inspection of generated portraits and rendered profiles at mobile and desktop widths.
