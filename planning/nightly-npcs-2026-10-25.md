# Nightly NPCs — 2026-10-25

Exactly two original permanent NPCs. User authorized selection and publication. No existing batch branch, PR or records at start. Current main tree: e5702b40e84b9f84653f436563ffbeb1691e768a. Concepts chosen randomly from inventory-screened profession pools; independent equal-probability Python secrets.choice demeanor draws: Hostile, Indifferent.

## Nella Ruskettle

Halfling Rat catcher — Initially hostile, suspicious and blunt; she takes pride in careful work and refuses to endanger children or working animals with careless poison.

Nella clears vermin from the town's storehouses with wooden live traps and an exact account of every catch. She meets unfamiliar customers with narrowed eyes, convinced that most people conceal the worst part of a job until the price is settled.

At the table: Keep one hand on a closed trap and demand the whole story before naming a price. Say, “If it were only rats, you would have said where.” Let practical evidence earn her attention, though reassurance alone does not soften her.

Motivation: Find who is dosing grain near her traps, protect her livelihood and keep contaminated sacks out of the town's food supply.

Hook: Nella finds grain soaked in sleeping draught beside the granary's rear door, along with a dropped apothecary bottle. She asks the party to trace the bottle and watch the door while she separates the suspect sacks; the morning bread delivery leaves at dawn, and she suspects someone intends to drug the granary dogs before stealing from the stores.

## Dobrik Sporetray

Goblin Mushroom grower — Initially indifferent, distracted and strictly practical; patient with honest mistakes, he has little interest in gossip or theatrical promises.

Dobrik grows oyster mushrooms on carefully tended racks beneath a rented farmhouse. Usually occupied with moisture, temperature and delivery weights, he treats visitors as another task to fit between harvests.

At the table: Continue sorting mushrooms while visitors explain themselves, then ask how long their proposal will take. Say, “Set it on the dry shelf. I can listen while I weigh.” He becomes attentive when someone offers a specific tool or a workable timetable.

Motivation: Restore the cellar's airflow, save the next harvest and avoid losing the lease through someone else's concealed business.

Hook: A locked ironbound chest has been wedged into Dobrik's cellar air shaft, trapping warm damp air around a crop due for delivery tomorrow. He offers a week's produce and his spare coin if the party can reach the shaft from the overgrown yard and extract the chest without crushing the racks; fresh drag marks lead toward the neighboring abandoned homestead.

## Review

Independent contributor content review approved both drafts before JSON integration: unique IDs and names, distinct occupations, supported fields, defined tags, valid classifications and published location references; demeanor consistent in description, portrayal and dialogue.

## Final artwork prompts and sources

Built-in image generation. Portrait prompts use Garran Vey as a style-only reference: square Ink and colour fantasy RPG illustration, expressive ink contours, selective crosshatching, rich gouache colour, graphic shadows, grounded medieval clothing, centered waist-up, both shoulders and complete head visible. Nella: brown-skinned freckled middle-aged halfling with auburn curls and russet kerchief, suspicious gaze, moss-green coat, tawny waistcoat, closed wooden live trap in a granary alley. Dobrik: sage-green goblin with short black hair and complete pointed ears, indifferent expression, indigo shirt, cream soil-smudged apron, oyster mushroom tray in a farm cellar. Each portrait was revised once to zoom out and restore generous headroom while retaining identity and style. Square lossless PNG sources are retained in the generating conversation/workspace.

Token prompts: preserve each finalized portrait's exact identity, expression and clothing; use Brakka's restrained antique brass, burgundy and charcoal circular frame, site dragon-only bottom medallion, complete head/ears within frame, readable face, subdued interior background, transparent exterior and safety margin; no lettering, nameplate or exterior shadow. Export opaque 960px portraits quality 75/method 6, transparent 280px tokens quality 80/method 6, directly from lossless sources.

Paths: `docs/images/characters/nella-ruskettle.webp`, `docs/images/characters/dobrik-sporetray.webp`, `docs/images/tokens/nella-ruskettle-token.webp`, `docs/images/tokens/dobrik-sporetray-token.webp`.

## Validation

Exactly two additions; all 62 prior records preserved. Portrait WebP decoding/RGB/dimensions verified: Nella 960×960, 171,986 bytes; Dobrik 960×960, 160,256 bytes. Transparent token WebP/RGBA/dimensions/corners verified: Nella 280×280, 28,208 bytes; Dobrik 280×280, 27,576 bytes. Tokens exported with a 5px transparent safety margin and visually inspected at native size. Page build and deterministic check, public-page DOM, token DOM, role/location category DOM, Saved-filter DOM and whitespace checks passed. Local Chromium executable unavailable; existing CI native browser suite is required before merge.
