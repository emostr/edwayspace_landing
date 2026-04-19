# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing/landing site for **edway.space** — a school management platform (schedules, homework, announcements). Deployed on GitHub Pages (see `CNAME`). No build system, no package manager, no framework.

## Development

Open `index.html` directly in a browser, or serve locally:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

No linting, no tests, no CI pipeline.

## Architecture

### Two CSS systems — do not mix them

- **`index.html`** — fully self-contained: all styles are inline `<style>` in `<head>`, all JS is inline `<script>` at the bottom. The external `css/style.css` and `js/mainpage.js` are **not loaded** by index.html.
- **`pages/*.html`** — each loads `../css/style.css` for shared styles. No JavaScript on these pages.
- `js/mainpage.js` exists as a standalone copy of the ticker logic but is not currently referenced anywhere.

When editing index.html styles, edit the `<style>` block inside that file. When editing pages, edit `css/style.css`.

### Design system

- Background: `#0a0a0a`, cards: `#141414`, secondary: `#1e1e1e`
- Accent: `#0078d4` (Microsoft blue), dim: `#005a9e`
- Text muted: `#8a8a8a`, border: `#2a2a2a`
- Font: `Racama` (woff2 at `assets/fonts/`), fallback `system-ui`
- Border-radius: **2px everywhere** — never use rounder values
- No `box-shadow` anywhere — borders only
- No comments in CSS/HTML/JS

### Ticker (hero heading animation)

The word wheel in the `h1` hero heading uses `.ticker > #ticker-word`. The ticker must have its `min-width` locked to the longest word via JS probe measurement (already implemented) to prevent layout shifts. Words cycle: учеников → учителей → классруков → завучей.

### Responsive breakpoints (index.html)

- `900px`: hero goes single-column, `.hero__visual` hidden, roles grid 2-col
- `640px`: features/security/roles go 1-col, how-steps stack, nav links hidden (CTA stays), container padding reduced to `--sp-sm`

### Pages

- `pages/support.html` — contact page
- `pages/documents.html` — legal/privacy documents
- `pages/about.html` — about page
- `pages/403.html`, `pages/404.html` — error pages
