# 🚀 QueryPilot v7 — Deployment Guide

> *Maintained by **[Adewale Samson Adeagbo](AUTHOR.md)** — Founder, [HMG Concepts](https://hmgconcepts.pages.dev), Lagos, Nigeria. Every method below has been personally tested on an entry-level Android tablet using Acode editor and Chrome Mobile — because that is how this project is built.*

A complete, beginner-friendly, **step-by-step** deployment manual. Every method below is **100 % free** and requires **no credit card**.

> **NEW in v7:** Because v7 ships as a small folder (not a single file) and includes a Progressive Web App (PWA), it **must** be served from a web server (or a static host) for the install and offline features to work. Opening `index.html` directly from disk still works for everything *except* PWA install/offline.

---

## 📋 Table of Contents

1. [Before You Start](#before-you-start)
2. [What You'll Deploy](#what-youll-deploy)
3. [Method 1 — GitHub Pages (Recommended)](#method-1--github-pages-recommended)
4. [Method 2 — Netlify Drop (Fastest, 60 s)](#method-2--netlify-drop-fastest-60-s)
5. [Method 3 — Netlify with Git (Best for Updates)](#method-3--netlify-with-git-best-for-updates)
6. [Method 4 — Vercel](#method-4--vercel)
7. [Method 5 — Cloudflare Pages](#method-5--cloudflare-pages)
8. [Method 6 — Local File (Offline-Only Use)](#method-6--local-file-offline-only-use)
9. [Installing as a PWA (per device)](#installing-as-a-pwa)
10. [Updating Your Deployment](#updating-your-deployment)
11. [Custom Domain Setup](#custom-domain-setup)
12. [Troubleshooting](#troubleshooting)
13. [Post-Deployment Checklist](#post-deployment-checklist)

---

## Before You Start

**You need:**

| Item | Notes |
|---|---|
| The `querypilot/` folder | Contains `index.html`, `manifest.json`, `sw.js`, `assets/styles.css`, `assets/app.js`, plus docs |
| A modern browser | Chrome ≥ 90, Edge ≥ 90, Firefox ≥ 90, Safari ≥ 15 |
| A free account on **one** of: GitHub, Netlify, Vercel, Cloudflare | Pick one method below |
| 5–15 minutes | Most methods are under 10 minutes |

**Important rules:**

1. Keep the folder **structure intact**: `assets/` must remain a subfolder, and `sw.js` + `manifest.json` must sit next to `index.html`. If they move, PWA breaks silently.
2. The entry file must be named exactly **`index.html`** (lower-case, no `.HTM`, no `.Index`). Every static host serves that file as the default page.
3. You do **not** need a build step. There is no `npm install`, no `dist/`, nothing to compile.

---

## What You'll Deploy

```
querypilot/
├── index.html               ← entry point
├── manifest.json            ← PWA manifest
├── sw.js                    ← service worker (must be at root)
├── assets/
│   ├── styles.css
│   └── app.js
├── .nojekyll                ← (GitHub Pages only — disables Jekyll)
└── (optional) screenshots/, *.md, LICENSE.txt, .github/
```

The minimum runnable set is 5 files (`index.html`, `manifest.json`, `sw.js`, `assets/styles.css`, `assets/app.js`). Everything else is documentation.

---



---

## 🏢 Enterprise-Specific Deployment Considerations (v8)

QueryPilot v8 Enterprise introduces 25 enterprise features (workspaces, RBAC, audit log, governance, PII scanner, encrypted vault, etc.). For team / enterprise deployments, follow these additional steps **after** picking any deployment method below.

### Step E1 — Choose the deployment topology

Pick the model that matches your organisation:

| Topology | Best for | How |
|---|---|---|
| **Single shared URL** | A small team where everyone trusts each other | Deploy once via any method below. Each user gets their own browser-localStorage; their workspaces / role / audit log / Hub progress are isolated. RBAC is honor-system per device. |
| **Per-user instances** | Real separation of duties | Deploy *multiple* QueryPilot copies at different URLs (e.g. `querypilot-alice.netlify.app`, `querypilot-bob.netlify.app`). Each user has their own URL. The free tier of every host below supports this trivially. |
| **Per-environment instances** | One copy per stage (dev/staging/prod) | Deploy three URLs. Each one is a separate workspace universe. Combine with per-user if needed. |
| **PWA install per user** | Mobile-first teams | Each user installs the PWA on their own device — no shared browser state. |
| **Educational deployment (v9 Hub)** | Schools, bootcamps, NGOs | Deploy one URL. Tell learners to bookmark or install as PWA. Each device tracks its own curriculum progress in localStorage. For institution-wide progress aggregation, periodic Backup→share→Restore is the workflow. |

### Step E2 — Set the default role

By default QueryPilot v8 loads with **role = Admin** so first-run users can configure everything. For team deployments where most users should be Analyst or Viewer:

1. Open `assets/enterprise.js`.
2. Find: `var current = lsGet("role", "Admin");`
3. Change `"Admin"` to `"Analyst"` (or `"Viewer"`).
4. Bump the `CACHE` constant in `sw.js` so users pick up the change.
5. Re-deploy.

Admins on each device can still switch back to Admin via the topbar chip — but the default is the safer role.

### Step E3 — Pre-configure governance rules

To ship governance rules with sensible defaults for your org:

1. Open the app once, switch to Admin, set up your governance rules in the Enterprise → Governance tab.
2. Open Enterprise → Backup → **⬇ Download Backup**.
3. Extract only the `qpe_governance` key from that JSON.
4. In `assets/enterprise.js`, find `var DEFAULT_GOV = { ... }` and update the defaults to match your downloaded values.
5. Bump `CACHE` in `sw.js`. Re-deploy.

New users now get your governance rules out of the box.

### Step E4 — Configure scheduled-reminder permissions

The Scheduled Reminders feature requires browser Notification permission. To pre-grant on a corporate fleet:

- **Chrome / Edge managed devices:** Push a policy granting `notifications` to `https://your-querypilot-url.example.com` via your MDM.
- **Individual install:** First time a user creates a schedule, Chrome prompts; the user clicks Allow.

No code change needed — this is purely a browser permission.

### Step E5 — Verify Web Crypto availability (for Vault)

The Encrypted Local Vault depends on `window.crypto.subtle`. This is **HTTPS-only** (or `localhost`). All free hosts below serve HTTPS automatically. Local-file (`file://`) opens **do not** support Web Crypto — the Vault will display "Web Crypto unavailable".

If you must support `file://`, the Vault simply degrades; everything else works.

### Step E6 — Plan for audit log rotation

The audit log is capped at **5,000 events** to bound localStorage. For long-running deployments:

1. Train Admins to weekly: Enterprise → Audit Log → **⬇ JSON** to archive to a SIEM / shared drive / encrypted backup.
2. Or hard-code a smaller cap by editing `var AUDIT_MAX = 5000;` in `enterprise.js`.

### Step E7 — Decide on backup hygiene

The Backup file is plain JSON — it contains every workspace's data. For sensitive deployments:

1. Train Admins to **always encrypt the backup file** after download (e.g. `gpg -c backup.json` or `openssl enc -aes-256-cbc -in backup.json -out backup.json.enc`).
2. Or use the in-app **Vault** to store a compressed backup as a single encrypted blob.

### Step E8 — First-run user enablement

For each new user, after their first load:

1. The onboarding tour auto-plays (8 steps).
2. They land on the Enterprise → Workspaces subtab — guide them to create their first named workspace ("My Project" / "Production" / etc.).
3. Walk them through their role assignment in Enterprise → Roles.
4. Optionally restart the tour from Enterprise → Health → **🎓 Restart Onboarding Tour**.

---

## ✅ Enterprise Post-Deployment Checklist

After deploying, walk through this list:

### Functional
- [ ] Page loads with no console errors
- [ ] Topbar shows **📁 {workspace}** and **👑 {role}** chips
- [ ] Sidebar has the **📁 WS** tab
- [ ] Top tabs include **🏢 Enterprise**
- [ ] **🏢 Enterprise** opens a 21-sub-tab console

### Workspaces (Feature 1)
- [ ] Create a new workspace; switch into it; schema textarea changes
- [ ] Multi-tab sync works (open 2 tabs, switch in one)

### RBAC (Feature 3)
- [ ] Switch to Viewer role; verify destructive buttons get 🔒 cursor
- [ ] Switch to Admin; verify everything re-enables

### Audit (Feature 2)
- [ ] Every action above produced an entry in **📜 Audit Log**
- [ ] Export to CSV downloads cleanly

### Governance (Feature 4)
- [ ] Toggle "Block DROP" off then run a `DROP TABLE x;` query (chat mode); no banner
- [ ] Toggle "Block DROP" on; same query now shows red BLOCKED banner

### PII (Feature 5)
- [ ] Run scan on default schema (`customers(id, name, email...)`) — should flag `email`

### Approvals (Feature 6)
- [ ] Switch to Analyst, submit approval
- [ ] Switch to DBA, approve/reject

### Vault (Feature 19)
- [ ] Store an encrypted value
- [ ] Reload, unlock with same passphrase — content reappears

### Backup (Feature 15)
- [ ] Download backup; rename old; restore — environment cloned

### Compliance (Feature 16)
- [ ] Preview & export compliance report — Markdown contains audit summary

### Schedules (Feature 13)
- [ ] Allow Notifications when prompted
- [ ] Add a schedule for the current minute → notification fires within ~60s

### Health (Feature 24)
- [ ] All checks ✅ or ⚠️ (no ❌)

### Learning Hub (v9)
- [ ] `🎓 Hub` tab opens the curriculum home with 9 module cards
- [ ] Click a module → see lesson list
- [ ] Click a lesson → content renders, including quiz / try-button / glossary if present
- [ ] "Mark as done" updates the topbar `🎓 N%` chip
- [ ] At 80% completion: certificate button appears and prints cleanly

---

## Method 1 — GitHub Pages (Recommended)

**Best for:** Permanent URL, version control, team sharing, free forever.
**Result:** `https://YOUR-USERNAME.github.io/querypilot`
**Time:** ~10 minutes

### Step 1 — Create a GitHub account
1. Visit https://github.com
2. Click **Sign up** (top right).
3. Enter email → password → username (this becomes part of your URL — choose carefully).
4. Verify the puzzle.
5. Verify the **6-digit code** sent to your email.
6. On the welcome screen, click **Skip personalization** at the bottom — no need to answer the survey.

### Step 2 — Create a new repository
1. Click the **➕** icon (top right) → **New repository**.
2. **Repository name:** `querypilot` (lower-case, no spaces).
3. **Description:** *(optional)* `Free offline SQL assistant — v7`.
4. **Visibility:** **Public** (required for free Pages).
5. Leave all three checkboxes (README, .gitignore, license) **unchecked** — you'll upload your own.
6. Click the green **Create repository** button.

### Step 3 — Upload the folder
1. On the empty repo page click **uploading an existing file** (or **Add file → Upload files**).
2. **Drag the entire contents** of your `querypilot/` folder onto the dotted zone — **not the folder itself**, but everything *inside* it (`index.html`, `manifest.json`, `sw.js`, `assets/` folder, the docs, `.nojekyll`).
   * On Windows/macOS: select all files in `querypilot/`, then drag.
   * On Android tablets: see the *tablet tip* below.
3. Wait for every file to show a green checkmark.
4. Scroll to **Commit changes**:
   * Message: `Initial deploy of QueryPilot v7`
   * Leave **Commit directly to main** selected.
5. Click **Commit changes**.

> 📱 **Tablet tip (Android/iOS):** browsers can't always drag folders. Use the **GitHub mobile site → Add file → Create new file** for each file and paste contents, **or** install the GitHub mobile app and use its "Add file" gesture. Easiest is to upload from a laptop.

**Verify** the file list now shows at minimum:

```
.github/              .nojekyll       README.md
DEPLOYMENT.md         assets/         index.html
manifest.json         sw.js
```

### Step 4 — Enable GitHub Pages
1. Click the **Settings** tab (gear icon, far right of the tab row).
2. Left sidebar → scroll to **Code and automation** → click **Pages**.
3. Under **Source**, change the dropdown from **None** to **Deploy from a branch**.
4. Two dropdowns appear:
   * **Branch:** `main`
   * **Folder:** `/ (root)` *(leave as-is)*
5. Click **Save**.
6. A blue banner appears: *"GitHub Pages source saved."*

### Step 5 — Wait 1–3 minutes
1. Stay on the Pages settings screen and **refresh** after 2 minutes.
2. When ready, a green box appears:
   > ✅ Your site is live at `https://YOUR-USERNAME.github.io/querypilot`
3. Click **Visit site**.

> If you see a 404 on first visit, wait another minute. First deployments sometimes take 5 minutes.

### Step 6 — Verify the deployment
On the live URL, confirm:
- [ ] The page loads with the dark theme
- [ ] Type `show all customers` and press **Enter** → SQL appears
- [ ] The sidebar opens/closes (Panel button or `Ctrl+B`)
- [ ] The theme cycles through 4 themes (moon button or `Ctrl+Shift+T`)
- [ ] **Tools** tab → "Generate ER Diagram" produces an SVG diagram
- [ ] Address bar shows a small **install icon** (Chrome/Edge desktop) — you can install it as a PWA

### Step 7 — Share
Your permanent URL: `https://YOUR-USERNAME.github.io/querypilot`

Share via WhatsApp, email, classroom slides, or generate a free QR code at https://qrcode-monkey.com.

---

## Method 2 — Netlify Drop (Fastest, 60 s)

**Best for:** Getting a live URL in under a minute without an account.
**Result:** `https://magical-panda-abc123.netlify.app`
**Time:** ~2 minutes

### Steps
1. Open https://app.netlify.com/drop in your browser. **No login required.**
2. You'll see a big grey box: *"Drag and drop your site folder here"*.
3. **Drag the entire `querypilot/` folder** (not the contents — the folder itself works fine here) onto the box.
4. Netlify uploads and provisions in ~10 seconds.
5. A green success screen appears with a URL like `https://shiny-tartufo-9b1234.netlify.app`.
6. Click the URL. QueryPilot opens.

> ⚠️ **Without an account, this expires after 24 hours.** Use Method 3 to keep it permanent.

---

## Method 3 — Netlify with Git (Best for Updates)

**Best for:** Permanent deployment, custom subdomain, auto-deploy on every commit.
**Result:** `https://querypilot.netlify.app`
**Time:** ~15 minutes (assumes Method 1 done)

### Step 1 — Netlify account
1. Visit https://app.netlify.com/signup
2. Click **Sign up with GitHub** (easiest if you've done Method 1).
3. Authorise Netlify when prompted.

### Step 2 — Connect your repo
1. From the dashboard click **Add new site → Import an existing project**.
2. Choose **Deploy with GitHub** → authorise.
3. Pick your `querypilot` repository.
4. On the **Configure** page:
   * **Branch to deploy:** `main`
   * **Build command:** *(leave empty)*
   * **Publish directory:** *(leave empty, defaults to repo root)*
5. Click **Deploy site**. First deploy takes ~30 s.

### Step 3 — Rename the subdomain
1. **Site configuration → Change site name**
2. Type `querypilot` (if available) or `your-name-querypilot`.
3. Save. New URL: `https://querypilot.netlify.app`.

### Step 4 — Auto-update is on
Every `git push` to `main` triggers an automatic redeploy in ~30 seconds. No manual action needed.

---

## Method 4 — Vercel

**Best for:** Developers who already use Vercel.
**Result:** `https://querypilot.vercel.app`
**Time:** ~10 minutes

### Steps
1. Visit https://vercel.com and **Sign up with GitHub**.
2. Click **Add New… → Project**.
3. Select your `querypilot` repo → **Import**.
4. On the "Configure Project" page:
   * **Framework Preset:** *Other*
   * **Root Directory:** `/` *(default)*
   * **Build Command:** *(leave empty)*
   * **Output Directory:** *(leave empty)*
5. Click **Deploy**.
6. After ~20 seconds, click **Visit** to open the live site.

Vercel auto-deploys on every push to `main`.

---

## Method 5 — Cloudflare Pages

**Best for:** Global CDN, free unlimited bandwidth.
**Result:** `https://querypilot.pages.dev`
**Time:** ~10 minutes

### Steps
1. Visit https://dash.cloudflare.com/sign-up — create a free account.
2. Left sidebar → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Authorise GitHub, pick `querypilot` repo.
4. On the build config screen:
   * **Project name:** `querypilot`
   * **Production branch:** `main`
   * **Framework preset:** *None*
   * **Build command:** *(leave empty)*
   * **Build output directory:** `/`
5. Click **Save and Deploy**. First build ~30 s.
6. Visit `https://querypilot.pages.dev`.

---

## Method 6 — Local File (Offline-Only Use)

**Best for:** Personal use on your own device with **no internet at all**.
**Limit:** PWA install + service worker won't function over `file://`. Everything else works.

### Windows
1. Download the `querypilot/` folder to e.g. `C:\Users\You\Documents\querypilot`.
2. Double-click `index.html`. Opens in your default browser.

### macOS
1. Download to `~/Documents/querypilot`.
2. Right-click `index.html` → **Open With → Google Chrome** (preferred).

### Android (e.g. ITEL Vista tablet)
1. Download the zip and extract using a file manager (e.g. **Files by Google**) — keep the folder structure!
2. Open the **Files** app → navigate to `querypilot/index.html`.
3. Tap → choose **Chrome**. The app opens.

### iOS / iPadOS
1. Save the folder to **Files** app (iCloud Drive or *On My iPhone*).
2. Tap `index.html`. iOS opens it in Safari.

### Want offline + PWA but no internet on your machine?
Run a tiny local web server in the folder:

```bash
# Python 3 (already installed on macOS / many Linux):
cd /path/to/querypilot
python3 -m http.server 8080
# Then open http://localhost:8080 in your browser.
```

Now the service worker registers and PWA install becomes available.

---

## Installing as a PWA

After QueryPilot is served over `http(s)://` (any of Methods 1–5, or local server in Method 6):

### Chrome / Edge (desktop, Windows / macOS / Linux / ChromeOS)
1. Open the deployed URL.
2. Look at the right end of the address bar — a small **install icon** (a monitor with a down arrow ⤓) appears.
3. Click it → **Install**.
4. QueryPilot launches in its own window with no browser UI.
5. (Optional) Right-click the desktop shortcut → **Pin to Taskbar / Dock**.

### Android (Chrome)
1. Open the URL.
2. Tap the **⋮ menu** → **Add to Home screen** *(or)* an **Install** banner appears at the bottom — tap it.
3. Confirm the name.
4. A QueryPilot icon appears on your home screen / app drawer.

### iOS / iPadOS (Safari only — Chrome on iOS can't install PWAs)
1. Open the URL in **Safari**.
2. Tap the **Share** button (square with arrow up).
3. Scroll down → **Add to Home Screen**.
4. Confirm name → **Add**.

### Verifying offline mode
1. Load the installed app once while online.
2. Turn off Wi-Fi / mobile data.
3. Re-open the app — it loads instantly from cache. Type queries, switch modes, use tools — everything works.

---

## Updating Your Deployment

### GitHub Pages
1. Edit files locally (or directly on GitHub via the pencil icon).
2. **Crucial when changing app code:** open `sw.js` and bump the `CACHE` constant, e.g. `"querypilot-v7.0.0"` → `"querypilot-v7.0.1"`. This forces users' browsers to fetch the new files instead of serving the old cached version.
3. Commit. GitHub Pages redeploys in ~2 minutes.
4. Visitors get the update on next reload.

### Netlify / Vercel / Cloudflare Pages (Git-connected)
Same: push to `main`, the host auto-deploys in ~30 s. **Bump `CACHE` in `sw.js`** for code changes.

### Netlify Drop (manual)
1. Netlify dashboard → site → **Deploys** tab.
2. Drag the updated `querypilot/` folder onto the deploy drop-zone at the bottom.
3. Deploys in ~15 s.

### Why "bump the CACHE constant" matters
The service worker pre-caches the app shell. If you change `app.js` or `styles.css` but keep the same `CACHE` name, browsers will keep serving the old cached files even after redeploy. Bumping the version triggers `install` and `activate` events that wipe the old cache.

---

## Custom Domain Setup

### GitHub Pages
1. **Repo Settings → Pages → Custom domain** → enter e.g. `querypilot.yourdomain.com`.
2. At your domain registrar (Namecheap, GoDaddy, Google Domains, Cloudflare DNS, etc.), add a **CNAME record**:
   * **Name (Host):** `querypilot`
   * **Value (Target):** `YOUR-USERNAME.github.io`
   * **TTL:** *Automatic*
3. Wait 10–30 minutes for DNS to propagate.
4. Back on the Pages settings, tick **Enforce HTTPS** once the green tick appears.

### Netlify
1. **Site → Domain management → Add custom domain** → enter your domain → **Verify**.
2. Add the CNAME record at your registrar as instructed by Netlify.
3. Netlify provisions a free Let's Encrypt SSL certificate automatically (5–10 min).

### Vercel
Same pattern: **Settings → Domains → Add → follow CNAME instructions**.

### Cloudflare Pages
**Custom domains → Set up a custom domain.** If your DNS is on Cloudflare, this is one click.

---

## Troubleshooting

### "404 on GitHub Pages"
* **Cause:** Pages not enabled, the file isn't `index.html`, or first deploy still running.
* **Fix:** Settings → Pages → confirm "Your site is live at…". Confirm file in repo is exactly `index.html`. Wait 3–5 min.

### "Fonts look generic / blocky"
* **Cause:** Google Fonts blocked or offline.
* **Fix:** This is expected behaviour. All functionality works; only the typeface degrades to system font. The service worker caches fonts on first online load.

### "Updated the code but old version still loads"
* **Cause:** Service worker served the cached files.
* **Fix:**
  1. Confirm you bumped `CACHE` in `sw.js`.
  2. Hard-reload: `Ctrl+Shift+R` (Win/Linux) or `Cmd+Shift+R` (macOS).
  3. Or: DevTools → Application → Service Workers → **Unregister** → reload.

### "PWA install button doesn't appear"
* **Cause:**
  * Site is served over `file://` (must be `http://` or `https://`).
  * Site is served over plain `http://` on a non-localhost host (HTTPS required for Service Workers, except localhost).
  * `manifest.json` or `sw.js` failed to load (check DevTools → Network).
* **Fix:** Deploy via any method 1–5 (all use HTTPS automatically). Localhost over `http://` also works for testing.

### "On Android the file won't open"
* **Cause:** No default browser set for `.html`.
* **Fix:** Long-press the file → **Open with → Chrome**.

### "GitHub Pages: 'Your site is not published'"
* **Cause:** Branch is set to *None*.
* **Fix:** Settings → Pages → Branch = `main`, Folder = `/ (root)` → Save → wait 2 min.

### "Sidebar buttons do nothing after deploy"
* **Cause:** `assets/app.js` failed to load (often because the path is wrong on a custom host with a non-root base).
* **Fix:** Open DevTools (F12) → Console — any red 404s? Confirm `assets/` folder uploaded and at the same path. On GitHub Pages, repo root is the site root, so `assets/app.js` works as-is.

### "Service worker error in console: `Failed to register`"
* **Cause:** `sw.js` not at root, wrong MIME type, or path mismatch.
* **Fix:** Ensure `sw.js` sits **next to** `index.html`, not inside `assets/`. The path in `index.html` (`sw.js`) is relative to the page.

### "Share URL is huge or doesn't load"
* **Cause:** Schema text was very long; encoded URL exceeded the destination's URL limit (~2000 chars on some shorteners).
* **Fix:** Use **Export Schema (.json)** and send the file instead.

---

## Post-Deployment Checklist

After deploying, walk through this list once:

### Functionality
- [ ] Page loads with no console errors
- [ ] Default schema is visible in sidebar
- [ ] Type *"top 10 customers by revenue"* in chat → SQL appears
- [ ] **Visual Builder** mode → select customers table → live SQL preview shows
- [ ] **JOIN Builder** → pick customers + orders → auto ON detected
- [ ] **Multi-JOIN** → base + 2 joined tables → SQL chain generates
- [ ] **Tools** → **Performance Tips** → paste a query → tips appear
- [ ] **Tools** → **ER Diagram (SVG)** → diagram renders
- [ ] **Learn** → click any lesson → "Try" button works

### UX
- [ ] Theme cycles through Dark → Light → High Contrast → Solarized
- [ ] Sidebar collapses (Panel button + `Ctrl+B`)
- [ ] Settings modal opens (⚙️ button + `Ctrl+,`)
- [ ] Shortcut overlay opens (`?`)
- [ ] On mobile: layout stacks vertically, no horizontal scroll

### PWA
- [ ] Address bar shows install icon (Chrome/Edge desktop)
- [ ] Install → app launches in its own window
- [ ] DevTools → Application → Service Workers → status = *activated and running*
- [ ] Disable network → reload → app still loads from cache

### Sharing
- [ ] **Schema → Copy Shareable URL** → paste in incognito → schema loads
- [ ] **Export → Generate DDL** → file downloads
- [ ] **Export → Print PDF** → print preview opens

### Documentation
- [ ] `https://YOUR-URL/README.md` is reachable (visible on the repo, not the site)
- [ ] URL shared with team / learners

---

> **Need help?** Open an issue at `https://github.com/YOUR-USERNAME/querypilot/issues` using one of the templates in `.github/ISSUE_TEMPLATE/`.

---

## 🙋 Need a Human?

If you're a Nigerian teacher, parent, school administrator or NGO who would like help deploying QueryPilot **or CBT Pro** in your institution — or if you'd like a custom EdTech / data build for your context — reach out directly to the builder:

| Channel | Details |
|---|---|
| 💬 **WhatsApp** | [+234 810 086 6322](https://wa.me/2348100866322) *(fastest)* |
| ✉️ **Tech / Partnerships** | [buildingmyictcareer@gmail.com](mailto:buildingmyictcareer@gmail.com) |
| ✉️ **HMG Brand** | [hismarvellousgrace@gmail.com](mailto:hismarvellousgrace@gmail.com) |
| 🏛️ **HMG Concepts** | <https://hmgconcepts.pages.dev> |
| 🌐 **Personal Portfolio** | <https://cssadewale.pages.dev> |
| 💻 **GitHub** | <https://github.com/cssadewale> |

**Adewale Samson Adeagbo** is open to:
- **EdTech partnerships** with schools, NGOs and ministries (CBT Pro and QueryPilot deployments)
- **Data-science / ML / data-analyst roles** (remote globally, in-person Lagos)
- **Serious STEM tutoring** (Maths, Further Maths, Physics, Chemistry — all levels)
- **Speaking** and **content collaborations** on EdTech, Nigerian-context data science, and AI-augmented development

Read the full builder story in **[AUTHOR.md](AUTHOR.md)**.

---

*Document version: 9.0 · 2026 · QueryPilot is built and maintained by Adewale Samson Adeagbo · HMG Concepts · Lagos, Nigeria.*
