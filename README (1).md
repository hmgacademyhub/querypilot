# ⚡ QueryPilot v9 — Free SQL Assistant + Data Science Learning Hub

> **A complete SQL query assistant for non-technical users, data analysts, students and instructors. No AI API. No backend. No installation. No cost. Works fully offline in any modern browser — and now installable as a Progressive Web App.**

> *Built by **[Adewale Samson Adeagbo](AUTHOR.md)** — Data Scientist, STEM Educator, AI-Augmented Solutions Developer · Founder of [HMG Concepts](https://hmgconcepts.pages.dev) (Est. 2015), Lagos, Nigeria. Shipped from an Android tablet using Acode editor, on zero budget. Read the [full story →](AUTHOR.md)*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen?style=for-the-badge)](https://YOUR-USERNAME.github.io/querypilot)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE.txt)
[![Version](https://img.shields.io/badge/Version-9.0-orange?style=for-the-badge)]()
[![Enterprise](https://img.shields.io/badge/Enterprise-25%20Features-purple?style=for-the-badge)](ENTERPRISE.md)
[![Learning Hub](https://img.shields.io/badge/Learning%20Hub-118%20Lessons-yellow?style=for-the-badge)](LEARNING_HUB.md)
[![No API](https://img.shields.io/badge/No%20API-100%25%20Free-red?style=for-the-badge)]()
[![Offline](https://img.shields.io/badge/Works-Offline-purple?style=for-the-badge)]()
[![PWA](https://img.shields.io/badge/PWA-Installable-blueviolet?style=for-the-badge)]()

---

## 📋 Table of Contents

1. [What is QueryPilot?](#what-is-querypilot)
2. [Who is it for?](#who-is-it-for)
3. [Key Principles](#key-principles)
4. [What's New in v9 — Learning Hub](#-new-in-v9--data-science-learning-hub)
5. [What's New in v8 — Enterprise](#-whats-new-in-v8-enterprise)
6. [What's New in v7](#whats-new-in-v7)
7. [Full Feature Catalogue (every feature explained)](#full-feature-catalogue)
   * [The 9 Modes](#the-9-modes)
   * [The 8 SQL Tools](#the-8-sql-tools)
   * [The 8 Sidebar Panels](#the-8-sidebar-panels)
   * [Themes, Settings & PWA](#themes-settings--pwa)
   * [Search, Shortcuts & Accessibility](#search-shortcuts--accessibility)
   * [Storage, Sharing & Privacy](#storage-sharing--privacy)
8. [Natural-Language Patterns (45+)](#natural-language-patterns-45)
9. [Keyboard Shortcuts](#keyboard-shortcuts)
10. [Technology Stack](#technology-stack)
11. [File Structure](#file-structure)
12. [Quick Start](#quick-start)
13. [Deployment](#deployment)
14. [Roadmap](#roadmap)
15. [Contributing](#contributing)
16. [License](#license)

---

## What is QueryPilot?

QueryPilot is a **static web app** (HTML + CSS + JS, no backend) that turns plain-English questions into clean SQL queries instantly. It runs entirely in your browser — there is **no server**, **no API key**, **no database connection** and **no internet required** after the first page load.

Built for **non-technical business users, data analysts, students, instructors and developers** who need SQL but don't want to memorise syntax or pay for an AI subscription. Everything is explained in plain language with tooltips, clause-by-clause breakdowns and interactive lessons.

```
You ask:  "Top 10 customers by revenue last month"

You get:  SELECT customer_id, SUM(total) AS total_revenue
          FROM orders
          WHERE MONTH(created_at) = MONTH(CURRENT_DATE) - 1
            AND YEAR(created_at) = YEAR(CURRENT_DATE)
          ORDER BY total_revenue DESC
          LIMIT 10;
```

---

## Who is it for?

| User | How QueryPilot helps |
|---|---|
| **Business Analysts** | Ask data questions in plain English without writing SQL from scratch |
| **Data Scientists** | Build/test query logic quickly, export to any SQL client |
| **Students / Learners** | 17 interactive SQL lessons from basics to advanced window functions |
| **Developers** | Format, validate, compare, document and tune SQL queries |
| **EdTech Instructors** | Deploy as a free teaching tool with shareable URLs |
| **DBAs** | Generate DDL, stored procedure templates, ER diagrams and index suggestions |

---

## Key Principles

- **100 % Free** — No paid API, no subscription, no hidden costs, ever
- **100 % Offline** — Works after the first load with no internet (now installable as a PWA)
- **100 % Private** — No data leaves your browser; we don't even log requests
- **Zero Installation** — Open the file or visit the URL in any browser
- **No Build Step** — Vanilla HTML/CSS/JS, no npm, no Node, no bundlers
- **Tiny Footprint** — ~150 KB total, ungzipped

---



## 🎓 NEW in v9 — Data Science Learning Hub

**A complete beginner-to-expert curriculum, built into the app.** 9 modules. 118 lessons. ~24 weeks of structured learning, ~370 KB of content — all free, all offline-capable, no AI API, no subscription.

### The 9 modules

| # | Module | Icon | Lessons | What you learn |
|---|---|---|---|---|
| **M1** | What is Data Science? | 🌱 | 8 | Vocabulary, mental model, ethics. No code yet. |
| **M2** | Data Literacy & Spreadsheets | 📊 | 12 | Excel/Sheets, pivot tables, cleaning, charts |
| **M3** | SQL for Data Analysis | 🔍 | 25 | Master SQL — practice live in QueryPilot |
| **M4** | Statistics — The Honest Version | 📈 | 14 | Intuition, p-values, A/B tests, bias |
| **M5** | Python for Data Science | 🐍 | 14 | Python from zero, NumPy basics |
| **M6** | Data Wrangling with Pandas | 🐼 | 12 | The DataFrame, groupby, merge, time series |
| **M7** | Data Visualization & Storytelling | 📉 | 10 | Matplotlib, Seaborn, Plotly, Streamlit |
| **M8** | Machine Learning Foundations | 🤖 | 18 | Sklearn, XGBoost, SHAP, deployment |
| **CAP** | Capstone — Build & Deploy | 🏆 | 5 | Your own portfolio project |

### Designed for beginners (and non-technical adults)

✅ Zero prerequisites — Module 1 starts with "what is data?"
✅ Nigerian-context examples (jollof prices, JAMB scores, BVN, NIN, market sales)
✅ Active learning — quizzes, exercises, "try in QueryPilot" buttons, projects
✅ Honest disclosure of what works and what doesn't
✅ Built into the app — click the **🎓 Hub** tab to start

### Progress tracking + completion certificate

- Lessons you complete are tracked locally
- Module progress bars show your status
- At 80% completion: claim a printable, gold-bordered certificate with your name
- Share completion to LinkedIn with one click

**Read the complete reference: [LEARNING_HUB.md](LEARNING_HUB.md)** — full curriculum breakdown, study plans, lesson types, instructor guide.

---

## 🏢 What's New in v8 (Enterprise)

**v8 (2026)** turns QueryPilot into a team-grade tool while preserving every v6/v7 feature. It adds **25 enterprise capabilities** — all still 100% free, no AI API, no backend, no subscription.

### The 25 enterprise features at a glance

| # | Feature | Why it matters |
|---|---|---|
| 1 | **Multi-Workspace Manager** | Isolate Production / Staging / Client A / Client B environments |
| 2 | **Audit Log** (immutable, 5k events, JSON/CSV export) | Compliance evidence: who ran what, when |
| 3 | **RBAC** (Viewer / Analyst / DBA / Admin) | Restrict dangerous operations by role |
| 4 | **SQL Governance Rules** | Block DROP / TRUNCATE / DELETE-without-WHERE; allow/deny table lists |
| 5 | **PII / Sensitive Data Detector** | Auto-flags 15+ patterns including Nigerian NIN/BVN |
| 6 | **Query Approval Workflow** | Four-eyes review for sensitive queries |
| 7 | **Data Lineage Viewer** | Visual SVG graph of which queries depend on which tables |
| 8 | **SQL Linter** (50+ rules) | Free sqlfluff-lite — style, correctness, security, performance |
| 9 | **Migration Generator** | Diff two schemas → runnable ALTER TABLE script |
| 10 | **Test Data Generator** | Nigerian-context Faker generates realistic INSERT statements |
| 11 | **Query Cost Estimator** | Rows/bytes scanned + duration heuristic |
| 12 | **Query Versioning** | 50 snapshots per saved query with diff viewer |
| 13 | **Scheduled Reminders** | Browser Notifications — no server, no cron |
| 14 | **Webhook / Email Bridge** | Compose mailto: or webhook URLs for Zapier/Make/Slack |
| 15 | **Backup & Restore** | One-click JSON export/import of entire environment |
| 16 | **Compliance Report Generator** | NDPR/GDPR/ISO-style Markdown attestation |
| 17 | **Profile / Role Switcher** | (Unified with RBAC — each role acts as a separate actor) |
| 18 | **Team Comments on Queries** | Threaded discussion per saved query |
| 19 | **Encrypted Local Vault** | AES-256-GCM + PBKDF2 via Web Crypto API |
| 20 | **Onboarding Tour** | 8-step interactive tour on first load |
| 21 | **Usage Dashboard** | Local-only telemetry: top actions, peak hour, top tables |
| 22 | **Print Documentation Pack** | Auto-generates printable Data Dictionary + Query Catalogue |
| 23 | **Multi-Tab Workspace Sync** | BroadcastChannel API — instant sync across browser tabs |
| 24 | **Health Check Dashboard** | Self-test of localStorage / SW / Crypto / Notifications / etc. |
| 25 | **Glossary / Data Dictionary** | Business definitions for columns, embedded in printed packs |

**Read the full reference: [ENTERPRISE.md](ENTERPRISE.md)** — every feature explained, with screenshots-equivalent walkthroughs, RBAC matrix, storage map and architectural principles.

### Where to find the enterprise features

- **New top-bar chips:** `📁 {workspace}` and `👑 {role}` for one-click switching.
- **New sidebar tab:** `📁 WS` for workspace management.
- **New mode tab:** `🏢 Enterprise` opens the full console with 21 sub-tabs grouping all 25 features.

### Zero v6/v7 features removed

Every previous capability is preserved — the 8 modes, 8 sidebar panels, 8 tools, 17 lessons, 27 templates, 4 themes, PWA install, all of it.

---

## What's New in v7

**v7 (2026)** is a *pro* release that builds on v6 without removing a single feature. Highlights:

| Area | What's new |
|---|---|
| **PWA** | Installable on Android, iOS, Windows, macOS; full offline cache via service worker |
| **4th Theme** | Solarized (added to Dark / Light / High Contrast) |
| **Mobile** | Fully responsive layout, sidebar collapses, larger touch targets |
| **New mode** | **Multi-JOIN** — chain 3+ tables with auto-detected ON columns |
| **Tools +2** | **Performance Tips & Index Suggester**, **SVG ER Diagram** (alongside ASCII) |
| **Sidebar +2** | **Your Templates** (save your own), **Snippets** (reusable SQL fragments) |
| **NL engine** | 10+ new patterns: year-over-year, rolling avg, pivot, cohort, median, latest-per-group, running total, top-N per group, stddev, distinct count |
| **History** | Export to `.sql` / `.json`, clear button, filter chips |
| **Sharing** | One-click *Copy Shareable URL* (encodes schema + dialect in `#hash`) |
| **Import** | Schema import from `.sql` (CREATE TABLE parser) **or** `.json` |
| **Settings** | Font size, default dialect, auto-format, auto-history, mock-preview, performance hints, word-wrap; persisted to localStorage |
| **Shortcuts** | `?` overlay, Ctrl+B sidebar, Ctrl+, settings, Ctrl+Shift+T theme, Ctrl+S save schema, Ctrl+E export |
| **Validator** | 10 checks (ambiguous columns in JOIN, missing derived-table alias) |
| **Cards** | Per-card *Export as Markdown* button |
| **A11y** | Skip-link, ARIA roles, focus rings, `prefers-reduced-motion` respect |

Nothing from v6 was removed.

---

## Full Feature Catalogue

### The 9 Modes

Modes are switched via the tab bar above the main panel.

#### 1. 💬 Ask in English (Chat Mode)
The core feature. Type a plain-English question and QueryPilot generates correct SQL using a **rule-based engine of 45+ patterns** — completely offline. Every result card has four tabs:
* **SQL** — syntax-highlighted, editable, with Copy / Download / Markdown buttons
* **Explain** — clause-by-clause plain-English breakdown
* **Validate** — 10-point validation with errors and warnings colour-coded
* **Preview** — sample output table with realistic placeholder data

#### 2. 🔧 Visual Query Builder
A 5-step guided form that builds SQL without typing any. Every field has a tooltip. Live preview updates at each step:
1. **Choose Table** — populates from your schema
2. **Choose Columns** — click pills; data-type hints (id/int, decimal, datetime, varchar, email, text) are shown
3. **Add Filters (WHERE)** — multiple conditions with operators `=`, `!=`, `>`, `<`, `>=`, `<=`, `LIKE`, `NOT LIKE`, `IN`, `IS NULL`, `IS NOT NULL`
4. **Group & HAVING** — pick a GROUP BY column and an optional HAVING expression; tooltip explains the WHERE-vs-HAVING distinction
5. **Sort, Limit & Offset** — for pagination (`LIMIT 10 OFFSET 10` = page 2 of 10)

#### 3. 🔗 JOIN Builder (Two Tables)
Visual diagram updates live. Auto-detects ON columns when both tables share a column name. Five join types with hover-tooltips:
* **INNER** — only matching rows
* **LEFT** — all left + matches
* **RIGHT** — all right + matches
* **FULL OUTER** — all rows from both sides
* **CROSS** — every combination

#### 4. ⊕ Subquery Builder
Two-step form for nested SELECTs. Inner query runs first (can include GROUP BY and aggregates), outer query filters/sorts/limits the result. Generated SQL is properly indented.

#### 5. ⊞ Multi-JOIN Builder *(new in v7)*
Chain **3 or more tables** in a single query. Add a row per joined table; QueryPilot auto-fills ON columns from your schema (using `{table}_id ↔ id` conventions). Per-row join type, plus a single WHERE / ORDER BY / LIMIT. The live preview shows the chained SQL.

#### 6. ⇄ Compare SQL
Paste two SQL versions for a **line-by-line diff**. Green lines (`+`) added, red lines (`-`) removed with strikethrough. Change summary shows lines added, removed, unchanged and overall change percentage.

#### 7. 🔧 SQL Tools (8 specialists)
See [The 8 SQL Tools](#the-8-sql-tools) below.

#### 8. 🎓 Learn SQL
**17 interactive lessons** in 3 levels. Each lesson has a plain-English explanation, working highlighted example, and a **Try It** button that runs the example in chat mode:
* 🟢 **Beginner (6)** — SELECT, WHERE, ORDER BY, LIMIT, COUNT, SUM/AVG/MAX/MIN
* 🟡 **Intermediate (6)** — GROUP BY, HAVING, INNER JOIN, LEFT JOIN, LIKE, IN & BETWEEN
* 🔴 **Advanced (5)** — Subqueries, CTEs, CASE WHEN, RANK() window functions, NULL handling

#### 9. 📤 Export
Eight export and output options for your saved queries and schema:
* `.sql` — runnable SQL file with comment labels
* `.md` — markdown report with code blocks
* `.json` — structured data
* `.csv` — spreadsheet summary
* **Per-query Markdown** *(new)* — one MD file per result card
* **Print to PDF** — browser print of full library
* **Generate DDL** — CREATE TABLE statements with inferred types
* **Session Summary** — activity report

---

### The 8 SQL Tools

#### Tool 1 — ✏️ SQL Formatter
Reformats messy SQL into clean, consistently-indented code with each clause on its own line. Places `FROM`, `WHERE`, `JOIN`, `GROUP BY`, `ORDER BY`, `HAVING`, `LIMIT`, `OFFSET` on new lines and indents `AND`/`OR` with two spaces. Output is syntax-highlighted with Copy and Send-to-Chat buttons.

#### Tool 2 — 🚫 SQL Error Explainer
Translates cryptic database errors into plain English. Recognises **14 error patterns**: syntax error, unknown column/table, duplicate key, division by zero, data too long, permission denied, connection failure, NOT NULL violation, foreign key constraint, query timeout, ambiguous column, GROUP BY error, subquery returns multiple rows.

#### Tool 3 — ⏱️ Query Complexity Estimator
Scores a SQL query 0–100+ and assigns a 🟢/🟡/🟠/🔴 risk level. Factors: each JOIN +15, each subquery +20, each aggregate +5, GROUP BY +10, ORDER BY +5, window function +25, each UNION +10, each LIKE +8, DISTINCT +10.

#### Tool 4 — 📊 Schema Diagram Viewer
Generates an **ASCII diagram** of your full schema with column type indicators (`[PK]`, `[FK]`, `[DT]`) and auto-detected relationship lines.

#### Tool 5 — 📄 Stored Procedure Template Generator
Generates correct stored procedure boilerplate for **MySQL / PostgreSQL / SQL Server / Oracle**, for any operation (SELECT all, GET by ID, INSERT, UPDATE by ID, DELETE by ID), using the right syntax (`DELIMITER //` vs `plpgsql` vs `SET NOCOUNT ON` vs `AS BEGIN...END;`).

#### Tool 6 — 📥 IN-Clause Builder
Converts a pasted list of values (one per line or comma-separated) into a properly-quoted SQL `IN(...)` clause. Single quotes inside text values are escaped (`O'Brien` → `'O''Brien'`).

#### Tool 7 — 🏃 Performance Tips & Index Suggester *(new in v7)*
Paste any SQL and get specific performance feedback **and** suggested indexes:
* Detects `SELECT *`, leading-% LIKE, `NOT IN` with NULLs, functions on indexed columns, missing LIMIT with ORDER BY, 3+ JOINs, huge IN lists, full-table COUNT(*)
* **Suggested indexes:** extracts columns from WHERE and JOIN ON clauses and recommends them as B-tree index candidates
* Risk levels: info (blue), warn (amber), critical (red)

#### Tool 8 — 📐 ER Diagram (SVG) *(new in v7)*
Renders a scalable **SVG entity-relationship diagram**. Foreign keys (columns ending in `_id`) are auto-linked. Tables are laid out in a responsive grid. Click **Download SVG** to save a standalone vector file you can paste into docs, slides or websites.

---

### The 8 Sidebar Panels

#### 1. Schema
Define tables via plain text: `table_name(col1, col2, ...)`. QueryPilot uses column names to infer purpose (id, foreign key, numeric metric, date, status, etc.). See [SCHEMA_GUIDE.md](SCHEMA_GUIDE.md). Buttons: **Save Locally**, **Load Saved**, **Export JSON**, **Import (.json or .sql)** *(new)*, **Copy Shareable URL** *(new)*, **Clear**. Dropdown selects the SQL dialect (8 options).

#### 2. CSV → Auto Schema
Drag a CSV file onto the drop zone. QueryPilot extracts column names from the header row, samples 20 rows for type inference (number / date / text), and appends the detected schema line.

#### 3. Templates
**27 pre-built query templates** in 5 categories (Sales, Inventory, HR, Finance, General). Search box, **star to favorite** *(new)* — favorites sort to top.

#### 4. Your Templates *(new in v7)*
Save your own queries as reusable templates. Type a name and the plain-English query, then click Add. Click any saved template to run it. Stored in browser `localStorage`.

#### 5. Snippets *(new in v7)*
Reusable SQL fragments (common WHERE clauses, CTE skeletons, JOIN patterns). Add a name + SQL body; later **Copy** or **Send to Chat**.

#### 6. Saved Queries
All starred results from chat mode. Search by title or tag (tags coloured per-name deterministically). Buttons: **Export All**, **Print PDF**.

#### 7. History
The last 30 queries with timestamps. Search, click to scroll to the card. **New in v7**: export to `.sql`, export to `.json`, clear all.

#### 8. Cheatsheet
Quick reference for Basic Queries, Filtering, Sorting & Pagination, Aggregates, Grouping, JOINs and Advanced patterns (CTEs, subqueries, CASE WHEN, window functions, COALESCE, UNION).

---

### Themes, Settings & PWA

#### 4 Themes *(Solarized is new in v7)*
Cycle with the moon button or `Ctrl+Shift+T`:
1. **Dark** (default) — GitHub-like dark palette
2. **Light** — bright, high-contrast paper
3. **High Contrast** — black/white with bright accents, meets WCAG AAA contrast
4. **Solarized** — the popular blue/teal palette

Theme choice is persisted to localStorage.

#### Settings Modal *(new in v7)*
Open with `Ctrl+,` or the ⚙️ button:
* **Font size** — Small / Medium / Large / Extra Large
* **Default dialect** — loads with this dialect selected
* **Auto-format SQL on send** — tidy whitespace automatically
* **Auto-save to History** — toggle history capture
* **Show mock preview** — toggle sample output table
* **Show performance hints** — inline hints under generated SQL
* **Word-wrap by default** — toggle pre-wrap on cards
* **Reset to defaults** — clears localStorage settings

#### Progressive Web App *(new in v7)*
* **Install** — In Chrome/Edge: address-bar install icon, or "Install QueryPilot" banner appears. On iOS Safari: Share → Add to Home Screen.
* **Offline** — A service worker (`sw.js`) caches `index.html`, `assets/styles.css`, `assets/app.js` and `manifest.json` on first load. After that, QueryPilot works without internet — even if you previously installed it as an app.
* **Standalone** — When installed, QueryPilot launches in its own window without browser chrome.

---

### Search, Shortcuts & Accessibility

#### Result Search
`Ctrl+F` or the 🔍 button opens an in-app search bar that highlights matching text **across all generated SQL cards** in the session. A counter shows how many matches were found.

#### Shortcuts Overlay *(new in v7)*
Press `?` (or click the ⌨ button) to open a quick-reference shortcuts overlay.

#### Accessibility *(improved in v7)*
* Skip-link for keyboard users (visible on focus)
* `aria-label` / `role="tab"` / `role="tabpanel"` on all controls
* Visible focus rings (`outline: 2px solid var(--ac)`)
* Respects `prefers-reduced-motion`
* High Contrast theme for low-vision users

---

### Storage, Sharing & Privacy

All data stays in your browser. Nothing is sent anywhere. We use `localStorage` for:

| Key | What it stores |
|---|---|
| `qp_schema` | Your saved schema text |
| `qp_settings` | Your settings (font, dialect, toggles) |
| `qp_theme` | Theme index (0–3) |
| `qp_fs` | Font size |
| `qp_udt` | Your saved templates |
| `qp_snips` | Your snippets |
| `qp_tpl_fav` | Starred built-in templates |

The Service Worker uses a single cache named `querypilot-v7.0.0`.

**Share by URL** *(new in v7)* — click the button in the Schema panel to copy a URL like `https://your-host/#qp=eyJ...` which encodes your schema + dialect. Anyone opening that URL will see your schema loaded automatically. No server roundtrip, no tracking.

---

## Natural-Language Patterns (45+)

QueryPilot recognises these query patterns (case-insensitive):

| Pattern | Example input | Generated SQL idea |
|---|---|---|
| Date — 7/14/30/60/90 days | "orders last 7 days" | `WHERE date >= CURRENT_DATE - INTERVAL '7 days'` |
| Date — this/last month/year/quarter | "sales this month" | `WHERE MONTH(date) = MONTH(CURRENT_DATE)` |
| Status filters | "active customers", "unpaid invoices", "overdue invoices" | `WHERE status = 'active'` etc. |
| Aggregates | "count orders by status", "average salary by department" | `SELECT ..., COUNT(*) GROUP BY ...` |
| Top N | "top 10 customers by revenue" | `ORDER BY ... DESC LIMIT 10` |
| Duplicates | "find duplicate emails" | `GROUP BY email HAVING COUNT(*) > 1` |
| NULL check | "customers with missing email" | `WHERE email IS NULL` |
| LIKE | "name contains Smith" | `WHERE name LIKE '%Smith%'` |
| BETWEEN | "orders between 100 and 500" | `WHERE total BETWEEN 100 AND 500` |
| Ranking | "rank employees by salary" | `RANK() OVER (ORDER BY salary DESC)` |
| Percentage | "percentage of revenue by category" | subquery with `ROUND(100.0 * SUM / ...)` |
| CTE | "CTE total sales by department" | `WITH ... AS (...) SELECT ...` |
| DML | "delete inactive customers", "insert new product", "update salary" | `DELETE / INSERT / UPDATE` |
| **Year-over-year** *(v7)* | "year over year revenue growth" | `LAG(SUM(...)) OVER (ORDER BY year)` |
| **Rolling average** *(v7)* | "rolling 7 day average of orders" | `AVG(...) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)` |
| **Pivot** *(v7)* | "pivot revenue by month" | `SUM(CASE WHEN ... THEN ... ELSE 0 END)` |
| **Cohort** *(v7)* | "cohort analysis" | CTE + `DATE_TRUNC('month', ...)` |
| **Median** *(v7)* | "median salary" | `PERCENTILE_CONT(0.5) WITHIN GROUP (...)` |
| **Latest-per-group** *(v7)* | "latest order per customer" | `ROW_NUMBER() ... WHERE rn = 1` |
| **Running total** *(v7)* | "running total of revenue" | `SUM(...) OVER (ORDER BY date)` |
| **Top-N per group** *(v7)* | "top 3 products per category" | `RANK() OVER (PARTITION BY ...)` |
| **Min/Max date** *(v7)* | "earliest order date" | `MIN(created_at)` |
| **Stddev/Variance** *(v7)* | "standard deviation of salary" | `STDDEV(salary)` |
| **Distinct count** *(v7)* | "how many unique customers" | `COUNT(DISTINCT customer_id)` |

---

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Enter` | Send query (in chat) |
| `Shift + Enter` | New line in input |
| `Esc` | Clear input / close modal |
| `Ctrl + F` | Toggle search bar |
| `?` | Open shortcuts overlay *(v7)* |
| `Ctrl + ,` | Open settings *(v7)* |
| `Ctrl + B` | Toggle sidebar *(v7)* |
| `Ctrl + Shift + T` | Cycle theme *(v7)* |
| `Ctrl + S` | Save schema *(v7, outside input)* |
| `Ctrl + E` | Export all saved queries *(v7, outside input)* |

---

## Technology Stack

| Component | Technology | Why |
|---|---|---|
| Markup | Semantic HTML5 | A11y, no framework |
| Styling | Pure CSS + CSS custom properties | 4 themes without a CSS framework |
| Logic | Vanilla JavaScript (ES5-compatible) | No build step, works in old browsers too |
| Fonts | Google Fonts (JetBrains Mono, Sora) | Only external dependency; cached by SW |
| Storage | `localStorage` | Persistence, no server |
| Offline | Service Worker + Web App Manifest | True PWA |
| NL Engine | Custom rule-based regex engine | 100 % offline, $0 cost |
| Highlighting | Custom regex tokeniser | No library needed |
| Export | `Blob` + `URL.createObjectURL` | Native browser download |
| Print | `window.open` + `window.print()` | Native PDF via "Save as PDF" |
| File Detection | `FileReader` API | CSV + SQL/JSON schema import |
| ER Diagram | Inline SVG | Scalable, exportable |

**No frameworks. No npm. No build tools. No API keys. No server. No telemetry.**

---

## File Structure

```
querypilot/
├── index.html                  ← App shell (semantic HTML, ~66 KB)
├── manifest.json               ← PWA manifest
├── sw.js                       ← Service worker (offline cache, v9.0.0)
├── assets/
│   ├── styles.css              ← v6/v7 styles
│   ├── enterprise.css          ← v8 enterprise styles
│   ├── learn.css               ← v9 Learning Hub styles
│   ├── app.js                  ← v6/v7 core logic
│   ├── enterprise.js           ← v8 enterprise module (25 features)
│   ├── curriculum.js           ← v9 lessons M1-M3 (45 lessons)
│   ├── curriculum_part2.js     ← v9 lessons M4-M5 (28 lessons)
│   ├── curriculum_part3.js     ← v9 lessons M6-M7 (22 lessons)
│   ├── curriculum_part4.js     ← v9 lessons M8 + Capstone (23 lessons)
│   └── learn.js                ← v9 Learning Hub UI engine
├── screenshots/                ← Add your screenshots here
├── .nojekyll                   ← For GitHub Pages
├── .github/
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md
│       └── feature_request.md
├── README.md                   ← This file
├── AUTHOR.md                   ← About Adewale Samson Adeagbo (the builder)
├── DEPLOYMENT.md               ← Step-by-step deployment guide (incl. enterprise)
├── ENTERPRISE.md               ← Full reference for v8 enterprise features
├── LEARNING_HUB.md             ← Full reference for v9 curriculum (118 lessons)
├── SCHEMA_GUIDE.md             ← Schema authoring tips
├── CHANGELOG.md                ← Version history
├── CONTRIBUTING.md             ← How to contribute
├── SECURITY.md                 ← Security policy
├── WHATS_NEW_V7.md             ← v7 release summary
├── WHATS_NEW_V8.md             ← v8 release summary
├── WHATS_NEW_V9.md             ← v9 release summary
└── LICENSE.txt                 ← MIT
```

**Total project size:** ~1.1 MB (still tiny for what it delivers — 25 enterprise features + 118-lesson curriculum + 8 modes + 8 tools + 4 themes + PWA, in vanilla HTML/CSS/JS).

---

## Quick Start

**Option 1 — Open locally (zero setup):**
```
1. Download all files (keep the folder structure)
2. Open index.html in Chrome, Firefox, Edge or Safari
3. Done. PWA features need a server (see Option 2/3).
```

**Option 2 — GitHub Pages (free permanent URL):**
```
1. Push the querypilot/ folder to a GitHub repo
2. Settings → Pages → Deploy from branch (main / root)
3. Visit https://YOUR-USERNAME.github.io/REPO-NAME
4. Click the install icon in the address bar (Chrome/Edge)
```

**Option 3 — Netlify Drop (60 seconds):**
```
1. Go to https://app.netlify.com/drop
2. Drag the querypilot/ folder onto the page
3. Get a live URL instantly
```

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for the complete step-by-step deployment guide for **GitHub Pages, Netlify, Vercel, Cloudflare Pages**, plus PWA install instructions and custom domains.

---

## Deployment

See **[DEPLOYMENT.md](DEPLOYMENT.md)** — the dedicated, exhaustive deployment manual.

It covers:

* Pre-deployment checklist
* **GitHub Pages** (step-by-step, beginner-friendly)
* **Netlify** (drop method **and** Git-connected method)
* **Vercel**
* **Cloudflare Pages**
* **Local file** usage (Windows, macOS, Android/iOS)
* **PWA install** instructions per platform
* **Custom domain** setup with HTTPS
* **Updating** your deployment
* **Troubleshooting** (cache, 404, MIME, SW)
* Post-deployment checklist

---

## Roadmap

**Already shipped in v8-v9:**

- [x] Multi-tab workspaces ← shipped in v8
- [x] Audit log, RBAC, governance ← shipped in v8
- [x] PII detector, encrypted vault ← shipped in v8
- [x] Compliance reports ← shipped in v8
- [x] Complete Data Science curriculum (118 lessons) ← shipped in v9

**Future ideas (issues / PRs welcome):**

- [ ] Deep Learning module (PyTorch fundamentals) for the Learning Hub
- [ ] NLP module (Hugging Face, transformers, fine-tuning)
- [ ] MLOps module (production pipelines, monitoring)
- [ ] In-browser SQLite (via `sql.js`) to actually run SQL on uploaded CSVs
- [ ] Multi-language UI (i18n) — Yoruba, Igbo, Hausa, Pidgin, French
- [ ] Drag-and-drop ER diagram editor (write back to schema)
- [ ] Snippet categories and search
- [ ] Diff-tool: side-by-side mode
- [ ] Voice-to-SQL (Web Speech API, no server)
- [ ] Native Android wrapper (Capacitor)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Short version:

1. Fork the repo
2. Branch: `git checkout -b feature/your-feature`
3. Edit `index.html`, `assets/app.js`, `assets/styles.css`
4. Test in Chrome, Firefox and one mobile browser
5. Bump the `CACHE` constant in `sw.js` if you change the shell
6. PR with a clear description

---

## Security

See [SECURITY.md](SECURITY.md) for the responsible-disclosure policy and the data-handling guarantees (spoiler: nothing leaves your browser).

---

## License

MIT — see [LICENSE.txt](LICENSE.txt). You are free to use, modify, distribute and sell, including commercially, provided the copyright notice is retained.

---

## About the Builder

QueryPilot was designed and built by **Adewale Samson Adeagbo** — a Nigerian secondary-school teacher of 15+ years who became a data scientist, and a data scientist who never stopped teaching. He is the founder of **[HMG Concepts](https://hmgconcepts.pages.dev)** (Est. 2015), runs the EdTech arm **HMG Technologies**, and ships every project on an Android tablet using Acode editor, on zero budget.

He calls his working method **AI-Augmented Solutions Development** — combining 15+ years of classroom problem-solving instinct with modern AI tools to deliver production-quality solutions in unfamiliar fields. QueryPilot, like his other live projects (**CBT Pro**, **TruthLens Fake-News Detector**, **Student At-Risk Predictor**, **NeuroWell Burnout Predictor** and 8 more deployed ML/EdTech apps), uses **no paid AI API at runtime** — it ships as a tool that the next teacher, student or analyst can use forever, offline, without ever paying for a subscription.

> *"I did not wait to become a developer. I used clear thinking and AI leverage to build the tools my students needed. That working method is the real skill — not any specific technology."*

📍 **Lagos, Nigeria** · 💬 **WhatsApp:** [+234 810 086 6322](https://wa.me/2348100866322) · ✉️ **Tech / Partnerships:** [buildingmyictcareer@gmail.com](mailto:buildingmyictcareer@gmail.com)

🌐 [Portfolio: cssadewale.pages.dev](https://cssadewale.pages.dev) · 🏛️ [HMG Concepts: hmgconcepts.pages.dev](https://hmgconcepts.pages.dev) · 💻 [GitHub: @cssadewale](https://github.com/cssadewale) · 💼 [LinkedIn](https://linkedin.com/in/adewalesamsonadeagbo) · 📺 [YouTube: @hmgconcepts](https://youtube.com/@hmgconcepts) · 🐦 [X: @cssadewale](https://x.com/cssadewale) · 📸 [Instagram: @cssadewale](https://instagram.com/cssadewale)

**Read the full story:** [AUTHOR.md](AUTHOR.md)

**Currently:**
- 🌺 Enrolled in **DSN × 3MTT × Google.org DeepTech_Ready (DSML Track, Cohort 3)**, **WorldQuant University Applied Data Science Lab**, and **Kodecamp Cohort 6 ML Track** — *simultaneously*
- 🌺 **IBM SkillsBuild Hub Ambassador — Cohort 4** (Apr–Jun 2026)
- 🏫 Still teaching every week at a Nigerian secondary school

**Open to:** Data science / ML / data analyst roles · EdTech collaborations · School & NGO partnerships · Serious STEM tutoring (Maths, Further Maths, Physics, Chemistry).

---

## Acknowledgements

- Font: [JetBrains Mono](https://www.jetbrains.com/lp/mono/) — JetBrains
- Font: [Sora](https://fonts.google.com/specimen/Sora) — Google Fonts
- Built for the Nigerian learner first — and every learner everywhere benefits
- Built deliberately. Shipped on a tablet. Released under MIT. **Use it. Improve it. Pass it on.**

### Also from the same builder

| Project | What it is |
|---|---|
| 🎓 [HMG Academy](https://hmgconcepts.pages.dev) | 100 % virtual school — Primary, Secondary, WAEC/NECO/JAMB prep |
| 💻 [HMG Technologies](https://hmgconcepts.pages.dev) | EdTech & data solutions — CBT systems, ML tools, dashboards |
| 📢 [HMG Media — YouTube](https://youtube.com/@hmgconcepts) | Free project walkthroughs, EdTech builds in public, exam prep |
| 🧪 [CBT Pro](https://cssadewale.github.io/cbt-system/teacher.html) | Full Computer-Based Testing platform — live with real students |
| 📊 [Personal Portfolio](https://cssadewale.pages.dev) | 12 deployed ML/EdTech projects across 7 industries |

---

> **QueryPilot v9** — Free SQL assistant + Enterprise console + Data Science learning hub. Installable. Offline. 118 lessons. Costs nothing.
>
> *Built deliberately by Adewale Samson Adeagbo · HMG Concepts · Lagos, Nigeria · MIT-licensed.*
