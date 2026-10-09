# NPC Pack Standard

Version: 1.0 · Updated: 2026-10-08

## Purpose

Use this document for creating repeatable NPC Library packs for NPC Beta. A pack contains **four authored NPCs around one theme**. These are permanent library entries with individual portraits, distinct from temporary NPCs produced by the Name Generator.

Repository: https://github.com/npcbetaproject/npcbeta

Read this standard, the repository's `AGENTS.md`, and [NPC Portrait Standard](npc-portrait-standard.md) before starting. Inspect the current character schema, filters, image mappings and sorting implementation. Follow the existing implementation rather than assuming fields or paths from an earlier conversation remain current. The user's explicit instructions for a particular pack take precedence over these defaults.

## 1. Propose the pack

Choose a theme, such as Tavern Patrons, Roadside Travellers, Court Intrigue, Wilderness Guides or Troublemakers.

Propose four NPCs in a reviewable table containing:

- Name and ancestry.
- Specific profession, retained as the NPC's display role.
- One-sentence concept and short appearance direction.
- Personality or mannerism that is easy for a DM to portray.
- Motivation, secret or complication.
- One actionable adventure hook.
- Role categories and Location Fit categories.

Give the four characters distinct personalities, appearances and uses at the table. They may have optional connections but must also work individually in other campaigns. Avoid making every character a quest giver or building in assumptions about the user's personal campaign.

Prefer concise, usable descriptions over extensive backstories. Offer a mix of social interactions, useful information, complications and adventure opportunities. Do not include statistics, lengthy dialogue or extra content fields unless requested or supported by the current project.

## 2. Approve the direction

Present the four concepts before generating portraits or implementing the pack. Wait for the user's approval of the direction. If approval has already been given in the current task, proceed without asking again.

Resolve requested changes to names, concepts and appearances before artwork. Approval of the pack authorizes preparing its portraits, data and reviewable branch/PR; it does not itself instruct merging to the live branch.

## 3. Create portraits

Follow `project/npc-portrait-standard.md` as the authoritative artwork specification.

The baseline requirements are:

- One **960 × 960 pixel WebP** per NPC.
- Consistent realistic fantasy illustration style, muted earth tones and natural cinematic lighting.
- Centered composition with complete head, hair, ears, horns and headwear visible; generous headroom, typically 15–20%.
- Framing that works in both library cards and expanded profiles, normally waist-up.
- Clothing, equipment and background consistent with the approved character.
- No text, watermark or decorative frame.
- One high-resolution file shared by card and profile unless the project explicitly adopts another strategy.

Use stable lowercase kebab-case NPC IDs and matching filenames, for example `cassian-holt.webp`. Check for ID/name collisions before adding records.

Place final portraits in `docs/images/characters/`. Inspect the actual card and profile presentation after integration; fix framing or display fit if heads are cropped. Do not substitute generated-NPC silhouettes or experimental grayscale thumbnails for library portraits unless explicitly requested.

## 4. Add character data

Use the current repository's schema and required fields. Populate supported fields for the name, ancestry, role, subtitle/summary, DM portrayal notes and adventure hook. Preserve existing NPC records and stable IDs.

Required classification arrays for new packs:

```json
{
  "id": "example-npc",
  "name": "Example NPC",
  "role": "Innkeeper",
  "roleCategoryIds": ["hospitality-entertainment"],
  "locationFitCategoryIds": ["settlements", "roads-travel"]
}
```

This is a partial record demonstrating classification, not a complete importable NPC record.

### Role categories

Keep the specific profession in `role`. Assign one or more broad category IDs using the shared category configuration.

| ID | Label |
| --- | --- |
| `adventurers` | Adventurers |
| `merchants-crafters` | Merchants & Crafters |
| `hospitality-entertainment` | Hospitality & Entertainment |
| `scholars-magic` | Scholars & Magic |
| `faith-healing` | Faith & Healing |
| `military-authority` | Military & Authority |
| `workers-services` | Workers & Services |
| `underworld` | Underworld |

Assign based on profession and content. Multiple categories are appropriate where useful, such as an apothecary under Merchants & Crafters and Faith & Healing. A villain is not automatically Underworld. Do not add a Story Role filter or field for this workflow.

### Location Fit categories

These describe plausible encounter settings, not permanent residence.

| ID | Label |
| --- | --- |
| `settlements` | Settlements |
| `roads-travel` | Roads & Travel |
| `wilderness` | Wilderness |
| `dungeons-ruins` | Dungeons & Ruins |
| `castles-estates` | Castles & Estates |
| `waterfront` | Waterfront |

Assign at least one relevant category, with multiple when justified. Avoid assigning all categories merely because a character could theoretically appear anywhere.

Keep `locationIds` for references to actual location records; use valid existing IDs. Do not invent a location reference without creating the referenced record within authorized scope. Preserve any existing `locationFit` field used for other text or presentation purposes.

### Image references and release ordering

Inspect the current image lookup implementation and update all necessary portrait keys/mappings or image paths. Match the repository's path conventions, including its GitHub Pages base path.

Use the project's current release-date/order fields so the newly released pack appears at the top under **Most Recent**. Adding records to the end of a JSON array alone does not guarantee display order. Preserve existing records' dates and ensure ordering is deterministic when all four NPCs share a release date.

Reuse existing pack metadata if available. Do not introduce a new pack registry or sorting system merely to add a pack. If the project lacks the agreed classification or ordering support, identify that gap and implement only what is necessary within the requested scope.

## 5. Branch and integrate

Start from the latest intended base branch, normally `main`, and use a dedicated branch such as `add-tavern-patrons-pack`. Preserve unrelated work and avoid overwriting shared documentation or image mappings wholesale.

Integrate all four approved records and final portraits. Keep existing Saved and Session storage compatible; do not change old NPC IDs or clear browser storage.

An email montage, pack landing page or one-shot adventure is an optional separate deliverable, not an automatic part of every pack.

## 6. Validate and hand off

Perform appropriate existing repository checks and verify:

- Exactly four new library records, with unique IDs.
- Portraits decode as WebP at 960 × 960 pixels and load through the site's actual path conventions.
- No cropped heads in cards or profiles on desktop and mobile.
- Correct character content, image alt text and portrait references.
- Category IDs are valid and each NPC appears under its assigned filters.
- Search and combined Role/Location Fit filtering work.
- The pack appears first under Most Recent without changing older release dates.
- Saving and adding new NPCs to Session work, and existing selections remain intact.
- Profiles open correctly and begin at the top.

Open a pull request summarizing the pack theme, four NPCs, data/artwork changes and validation performed. State any checks that could not be completed. Provide screenshots when available.

Do not claim changes are live before they have been merged and deployment verified. If GitHub write access is unavailable, deliver the files and exact integration instructions instead of claiming a push or PR.

## Reusable request

> Propose an NPC Library pack of four characters with the theme “[THEME]”, following `project/npc-pack-standard.md`. First show the concepts, appearance directions, hooks and filter assignments for approval. After I approve, create portraits following `project/npc-portrait-standard.md`, integrate the data and images in a new branch, validate the pack and open a pull request. Do not merge unless instructed.

## Make this standard discoverable

Store this file at `project/npc-pack-standard.md`. Add the following pointer to the existing `AGENTS.md` without replacing its other instructions:

> For NPC Library pack creation, read and follow `project/npc-pack-standard.md` and `project/npc-portrait-standard.md` before proposing or implementing characters.

Future tasks should explicitly reference this path. Agents should read the checked-out file each time they use the standard rather than relying on remembered conversation details.
