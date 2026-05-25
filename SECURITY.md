# Security Policy

> *Project maintained by **[Adewale Samson Adeagbo](AUTHOR.md)** — Founder of [HMG Concepts](https://hmgconcepts.pages.dev), Lagos, Nigeria. Built on an Android tablet using Acode editor, zero budget. Contact: WhatsApp [+234 810 086 6322](https://wa.me/2348100866322) · [buildingmyictcareer@gmail.com](mailto:buildingmyictcareer@gmail.com)*

---

## Supported Versions

| Version | Supported |
|---|---|
| 9.x | ✅ Yes (current) |
| 8.x | ✅ Yes |
| 7.x | ✅ Yes |
| 6.x | ⚠️ Security only — no new features |
| < 6 | ❌ No |

## Privacy & Data Handling Guarantees

QueryPilot is built with a "privacy by design" model:

1. **No server.** There is no backend. There is nothing to send data to.
2. **No API.** No third-party AI APIs. No analytics services.
3. **No telemetry.** We do not measure usage, page views, errors or anything else.
4. **No cookies.** QueryPilot does not set any cookies.
5. **Only `localStorage`.** All persisted data (schema, settings, snippets, templates, saved queries) is stored in your browser under keys prefixed `qp_`. It never leaves your device.
6. **Only one external resource.** Google Fonts (JetBrains Mono, Sora) is loaded once and cached by the service worker. To eliminate even that, fork the project and self-host or remove the `<link>` tag — the system fonts will render as a graceful fallback.
7. **Service Worker scope.** The SW caches only files from your own origin and the Google Fonts CDN. It has no `postMessage` listener and no `fetch` proxying to third parties.

## What Data Is Stored Locally?

| `localStorage` key | Contents | Why |
|---|---|---|
| `qp_schema` | Your schema text | So it reloads on next visit |
| `qp_settings` | Your toggles (font, dialect, hints) | UX persistence |
| `qp_theme` | Theme index 0–3 | UX persistence |
| `qp_fs` | Font size | UX persistence |
| `qp_udt` | Your saved templates | Sidebar persistence |
| `qp_snips` | Your SQL snippets | Sidebar persistence |
| `qp_tpl_fav` | Starred built-in templates | UX persistence |
| `qpe_workspaces` | Array of v8 enterprise workspaces | Workspace isolation |
| `qpe_active_ws` | Currently active workspace ID | UX persistence |
| `qpe_role` | Currently selected RBAC role | Audit-actor identity |
| `qpe_audit_log` | Last 5,000 audit events | Compliance evidence |
| `qpe_governance` | Governance rule toggles + lists | Governance posture |
| `qpe_approvals` | Approval requests + decisions | Workflow state |
| `qpe_schedules` | Active reminder schedules | Reminder state |
| `qpe_vault` | AES-GCM ciphertext + salt + IV | Encrypted sensitive blob |
| `qpe_tour_done` | Boolean — onboarding tour completed | UX persistence |
| `qp_hub_progress` | v9 — completed lessons (map of lessonId → ts) | Curriculum progress |
| `qp_hub_profile` | v9 — learner name + cert claim date | Certificate personalisation |

You can wipe all of it any time via your browser settings → Site data → Clear, or via DevTools → Application → Storage → Clear site data.

## Reporting a Vulnerability

If you discover a security issue (e.g. XSS in a code path, unsafe `eval`-like usage, data exfiltration via a third party we missed):

1. **Do not** open a public GitHub issue.
2. Email the maintainer directly at the address listed on the GitHub profile of the repository owner, or
3. Open a **private** security advisory via GitHub's *Security → Report a vulnerability* tab on the repository.

Please include:
- Description of the issue
- Reproduction steps
- Browser and version
- Suggested mitigation (if any)

We aim to:
- Acknowledge within **72 hours**
- Triage and confirm within **7 days**
- Ship a patched release within **14 days** (or sooner for critical issues)

## Threat Model

Because QueryPilot has no network, no auth and no server, the realistic threats are:

| Risk | Mitigation |
|---|---|
| **XSS via schema input** | All schema text passes through `esc()` (HTML-entity encoding) before rendering. Tested with `<script>` and `"` injection. |
| **XSS via NL input** | All user input passes through `esc()` before rendering in the chat bubbles. |
| **XSS via generated SQL** | Generated SQL is rendered through `hl()` which itself escapes first, then injects safe `<span>` tags. |
| **`localStorage` injection** | All JSON.parse calls are wrapped in try/catch with sensible defaults. |
| **Service Worker hijack** | SW only caches same-origin and the Google Fonts CDN. It does not respond to `message` events. |
| **Share-URL payload abuse** | The `#qp=...` payload only sets the schema text and dialect dropdown. Schema text is escaped before render. |
| **Audit-log tampering** | Audit log is append-only in the UI; clearing requires Admin role and writes its own `AUDIT_CLEAR` event. For tamper-evident storage, export the log periodically to an external SIEM. |
| **RBAC bypass via DevTools** | UI enforcement only — a determined user can call JS functions directly. Every action is still audit-logged. For real enforcement, deploy per-user instances. |
| **Vault passphrase weakness** | PBKDF2-SHA-256 with 120,000 iterations + 16-byte random salt + 12-byte IV per entry. Mitigation against weak passphrases is up to the user; the UI requires ≥6 chars but cannot enforce strength server-side. |
| **localStorage exfiltration via malicious browser extension** | Out of scope — host browser security is the user's responsibility. |

## Out of Scope

- Brute-force exhaustion of `localStorage` quota (browser's responsibility)
- Browser zero-days
- Local malware reading `localStorage`
- Compromise of the hosting provider (we don't host; you do)

## Cryptography

QueryPilot uses no cryptography of its own. Hosting providers (GitHub Pages, Netlify, Vercel, Cloudflare Pages) provide TLS automatically when deployed via their default URLs.

---

*Last updated for v9.0.0 — 2026.*

---

## Responsible Disclosure Contact

| Channel | Details |
|---|---|
| ✉️ Primary (tech) | [buildingmyictcareer@gmail.com](mailto:buildingmyictcareer@gmail.com) |
| ✉️ Secondary (brand) | [hismarvellousgrace@gmail.com](mailto:hismarvellousgrace@gmail.com) |
| 💬 WhatsApp | [+234 810 086 6322](https://wa.me/2348100866322) |
| 💻 GitHub private advisory | Repository → Security → Report a vulnerability |

Maintained by **Adewale Samson Adeagbo** · [HMG Concepts](https://hmgconcepts.pages.dev) · Lagos, Nigeria. Read more in [AUTHOR.md](AUTHOR.md).
