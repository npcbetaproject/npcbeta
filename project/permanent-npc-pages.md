# Permanent NPC pages

Branch: `feat/permanent-npc-pages`. Review only; no production deployment or hosting setting changes.

## Implementation

- All 34 public NPC records receive stored slugs, initially equal to stable IDs.
- Static HTML is generated from the same JSON consumed by existing popups, with portrait lookup reused from the existing scripts. Missing optional fields are omitted.
- Directory URLs use the actual GitHub Pages origin and project base path configured in `docs/data/site.json`. `npcbeta.com` is a separate website; this repository has no CNAME.
- Popup Copy link and View full page controls are limited to library records. Cards and Session retain their existing popup handlers, no route/history mutations are added, and the full page opens in a separate tab.
- Idempotent Add to session writes existing library IDs into the same key. Storage/focus events keep full-page buttons current; the main app listens for session changes from other tabs. Generated NPC/location/pin keys are preserved.
- HTML includes portrait, name, ancestry/profession, description, At the table and hook, and optional separate personality/motivation fields when actually present. No extra biography is invented.
- Each page has unique title, description, canonical, Open Graph/Twitter image metadata, one main heading, semantic sections, responsive styling and accessible actions.
- Main HTML contains crawlable directory links. Sitemap covers every public page; robots permits crawling; custom 404 is noindex with a browse link.
- Build initializes missing new slugs once, writes generated files, removes obsolete generated pages and supports a deterministic `--check`. Existing slugs are never derived from display names.
- PR workflow builds and checks without deploying. Main-only deployment is gated separately. Existing committed outputs remain compatible with branch-based `/docs` hosting; workflow hosting source must be reviewed when adopting Actions deployment.

## Validation

- Build, deterministic generated-output check, JavaScript syntax checks and whitespace check passed.
- Dedicated-page DOM tests passed: initial HTML content/metadata, directory/sitemap coverage, identity/session deduplication, malformed-storage preservation, popup URL/view/scroll/state preservation, link-copy confirmation, accessible new-tab link, keyboard focus trap/restoration, cross-tab updates and generated-NPC exclusion.
- Direct HTTP loads and repeated refresh requests passed for all 34 pages, including assets and robots/sitemap/404 documents.
- Eight existing DOM suites passed: Support, Role categories, Location Fit categories, Generator, Generated visuals, Session location order, Session board and Workbench.
- Six existing suites fail identically on unchanged main: three assume 44 locations rather than 50, Recent sort assumes superseded packs, and two need window.confirm stubs after the recent confirmation change. These unrelated tests are left unchanged.
- Chromium is unavailable locally; its download failed in this environment during the preceding task. Desktop/mobile browser checks are supplied in `tests/public-npc-pages.browser.test.cjs` and included in PR CI. Local DOM tests cover keyboard mechanics but are not a substitute for native mobile layout verification.

## Hosting limits

- Origin/base path is `https://npcbetaproject.github.io/npcbeta/` until this app is actually moved to the custom domain.
- Local preview: `http://localhost:8000/docs/npcs/nibbin-copperwheel/` from the README server.
- Review URL after deployment would be `https://npcbetaproject.github.io/npcbeta/npcs/nibbin-copperwheel/`; it is not live from this feature branch.
- Project-folder robots.txt cannot control an origin-root robots file. The root response could not be verified through the available network access; no generated public page blocks indexing.
- GitHub Pages supplies custom 404 handling; a plain Python preview server supplies its standard 404 instead. Static host redirects after future slug changes would need deliberate redirect pages; preserve existing slugs.
