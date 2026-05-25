# 🎓 What's New in QueryPilot v9 — Learning Hub Edition

> *A one-page summary you can paste into release notes, school announcements, or RFPs.*

> *Project maintained by **[Adewale Samson Adeagbo](AUTHOR.md)** — Founder of [HMG Concepts](https://hmgconcepts.pages.dev), Lagos, Nigeria. Built on an Android tablet using Acode editor, zero budget. Contact: WhatsApp [+234 810 086 6322](https://wa.me/2348100866322) · [buildingmyictcareer@gmail.com](mailto:buildingmyictcareer@gmail.com)*

---

## ⚡ Headline

QueryPilot v9 ships a **complete data-science learning hub** with **118 lessons across 9 modules** — designed to take an absolute beginner (including non-technical adults) from "what is data?" to deployed-ML expert in 12-24 weeks. **Everything from v6 / v7 / v8 is preserved.** Still 100% free, 100% offline, no AI API, no backend, no subscription.

---

## 🆕 The 9 Modules

| # | Module | Icon | Lessons | Difficulty | Weeks |
|---|---|---|---|---|---|
| **M1** | What is Data Science? | 🌱 | 8 | Beginner | 1 |
| **M2** | Data Literacy & Spreadsheets | 📊 | 12 | Beginner | 2 |
| **M3** | SQL for Data Analysis | 🔍 | 25 | Beginner → Intermediate | 3 |
| **M4** | Statistics — The Honest Version | 📈 | 14 | Intermediate | 3 |
| **M5** | Python for Data Science | 🐍 | 14 | Intermediate | 3 |
| **M6** | Data Wrangling with Pandas | 🐼 | 12 | Intermediate | 3 |
| **M7** | Visualization & Storytelling | 📉 | 10 | Intermediate | 2 |
| **M8** | Machine Learning Foundations | 🤖 | 18 | Intermediate → Advanced | 5 |
| **CAP** | Capstone — Build & Deploy | 🏆 | 5 | Capstone | 2 |
| | **TOTAL** | | **118** | | **24 weeks** |

---

## 🎯 Designed for absolute beginners

✅ Module 1 starts with *"What is data?"* — no prerequisites.
✅ Nigerian-context examples throughout (jollof prices, JAMB scores, BVN, NIN, market sales).
✅ Plain English first, jargon second. Every term defined in a glossary.
✅ Spiral curriculum — concepts revisited at increasing depth.
✅ One idea per lesson, 7-15 minutes each.
✅ Active learning — every lesson has quiz, exercise, project, or "Try in QueryPilot" button.
✅ Honest disclosure of limits, biases, ethics.

---

## 🆕 Hub UI features

- **🎓 Hub** mode tab in main navigation
- **🎓 N% chip** in topbar showing real-time progress
- Module grid home with progress bars
- Module detail pages with full lesson lists
- Rich lesson pages: Learn / Example / Try / Exercise / Quiz / Glossary / Takeaway
- Lesson-type badges (Concept / Exercise / Quiz / Project)
- Previous / Next navigation
- Mark-as-done toggle
- Cross-curriculum search
- Local-storage progress tracking
- **Printable completion certificate** at 80% completion (with LinkedIn share button)

---

## 📦 What changed structurally

```
querypilot/
├── index.html                       (66 KB — adds Hub tab, hub chip, hubpanel)
├── manifest.json
├── sw.js                            (cache → v9.0.0)
├── assets/
│   ├── styles.css                   (unchanged)
│   ├── enterprise.css               (unchanged)
│   ├── learn.css                    NEW (14 KB)
│   ├── app.js                       (unchanged)
│   ├── enterprise.js                (unchanged)
│   ├── curriculum.js                NEW (130 KB — M1-M3)
│   ├── curriculum_part2.js          NEW (87 KB — M4-M5)
│   ├── curriculum_part3.js          NEW (72 KB — M6-M7)
│   ├── curriculum_part4.js          NEW (84 KB — M8 + Capstone)
│   └── learn.js                     NEW (23 KB — UI engine)
├── LEARNING_HUB.md                  NEW — complete curriculum reference
└── ... (all v6-v8 docs preserved)
```

Total project: ~870 KB. Still tiny for what it delivers.

---

## 🔁 What didn't change

- ALL v6 features (8 modes, 6 tools, 17 SQL lessons, 27 templates, 3 themes)
- ALL v7 features (PWA, 4th theme, Multi-JOIN, Performance Tips, ER SVG, 45+ NL patterns)
- ALL v7.1 features (builder attribution, About modal)
- ALL v8 features (25 enterprise features — workspaces, RBAC, governance, audit, PII, etc.)
- MIT license
- Zero AI API, zero backend, zero cost

**Pure additions.**

---

## 🚀 Upgrade in 2 minutes

1. Drop the new `querypilot/` folder over your existing deployment.
2. The `CACHE` constant in `sw.js` is already bumped to `querypilot-v9.0.0` — users get the update on next reload.
3. Re-deploy (GitHub Pages auto-deploys; Netlify/Vercel/Cloudflare auto-deploy on push; Netlify Drop = drag the folder).

**No data migration needed.** Hub progress (`qp_hub_progress`) is independent of all existing storage.

---

## 📚 Where to learn more

- **[LEARNING_HUB.md](LEARNING_HUB.md)** — complete 13-section curriculum reference (pedagogical principles, module breakdowns, study plans, lesson types, certificate, instructor guide)
- **[README.md](README.md)** — top-level overview
- **[ENTERPRISE.md](ENTERPRISE.md)** — v8 enterprise features reference
- **[DEPLOYMENT.md](DEPLOYMENT.md)** — deployment instructions
- **[AUTHOR.md](AUTHOR.md)** — about the builder
- **[CHANGELOG.md](CHANGELOG.md)** — full version history

---

## 🎓 For schools, instructors, NGOs

This curriculum is MIT-licensed and free for educational use. Bring Adewale in for:

- Live instructor-led delivery of the curriculum
- Guest lectures on data science, EdTech, AI-augmented development
- School-wide CBT Pro + Learning Hub deployments
- Bootcamp curriculum customisation
- Speaking engagements on Nigerian data ecosystem

📞 **Contact:** WhatsApp [+234 810 086 6322](https://wa.me/2348100866322) · [buildingmyictcareer@gmail.com](mailto:buildingmyictcareer@gmail.com) · [hismarvellousgrace@gmail.com](mailto:hismarvellousgrace@gmail.com)

---

> *QueryPilot v9 Learning Hub — built deliberately by Adewale Samson Adeagbo, Lagos, Nigeria. Released under MIT. Use it. Improve it. Pass it on.*
