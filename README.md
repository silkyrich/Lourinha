# Lourinhã

A small static site for Jim's skating week in Lourinhã, Portugal (30 May – 6 June 2026).

`index.html` + `styles.css`, no build step.

## Hosting on GitHub Pages

Deployed by GitHub Actions (`.github/workflows/pages.yml`) on every
push to `main`. One-time setup in the GitHub UI:

**Settings → Pages → Build and deployment → Source**: select
**GitHub Actions**.

The workflow then publishes the repo root to
`https://<owner>.github.io/<repo>/` on each push.

## Local preview

```
python3 -m http.server 8000
```

then open <http://localhost:8000>.
