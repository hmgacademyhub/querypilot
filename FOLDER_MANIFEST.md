# 📦 `enterprise/` — Folder Manifest

> **This folder is a complete, deployable copy of QueryPilot v9** — all 30 files, ready to drop onto any free static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages). Identical byte-for-byte to the master `querypilot/` folder.

> *Authored by **[Adewale Samson Adeagbo](AUTHOR.md)** — Founder of [HMG Concepts](https://hmgconcepts.pages.dev), Lagos, Nigeria. Free, offline, no AI API, no backend, no subscription.*

---

## 📋 Quick facts

| | |
|---|---|
| **Total files** | 30 |
| **Total size** | ~1.1 MB |
| **Entry point** | `index.html` |
| **SW cache version** | `querypilot-v9.0.0` |
| **App version** | v9 (= v6 core + v7 Pro + v8 Enterprise + v9 Learning Hub) |
| **Lines of curriculum** | ~3,600 |
| **Lessons** | 118 across 9 modules |
| **Enterprise features** | 25 |
| **Languages** | Vanilla HTML / CSS / JavaScript (ES5) |
| **Dependencies** | 0 (zero npm, zero CDN, except Google Fonts) |
| **License** | MIT |

---

## 🗂️ Complete file inventory

### Entry point + manifests

| File | Size | Purpose | Introduced |
|---|---:|---|---|
| `index.html` | 66.7 KB | App shell. Semantic HTML5, all panels, modals, ARIA. Loads 3 stylesheets + 7 scripts. | v6, evolved continuously |
| `manifest.json` | 2.3 KB | PWA manifest. App name, icons, theme colour, shortcuts (5: Ask, Visual, Enterprise, Hub, Learn). | v7 (PWA) |
| `sw.js` | 1.9 KB | Service worker. Cache-first for shell, stale-while-revalidate for fonts. Cache = `querypilot-v9.0.0`. | v7 (PWA) |
| `.nojekyll` | 0 B | GitHub Pages flag — disables Jekyll processing. | v7 |

### Stylesheets — `assets/*.css`

| File | Size | Purpose | Introduced |
|---|---:|---|---|
| `assets/styles.css` | 29.5 KB | Core styles. 4 themes (Dark, Light, High Contrast, Solarized). Responsive layout. Animations. Accessibility (focus rings, skip link, reduced motion). | v6 + v7 |
| `assets/enterprise.css` | 16.2 KB | Enterprise console styles. 21-subtab layout, RBAC indicators, audit table, governance toggles, PII cards, lineage SVG, vault, dashboard, health checks. | v8 |
| `assets/learn.css` | 13.9 KB | Learning Hub styles. Module grid, lesson pages, quiz UI, exercise cards, glossary, takeaway boxes, gold certificate. | v9 |

### Scripts — `assets/*.js`

| File | Size | Purpose | Introduced |
|---|---:|---|---|
| `assets/app.js` | 123.6 KB | Core logic. NL→SQL engine (45+ patterns), schema parser, 8 modes (Ask, Visual, JOIN, Subquery, Multi-JOIN, Compare, Tools, Learn, Export), 8 SQL tools (formatter, error explainer, complexity, schema diagram, stored proc, IN-builder, performance tips, ER SVG), validator, mock data, 17 SQL lessons, history, snippets, user templates, settings, About modal, PWA install banner. | v6 (lines 1-540) + v7 (lines 545-1300) |
| `assets/enterprise.js` | 131.9 KB | Enterprise module — all 25 features under `window.QPE` namespace. Multi-workspace manager, RBAC (4 roles), audit log (5k events), governance rules, PII scanner (15+ patterns), approval workflow, lineage graph, SQL linter (50+ rules), migration generator, test-data generator (Nigerian Faker), cost estimator, query versioning, scheduled reminders, webhook/email bridge, backup & restore, compliance reports, team comments, encrypted vault (AES-256-GCM + PBKDF2), onboarding tour, usage dashboard, doc pack printing, multi-tab sync (BroadcastChannel), health check, glossary. | v8 |
| `assets/curriculum.js` | 129.8 KB | Curriculum data — Modules 1-3 (45 lessons). M1: What is Data Science? (8). M2: Data Literacy & Spreadsheets (12). M3: SQL for Data Analysis (25). | v9 |
| `assets/curriculum_part2.js` | 86.9 KB | Curriculum data — Modules 4-5 (28 lessons). M4: Statistics — The Honest Version (14). M5: Python for Data Science (14). | v9 |
| `assets/curriculum_part3.js` | 71.7 KB | Curriculum data — Modules 6-7 (22 lessons). M6: Data Wrangling with Pandas (12). M7: Data Visualization & Storytelling (10). | v9 |
| `assets/curriculum_part4.js` | 84.2 KB | Curriculum data — Module 8 + Capstone (23 lessons). M8: Machine Learning Foundations (18). Capstone: Build & Deploy (5). | v9 |
| `assets/learn.js` | 22.9 KB | Learning Hub UI engine under `window.HUB`. Module grid renderer, lesson page renderer, quiz auto-grader, search, progress tracker, completion certificate generator. | v9 |

### Documentation — Markdown files

| File | Size | Purpose | Introduced |
|---|---:|---|---|
| `README.md` | 34.8 KB | Project overview, badges, table of contents, all modes/tools/lessons explained, v8 enterprise summary, v9 Hub summary, file structure, quick start, deployment links, roadmap, contributing, license. **The first thing anyone reads.** | v6, fully rewritten for each version |
| `DEPLOYMENT.md` | 26.8 KB | Step-by-step deployment guide. 6 methods (GitHub Pages, Netlify Drop, Netlify+Git, Vercel, Cloudflare Pages, Local). Enterprise topology section with 5 deployment models including educational. 20-item post-deployment checklist including Hub verification. PWA install instructions per device. Troubleshooting (12 cases). Custom domains. | v6, expanded each version |
| `ENTERPRISE.md` | 29.4 KB | Complete reference for v8's 25 enterprise features. Per-feature: what it is, why enterprises need it, where it lives in UI, how to use it, RBAC, audit events. Plus RBAC matrix, storage map, architectural principles, limitations disclosure, cross-reference to v9 Hub. | v8 |
| `LEARNING_HUB.md` | 26.3 KB | Complete reference for v9's 118-lesson curriculum. Pedagogical principles, full module breakdowns, study plans (sprint/comfortable/casual), lesson types, certificate process, instructor guide, recommended companion resources, career pathways, honest disclosure. | v9 |
| `CHANGELOG.md` | 18.8 KB | Full version history. Entries for v1, v2, v3, v4, v5, v6, v7, v7.1, v8, v9 — each with Added/Changed/Removed sections. Follows Keep-a-Changelog format. | v1, updated per release |
| `CONTRIBUTING.md` | 13.3 KB | How to contribute. Project principles (free, offline, no API, ES5). File layout with v6/v7/v8/v9 mappings. Coding conventions. How to add a lesson (v9), enterprise feature (v8), NL pattern (v7), theme (v7), tool, sidebar panel. Testing checklist. PR process. | v6, expanded for v8/v9 |
| `AUTHOR.md` | 10.7 KB | Full builder profile — Adewale Samson Adeagbo. 15+ years teaching, 12 deployed ML projects, HMG Concepts founder, currently enrolled programmes, all contact channels, other live projects. | v7.1 |
| `SCHEMA_GUIDE.md` | 8.5 KB | How to write effective schemas. Column-name recognition rules. CSV auto-detection. Import from .sql/.json. v8 per-workspace schemas. v9 Hub-uses-your-schema note. Dialect-specific date functions. | v6 |
| `SECURITY.md` | 6.4 KB | Privacy guarantees, threat model, responsible-disclosure process. Lists ALL localStorage keys (qp_*, qpe_*, qp_hub_*) with purpose. Supported versions: v9 / v8 / v7 / v6. | v7, expanded per release |
| `WHATS_NEW_V9.md` | 6.0 KB | One-page summary of v9 Learning Hub. 9 modules at a glance, beginner-friendly design notes, structural changes, upgrade instructions. | v9 |
| `WHATS_NEW_V8.md` | 5.1 KB | One-page summary of v8 Enterprise. 25 features at a glance + forward pointer to v9. | v8 |
| `WHATS_NEW_V7.md` | 4.4 KB | One-page summary of v7 Pro features + forward pointer to v8/v9. | v7 |
| `LICENSE.txt` | 1.1 KB | MIT License. Copyright (c) 2025-2026 Adewale Samson Adeagbo (HMG Concepts) and QueryPilot contributors. | v6 |

### GitHub repository scaffolding

| File | Size | Purpose | Introduced |
|---|---:|---|---|
| `.github/ISSUE_TEMPLATE/bug_report.md` | 1.1 KB | Issue template. Includes area selector for v6/v7 core, v8 enterprise, v9 Hub, PWA. | v7 |
| `.github/ISSUE_TEMPLATE/feature_request.md` | 888 B | Feature-request template. Includes area selector + "stay free/offline/no-AI" reminder. | v7 |

### Folders

| Folder | Purpose |
|---|---|
| `assets/` | All CSS and JavaScript files (10 files) |
| `.github/ISSUE_TEMPLATE/` | GitHub issue templates (2 files) |
| `screenshots/` | Placeholder for screenshots — currently contains only a README; add your own PNG/JPG/WEBP files |

---

## 🧭 Where each feature lives (one-page mental map)

```
┌─────────────────────────────────── index.html ───────────────────────────────────┐
│                                                                                  │
│  TOPBAR                                                                          │
│  ⚡ Logo  |  📁 Workspace  👑 Role  🎓 Progress%  🔍  ⊞  🌙  ⌨  ⚙  ❓  👤  [FREE OFFLINE]│
│                                                                                  │
│  SIDEBAR (left)                            MAIN PANEL TABS (top)                 │
│  ┌─────────────────┐   ┌─────────────────────────────────────────────────────┐  │
│  │ Schema          │   │ 💬 Ask  🔧 Visual  🔗 JOIN  ⊕ Subquery  ⊞ Multi-JOIN│  │
│  │ 📁 WS  (v8)     │   │ ⇄ Compare  🔧 Tools  🎓 Learn  📤 Export             │  │
│  │ CSV             │   │ 🏢 Enterprise (v8)   🎓 Hub (v9)                     │  │
│  │ Tpl             │   │                                                     │  │
│  │ Mine (v7)       │   │  [Mode-specific panel content here]                 │  │
│  │ Snip (v7)       │   │                                                     │  │
│  │ Saved           │   │                                                     │  │
│  │ Hist            │   │                                                     │  │
│  │ Cheat           │   │                                                     │  │
│  └─────────────────┘   └─────────────────────────────────────────────────────┘  │
│                                                                                  │
│  INPUT BAR (chat mode only)                                                     │
│  [ Plain-English query input.................................] [ ▶ Send ]      │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘

           assets/styles.css     assets/enterprise.css     assets/learn.css
                  ↓                       ↓                       ↓
                core UI              Enterprise UI            Learn Hub UI

         assets/app.js   assets/enterprise.js   assets/curriculum*.js   assets/learn.js
              ↓                  ↓                       ↓                       ↓
       Core SQL logic      window.QPE              window.CURRICULUM       window.HUB
                          (25 features)         (118 lessons data)        (Hub UI)
```

---

## 🚀 Deploy this folder (3 commands or fewer)

### Method 1 — GitHub Pages (free, permanent)

```bash
cd enterprise
git init
git add .
git commit -m "QueryPilot v9 deployment"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/querypilot.git
git push -u origin main
# Then: Settings → Pages → Deploy from main / root → Save
```

Live in ~3 minutes at `https://YOUR-USERNAME.github.io/querypilot`.

### Method 2 — Netlify Drop (free, 60 seconds)

1. Visit https://app.netlify.com/drop
2. Drag the entire `enterprise/` folder onto the page
3. Get a live URL like `https://shiny-jollof-9b1234.netlify.app`

### Method 3 — Local server (Python pre-installed)

```bash
cd enterprise
python3 -m http.server 8080
# Open http://localhost:8080
```

### Method 4 — Just open the file (no server)

Double-click `index.html`. Works for everything except PWA install + service-worker offline (which need HTTPS or localhost).

**Full step-by-step instructions:** see [`DEPLOYMENT.md`](DEPLOYMENT.md).

---

## 🔍 What was updated in v8 / v9 (versus the original v7 single-HTML file)

If you're migrating from v7 (single `querypilot-v7.html`), these are the NEW files you need:

### New stylesheets (2)
- `assets/enterprise.css`
- `assets/learn.css`

### New scripts (6)
- `assets/enterprise.js` (25 enterprise features)
- `assets/curriculum.js` (M1-M3 lessons)
- `assets/curriculum_part2.js` (M4-M5 lessons)
- `assets/curriculum_part3.js` (M6-M7 lessons)
- `assets/curriculum_part4.js` (M8 + Capstone lessons)
- `assets/learn.js` (Hub UI)

### New documentation (4)
- `ENTERPRISE.md`
- `LEARNING_HUB.md`
- `WHATS_NEW_V8.md`
- `WHATS_NEW_V9.md`

### Updated files (every single one)
- `index.html` — adds Enterprise tab, Hub tab, header chips (workspace + role + Hub progress), tour overlay div, panel placeholders for both
- `sw.js` — cache bumped to `querypilot-v9.0.0` + new shell files added
- `manifest.json` — v9 name + Hub shortcut
- `assets/app.js` — all "v7" string references updated to v9
- All `.md` docs — version references, feature lists, file trees synchronised
- `LICENSE.txt` — copyright reads Adewale Samson Adeagbo (HMG Concepts) and QueryPilot contributors

---

## 🧪 Verification checklist (run after deploying)

Copy this into your post-deploy ticket:

### Files
- [ ] All 30 files uploaded (compare with `FOLDER_MANIFEST.md` inventory)
- [ ] `assets/` subfolder intact with all 10 files
- [ ] `manifest.json` at root (NOT inside assets/)
- [ ] `sw.js` at root (NOT inside assets/ — PWA scope depends on this)

### Functional smoke test
- [ ] Page loads with dark theme
- [ ] Topbar shows 5 chips: workspace, role, progress, search, panel toggle, theme, shortcuts, settings, help, about
- [ ] Sidebar has 9 tabs: Schema, WS, CSV, Tpl, Mine, Snip, Saved, Hist, Cheat
- [ ] Main tab bar has 11 modes: Ask, Visual, JOIN, Subquery, Multi-JOIN, Compare, Tools, Learn, Export, Enterprise, Hub
- [ ] Type "show all customers" in Ask mode → SQL generates
- [ ] Click 🏢 Enterprise → 21-subtab console renders
- [ ] Click 🎓 Hub → 9-module grid renders
- [ ] Click any module → lesson list shows
- [ ] Click any lesson → content renders with quiz, glossary, takeaway
- [ ] Service Worker registers (DevTools → Application → Service Workers)
- [ ] PWA install icon appears in address bar (Chrome/Edge desktop) or "Add to Home Screen" works (iOS / Android)

### No console errors
- [ ] Open DevTools (F12) → Console — no red errors
- [ ] Check 3 console signatures appear (v9 core, v9 Enterprise, v9 Learn Hub)

---

## 📞 Need help?

| Channel | Details |
|---|---|
| 💬 WhatsApp (fastest) | [+234 810 086 6322](https://wa.me/2348100866322) |
| ✉️ Tech & partnerships | [buildingmyictcareer@gmail.com](mailto:buildingmyictcareer@gmail.com) |
| 🌐 Personal portfolio | https://cssadewale.pages.dev |
| 🏛️ HMG Concepts | https://hmgconcepts.pages.dev |
| 💻 GitHub | https://github.com/cssadewale |
| 📺 YouTube (free walkthroughs) | https://youtube.com/@hmgconcepts |
| 🐛 Bug reports | GitHub Issues — templates in `.github/ISSUE_TEMPLATE/` |

---

## 📜 Provenance

This `enterprise/` folder was created on demand from the master `querypilot/` folder. Every file was copied **byte-for-byte identical** (verified with `md5sum` and `diff -rq`). No file was edited during the copy — this is a true deployable snapshot, not a rewrite.

If you find a discrepancy between this folder and the master, the master `querypilot/` is the source of truth. To re-sync this folder:

```bash
rm -rf enterprise/
cp -r querypilot/ enterprise/
```

---

> *QueryPilot v9 — built deliberately by Adewale Samson Adeagbo, Lagos, Nigeria. Released under MIT. Use it. Improve it. Pass it on.*
