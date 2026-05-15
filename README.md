# Lourinhã

A small static site for Jim's skating week in Lourinhã, Portugal (30 May – 6 June 2026).

`index.html` + `styles.css`, no build step.

## Hosting on GitHub Pages

In the repo on GitHub: **Settings → Pages → Build and deployment**, set
**Source** to *Deploy from a branch*, pick the branch you want live, and
**/ (root)** as the folder. The site will be served at
`https://<owner>.github.io/<repo>/`.

## Local preview

```
python3 -m http.server 8000
```

then open <http://localhost:8000>.
