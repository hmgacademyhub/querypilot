# 🏢 What's New in QueryPilot v8 Enterprise — Quick Summary

> *A one-page summary you can paste into release notes, team announcements or RFPs.*

> 📢 **Note from the future:** This is the v8 release summary. Since v8, QueryPilot has shipped:
> - **v9** — 118-lesson Data Science Learning Hub (see [WHATS_NEW_V9.md](WHATS_NEW_V9.md) and [LEARNING_HUB.md](LEARNING_HUB.md))
> Every v8 enterprise feature listed below is still present in v9.

> *Project maintained by **[Adewale Samson Adeagbo](AUTHOR.md)** — Founder of [HMG Concepts](https://hmgconcepts.pages.dev), Lagos, Nigeria. Built on an Android tablet using Acode editor, zero budget. Contact: WhatsApp [+234 810 086 6322](https://wa.me/2348100866322) · [buildingmyictcareer@gmail.com](mailto:buildingmyictcareer@gmail.com)*

---

## ⚡ Headline

QueryPilot v8 Enterprise turns the popular free SQL assistant into a **team- and audit-ready platform** with **25 enterprise features** — while preserving every v6/v7 capability and remaining **100% free, 100% offline, 0 AI API calls, 0 backend, 0 dependencies**.

---

## 🆕 The 25 Enterprise Features

### Identity & Access
1. **Multi-Workspace Manager** — isolated environments per project / client / stage
2. **Role-Based Access Control** — Viewer 👁️ / Analyst 📊 / DBA 🛠️ / Admin 👑
3. **Profile / Role Switcher** (unified with RBAC)

### Governance & Compliance
4. **SQL Governance Rules Engine** — block DROP/TRUNCATE/DELETE-without-WHERE; allow/deny lists
5. **PII / Sensitive Data Detector** — 15+ patterns including Nigerian NIN/BVN
6. **Query Approval Workflow** — four-eyes review with notes
7. **Audit Log** — immutable, 5,000-event, JSON/CSV export
8. **Compliance Report Generator** — NDPR/GDPR/ISO Markdown attestation

### Data Quality & Productivity
9. **SQL Linter** — 50+ free sqlfluff-lite rules (style, correctness, security, performance)
10. **Migration Generator** — diff two schemas → runnable ALTER TABLE script
11. **Test Data Generator** — Nigerian-context Faker INSERTs
12. **Query Cost Estimator** — rows/bytes scanned + duration heuristic
13. **Query Versioning** — 50 snapshots per saved query with diff

### Collaboration & Documentation
14. **Team Comments on Queries** — threaded, role-signed
15. **Glossary / Data Dictionary** — per-workspace business definitions
16. **Print Documentation Pack** — printable Data Dictionary + Query Catalogue
17. **Data Lineage Viewer** — SVG graph of query→table dependencies
18. **Webhook / Email Bridge** — compose Zapier/Make/Slack-compatible URLs

### Operations
19. **Scheduled Reminders** — browser Notifications, no server, no cron
20. **Backup & Restore** — one-click JSON of entire environment
21. **Encrypted Local Vault** — AES-256-GCM + PBKDF2 via Web Crypto API
22. **Multi-Tab Workspace Sync** — automatic BroadcastChannel
23. **Usage Dashboard** — local-only telemetry
24. **Health Check Dashboard** — self-test of browser feature dependencies
25. **Onboarding Tour** — 8-step interactive tour on first load

---

## 🔁 What didn't change

- All v6 features (8 modes, 6 tools, 17 lessons, 27 templates, 3 themes, NL→SQL engine)
- All v7 features (PWA, 4th theme, Multi-JOIN, 2 extra tools, 2 extra sidebar panels, 10+ extra NL patterns, settings, share-by-URL, schema import, history export, builder attribution)
- MIT license
- Zero AI API. Zero backend. Zero cost.

**Pure additions.**

---

## 📦 What changed structurally

```
querypilot/
├── index.html                  (now ~64 KB, was 62 KB — adds Enterprise tab + WS sidebar + chips)
├── manifest.json
├── sw.js                       (cache → v8.0.0)
├── assets/
│   ├── styles.css              (unchanged)
│   ├── enterprise.css          (NEW — 16 KB)
│   ├── app.js                  (unchanged)
│   └── enterprise.js           (NEW — 131 KB)
├── ENTERPRISE.md               (NEW — complete feature reference)
└── … (all v7 docs preserved)
```

Total ~500 KB. Still tiny.

---

## 🚀 Upgrade in 2 minutes

1. Drop the new `querypilot/` folder over your existing deployment.
2. The `CACHE` constant in `sw.js` is already bumped to `querypilot-v8.0.0` — users get the update on next reload.
3. Re-deploy (GitHub Pages auto-deploys; Netlify/Vercel/Cloudflare auto-deploy on push; Netlify Drop = drag the folder).

**No data migration needed.** v6/v7 localStorage keys (`qp_*`) and v8 keys (`qpe_*`) coexist.

---

## 📚 Where to learn more

- **[ENTERPRISE.md](ENTERPRISE.md)** — complete feature-by-feature reference (recommended)
- **[README.md](README.md)** — top-level overview
- **[DEPLOYMENT.md](DEPLOYMENT.md)** — includes Enterprise deployment topology section
- **[AUTHOR.md](AUTHOR.md)** — about the builder
- **[CHANGELOG.md](CHANGELOG.md)** — every version, every change

---

> *QueryPilot v8 Enterprise — built deliberately by Adewale Samson Adeagbo, Lagos, Nigeria. Released under MIT. Use it. Improve it. Pass it on.*
