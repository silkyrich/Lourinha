# Lourinhã 2026

Trip HQ for Jim and twenty others, week of 30 May – 6 June 2026.

Static site, no build step. Three files do the work:

- `index.html` — content
- `styles.css` — styling
- `map.js` — Leaflet map of spots, towns, food and scenic stops

## Hosting on GitHub Pages

Deployed by GitHub Actions (`.github/workflows/pages.yml`) on every push
to `main`. One-time setup: **Settings → Pages → Source → GitHub Actions**.

## Wiring up comments and votes (giscus)

The chat / vote section at the bottom of the page uses
[giscus](https://giscus.app), which stores comments as GitHub
Discussions on this repo. Setup is one-time, ~5 minutes:

1. **Enable Discussions** on the repo:
   *Settings → General → Features → Discussions.*
2. **Install the giscus app** on this repo:
   <https://github.com/apps/giscus> → *Install* → select `silkyrich/Lourinha`.
3. Visit <https://giscus.app>. Paste `silkyrich/Lourinha` as the repo,
   pick `pathname` as the mapping, pick the `General` Discussion
   category, and enable reactions. The page generates two values:
   - `data-repo-id`
   - `data-category-id`
4. Open `index.html`, find the giscus `<script>` near the bottom, and
   replace the two `REPLACE_ME` placeholders. Commit, push. The chat
   box lights up.

Until those IDs are filled in, the chat area renders a placeholder
explaining the steps — nothing breaks.

## Conventions for votes

- One comment per option for any multi-choice vote (day trips,
  dinner, etc.).
- Voters react with 👍 on the option they want. Most reactions wins.
- Decisions get pinned in the Discussion so latecomers can scroll up.

## Local preview

```
python3 -m http.server 8000
```

Open <http://localhost:8000>.
