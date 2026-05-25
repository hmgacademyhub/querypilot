# Contributing to QueryPilot

> *Project maintained by **[Adewale Samson Adeagbo](AUTHOR.md)** — Founder of [HMG Concepts](https://hmgconcepts.pages.dev), Lagos, Nigeria. Built on an Android tablet using Acode editor, zero budget. Contact: WhatsApp [+234 810 086 6322](https://wa.me/2348100866322) · [buildingmyictcareer@gmail.com](mailto:buildingmyictcareer@gmail.com)*

---

First — thank you for considering contributing! QueryPilot is open-source, MIT-licensed, and welcomes pull requests of all sizes: bug fixes, new NL patterns, new lessons, accessibility improvements, translations, documentation tweaks.

This guide covers everything you need.

---

## Table of Contents

1. [Project Principles (read first)](#project-principles-read-first)
2. [Quick Start for Contributors](#quick-start-for-contributors)
3. [Project Layout](#project-layout)
4. [Coding Conventions](#coding-conventions)
5. [Adding a New NL Pattern](#adding-a-new-nl-pattern)
6. [Adding a New Lesson](#adding-a-new-lesson)
7. [Adding a New Template](#adding-a-new-template)
8. [Adding a New SQL Tool](#adding-a-new-sql-tool)
9. [Adding a New Sidebar Panel](#adding-a-new-sidebar-panel)
10. [Adding a New Theme](#adding-a-new-theme)
11. [Testing Checklist](#testing-checklist)
12. [PR Process](#pr-process)
13. [Reporting Bugs](#reporting-bugs)

---

## Project Principles (read first)

These are **non-negotiable**. Any PR that breaks them will be politely rejected.

1. **100 % free, no API.** Zero recurring cost for the user. No third-party API calls (Google Fonts is the only exception — and even those are SW-cached after first load).
2. **100 % offline.** After first load the app must function with no network.
3. **No build step.** Plain HTML/CSS/JS. No npm, no bundlers, no transpilers, no TypeScript build.
4. **ES5-compatible JS.** No arrow functions, `const`/`let`, template literals (except in trivial cases that don't run on old browsers), spread, async/await. Use `var`, `function`, string concatenation. This guarantees compatibility back to ~IE11 / older Android browsers used in low-bandwidth markets.
5. **Privacy first.** Nothing is sent anywhere. `localStorage` only. No telemetry, no analytics.
6. **Don't remove features.** Enhance, don't subtract.

---

## Quick Start for Contributors

```bash
# 1. Fork on GitHub, then clone
git clone https://github.com/YOUR-USERNAME/querypilot.git
cd querypilot

# 2. Open index.html in your browser
# macOS:    open index.html
# Linux:    xdg-open index.html
# Windows:  start index.html

# 3. For PWA testing, serve over http:
python3 -m http.server 8080
# Visit http://localhost:8080

# 4. Make your change, reload the browser, test
# 5. Commit, push, PR
```

No installation. No dependencies. No build. Just open and edit.

---

## Project Layout

```
querypilot/
├── index.html                  # HTML shell (semantic, accessible)
├── manifest.json               # PWA manifest
├── sw.js                       # Service worker (offline cache)
├── assets/
│   ├── styles.css              # v6/v7 styles + 4 themes
│   ├── enterprise.css          # v8 enterprise styles
│   ├── learn.css               # v9 Learning Hub styles
│   ├── app.js                  # v6/v7 core (NL engine, builders, tools)
│   ├── enterprise.js           # v8 enterprise (workspaces, RBAC, audit, ...)
│   ├── curriculum.js           # v9 lessons M1-M3 (45 lessons)
│   ├── curriculum_part2.js     # v9 lessons M4-M5 (28 lessons)
│   ├── curriculum_part3.js     # v9 lessons M6-M7 (22 lessons)
│   ├── curriculum_part4.js     # v9 lessons M8 + Capstone (23 lessons)
│   └── learn.js                # v9 Learning Hub UI engine
└── docs (.md files)
```

### Where each version lives in code

| File | What's inside |
|---|---|
| `assets/app.js` (lines 1-540) | v6 core: utilities, schema parser, NL engine, validator, mock data, chat, builders, tools, learn, export |
| `assets/app.js` (lines 545-1300) | v7 extensions: setMode/spanel patches, Solarized theme, settings, UDT, snippets, Multi-JOIN, share, schema import, history export, perf tips, ER SVG, validator extras, About-modal hooks |
| `assets/enterprise.js` (entire file) | v8 enterprise: 25 features under `window.QPE` namespace. Sections numbered with `/* ---------- N. Title ---------- */` banners |
| `assets/curriculum*.js` (4 files) | v9 lesson data only — appends to `window.CURRICULUM` array. Module objects with lesson arrays |
| `assets/learn.js` | v9 UI engine under `window.HUB` namespace: renderHome, openModule, openLesson, quiz, certificate |

Use comment banners (`/* ---------- N. Title ---------- */`) to find your section. Search for `window.QPE` (v8) or `window.HUB` (v9) to find their public APIs.

---

## Coding Conventions

### JavaScript
- ES5 only. `var`, `function`, no arrow functions.
- Attach public functions to `window.fnName = ...` for inline `onclick` handlers.
- One-liners are fine in the existing dense style. New modules can be readable multi-line.
- Use existing helpers: `esc(s)`, `ts()`, `toast(msg, color)`, `flash(id)`, `dl(txt, name)`, `getSchema()`, `bestTbl(...)`, `clike(...)`, `colType(...)`, `hl(sql)`, `fmt(sql)`, `vld(sql)`, `addCard(...)`.

### CSS
- Add CSS custom properties (variables) for any new colour. Add the variable to **all four theme blocks**: `:root`, `.light`, `.hc`, `.sol`.
- Use existing utility classes (`.fsl`, `.fsl2`, `.fin`, `.ib`, `.bb`, `.bb.p`, `.ab`, `.addb`, `.tc`, `.pill`, `.scard`, `.shead`, `.snum`, `.stit`, `.sbody`, `.fr`, `.fg`, `.fl`, `.tip`).

### HTML
- Add `aria-label` to any new control.
- Use semantic landmarks (`<main>`, `<aside>`, `role="tab"`, `role="tabpanel"`).
- Inline `onclick` is OK (matches existing style); we don't use addEventListener for UI hooks except for shortcuts.

---

## Adding a New NL Pattern

NL patterns live in `assets/app.js`. The v6 core is `nlSQL(input)`. v7 wraps it.

To add a pattern, edit the v7 `nlSQL` wrapper (search `/* ---------- 12. v7 NL pattern extensions`). Add an `if` branch **before** `return origNL(input);`:

```js
// "average ticket size"
if(/average ticket size|avg ticket|mean order value/.test(q)){
  return "-- Average ticket size\n" +
         "SELECT AVG(" + numCol + ") AS avg_ticket FROM " + t + ";";
}
```

Each pattern:
- Match against `q` (lower-cased input)
- Build SQL using helpers + detected columns (`dateCol`, `numCol`, `cols`, `t`)
- Return the SQL string
- Add a sample chip on the empty state in `index.html` if it's a flagship pattern

---

## Adding a New Lesson

Edit the `LESSONS` array (search for `var LESSONS=[` in `app.js`). Each lesson:

```js
{
  tag: "tb",                                   // tb=Beginner, ti=Intermediate, ta=Advanced
  label: "Beginner",
  title: "X. Your Lesson Title",
  body: "Plain-English explanation of the concept.",
  sql: "SELECT ...\nFROM ...\nWHERE ...;",
  desc: "What the output looks like.",
  tryq: "Plain-English version that runs the example in chat"
}
```

Re-running `initLearn()` re-renders. Add it to the array and reload.

---

## Adding a New Template

Edit the `TPLS` array:

```js
{ cat:"Sales", label:"Top region by revenue", q:"top region by total revenue this year" }
```

Categories: Sales, Inventory, HR, Finance, General (or add your own — the category bar auto-rebuilds).

---

## Adding a New SQL Tool

1. Add a new `.tool-card` block inside `<div id="toolspanel">` in `index.html` (or append from `app.js` like v7's Performance Tips and ER SVG do).
2. Write your tool's logic as `window.fnName = function(){ ... }`.
3. Style with existing `.tool-title`, `.tool-desc`, `.exp-pre`, `.exp-btns` classes.
4. Update the Help modal feature grid in `index.html` and the count in README.

---

## Adding a New Sidebar Panel

1. Add a `<button class="stab">` tab in the `.stabs` row.
2. Add `<div id="sp-yourpanel" class="sc" style="display:none">` panel.
3. Update the `spanel` patch in `app.js` (search `["schema","csv","tpl","udt","snip","bk","hist","cs"]`) to include `"yourpanel"`.
4. Implement `renderYourPanel()` and call it from `spanel` if needed.

---

## Adding a New Theme

1. In `assets/styles.css`, add a new theme block:
   ```css
   .my-theme {
     --bg:#xxx;--sf:#xxx;--sf2:#xxx;--bd:#xxx;
     --ac:#xxx;--acd:#xxxxxxxxx;--tx:#xxx;--mu:#xxx;
     --kw:#xxx;--str:#xxx;--nm:#xxx;--er:#xxx;--wn:#xxx;--info:#xxx;
   }
   ```
2. In `app.js` (section 2, Solarized theme block), add it to:
   - `labels` array (display name)
   - `cls` array (CSS class)
   - `icons` array (emoji)
   - Update the `% 4` modulus to `% 5`.

---

## Testing Checklist

Before opening a PR:

- [ ] Loads in **Chrome** with no console errors
- [ ] Loads in **Firefox**
- [ ] Loads in **Edge** (or another Chromium)
- [ ] Mobile layout works (DevTools → Toggle device → iPhone or Android)
- [ ] All 4 themes still look good
- [ ] Service worker still registers (DevTools → Application → Service Workers)
- [ ] Sample query in chat still generates SQL
- [ ] No external network requests added (DevTools → Network — only fonts allowed)
- [ ] If you changed shell files, **bump `CACHE` in `sw.js`**

---

## PR Process

1. Fork → branch: `git checkout -b feature/your-feature`
2. Commit with clear messages: `Add: rolling N-day median NL pattern`
3. Push: `git push origin feature/your-feature`
4. Open a PR with:
   - Short description of *what* and *why*
   - Before/after screenshot if UI-visible
   - Tested-on list (browsers + devices)
   - Cache version bump notes if applicable
5. Maintainer will review within ~1 week.

PRs that pass the principles + checklist are usually merged quickly.

---


---

## Adding a New Lesson to the Learning Hub (v9)

The curriculum lives in `assets/curriculum.js` (M1-M3), `curriculum_part2.js` (M4-M5), `curriculum_part3.js` (M6-M7), `curriculum_part4.js` (M8 + Capstone).

To add a lesson to an existing module, find that module's `lessons:[ ... ]` array and insert a new lesson object:

```js
{
  id: "m4.l15",                       // module.lesson convention
  type: "concept",                    // concept | exercise | quiz | project
  title: "15. Bayesian Thinking",
  est: "10 min",
  learn: [
    "Plain-English explanation paragraph 1.",
    "Plain-English explanation paragraph 2."
  ],
  example: "<pre>Worked example with HTML formatting.</pre>",
  tryq: "Optional — query to pre-fill in QueryPilot chat",
  quiz: {
    q: "Question text here?",
    a: [
      { t: "Wrong answer 1", c: false, why: "Why it's wrong" },
      { t: "Right answer", c: true, why: "Why it's right" },
      { t: "Wrong answer 2", c: false }
    ]
  },
  exercise: { steps: 3, tool: "Google Colab", task: "Description" },
  project: { deliverable: "...", time: "...", difficulty: "...", skills: ["..."] },
  takeaway: "One-sentence key takeaway.",
  glossary: [
    { term: "Term", def: "Plain-English definition" }
  ]
}
```

All keys except `id`, `type`, `title`, `learn` and `takeaway` are optional.

### Adding a new module

Wrap the lesson array in a module object and `push` into `window.CURRICULUM`:

```js
window.CURRICULUM.push({
  id: "m9",
  title: "Deep Learning Foundations",
  icon: "🧠",
  color: "#9333ea",
  level: "Advanced",
  weeks: 4,
  summary: "...",
  prereq: "Modules 1-8 completed.",
  lessons: [ /* ... lesson objects ... */ ]
});
```

Add the module file (`curriculum_part5.js`) and link it in `index.html` between the existing curriculum scripts and `learn.js`. Bump `CACHE` in `sw.js` so users get the new content.

---

## Adding a New Enterprise Feature (v8)

Enterprise code lives in `assets/enterprise.js` under `window.QPE`. Each feature is a numbered section with a `/* ---------- N. Title ---------- */` banner.

To add a feature:

1. Add the logic as `QPE.featureName = function(){ ... }`.
2. Add the storage key under the `qpe_` localStorage prefix (with a comment).
3. Add the UI section to `QPE.renderEnterprisePanel()` (it builds the 21-tab console).
4. Add a subtab entry to the `subtabs` array in that function.
5. Add the section's render function to the `lazy renders` switch inside `QPE.subtab`.
6. Add RBAC if needed: gate destructive actions with `if(!QPE.rbac.can("your.perm"))`.
7. Audit-log key actions: `QPE.audit.log("ACTION_NAME", "human message", { meta })`.
8. Update [ENTERPRISE.md](ENTERPRISE.md) with the feature reference.
9. Bump `CACHE` in `sw.js`.

---

## Adding a New SQL NL Pattern

Patterns live in `assets/app.js` inside `window.nlSQL` (v7 extension wraps the original v6 `nlSQL`). Find the comment banner `/* ---------- 12. v7 NL pattern extensions ---------------------------- */`.

Add a regex match + SQL builder:

```js
if(/your.regex.pattern/.test(q)){
  return "-- Description\nSELECT ...\nFROM " + t + "\n...";
}
```

The order matters — earlier rules win. Place more specific patterns before more generic ones.

## Reporting Bugs

Use the issue template at `.github/ISSUE_TEMPLATE/bug_report.md`. Include:
- Browser + version
- OS / device
- Schema you used
- Steps to reproduce
- Console output (`F12 → Console`)

---

> **Questions?** Open a discussion on the GitHub repo, or comment on an existing issue. We're a small project — every contribution is appreciated.
