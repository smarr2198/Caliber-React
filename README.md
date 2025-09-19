# Caliber Marine & Automotive — React + Vite + Tailwind

Heavy‑duty dark theme with brushed‑metal dividers.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

This creates a `dist/` folder.

## Deploy to Hostinger (static hosting)

1. Run `npm run build`
2. In Hostinger hPanel > **Files** > **File Manager**, open your site’s document root (usually `public_html` or a subdomain folder).
3. Upload the **contents of `dist/`** (not the folder itself). Ensure `index.html` is at the root.
4. If deploying to a subfolder (e.g. `example.com/caliber/`), set `base: '/caliber/'` in `vite.config.js` and rebuild.

## Where to edit

- Main page UI lives in `src/components/CaliberSite.jsx`
- Replace all text & placeholders and drop in your images.

## Notes

- No client-side routing; all anchors are section links.
- Tailwind is preconfigured via `postcss.config.js` and `tailwind.config.js`.
