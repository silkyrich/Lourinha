# Lourinhã 2026 — Skate Strong

Official trip HQ for Skate Strong's Lourinhã week, 30 May – 6 June 2026.

**Stack:** Vite + React 18 + TypeScript, Framer Motion for animation,
react-leaflet for the map. Static export deployed to GitHub Pages via
GitHub Actions.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Hosting

`.github/workflows/pages.yml` installs deps, runs `npm run build`, and
publishes `dist/` to GitHub Pages on every push to `main`. One-time
setup: **Settings → Pages → Source → GitHub Actions**.

## Placeholders to swap

| Placeholder | Where | What to do |
|---|---|---|
| Hero image | `src/components/Hero.tsx` | Replace the picsum URL with a real Lourinhã / skate shot |
| Host photo | `src/components/Welcome.tsx` | Replace the picsum URL with Cez's portrait |
| Spot photos | `src/data/spots.ts` `photoSeed` | Each seed feeds a picsum URL; swap for real photos |
| Album photos | `src/components/Album.tsx` `seeds` | Same pattern |
| Album link | `src/components/Album.tsx` `#album-link` href | Paste Google Photos / Drive share URL |
| Brand colours | `src/styles/themes.css` | Adjust `--accent`, `--bg`, etc. once Skate Strong's palette is shared |

## Two-team theming

The splash modal on first visit asks which team you're on:

- **Team Skateboard** — dark mode (near-black), orange accent. Default.
- **Team Skate** — light mode (warm cream), hot-pink/cyan accent.

The choice persists in `localStorage` under `skatestrong.team`. A toggle
in the nav swaps teams at any time. Theme vars live in
`src/styles/themes.css` on `[data-team="skateboard"]` and
`[data-team="skate"]`. Adding a third team is a copy/paste.

## Project layout

```
src/
  components/   one file per section + Splash, TopNav, Hero, Footer
  data/         spots, phrases, area cards, todo items, practical bits
  lib/          team context + Reveal animation helper
  styles/       global, themes (per-team CSS variables), components
  App.tsx       composes the page
  main.tsx      React + TeamProvider boot
public/
  lourinha-2026.ics
```
