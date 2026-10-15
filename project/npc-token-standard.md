# NPC Beta token standard

Updated: 2026-10-15. Every new public Library NPC includes a downloadable token. This standard also applies when a token is requested for an existing NPC. It does not require automatically backfilling the existing library.

## Approved appearance

Use Brakka Hearthhand's approved token, `docs/images/tokens/brakka-hearthhand-token.webp`, as the frame/layout reference, and the new NPC's final portrait as the identity reference.

- A circular portrait token with a restrained antique brass, burgundy and charcoal border.
- A small dragon-head emblem integrated into the bottom border. Use only the dragon from `docs/images/branding/npc-beta-logo.png`; no NPC Beta lettering or character-name plaque.
- Fully transparent outside the border; a subdued background is allowed inside the circle.
- Center the face at a readable size, with complete hair, ears, horns and headwear inside the frame. Preserve the portrait's identity, clothing and painted fantasy style.
- Keep the complete border within the square canvas, with a small transparent safety margin. No exterior shadow or extra scenery.

## Export

| Property | Standard |
| --- | --- |
| Dimensions | **280 × 280 pixels** |
| Format | WebP with alpha transparency |
| Compression | Quality **80**, method **6** (Pillow settings) |
| Size target | Approximately **15–35 KB**, not a hard cap |
| Filename | `<npc-id>-token.webp` |
| Repository path | `docs/images/tokens/<npc-id>-token.webp` |

Export directly from high-resolution/lossless token artwork, never from a previously reduced token. Do not enforce a 2 KB limit: the approved trial at that size was too blurry. A 70 × 70 tabletop grid cell is a display size, not the export size; the 280px file allows enlargement. Brakka's approved reference is 22,048 bytes.

## Data and popup integration

Set the optional field on the public NPC record:

```json
{
  "tokenImage": "images/tokens/brakka-hearthhand-token.webp"
}
```

Use the existing shared popup implementation; do not add per-character buttons or a separate token registry. The **Download token** action has a small circular preview and sits with **Copy link** and **View full page**, directly **below the introduction/summary paragraph**. Download filename: `<npc-id>-token.webp`.

Keep the regular portrait as the main profile image. NPCs without a token hide the action. Switching to another NPC, generated NPC or location must clear the previous token. Library and Session profiles use the same token action.

## Efficient creation sequence

1. Finish the approved portrait and character identity first.
2. Generate one token using that portrait plus the approved Brakka frame and site dragon references. Request transparency and dragon-only branding in the initial prompt.
3. Inspect the generated result once, then resize/export to the settings above. Keep the source for revisions.
4. Add the asset and `tokenImage` field in the same branch as the NPC. Check the file, integration and download together.

Reusable prompt:

> Create a circular virtual tabletop token of [NPC] from the supplied final portrait, preserving recognizable identity and painted fantasy style. Match the approved Brakka token's restrained antique brass/burgundy/charcoal frame. Center the head and upper chest; keep all hair, ears, horns and headwear inside the circle and the entire border inside the square canvas. Include only a small dragon-head emblem from the site logo in a subtle bottom medallion; no lettering or nameplate. Subdued interior background; genuinely transparent exterior, no exterior shadow. Keep the face readable when reduced to 280 × 280. Export as `<npc-id>-token.webp` after generation.

## Verification

- Decode the final file; verify 280 × 280, alpha transparency (including transparent corners), filename and actual byte size.
- Inspect facial detail, complete border and subtle dragon at native size and roughly 70px display size.
- Open the popup on desktop/mobile: preview and download beneath the introduction, keyboard focus visible, useful accessible name, correct downloaded file.
- Check another NPC without a token and a location for stale preview/link; check the token from Session too.
- Run `tests/npc-token.dom.test.cjs` with the repository's configured jsdom environment. Reuse existing browser checks; report any unavailable validation accurately.
