# Lourinhã 2026 — Skate Strong

Official trip HQ for Cez's Lourinhã week, 30 May – 6 June 2026.

Static site, no build step. Files:

- `index.html` — content
- `styles.css` — theme variables + layout
- `map.js` — Leaflet map (with "Open in Google Maps" deep links)
- `theme.js` — splash modal, team switcher, scroll reveal
- `lourinha-2026.ics` — calendar file (alongside the Google Calendar
  add link in the hero / bumper strip)

## Things to swap before the site goes out

These are the placeholders the build leaves behind for Cez/you to
fill in:

| Placeholder | Where | What to do |
|---|---|---|
| Brand logo / colours | `styles.css` (`--accent`, brand SVG in `index.html`) | Swap in Skate Strong's real palette and logo once shared |
| Host photo | `index.html` `.host-photo img` | Swap the Picsum URL for a real portrait |
| Hero image | `index.html` `.hero-photo img` | Swap for a real Lourinhã / skate shot |
| Spot photos | `index.html` each `.spot-photo img` | Swap each Picsum URL for a real shot of the spot |
| Shared photo album | `index.html` `#album-link` href | Paste the Google Photos / Drive album share link |
| giscus IDs | `index.html` `<script>` near `#chat` | See *Wiring up giscus* below |

Every placeholder uses Picsum (Unsplash-curated stock) so the page
looks complete out of the box.

## The team picker

On first visit, a splash modal asks the visitor to pick **Team
Skateboard** (orange/black, gritty street) or **Team Skate** (pink/
teal, retro roller-disco). The choice persists in `localStorage`
under `cez.team` and switches the whole palette. A toggle in the
nav swaps teams at any time.

Themes live on `[data-team="skateboard"]` and `[data-team="skate"]`
in `styles.css` — both override the same CSS custom properties, so
adding a third team is a copy/paste away.

## Hosting on GitHub Pages

Deployed by GitHub Actions (`.github/workflows/pages.yml`) on every
push to `main`. One-time setup: **Settings → Pages → Source →
GitHub Actions**.

## Wiring up giscus

The chat / vote section uses [giscus](https://giscus.app), backed by
GitHub Discussions. One-time setup, ~5 minutes:

1. **Enable Discussions**: *Settings → General → Features → Discussions.*
2. **Install the giscus app**: <https://github.com/apps/giscus>.
3. Visit <https://giscus.app>, paste `silkyrich/Lourinha`, pick the
   `General` Discussion category, enable reactions, and copy:
   - `data-repo-id`
   - `data-category-id`
4. Paste them into the giscus `<script>` in `index.html` in place of
   the two `REPLACE_ME` values. Commit, push.

Until those are filled in, the chat section shows a self-explaining
placeholder.

## Local preview

```
python3 -m http.server 8000
```

Open <http://localhost:8000>.
