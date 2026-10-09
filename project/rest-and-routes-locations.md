# Rest and Routes locations

Three reusable location templates: `campsite-with-fire`, `alleyway`, `farm`.

Final images: `docs/images/locations/<id>.webp`, opaque 960 × 540 WebP, quality 87. Existing roadside campsite remains a separate template. Card descriptions explain use to the GM; readAloud is one visual sentence; flavour adds two flowing sensory sentences; discovery provides a small find.

## Artwork prompts

Generated with the built-in image generation tool. Shared direction: standalone wide 16:9 painterly fantasy location illustration, grounded medieval environment, muted earthy colours, no text, labels, borders, watermark or prominent characters.

- **Campsite with Fire:** A sparse one-night wilderness camp under dark trees. One modest fire in a rough stone ring, three bedrolls, two travel packs and a small cooking pot. No tents, barrels, chests, furniture or lanterns. Quiet blue night and warm firelight, with plenty of untouched clearing.
- **Alleyway:** A narrow cobbled medieval alley between timber and stone houses. A sunlit exit, dark doorway, crates, hanging laundry and puddles suggest a shortcut with possible danger, without showing an attacker.
- **Farm:** A working farm on rural outskirts, with its own farmhouse and barn, vegetable rows, tools, chickens, fences, laundry and fresh wagon tracks. Beyond the farm are only open fields, wooded hills and sky. No background village, bridge, castle, tower or other buildings.

## Hover behaviour

Locations library cards match the NPC Library: lift 3px, subtle shadow, image scale 1.025, with 0.2s card and 0.4s image transitions. Keyboard focus receives the same affordance. Touch devices do not receive hover-only motion. Reduced-motion disables these transforms and transitions. Session and modal image frames are unaffected.

## Validation

Run `tests/rest-and-routes.test.cjs` and `tests/location-detail.test.cjs` with Playwright and `NPC_TEST_CHROME` set to an installed Chromium executable. Check exact WebP dimensions separately with Pillow. Desktop and mobile previews are saved to `project/screenshots/rest-and-routes-*.png`.
