# Existing NPC token backfill

Added 36 tokens to the existing Library, retaining Brakka Hearthhand and Edric Mossfield's previously approved files. All 38 public NPC records now have a tokenImage reference, using images/tokens/<npc-id>-token.webp.

Each token was generated from its own existing portrait with Brakka's approved circular frame as the layout reference: antique brass/burgundy/charcoal rim, subtle dragon-only bottom emblem and transparent exterior. Exports use 280 × 280 WebP, quality 80/method 6. Original library portraits, NPC content, order, release dates and stable IDs are preserved.

Full collection: 1,081,672 bytes; average 28,465 bytes; range 22,048–31,910 bytes. Download actions remain below the introduction in the shared popup, including Session profiles.

Validation: all 38 assets decode at 280 × 280 with alpha and transparent corners. DOM coverage iterates every record to verify token reference, preview, accessible name and downloaded filename; an explicit legacy record without a token still hides the action. Existing page build/check and public-page DOM suite pass. The browser suite now opens and downloads every token at 375px and 1440px, comparing downloaded bytes against the stored WebP, and is run by the existing CI workflow before publication.

Generation prompt pattern: preserve the supplied portrait's exact character identity and appearance; use the approved Brakka token only as a frame reference; keep the entire head/hair/horns/headwear within the circular rim, with a readable face, source-like subdued interior background, transparent exterior, no lettering and a small red dragon-only medallion at the bottom. See project/npc-token-standard.md for ongoing creation settings.
