# Location image standard

## Export settings

- New location images: 960 × 540 pixels, landscape 16:9, opaque WebP.
- Use one image for the location card and detail modal.
- Compress with WebP quality **72**, method **6** (Pillow settings).
- Aim for roughly 80–120 KB at 960 × 540 when the scene permits. This is a target, not a hard cap: preserve readable detail and avoid visible compression artifacts.
- Review the compressed image at card and modal display sizes before committing.
- Preserve filenames and references when replacing existing assets. When compressing existing images, preserve their dimensions unless resizing is explicitly requested; some legacy images are 1920 × 1080.
- Keep lossless source artwork when available; use it for future exports rather than repeatedly recompressing a lossy WebP.
- Save deployed assets in `docs/images/locations/` and verify they decode successfully at the intended dimensions.

These settings were approved on 2026-10-09 after compressing 47 existing location images at quality 72, method 6, reducing their combined size by 41.9%. This standard supersedes older location-pack export settings. NPC portraits have their own standard.
