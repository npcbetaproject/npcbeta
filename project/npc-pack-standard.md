# NPC Pack Standard

Version: 2.1 · Updated: 2026-10-20

## Scope and authoritative references

A pack is four permanent authored Library NPCs around a theme. An explicitly requested single NPC or a different count follows the same workflow at that scope. Name Generator NPCs are separate.

Read `AGENTS.md`, [NPC Portrait Standard](npc-portrait-standard.md), [NPC Token Standard](npc-token-standard.md) and [Permanent NPC Pages](permanent-npc-pages.md). Inspect the current schema and implementation before editing. User instructions and approvals already given in the task take precedence; do not ask for the same approval again.

Use these references as the source of truth instead of copying settings into each pack document:

| Area | Source |
| --- | --- |
| Portrait appearance, framing and compression | `project/npc-portrait-standard.md` |
| Token appearance, export, naming and download placement | `project/npc-token-standard.md` |
| Character content and classification guidance | `planning/content-guidelines.md` |
| Valid Role IDs | `docs/data/characters/role-categories.json` |
| Valid Location Fit IDs | `docs/data/characters/location-fit-categories.json` |
| Public pages, metadata, slugs and share actions | `project/permanent-npc-pages.md` |

## 1. Choose the characters and proceed

Select names, ancestry, specific profession, concept/appearance, a playable mannerism, motivation or complication, actionable hook and proposed filter assignments from the user's request. Default to four distinct NPCs who work independently; connections are optional. For a single NPC or another requested count, follow that scope. Avoid extensive backstories, statistics, lengthy dialogue, new fields or assumptions about the user's campaign.

Make routine creative choices autonomously and continue through the complete NPC, including artwork, data, validation and a reviewable branch/PR. Do not stop for separate concept approval. Ask a clarifying question only when an essential missing detail prevents a useful, valid NPC. Creating an NPC does not authorize merging or live publication; publish only when the user explicitly authorizes it.

## 2. Prepare one branch and a content batch

Start an isolated checkout/worktree on a new branch from current `main`. Inspect the data, portrait mappings, filters, recent sorting, popup and browser storage. Preserve unrelated work.

Check names/IDs for collisions. Prepare the complete records and artwork descriptions together so identity, clothing and profession agree before generation. Retain the specific profession in `role`; assign valid nonempty `roleCategoryIds` and `locationFitCategoryIds`. No Story Role field/filter is required.

Use only valid existing `locationIds`; preserve display-oriented `locationFit` where used. Add concise summary, portrayal note, adventure hook, meaningful portrait alt text and the project's existing release/pack metadata. Do not create extra registries or classification systems.

## 3. Create portrait, then token

For each requested NPC:

1. Create and inspect the **960 × 960 opaque WebP portrait**, following the portrait standard. Use the approved **Ink and colour** fantasy RPG style and Garran Vey reference specified in the portrait standard. Preserve complete heads and headroom.
2. Derive the **280 × 280 transparent WebP token** from that finalized portrait, using the approved circular border and subtle dragon-only emblem. Follow the token standard; do not target 2 KB.
3. Export from high-resolution/lossless sources, verify dimensions/format/transparency/size, and retain sources when available. Avoid repeatedly recompressing lossy assets.

Prepare independent portraits together where supported; generate each token only after its own portrait is settled. Use one clear reference-based prompt per asset; iterate only to correct identified issues. No separate concept variations or montages are required unless requested.

Expected deployed files per NPC:

```text
docs/images/characters/<npc-id>.webp
docs/images/tokens/<npc-id>-token.webp
```

## 4. Integrate once

Add all requested records, portraits, tokens and required portrait mappings in the same branch. Each new NPC includes:

```json
{
  "id": "example-npc",
  "slug": "example-npc",
  "role": "Innkeeper",
  "roleCategoryIds": ["hospitality-entertainment"],
  "locationFitCategoryIds": ["settlements"],
  "tokenImage": "images/tokens/example-npc-token.webp"
}
```

This is a partial example, not a complete importable record. Use stable IDs/slugs and the existing schema. Preserve old records, publication dates, Saved selections and Session storage.

- Use existing release fields so the pack appears first under **Most Recent**, with deterministic ordering for a shared date.
- Keep the portrait as the main card/profile image.
- The shared popup automatically uses `tokenImage`. **Download token**, its small preview, **Copy link** and **View full page** belong directly below the introduction paragraph. Download filename: `<npc-id>-token.webp`.
- Older NPCs without tokens hide the action; do not backfill the whole library unless requested.
- Generate every new NPC's permanent HTML page and preserve the popup as the quick-reference view. Verify the public URL, metadata, directory and sitemap through the existing page builder.

## 5. Validate the batch

Run checks once after integration; repeat only for a relevant change or failure.

- Expected number of unique new records; valid references/classification and complete concise content.
- Portrait files decode at 960 × 960; tokens decode at 280 × 280 with genuinely transparent exterior and readable faces. Report actual byte sizes.
- Desktop/mobile cards and profiles: correct images, no cropped heads, modal starts at top, no overflow.
- Token preview/action below introduction; correct download bytes/name; no stale action when opening another NPC or location. Check Library and Session.
- Copy link and View full page work; permanent pages refresh directly with correct server HTML/metadata.
- Search, combined role/location filters, Most Recent, Saved filter and Session work without clearing existing selections.

Use relevant existing repository tests, including `tests/npc-token.dom.test.cjs`, public-page tests and browser checks. Build and verify generated pages with:

```sh
node scripts/build-npc-pages.cjs
node scripts/build-npc-pages.cjs --check
```

Use the repository's installed dependencies/environment for tests. A file decode does not replace browser verification. Report blocked checks honestly; avoid creating repetitive per-pack tests that merely mirror records when shared checks already cover the behavior.

## 6. Review or publish

Open a PR describing the characters, assets, content and validation. Keep the handoff concise and include a useful preview when available. A pack note may record approved concepts and final prompts without repeating the standards.

If publication is authorized, merge and verify successful deployment. Otherwise provide the PR for review. Never claim a push, merge or live deployment without evidence. An email montage, adventure or pack landing page is a separate deliverable.

## Reusable request

> Create an NPC pack of four characters with the theme “[THEME]” following `project/npc-pack-standard.md`. Choose the characters, concepts, appearance directions, hooks and filter assignments autonomously; do not stop for concept approval. Create each NPC's portrait and downloadable token using the linked standards, integrate the records and permanent pages in a new branch, validate and open a PR. Publish only when instructed.
