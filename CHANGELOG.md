# Changelog

> *Project maintained by **[Adewale Samson Adeagbo](AUTHOR.md)** — Founder of [HMG Concepts](https://hmgconcepts.pages.dev), Lagos, Nigeria. Built on an Android tablet using Acode editor, zero budget. Contact: WhatsApp [+234 810 086 6322](https://wa.me/2348100866322) · [buildingmyictcareer@gmail.com](mailto:buildingmyictcareer@gmail.com)*

---

## [9.0.0] — 2026 (Learning Hub Edition)

A major curriculum-focused release. Adds a **complete data-science learning hub** with **118 lessons across 9 modules** — designed to take absolute beginners (non-technical adults included) from "what is data?" to deployed-ML practitioner. Preserves all v6/v7/v7.1/v8 features.

### Added (Learning Hub — 118 lessons across 9 modules)

#### New mode tab
- **🎓 Hub** mode tab in the main tab bar — opens the Learning Hub
- **🎓 chip** in topbar showing real-time progress percentage
- Cross-link from chat empty state and other UI

#### Curriculum content
- **Module 1 — What is Data Science?** (8 lessons, no code, beginner)
- **Module 2 — Data Literacy & Spreadsheet Thinking** (12 lessons, Excel/Sheets, pivot tables, cleaning, charts)
- **Module 3 — SQL for Data Analysis** (25 lessons — the original 17 + 8 new advanced topics: recursive CTEs, JSON, transactions, views, stored procs, pivot/unpivot, anti-patterns, portfolio project)
- **Module 4 — Statistics: The Honest Version** (14 lessons — mean/median, distributions, probability, sampling, CI, p-values, correlation, regression, A/B testing, bias, Simpson's paradox)
- **Module 5 — Python for Data Science** (14 lessons — from zero to NumPy)
- **Module 6 — Data Wrangling with Pandas** (12 lessons — DataFrame, groupby, merge, reshape, time series)
- **Module 7 — Data Visualization & Storytelling** (10 lessons — Matplotlib, Seaborn, Plotly, Streamlit, 3-act storytelling)
- **Module 8 — Machine Learning Foundations** (18 lessons — full sklearn pipeline + XGBoost + SHAP + deployment)
- **Capstone — Build & Deploy** (5 lessons — pick your problem, 2-week sprint, README, sharing)
- **Total: 118 lessons, ~370 KB of curriculum content**

#### UI engine (learn.js)
- Module grid home page with progress visualisation
- Module detail page with lesson list
- Rich lesson pages with sections: Learn / Example / Try in QueryPilot / Exercise / Project / Quiz / Glossary / Takeaway
- Lesson type badges (Concept / Exercise / Quiz / Project / Playground)
- Previous / Next navigation between lessons
- Mark-as-done toggle per lesson
- Local-storage progress tracking
- Cross-curriculum search by title or content
- "Try in QueryPilot" buttons that pre-fill chat with example queries

#### Quiz engine
- Multiple-choice quizzes embedded in lessons
- Auto-grading with explanation for each option
- Correct / wrong colour feedback
- Counts toward lesson completion

#### Completion certificate
- Triggered when overall completion reaches 80%
- Gold-bordered, printable HTML certificate
- Includes learner name (prompted on first claim), lesson count, module count, completion %, date
- Print / Save as PDF via browser
- One-click LinkedIn share
- Honest disclosure that it's a learning-completion (not accredited) certificate

#### Pedagogical features
- Nigerian-context examples throughout (jollof, JAMB, BVN, NIN, Lagos traffic, market sales)
- Honest disclosure of limits, biases, ethics in every relevant module
- Plain English first, jargon second
- Spiral curriculum — concepts revisited at increasing depth
- One idea per lesson
- Vocabulary defined before use (every lesson has glossary entries)
- Every module ends with a hands-on project producing a portfolio artifact

#### Documentation
- **LEARNING_HUB.md** — comprehensive 13-section curriculum reference (pedagogical principles, module breakdowns, study plans, lesson types, certificate, instructor guide, future roadmap)

### Added (infrastructure)
- `assets/curriculum.js` (M1-M3, ~130 KB)
- `assets/curriculum_part2.js` (M4-M5, ~87 KB)
- `assets/curriculum_part3.js` (M6-M7, ~72 KB)
- `assets/curriculum_part4.js` (M8 + Capstone, ~84 KB)
- `assets/learn.js` — UI engine (~23 KB)
- `assets/learn.css` — Hub styles (~14 KB)
- Global `HUB` and `CURRICULUM` namespaces

### Changed
- Service worker cache → `querypilot-v9.0.0`; includes 6 new shell files
- App version atag: v8 → v9
- App title now includes "+ Data Science Learning Hub"

### Removed
- Nothing. Every v6 / v7 / v7.1 / v8 feature is preserved exactly.

### Migration
- Drop-in upgrade from v8. No data migration. Curriculum progress is independent of all existing storage.

---

## [8.0.0] — 2026 (Enterprise Edition)

A major enterprise release. Adds **25 enterprise-grade features** for teams, governance, compliance and operational excellence — without removing any v6/v7 feature, without adding any dependency, and without ever calling an AI API.

### Added (25 enterprise features)

#### Identity & Access
- **Multi-Workspace Manager** — isolated environments (schema + queries + snippets + history + comments + glossary + versions) per workspace. Topbar chip, sidebar tab, full Enterprise console panel. Multi-tab BroadcastChannel sync.
- **Role-Based Access Control (RBAC)** — 4 cumulative roles (Viewer 👁️ / Analyst 📊 / DBA 🛠️ / Admin 👑). UI-layer enforcement via `data-rbac-perm` attributes. Honor-system + full audit trail.
- **Profile / Role Switcher** — unified with RBAC; each role acts as a separate audit actor.

#### Governance & Compliance
- **SQL Governance Rules Engine** — 7 toggle rules (block DROP/TRUNCATE/GRANT/REVOKE/injection patterns, require WHERE on DELETE/UPDATE, warn on SELECT *) + max LIMIT + table allow/deny lists. Inline banner on result cards. DBA / Admin only.
- **PII / Sensitive Data Detector** — 15+ patterns including Nigerian NIN/BVN plus global SSN, credit card, password, token, DOB, salary, address, geolocation, religion, medical. Severity grouping. Markdown export.
- **Query Approval Workflow** — request → review → decide with notes. All decisions audited.
- **Audit Log** — immutable append-only event journal. 5,000-event cap. JSON + CSV export. Per-action filtering. Admin-only clear.
- **Compliance Report Generator** — Markdown attestation combining audit posture, RBAC, governance, PII, audit summary. Signed by current role + timestamp. Submit as NDPR / GDPR / ISO-27001 evidence.

#### Data Quality & Productivity
- **SQL Linter (50+ rules)** — free sqlfluff-lite covering style, correctness, security, performance, schema. Severity tally + rule IDs.
- **Migration Generator** — diff two schema definitions → runnable ALTER TABLE / CREATE / DROP script.
- **Test Data Generator** — Nigerian-context Faker (real names, cities, regions, departments, +234 phone numbers) generating INSERT statements with type inference per column.
- **Query Cost Estimator** — heuristic rows/bytes scanned + duration estimate with risk level (low / medium / high).
- **Query Versioning** — 50 snapshots per saved query with author + note + diff viewer.

#### Collaboration & Documentation
- **Team Comments on Queries** — threaded comments per saved query, signed by role.
- **Glossary / Data Dictionary** — per-workspace business definitions for columns.
- **Print Documentation Pack** — HTML print of cover + Data Dictionary + PII inventory + glossary + Saved Query Catalogue + governance posture.
- **Data Lineage Viewer** — SVG graph of which queries depend on which tables. Downloadable.
- **Webhook / Email Bridge** — composes mailto: / webhook URLs for Zapier/Make/Slack integration — no API call made by the app itself.

#### Operations
- **Scheduled Reminders** — browser Notifications API, no server, no cron. Multi-day, multi-time.
- **Backup & Restore** — one-click full localStorage JSON export/import. Admin-only restore.
- **Encrypted Local Vault** — AES-256-GCM + PBKDF2-SHA-256 (120k iterations) via Web Crypto API. Zero-knowledge.
- **Multi-Tab Workspace Sync** — automatic via BroadcastChannel. Graceful fallback.
- **Usage Dashboard** — local-only telemetry: top actions, role mix, top tables, hourly distribution, peak hour.
- **Health Check Dashboard** — self-test of localStorage, SW, Crypto, Notifications, BroadcastChannel, PWA, network, browser, audit-log size, JS heap.
- **Onboarding Tour** — 8-step product tour auto-launches on first load; replayable from Health subtab.

### Added (infrastructure)
- `assets/enterprise.js` — 1,800+ LOC enterprise module (ES5-compatible, no deps).
- `assets/enterprise.css` — 350+ LOC enterprise styles (theme-token aware).
- `ENTERPRISE.md` — complete feature-by-feature reference (25 sections + RBAC matrix + storage map + architectural principles).
- New mode tab `🏢 Enterprise` with 21 sub-tabs.
- New sidebar tab `📁 WS`.
- New header chips `📁 {workspace}` and `👑 {role}`.
- New global `QPE` namespace (window.QPE) — all enterprise functions live here for clean separation.

### Changed
- Service worker cache → `querypilot-v8.0.0`; includes the new `enterprise.css` and `enterprise.js` shell files.
- README's "What's New" leads with v8 enterprise (v7/v6/etc. sections preserved).
- DEPLOYMENT.md adds 8-step Enterprise deployment guide (topology, default role, governance pre-config, vault HTTPS, audit rotation, backup hygiene, first-run enablement) + 20-item Enterprise post-deployment checklist.
- HTML version badge: v7 → v8.
- App console signature updated.

### Removed
- Nothing. Every v6 / v7 / v7.1 feature is preserved exactly.

### Security
- **No new attack surface.** The Vault uses browser Web Crypto only (no external libs). RBAC and governance run in the UI layer, with all bypass attempts captured in the audit log. The webhook bridge composes URLs but never calls them — user opens the link manually.

### Migration
- Drop-in upgrade from v7. No manual data migration. v6/v7 localStorage keys (`qp_*`) coexist with v8 keys (`qpe_*`).

---

All notable changes to QueryPilot are documented in this file. Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [7.1.0] — 2026

### Added
- **AUTHOR.md** — Full builder profile (Adewale Samson Adeagbo, HMG Concepts, Lagos, Nigeria) with the working method, contact channels, and links to all 12 other live projects (CBT Pro, TruthLens, Student At-Risk Predictor, Bank Churn, etc.).
- **In-app "About the Builder" modal** — accessible from the header (👤 button) or the chat empty-state link. Shows the builder's tagline, story, contact channels, and other live projects. Click backdrop or press `Esc` to close.
- **Builder attribution** added to README, DEPLOYMENT, CHANGELOG, CONTRIBUTING, SECURITY, SCHEMA_GUIDE, WHATS_NEW_V7 and the two GitHub issue templates.
- **HTML meta tags** for author, OpenGraph, Twitter Card crediting Adewale Samson Adeagbo / HMG Concepts.
- **Console signature** in `app.js` for developers who open DevTools — credits the builder and links to portfolio.
- **manifest.json** `author`, `developer`, `publisher` fields with HMG Concepts attribution.

### Changed
- **LICENSE.txt** copyright now reads: *Copyright (c) 2025–2026 Adewale Samson Adeagbo (HMG Concepts) and QueryPilot contributors* (MIT terms unchanged).
- **SECURITY.md** disclosure contact table now lists real WhatsApp / email channels for the maintainer.
- **DEPLOYMENT.md** now has a "Need a Human?" section linking schools, parents, NGOs and recruiters to direct support.
- Service worker `CACHE` bumped to `querypilot-v7.1.0` so users automatically receive the new shell on next reload.

### Removed
- Nothing. All v6 + v7.0 features retained.

---

## [7.0.0] — 2026

A major *Pro* release that builds on v6 without removing a single feature. Highlights: PWA install, Solarized theme, mobile layout, Multi-JOIN mode, two new tools, two new sidebar panels, 10+ new NL patterns, settings, share-by-URL, schema import, history export, accessibility improvements.

### Added

#### Progressive Web App
- **Installable PWA** with `manifest.json` and `sw.js` service worker
- **Offline cache** of `index.html`, `assets/styles.css`, `assets/app.js`, `manifest.json` on first load — works without internet thereafter
- **Install banner** prompts on supported browsers
- **Standalone window** mode when installed

#### New Mode (9 total)
- **Multi-JOIN Builder** — chain 3+ tables in a single query. Auto-detects ON columns via `{table}_id ↔ id` and exact-match conventions. Per-row join type. Single WHERE / ORDER BY / LIMIT applies to the whole chain.

#### New Tools (8 total in Tools panel)
- **Tool 7 — Performance Tips & Index Suggester:** Detects SELECT *, leading-% LIKE, NOT IN with NULLs, function-on-column, missing LIMIT with ORDER BY, ≥3 JOINs, huge IN lists, full-table COUNT(*). Extracts WHERE and JOIN-ON columns and suggests indexes. Three severity levels (info / warn / critical).
- **Tool 8 — ER Diagram (SVG):** Scalable vector ER diagram with auto-detected foreign-key links. Downloadable as a standalone `.svg` file.

#### New Sidebar Panels (8 total)
- **Your Templates (UDT):** Save your own queries as reusable templates. Stored in `localStorage`.
- **Snippets:** Save reusable SQL fragments (WHERE clauses, CTE skeletons, etc.). Copy or send to chat.

#### NL Engine — 10+ new patterns
- Year-over-year (LAG window function)
- Rolling N-day average (window-frame ROWS BETWEEN N PRECEDING)
- Pivot / cross-tab (CASE WHEN SUM)
- Cohort analysis skeleton (CTE + DATE_TRUNC)
- Median (PERCENTILE_CONT)
- Latest / first row per group (ROW_NUMBER PARTITION BY)
- Running total (SUM OVER)
- Top-N per group (RANK PARTITION BY)
- Min/Max date (earliest/latest)
- Standard deviation / variance (STDDEV / VARIANCE)
- Distinct count (COUNT DISTINCT)

#### Themes
- **Solarized** theme added (Dark / Light / High Contrast / Solarized — 4 themes)

#### Settings (new modal, Ctrl+,)
- Font size (Small / Medium / Large / Extra Large)
- Default dialect (persisted)
- Auto-format SQL on send (toggle)
- Auto-save to History (toggle)
- Show mock preview (toggle)
- Show performance hints (toggle)
- Word-wrap by default (toggle)
- Reset to defaults

#### Sharing & Import
- **Share by URL** — encodes schema + dialect in `#qp=...` hash, copyable to clipboard
- **Import schema from `.sql`** — parses CREATE TABLE statements (PostgreSQL/MySQL/Standard syntax)
- **Import schema from `.json`** — round-trips the Export Schema format
- **Export Schema to `.json`**

#### History
- **Export history to `.sql`** with timestamps and titles
- **Export history to `.json`**
- **Clear history** button

#### Templates
- **Favorite (⭐) built-in templates** — starred templates sort to top

#### Result Cards
- **Per-card "Export as Markdown"** button — one `.md` file per query

#### Validator (10 checks, was 8)
- Possibly ambiguous columns in SELECT with JOINs
- Derived-table (subquery in FROM) missing alias

#### Accessibility
- Skip-link for keyboard users
- `aria-label`, `role="tab"`, `role="tabpanel"` throughout
- Visible focus rings via `:focus-visible`
- `prefers-reduced-motion` respected (animations disabled)

#### Keyboard Shortcuts
- `?` — open shortcuts overlay
- `Ctrl+,` — open settings
- `Ctrl+B` — toggle sidebar
- `Ctrl+Shift+T` — cycle theme
- `Ctrl+S` — save schema (outside text fields)
- `Ctrl+E` — export all saved queries (outside text fields)

#### Responsive / Mobile
- Sidebar collapses below the chat on screens ≤ 820 px
- Larger touch targets, smaller chrome on ≤ 500 px
- Stats bar wraps; tab bar horizontally scrolls

### Changed
- App split into `index.html` + `assets/styles.css` + `assets/app.js` (no build step still — split is for maintainability and SW caching). All v6 logic preserved verbatim; v7 modules appended.
- README, DEPLOYMENT, CHANGELOG and SCHEMA_GUIDE fully rewritten for v7 with detailed feature explanations.

### Removed
- Nothing. All v6 features retained.

---

## [6.0.0] — 2025

### Added

#### SQL Tools Panel (6 tools)
- **SQL Formatter** — Reformats messy SQL into clean indented code with each clause on its own line.
- **SQL Error Explainer** — Translates database errors into plain English. 14 error patterns.
- **Query Complexity Estimator** — Scores 0–100+ with Green/Yellow/Orange/Red risk levels.
- **Schema Diagram Viewer** — ASCII diagram with [PK]/[FK]/[DT] indicators and relationship lines.
- **Stored Procedure Template Generator** — MySQL, PostgreSQL, SQL Server, Oracle templates.
- **IN-Clause Builder** — Pasted list → properly-quoted SQL IN clause.

#### Themes
- High Contrast theme (WCAG accessibility)
- Theme button cycles Dark → Light → High Contrast

#### Search
- Result search bar with Ctrl+F across all result cards

#### Visual Builder
- Column data type hints
- Tooltips on all form fields

#### Result Cards
- Word-wrap toggle

#### Saved Queries
- Tags (comma-separated, coloured pills, filterable)

#### Export
- Print to PDF for saved-query library

#### Schema
- Stored-procedure table dropdown auto-syncs with schema

---

## [5.0.0] — 2025

### Added
- Compare SQL (Diff) mode
- Learn SQL with 17 lessons
- SQL Cheatsheet sidebar panel
- Deep Explain (clause-by-clause)
- Mock Data Preview
- Template search
- History search
- Schema localStorage persistence
- 27 query templates in 5 categories
- OFFSET and HAVING support in Visual Builder

### Changed
- Stats bar shows Queries, Time, Tables, Saved, Dialect
- NL engine expanded to 30+ patterns

---

## [4.0.0] — 2025

### Added
- Subquery Builder
- Export panel (.sql, .md, .json, .csv)
- DDL generator
- Mock preview tab
- Save Queries (bookmarks)
- Session summary
- 27 query templates (up from 14)
- CTE pattern (WITH clause)
- RANK() window function pattern
- Percentage calculation pattern
- Duplicate detection (HAVING COUNT > 1)
- CROSS JOIN
- OFFSET
- IN and BETWEEN filter operators
- Toast notifications

---

## [3.0.0] — 2025

### Added
- Visual Query Builder (5-step form with live preview)
- JOIN Builder (visual diagram, auto ON detection)
- CSV auto-schema detection with type inference
- SQL Formatter
- SQL Validator (7 checks)
- Syntax highlighter
- Dark / Light theme toggle

---

## [2.0.0] — 2025

### Added
- Rule-based NL engine (replacing AI API)
- Sidebar with Schema, Templates, History
- 14 query templates
- Inline SQL editor
- Copy and Download buttons
- SQL Validator (basic)
- Query history (last 30)
- Dark theme

### Removed
- Anthropic API dependency

---

## [1.0.0] — 2025

### Added
- Initial release
- Chat interface for NL → SQL
- Schema definition panel
- 8-dialect selector
- Copy / download buttons
- Query history
- Basic syntax highlighting
- Light / dark theme
