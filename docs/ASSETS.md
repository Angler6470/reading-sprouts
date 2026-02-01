Reading Sprouts — Assets to Replace

This short guide lists images and files you should swap to brand the app as your own.

Primary places to look

- public/
  - icons & PWA assets
    - `public/logo192.png` — app icon (192x192)
    - `public/logo512.png` — app icon (512x512)
    - `public/favicon.ico` — site favicon
    - `public/icon-maskable-512.png` — maskable icon (optional)
    - `public/manifest.json` — update `name`, `short_name`, `description`, colors if desired

- public/assets/
  - `public/assets/mascot-garden.png` — garden mascot used in pre-cache
  - `public/assets/mascot-ocean.png`
  - `public/assets/mascot-space.png`
  - `public/assets/helper-bee.png`
  - `public/assets/helper-fish.png`
  - `public/assets/helper-stars.png`
  - `public/assets/feedback-success.png`, `public/assets/feedback-error.png`
  - `public/assets/balance-*.png` (seed/whale/asteroid)

- src-referenced theme assets (used at runtime)
  - `src/App.js` → themeConfig and plantAssets reference the following paths (swap with matching names):
    - `/assets/reading/mascot-garden-reading.svg`
    - `/assets/reading/helper-garden-reading.svg`
    - `/assets/reading/bud-garden-reading.svg`
    - `/assets/garden/plant-2.png` ... `/assets/garden/plant-8.png`

    - `/assets/reading/mascot-ocean-reading.svg`
    - `/assets/reading/helper-ocean-reading.svg`
    - `/assets/reading/bud-ocean-reading.svg`
    - `/assets/ocean/ocean-2.png` ... `/assets/ocean/ocean-8.png`

    - `/assets/reading/mascot-space-reading.svg`
    - `/assets/reading/helper-space-reading.svg`
    - `/assets/reading/bud-space-reading.svg`
    - `/assets/space/astro-2.png` ... `/assets/space/astro-8.png`

    - `/assets/balance-seed.png`, `/assets/balance-whale.png`, `/assets/balance-asteroid.png`

Tips for replacing

- Keep filenames consistent with the current paths, or update `src/App.js` to point to new filenames.
- Prefer PNG/SVG for transparency where needed; vector (`.svg`) files are great for mascots and helpers.
- Update `public/manifest.json` icons if you replace `logo192.png` / `logo512.png`.
- If you change cached asset names or add new ones, bump the `CACHE_NAME` in `public/sw.js` to force users to update (`readingsprouts-v2` etc.).

Quick checklist

- [ ] Replace `logo192.png`, `logo512.png`, `favicon.ico`
- [ ] Replace mascot/helper/bud images (garden, ocean, space)
- [ ] Replace theme plant/space/ocean images
- [ ] Update `manifest.json` metadata (name/description)
- [ ] Bump `CACHE_NAME` in `public/sw.js` after replacing cached image names

If you'd like, I can scaffold a small script to bulk-replace referenced filenames or add a README checklist into your repo.