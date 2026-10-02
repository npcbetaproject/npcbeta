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
- `role`: the character's primary narrative function.
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
