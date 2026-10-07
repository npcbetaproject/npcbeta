# Content Guidelines

## Principles

- **Be clear:** Prefer direct, concrete language over unexplained lore jargon.
- **Be consistent:** Follow the same field names, capitalization, and tag rules
  across every record.
- **Be respectful:** Avoid stereotypes, demeaning descriptions, and content that
  reduces a person or culture to a plot device.
- **Be concise:** Catalog summaries should help a reader scan and compare entries.

## Character records

Each published character should include:

- `id`: unique lowercase kebab-case identifier.
- `name`: display name.
- `summary`: one or two sentences in present tense.
- `role`: the character’s specific profession, displayed on cards and profiles.
- `roleCategoryIds`: a nonempty array of unique IDs from `docs/data/characters/role-categories.json`; assign based on profession and description. Multiple categories are supported. Preserve the specific `role` and stable NPC ID.
- `locationIds`: an array of related published location IDs.
- `tags`: an array using values from `tag-definitions.md`.
- `image`: a path relative to `docs/`, with meaningful alternative text stored in
  `imageAlt`.

## Location records

Each published location should include:

- `id`: unique lowercase kebab-case identifier.
- `name`: display name.
- `summary`: one or two sentences describing its defining traits.
- `region`: its broader geographic area.
- `characterIds`: an array of related published character IDs.
- `tags`: an array using values from `tag-definitions.md`.
- `image`: a path relative to `docs/`, with meaningful alternative text stored in
  `imageAlt`.

## Style and review

1. Write drafts in Markdown and keep research notes separate from publishable copy.
2. Verify names, relationships, and cross-referenced IDs before publication.
3. Use sentence case for headings and descriptions; use title case only for names.
4. Describe images for their relevant content rather than beginning with “image of.”
5. Flag spoilers or sensitive material clearly in the draft.
6. Have another contributor review an entry before adding it to a JSON index.

## NPC role categories

Use the eight category IDs and labels in `docs/data/characters/role-categories.json`, in its configured order. All Roles is an interface option meaning no category restriction; do not store `all` in an NPC’s array. Categories describe occupations and activities, not alignment or Story Role. Assign Underworld for activities such as smuggling, theft or organized crime, never simply because an NPC is a villain or rebel.

For example, an Apothecary may use `["merchants-crafters", "faith-healing"]`, while a knight who adventures may use `["adventurers", "military-authority"]`. Every future NPC pack must include at least one valid category per NPC. Validate uniqueness and membership before publication. Keep exact professions in `role` so they remain searchable.

The same file contains `generatorProfessionCategoryIds` solely to classify generated Session entries at display time. This does not change generator options or stored records; when adding a new generator profession later, provide its category mapping too.

## NPC location fit categories

Every future NPC pack must include a nonempty array of unique `locationFitCategoryIds` from `docs/data/characters/location-fit-categories.json`. Its ordered `categories` list owns the IDs and labels. All Locations means no restriction and must not be stored as an ID. These describe plausible encounters, not permanent residence; assign multiple categories only when supported by profession, description or adventure hook.

- `settlements`: townsfolk, merchants, innkeepers and officials.
- `roads-travel`: couriers, caravan guards, pilgrims and travelling adventurers.
- `wilderness`: hunters, guides, hermits and wilderness explorers.
- `dungeons-ruins`: treasure hunters, dungeon explorers, cultists and captives.
- `castles-estates`: nobles, household servants, court advisors and knights.
- `waterfront`: sailors, ferrymen, dockworkers and maritime smugglers.

Cassian Holt uses `["settlements", "roads-travel", "dungeons-ruins"]`. Preserve `locationIds` for specific published location references and `locationFit` for existing descriptive Session labels. Keep all NPC IDs and `roleCategoryIds` unchanged. Validate category membership and uniqueness before publication. Avoid assigning every category based on theoretical possibilities.

`generatorLocationCategoryIds` maps existing Name Generator location IDs solely for filtering generated Session entries at display time. It does not alter generator options or browser records. Add a mapping if future work introduces a generator location.
