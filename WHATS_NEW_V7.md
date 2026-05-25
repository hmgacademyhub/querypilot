# What's New in QueryPilot v7 — Quick Summary

> *A one-page summary you can paste into release notes, classroom announcements or chat groups.*

> 📢 **Note from the future:** This is the v7 release summary. Since v7, QueryPilot has shipped:
> - **v8** — 25 enterprise features (see [WHATS_NEW_V8.md](WHATS_NEW_V8.md) and [ENTERPRISE.md](ENTERPRISE.md))
> - **v9** — 118-lesson Data Science Learning Hub (see [WHATS_NEW_V9.md](WHATS_NEW_V9.md) and [LEARNING_HUB.md](LEARNING_HUB.md))
> Every v7 feature listed below is still present and enhanced.

> *Project maintained by **[Adewale Samson Adeagbo](AUTHOR.md)** — Founder of [HMG Concepts](https://hmgconcepts.pages.dev), Lagos, Nigeria. Built on an Android tablet using Acode editor, zero budget. Contact: WhatsApp [+234 810 086 6322](https://wa.me/2348100866322) · [buildingmyictcareer@gmail.com](mailto:buildingmyictcareer@gmail.com)*

## ⚡ Headline

QueryPilot v7 is now a **Progressive Web App** with **4 themes**, **45+ natural-language patterns**, **9 modes**, **8 SQL tools**, **8 sidebar panels**, fully responsive design and a **Settings panel** — all still 100 % free, 100 % offline, 100 % no-API.

---

## 🆕 New Modes (1 added → 9 total)

- **Multi-JOIN Builder** — chain 3+ tables in one query with auto-detected ON columns.

## 🆕 New Tools (2 added → 8 total)

- **Performance Tips & Index Suggester** — paste any SQL, get specific optimisation hints and recommended indexes.
- **ER Diagram (SVG)** — scalable, downloadable visual schema with auto-linked foreign keys.

## 🆕 New Sidebar Panels (2 added → 8 total)

- **Your Templates** — save your own queries as reusable templates.
- **Snippets** — save reusable SQL fragments (WHERE clauses, CTE skeletons, etc.).

## 🆕 NL Engine — 10+ new patterns

Year-over-year, rolling N-day average, pivot, cohort, median, latest-per-group, running total, top-N per group, min/max date, standard deviation, variance, distinct count.

## 🆕 Themes (4)

Solarized added (Dark / Light / High Contrast / Solarized).

## 🆕 Settings Modal (`Ctrl + ,`)

Font size, default dialect, auto-format, auto-history, mock preview, performance hints, word-wrap — all persisted.

## 🆕 PWA — Install & Offline

- Install as a desktop or mobile app
- Service worker caches the shell — works fully offline forever after first load
- Standalone window mode

## 🆕 Sharing & Import

- **Copy Shareable URL** — encodes schema + dialect in a URL hash
- **Import schema from `.sql`** — parses CREATE TABLE statements
- **Import schema from `.json`** — round-trips Export Schema format

## 🆕 History

Export to `.sql` / `.json`. Clear all button.

## 🆕 Result Cards

Per-card **Export as Markdown** button.

## 🆕 Validator

10 checks now (added: ambiguous columns in JOIN, derived-table missing alias).

## 🆕 Accessibility

Skip-link, ARIA roles everywhere, focus rings, `prefers-reduced-motion` support.

## 🆕 Keyboard Shortcuts

`?` (shortcuts overlay), `Ctrl+,` (settings), `Ctrl+B` (sidebar), `Ctrl+Shift+T` (theme), `Ctrl+S` (save schema), `Ctrl+E` (export).

## 🆕 Mobile

Fully responsive layout, sidebar collapses below 820 px, larger touch targets below 500 px.

---

## 🔁 What didn't change

- All 35+ v6 NL patterns
- All v6 modes (Ask, Visual, JOIN, Subquery, Compare, Tools, Learn, Export)
- All v6 sidebar panels (Schema, CSV, Templates, Saved, History, Cheatsheet)
- All v6 tools (Formatter, Error Explainer, Complexity, ASCII Schema Diagram, Stored Procedure, IN-Clause)
- All 17 v6 lessons
- All 27 v6 templates
- All 8 SQL dialects
- MIT license

**Zero v6 features removed.** Pure additions.

---

## 📦 What changed structurally

The app is now split into three files instead of one:

```
querypilot/
├── index.html
├── manifest.json
├── sw.js
├── assets/
│   ├── styles.css
│   └── app.js
```

Still no build step. Still vanilla JS. Still ES5-compatible. Still ~150 KB total.

---

## 🚀 Upgrade in 2 minutes

1. Download the new `querypilot/` folder.
2. Replace the old single `index.html` with the new folder.
3. Bump the `CACHE` constant in `sw.js` if redeploying an existing hosted version.
4. Re-deploy (GitHub Pages / Netlify / Vercel / Cloudflare Pages — see `DEPLOYMENT.md`).

Done — your users automatically get all new features on next reload.
