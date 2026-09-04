# GitHub & Live Apps — Ground Truth

Research date: **2026-09-04**. Author: automated audit against source code, not READMEs.
Scope: all 24 repositories under `github.com/DrakeKrommenhoek` (11 public, 13 private).
23 were cloned and read; 2 are empty.

**Method note.** Every status below was verified by reading source, running test suites where
runnable, and inspecting git history. Where a README claim could not be confirmed in code, it is
marked as unverified rather than repeated.

**Access limitation — live sites could NOT be fetched.** Outbound HTTPS from this session is
policed by an egress proxy that returns `403 CONNECT` for `*.vercel.app`. Confirmed with both
WebFetch and `curl`. Per proxy policy this was not routed around. Everything below about "what a
visitor sees" is therefore **derived from the deployed source** (`src/`, `public/`, `index.html`,
`vercel.json`), which is reliable for structure, routes, and copy, but cannot confirm that a given
deployment is currently live and green. **Someone should open the three live URLs manually to
confirm.**

---

## Summary table

| Project | Repo | Status | Stack | Live URL | Placement | Confidentiality risk |
|---|---|---|---|---|---|---|
| The Answer Movement | `the-answer-movement-app` (private) | **LIVE, actively developed** | Vanilla JS PWA, Vercel serverless, Twilio, Node/Anthropic bot on VPS | the-answer-movement-app.vercel.app / theanswermovement.com | **FLAGSHIP** | Low (client PII by design — no data committed) |
| Operation D.R.A.K.E. | `operation-drake` (private) | **IN DEVELOPMENT, deployed to VPS** | Python 3.12, FastAPI, SQLAlchemy, Telegram, Notion, Anthropic/OpenAI, Docker; React 19 PWA | none public | **FLAGSHIP** | Low |
| Listing Forge | `listing-forge` (**public**) | **PAUSED — honestly retired** | Python, FastAPI, SQLAlchemy, Telegram, vision LLMs | none | **Lab** (strong) | Low |
| Project SLOPE | `project-slope` (private) | **PROTOTYPE / research instrument** | React 19, TS, Vite, Zod, YAML, Vitest, Playwright | none confirmed | **Lab** (or Flagship for the *idea*) | Low-Med — names the PE firm as an experience ID |
| MC Performance Engine | `mc-performance-engine` (private) | **LIVE but firm-branded** | React 18, TS, Vite, Tailwind, TanStack Table | mc-performance-engine.vercel.app | **OMIT as-is** — teaser only, no link | **HIGH — see §5** |
| The Answer (strategy fork) | `the-answer-platform` (private) | **PAUSED (Aug 24)** — same history, strategy-only track | same as above + 22 strategy docs | none | Omit (merge into flagship story) | Low |
| Ascend | `Ascend_App` (**public**) | **PROTOTYPE, dormant since Mar 2026** | React 18, Vite, Tailwind; all client-side | ascend-app-one.vercel.app | **Lab** — label "demo prototype" | Low |
| PhotoRank | `photorank` (**public**) | **PROTOTYPE, one-day build** | Next.js 16, React 19, face-api.js, Zustand, Jest | none | Lab | Low |
| Habit tracker | `drakes-pursuit-of-progress` (**public**) | **EXPERIMENT, abandoned Mar 2026** | Single-file vanilla JS PWA (4.4k LOC) | none confirmed | Lab or Omit | Low |
| Van Nellessen site | `van-nellessen-basketball` (**public**) | **ONE-SHOT client build** (1 commit) | Next.js, TS, Tailwind | none confirmed | Omit or one-line credit | Low |
| Daily Dose of Dedication | `operation-dddd` (**public**) | **EXPERIMENT, abandoned Apr 2026** | Single HTML file PWA | none confirmed | Omit | Low |
| ORCL research | `orcl-to-the-moon` (**public**) | **RESEARCH — documents only, zero code** | PDFs + .docx | none | Omit | Low (public SEC filings) |
| Todd K. site | `todd-krommenhoek-site` (**public**) | Single-file site for a family member | Static HTML | none confirmed | Omit | Low |
| Casa Tennis | `casa-tennis` (**public**) | **EXPERIMENT** — 1 HTML file, 1 commit | Static HTML | none confirmed | Omit | Low |
| Soothe Massage | `soothe-massage` (**public**) | **EXPERIMENT** — demo + spec | Static HTML | none confirmed | Omit | Low |
| Voxai deal workspace | `voxai-platform` (private) | Live PE deal research | Markdown KB + Python scoring | none | **NEVER PUBLIC** | **CRITICAL — §5** |
| Bond/Braze M&A screen | `mc-bond-targets` (private) | PE target screening | Python, openpyxl | none | **NEVER PUBLIC** | **CRITICAL — §5** |
| Portfolio Intelligence | `mc_portfolio_intelligence` (private) | Internal prototype | React, TS, Vite, Tailwind | unknown | **NEVER PUBLIC** | **CRITICAL — §5** |
| How-to-AI deck build | `mc-how-to-ai` (private) | Internal deck/asset pipeline | Docs + Node build script | none | **NEVER PUBLIC** | **HIGH — §5** |
| Personal investing | `Krommenhoek-Investments` (private) | Personal trade journal | Markdown only | none | **NOT PUBLIC** | Personal financial |
| The Answer (v0) | `the_answer_movement_app` (private) | **SUPERSEDED** — 1 commit, Feb 2026 | Markdown content | none | Omit | Low |
| Site | `drake-krommenhoek-site` (**public**) | In development | Next.js 14, TS, Tailwind, Resend | (this site) | n/a | Low |
| — | `cife-agent` (private) | **EMPTY REPO — 0 files** | — | — | Omit | — |
| — | `intelligence-intake` (private) | **EMPTY REPO — 0 files** | — | — | Omit | — |

---

## 0. Headline findings

1. **There is no family card game repo.** Euchre / Bid Euchre / Pinochle / Pepper appear
   nowhere in any of the 24 repositories as a project. The only hits are Euchre listed as a
   personal interest in `components/Experience.tsx` on this very site, an essay
   (`content/writing/before-tiktok-there-was-table-talk.md`), and a line in his father's site.
   **If a card game project exists, it is not on GitHub.**
2. **The two strongest engineering artifacts are not the ones on the "flagship" list.** The
   Answer Movement's characterization test suite and Operation D.R.A.K.E.'s architecture are the
   real proof of ability. `Ascend_App` — one of the two apps offered as flagship — is a
   three-day, self-described "interactive prototype" with no tests.
3. **`listing-forge` (public, 19.7k LOC, 386 tests) was not on the target list and is the
   single most impressive public repo.** Its README is also the most credible document in the
   whole account, because it opens by saying the tool was never used for a real sale.
4. **Four repositories contain live private-equity work product.** One of them has a real
   internal firm PDF committed to it. See §5. This is the most important section of this file.
5. **No credentials or API keys are committed** anywhere, in any repo, in any branch, at any
   point in history. `.env` files are correctly gitignored and only `.env.example` templates are
   tracked. This was checked at HEAD and across full deepened history for high-entropy key
   patterns (Anthropic, OpenAI, AWS, GitHub, Google, Slack, SendGrid, Resend, JWTs, private keys,
   DB URIs). **Zero hits.** This is genuinely good hygiene and worth stating.

---

## 1. The Answer Movement — `the-answer-movement-app`

- **Visibility:** private. **Default branch:** `main`. **Commits:** 302.
- **Active:** 2026-02-26 → **2026-09-03 (yesterday)**. The most actively developed repo he owns.
- **Authors:** 166 DrakeKrommenhoek, 132 Claude, 4 Drake Krommenhoek.
- **Language:** vanilla JavaScript. No framework, no build step, no bundler.

### What it actually is

A 28-day habit PWA built for a real client — "Trainer Joe" — who sends the URL to roughly
240 contacts. One ABC letter per day (A–Z), each with a definition, reflection, journal prompt,
and a linked workout video; days 27–28 are named days. A three-day "grace" system means missing
a day does not break the streak. State lives entirely in `localStorage` — no accounts, no
backend database.

**This is verified, not claimed.** The content exists (26 files in `content/abcs/`), the streak
engine exists, and the behavior is pinned by a passing test suite.

### Architecture, honestly

- `app/index.html` is **9,058 lines** — HTML, CSS, and the entire application logic in one file.
  This is the single biggest architectural liability in his portfolio, and he knows it: the
  test harness exists specifically because the file is too big to refactor safely.
- Serverless functions on Vercel: `api/collect-phone.js`, `api/send-daily.js` (Twilio SMS
  broadcast, day-of-year message rotation), `api/generate-summary.js`, `api/list-phones.js`.
- `bot/` — a separate Node service (`@anthropic-ai/sdk`, Node ≥20) deployed to a VPS behind
  nginx with a systemd unit, serving `bot.theanswermovement.com`. Twilio webhook signature
  verification is implemented, and dev-mode auth bypass is explicitly fenced off from production.
- `tools/overnight/` — a nightly systemd timer on the VPS that answers one research question from
  a queue and **pushes to a `research/*` branch, never `main`.** The README explains why in one
  of the best lines in the account: *"240 people open this app every morning, and this month's
  worst bug passed every automated check while it was live."*
- `.github/workflows/weekly-audit.yml` — a scheduled content/copy audit.
- Custom domain: `theanswermovement.com` (referenced throughout; not verifiable from here).

### Tests — the standout artifact

`tests/` contains a **characterization suite that brace-extracts the real shipped functions out
of `app/index.html` at runtime** and runs them in a Node VM with an in-memory `localStorage` and
a frozen, settable clock, across three timezones (`America/Denver`, `UTC`, `Australia/Sydney`).
No hand-copied logic, so no drift.

**I ran it. 24/24 passing, all three timezone runs green.**

More notable than the pass count: several tests are tagged `KNOWN-BUG` and deliberately assert
*current defective behavior*, each mapped to a numbered audit finding, with a documented rule
that fixing the bug must flip the assertion in the same commit. Documented known bugs include a
UTC-vs-local date comparison that silently fails east of UTC (C-04), a displayed streak that is
`min(dayOfMonth, 28)` rather than a consecutive count (C-02), and positional content lookup that
shifts every later day if one is removed (D-02). One prior bug (B-01) has since been fixed and
the test flipped, exactly as the protocol requires.

This is senior-level testing discipline applied to a codebase that otherwise has none of the
usual signals of one. It is the strongest single piece of evidence in the portfolio.

### Live app — what a visitor sees (derived from source)

`vercel.json` rewrites `/` → `/app/index.html`. No login, no account, no gate. First run is an
onboarding intro that captures a first name, then routes into the daily practice: today's letter,
Joe's definition, a reflection, a journal box, and an embedded YouTube workout. Returning visitors
land on the current day with their streak and grace days. There is a September intro screen, a
post-workout streak celebration with an ambient fire animation, and a closure screen. Recent
commits (Sept 2–3) fix an intro screen that "trapped the user" and a reload that ate it —
i.e. it is being actively maintained against real user reports.

### Privacy check

No phone numbers or user data are committed. `api/data/phone-numbers.json` does not exist in the
repo. `api/list-phones.js` is gated on an `ADMIN_SECRET` env var **with no fallback** — it returns
503 if unset — and a code comment records that a previously hardcoded `"TAM_ADMIN"` fallback that
shipped in client HTML was removed (audit D-09). That is a real security bug, found and fixed.

### Recommended placement — **FLAGSHIP**

Lead with the test suite and the 240 real users, not with the feature list. The honest framing —
"a 9,000-line file I inherited from myself, pinned by a characterization suite so I can change it
without breaking 240 people's mornings" — is far more compelling than "28-day wellness PWA."

---

## 2. Operation D.R.A.K.E. — `operation-drake`

- **Visibility:** private. **Branch:** `master`. **Commits:** 40. **Active:** 2026-06-28 → **2026-09-03**.
- **Languages:** Python 3.12 (core), TypeScript/React 19 (`web/`).
- **Size:** 12.1k LOC code, 8.3k lines of docs, 124 code files.

### What it actually does

A personal AI agent OS. Messages arrive via Telegram or CLI, are stored in SQLite, normalized
(URL detection, type classification), classified for intent by an LLM router agent, turned into a
task record with a status lifecycle, then either executed automatically (if safe) or paused for
human approval. Results are written as Markdown artifacts and returned on the original channel.

**Verified against source — the described modules all exist:**

- `agents/` — base, router, synthesis, capture, meta_noise
- `channels/` — base, cli, telegram
- `workflows/` — capture_note, summarize, extract_actions, create_research_brief, process_voice_note
- `llm/` — a provider abstraction with `anthropic_provider`, `openai_provider`, and a
  `mock_provider` (which is why the tests run without API keys)
- `transcription/` — Whisper + a mock transcriber
- `integrations/notion/` — 12 modules including a mock client, a live client, a classifier, a
  mapper, and a sync service. This is the largest subsystem and clearly the most recent work.
- `services/` — approval, orchestration, artifact, project_classifier, writeback
- `content/` — webpage, youtube, audio extractors
- `observability/logging.py`, `api/health.py`, `api/tasks.py`

Stack: FastAPI, SQLAlchemy 2.0, Pydantic 2, `python-telegram-bot`, `notion-client`, `anthropic`,
`openai`, `httpx`. Ruff configured (`E,F,I,UP`), pytest with `asyncio_mode = "auto"`. Docker +
docker-compose + Makefile + `scripts/deploy.sh` + `scripts/backup.sh`.

### Tests

**29 test files, 280 test functions** — 26 unit, 3 integration. Not stubs: `test_telegram_safety.py`
alone has 37 tests asserting a specific design contract (no `parse_mode`, so `_safe_text()` must
return underscores, asterisks, backticks, brackets, URLs and filenames unchanged). Notion coverage
is 98 tests across 8 files. I could not execute them — pytest is not installed in this
environment — but the files are substantive and `CURRENT_STATE.md` records "193 tests pass" as of
an earlier session, consistent with growth to 280.

### Deployment — real, not aspirational

`CURRENT_STATE.md` (updated 2026-09-03) records a DigitalOcean VPS, Ubuntu 24.04, hostname
`drake`, deployed at `/opt/operation-drake/` with the deployed commit matching local and GitHub,
persistent data directories, and a backup path. It also records verified local tool versions and
`ruff` / `docker compose config` passing. This is unusually disciplined state-tracking.

### Sub-projects inside the repo

- `web/` — "drake-daily", a React 19 + Vite installable PWA (daily brief: schedule, Canvas,
  vitals, one recommendation) with Vercel serverless functions (`api/brief.ts`, `api/diag.ts`) and
  three Vitest test files. Added Session 9.
- `health/` — a Google Health OAuth ingest module (`google-auth`, `google-auth-oauthlib`) with
  its own schema. `CURRENT_STATE.md` flags a **7-day OAuth token bug** found here and not yet
  fixed.

### Honest status — **IN DEVELOPMENT, running in production for one user**

The roadmap is explicit that most workflows are built and "soaking" under a self-imposed rule of
one phase at a time with a 14-day soak. Four foundation items remain open, including "voice
transcription tested end-to-end with Whisper (live, not mock)" — meaning transcription is proven
against mocks but not yet against the real API. Do not describe Whisper transcription as working
in production.

### Recommended placement — **FLAGSHIP**

This is the deepest system he has built. The honest angle: a personal agent OS with an approval
gate, a provider abstraction that lets the whole thing be tested without API keys, and a
deployment discipline (soak periods, state file, ruff-clean) most side projects never bother with.

---

## 3. Listing Forge — `listing-forge` (PUBLIC)

- **Visibility:** public. **Commits:** 3, all 2026-08-23 — extracted in one pass from
  Operation D.R.A.K.E., not developed here.
- **Size:** **19,771 LOC — the largest codebase in the account.** 17 test files,
  **386 test functions.** Python / FastAPI / SQLAlchemy.

### What it is, in its own words

> "The sale this was built for completed via manual marketplace posting. This automation was
> never used for a real sale end to end. It is extracted here as a reference / potential starting
> point for a future project, not as a working product."

A photo-to-listing pipeline for a household estate sale: Telegram photo intake → vision
identification (mock / Anthropic / OpenAI providers) → a **manual-only** comparable-research queue
(the design deliberately refuses to fabricate market evidence) → a confidence-scored pricing
engine with list/expected/floor bands → a markdown engine that steps prices down on an accelerating
schedule toward a hard deadline with a non-negotiable floor → bundle pricing that can never breach
a floor → a human approval gate → per-marketplace listing copy with fee-aware net proceeds →
a static catalogue site with EXIF-stripped photos → a separately-deployed public inquiry endpoint
with honeypot fields, input truncation, and IP hashing. Six SQLite tables, all `estate_`-prefixed.

Tests cover the pipeline, migrations, review auth, site-inquiry decoupling, **site leaks**, vision
providers, telegram routing, bundling, and the inquiry endpoint.

### Why this matters for the site

The README's closing section is the best writing in the account: it lists precisely what does not
work (no standalone entrypoint, systemd units are templates referencing a user that does not
exist, the serverless deployment was never checked in), then says what he would cut if he rebuilt
it — *"I'd cut vision identification first — it was the most code for the least trust, an LLM
guessing what an item is that a human has to check anyway"* — and ends by refusing to pitch it.

That paragraph is more persuasive than any flagship blurb. It should be quoted.

### Recommended placement — **Lab, prominently**

Frame as "built, honestly retired." Do not call it a product. It already isn't one.

---

## 4. Project SLOPE — `project-slope`

- **Visibility:** private. **Default branch:** `master` (14 commits, 2026-08-24 → 2026-08-25),
  which is at the same tip as `claude/slope-v3-canonical`. Two earlier parallel branches
  (`slope-career-mvp-88hghv`, `slope-product-stewardship-r49iwm`) remain in the remote as
  historical evidence and share no development history — a reconciliation is documented.
- **Stack:** React 19, TypeScript, Vite 7, React Router 7, Zod 4, YAML (custom Vite plugin),
  Vitest, Playwright. **6.6k LOC.**
- **Tests:** 6 test files, **118 tests** (`honesty.test.ts` alone has 41).

### What it is

A "living career compass" — Skills, Leverage, Optionality, Pathways, Evidence — built for exactly
one person: himself, a W&L class of 2028 undergraduate deciding what Summer 2027 should be after
a private equity internship. No backend, no database, no accounts, no API keys. Every screen is
computed from YAML in `data/` (personal, relationship, universal, config layers) through engines
in `src/engine/` (fit, leverage, strength, momentum, timeline, provenance, health, access, loops).
12 routes: Today, Evidence, Loops, Roles, Places, Opportunities, CareerMap, Decide, Act, Share,
Health.

The central object is a career learning loop: `belief → falsifier → experiment → outcome →
reflection → model update`, with the falsifier written **before** the outcome is known.

### Why it is unusual

Its honesty rules are enforced as tests, not conventions. `honesty.test.ts` runs the data-health
rules against the real committed data — backfill a falsifier, drop a source from an external
fact, or render sample data as real, and the build fails. The share view **fails closed**: an
unclassified record is withheld rather than shown, after a bug was found where a missing `privacy`
field defaulted to shareable. Naming a person in a `public_safe` opportunity is a **critical**
health finding, on the reasoning that "a target is a person, and that person did not consent to
appearing in someone else's document."

And it warns about itself. The README states **"Genuinely closed loops: zero. The corpus starts
now,"** notes that five of eighteen work dimensions have no evidence and are drawn as guesses,
and that the app tracks its own research-to-action ratio and prints, at the top of the home
screen while real-world actions sit at zero: *"The next useful thing is not on this screen."*

### Confidentiality note (moderate, manageable)

`docs/PRIVACY.md` claims no non-public information from the Summer 2026 internship — no deal
names, no portfolio company financials, no internal firm materials, no identifiable colleague
opinions. **I spot-checked this and it holds.** The one caveat: the firm's name appears as an
identifier throughout `data/personal/evidence.yaml` (`exp_mountaingate_2026`,
`evidence_cluster: mountaingate_2026`) and the evidence statements are self-reported reflections
about the internship experience ("Energised by taking an ambiguous problem and imposing structure
on it"), not firm information. That is the same category as a résumé line — but if SLOPE is ever
published or screenshotted, those identifiers become visible. Decide deliberately.

### Honest status — **PROTOTYPE / research instrument**

Two days of concentrated work, structurally complete, no deployment confirmed
(`docs/DEPLOYMENT.md` distinguishes verified from unverified hosting state — read it before
claiming anything). It is not a product and does not claim to be.

### Recommended placement — **Lab**, with the idea told as a short essay

The *thinking* here is flagship-grade; the *artifact* is a two-day personal tool. Writing about
the falsifier-before-outcome loop, and about building a system that tells you to stop using it,
would carry further than presenting SLOPE as a product.

---

## 5. CONFIDENTIALITY — READ THIS SECTION BEFORE PUBLISHING ANYTHING

Four repositories contain material originating from a private-equity internship at
**Mountaingate Capital**. All four are currently private. **None of them may become public, and
one of them has a live public deployment right now.**

### 5.1 CRITICAL — `mc_portfolio_intelligence` has a real internal firm document committed

`Weekly Pipeline Report 7_6.pdf` (135 KB) is committed at the repository root.

I classified it **without reproducing its contents**: text extraction returns ~58k characters
containing IOI / LOI / Stage pipeline structure and dollar figures, and contains **none** of the
repository's own synthetic project codenames (`Project Slate`, `Project Fenwick`). The filename,
structure, and absence of synthetic markers together indicate this is a **real internal
Mountaingate weekly deal-pipeline report**.

The repository's own `CLAUDE.md` forbids exactly this: *"NEVER use real portfolio company names,
revenue/EBITDA figures, deal team initials, or sourcing relationships anywhere in this codebase…
This is a compliance requirement, not a style preference."* The PDF is a direct violation of the
repo's own stated rule.

**Recommended action, independent of the website:** remove this file from the repository and
purge it from git history (`git filter-repo` or BFG), then force-push. A private repo is not a
safe place for a firm's internal pipeline report — access can be granted, forks happen, and
the account could be compromised. This should be handled before any portfolio work continues.

The repository also contains, per an explicitly logged and Drake-confirmed 2026-07-08 exception
for a demo, **real Mountaingate portfolio company names and websites** (Harvest Group, Podean,
UpSwell, Walker Sands, Bond Brand Loyalty, Ignite Visibility, Interluxe Group, Rep Data,
WTWH Media, Acceleration Partners). Those are independently public. The active-deal and
monitoring data (`activeDeals.ts`, `monitoring.ts`) is synthetic — fictional codenames, invented
revenue/EBITDA figures, invented deal-team initials — and the header renders
"Mountaingate Capital — L1 Prototype (synthetic data)". The synthetic discipline in the *code* is
sound; the committed PDF is the failure.

**Placement: NEVER PUBLIC. Not a Lab entry. Not linked. Not screenshotted.**

### 5.2 CRITICAL — `voxai-platform` is a live M&A deal workspace

A deal-research operating system for Mountaingate's evaluation of **Voxai Solutions** (a Genesys
contact-center systems integrator) as a PE platform, plus the search for a US-based add-on.
Contains: `00-thesis.md`, `01-decision-log.md`, `02-gap-list.md`, `03-target-screen.md`,
`04-targets.md`, `05-meeting-notes.md`, a `financials/` directory, seven versions of a scored
candidate workbook, two Word deliverables (add-on strategy, candidate ranking), a named
third-party diligence plan, and two deep-research reports. Its own CLAUDE.md calls it
*"a high-stakes deal with thin, unverified facts."*

**This is live, non-public M&A material about identified companies.** Placement: **NEVER PUBLIC**,
and it should not be described on the site even in the abstract ("I built a deal research
workspace") in a way that could be tied to the firm or the target.

### 5.3 CRITICAL — `mc-bond-targets` is a live acquisition pipeline

Screens **318 named Braze Marketplace agency partners** as acquisition or partnership targets for
**Bond Brand Loyalty (owned by Mountaingate Capital)**, producing a **19-company actionable
shortlist** with live dual scoring, plus a parallel Salesforce-agency screen. Contains a ranking
memo, an executive summary, a team email draft, meeting-prep documents, "team intel," and ten
batches of enrichment research on named private companies.

**Placement: NEVER PUBLIC.**

### 5.4 HIGH — `mc-how-to-ai` contains internal working materials and a colleague's name

The intake and build pipeline for the firm's internal "How to AI" deck. Contains internal decision
logs, a `project_north_star.md` naming "Mountaingate deal team members with limited or inconsistent
AI usage" as the audience, working-session decks and PDFs, and **multiple documents named after
and addressed to a colleague ("Max")** — `decisions_for_max.md`, `max_email_realignment.md`,
`max_walkthrough_notes.md`, `Max_Working_Session_Deck.pptx`.

**Placement: NEVER PUBLIC.** A named colleague did not consent to appearing in a portfolio.

### 5.5 HIGH — `mc-performance-engine` is firm-branded and **already publicly deployed**

This is the one requiring action, not just caution.

**Repo:** private, 85 commits, 2026-07-30 → 2026-08-11, sole author Drake. React 18 + TypeScript
+ Vite + Tailwind + React Router + TanStack Table. No backend; typed seed data. **13.6k LOC of
code and 17.8k lines of docs across 150 markdown files.**

**Is there a safe public landing page at the root? No.** `App.tsx` routes `/` to `<Home />`, which
is the firm-branded application itself. `vercel.json` contains only an SPA catch-all rewrite —
**no authentication, no password gate, no basic auth, no `robots.txt`, no `noindex` meta tag.**
A grep for `password|auth|login|noindex|robots` across `src/`, `public/`, `index.html`, and
`vercel.json` returns no gating mechanism of any kind.

**What a visitor sees at `/` (derived from `src/views/Home.tsx`, `AppHeader.tsx`, `AppFooter.tsx`):**
the real Mountaingate Capital logo (three PNG assets committed in `src/assets/`), an eyebrow
reading "Mountaingate Capital · Deal Team AI Enablement", an H1 "Welcome to the MC Performance
Engine", the line "Designed to help you take back life's most valuable resource," a
strikethrough "Money. I mean, time." motif, a dominant task search, curated starting points,
recently-viewed items, and live counts of prompts and workflows. The footer carries the full
firm lockup. Nav: Fundamentals, Prompts, Workflows, Agents, Explore, Security & Compliance.

**What a visitor sees at `/workflows/cim-vp-email-assembly`:** the full workflow record from
`src/data/workflows.ts` — title "CIM First-Pass Review & Thesis Test", the job to be done
("Orient on a dense CIM, form my own thesis, and have it stress-tested before I send it up"),
a green/red boundary panel listing what AI may do and what the human must do, four ordered steps
naming the tool for each, required inputs, common mistakes, a review checklist, and a handoff
note — all inside firm-branded chrome.

**The risk is not the seed data.** The example content genuinely is synthetic, and the build
enforces it: `scripts/validate-content.ts` runs **14 numbered checks** including a sensitive-pattern
scan that fails the build on money patterns (`$Xm`, `$Xbn`) or metric patterns (`X% EBITDA`), plus
governance gates that prevent any item claiming firm approval without evidence. `prebuild` runs
`validate`, so the scan cannot be skipped. That is real, and it is to his credit.

**The risk is that the firm's brand and its internal methodology are on the open internet.**
Publicly reachable right now: the firm's logo and name, and the firm's internal deal-team AI
operating framework — the six-part prompting framework, the green/red-light test, the "Public
Sandbox Rule," per-item sensitivity classifications, and runbooks for **NDA first-pass redline,
IC memo work-check, IOI/LOI work-check, precedent comparison, CIM review, target sourcing, and
meeting-notes pipelines**, plus `public/templates/` files served as static assets. Whether or not
any company name is real, this is identifiable internal work product published under a real
firm's brand without any visible authorization.

**Recommended actions, in order:**
1. **Do not link this URL from the portfolio site.** Not as a live demo, not as a screenshot with
   the logo visible.
2. Ask the firm whether the deployment should exist at all. If it is an approved internal tool,
   it should be behind Vercel password protection or SSO, not on an open URL.
3. If it is to remain a portfolio piece, build a **separate, de-branded teaser**: no logo, no firm
   name, no CIM/NDA/IC workflow content, generic example domain. Describe the *engineering*
   (a typed content model, a 14-check content validator with a governance gate and a synthetic-data
   scan, task-first search) and never the firm's methodology.
4. Never make the repository public — `brand/` contains the firm's brand-guideline PDFs and a
   Pantone EPS vector, and `docs/` contains 150 internal build and leave-behind documents.

**Confidentiality risk: HIGH, and currently live.**

### 5.6 Personal — `Krommenhoek-Investments`

Seven markdown files: a personal trade journal, postmortems, a watchlist, and two deployment
memos for real money. Private, and should stay that way. Not a confidentiality risk to anyone
else, but personal financial information.

---

## 6. Smaller repos — verified status

**`Ascend_App` (PUBLIC, live at ascend-app-one.vercel.app)** — 14 commits over three days,
2026-03-16 → 2026-03-19, **dormant for six months.** React 18 + Vite + Tailwind, no tests, no
backend. `CLAUDE_Ascend.md` states its own scope plainly: *"Audience: W&L alumni demo
(iPad/desktop). This is an interactive prototype, not a full app."* Flow: Intro → NameCapture →
Quiz (5–7 questions) → Reveal (one of three animal archetypes: eagle, fox, bear) → PetIntro
(pick a humor style) → Dashboard. All state is React `useState` — nothing persists across a
refresh. `Dashboard.jsx` is **1,973 lines** and is a mock of an interface that does not exist;
the icons for Canvas, Google Calendar, Gmail, Outlook, LinkedIn, and Handshake are static images,
not integrations. There is a separate `/ascend-signup` page with a form that posts via `fetch`.
A visitor sees a polished, complete-feeling demo with no login — and should be told it is a demo.
**Placement: Lab, explicitly labeled "prototype / alumni demo."** Presenting this as a product
would be the single most inflated claim available, and it is also the app most likely to be
clicked.

**`the-answer-platform` (private, 295 commits)** — shares an identical initial commit
(`339450d`) with `the-answer-movement-app`. Same project. It diverged on 2026-08-24 into a
strategy-only track: 24 documents (`strategy/00_STATE_OF_THE_APP.md` through
`21_ADJACENT_MODELS.md`, plus a business model CSV) covering vision, customer, pricing and unit
economics, competitive landscape, validation plan, and a decision log. Last touched 2026-08-24;
the app work continued in the other repo. **Not a separate project — do not list it twice.**
If anything, it is evidence of business thinking to mention inside the flagship entry.

**`photorank` (PUBLIC)** — 20 commits, all on 2026-05-03. **A single-day build.** Next.js 16,
React 19, `face-api.js`, Zustand, Jest. Real analysis pipeline: `detectFaces`, `matchPeople`,
`scoreSharpness`, `scoreLighting`, `scoreEyesOpen`, `scoreSmiles`, `scoreComposition`,
`scoreInstagram`, `rankPhotos` — with **6 unit test files** covering the scoring functions.
Screens: upload → criteria → results. Requires the user to manually download face-api model
weights into `/public/models/`, so it will not run out of the box. **Status: PROTOTYPE, complete
enough to demo, abandoned after one day. Placement: Lab.**

**`drakes-pursuit-of-progress` (PUBLIC)** — 13 commits, 2026-02-12 → 2026-03-05. A vanilla-JS
habit-tracker PWA with XP points, streaks, notifications, and workout/nutrition data.
`script.js` is 3,338 lines. No tests, no framework, no build. His earliest substantial project
and a useful "here is where I started" data point, but **abandoned six months ago.**
**Placement: Lab or omit.**

**`van-nellessen-basketball` (PUBLIC)** — **1 commit, 2026-02-03.** Next.js + TypeScript +
Tailwind marketing site for a basketball player: home, highlights, bio, stats, contact, and a
print-ready recruit packet. Content in JSON/Markdown. Delivered in one shot and never touched
again. **Placement: omit, or a single line as client work.**

**`operation-dddd` (PUBLIC)** — "Daily Dose of Dedication," a single-file HTML PWA
(`4D-tracker.html`), 2 commits, 2026-04-26. **Placement: omit.**

**`orcl-to-the-moon` (PUBLIC)** — 24 files, **zero lines of code.** Oracle SEC filings (10-K,
10-Qs, earnings releases), a comparable-company source index, a thesis document, and a master
checklist. A personal equity-research exercise stored in git. All source documents are public SEC
filings, so no confidentiality issue. **Placement: omit** — or mention as an interest, not a
project.

**`casa-tennis`, `soothe-massage`, `todd-krommenhoek-site` (all PUBLIC)** — one or two static HTML
files each, 1–4 commits. "Casa Tennis — For Stone", "Soothe Massage — Book Your Session",
"Todd Krommenhoek" (a site for a family member). **Placement: omit.**

**`the_answer_movement_app` (private)** — 1 commit, 2026-02-24. The original content-only draft
(26 ABC markdown files + a brief) that became the real app two days later.
**Superseded. Omit.**

**`cife-agent` and `intelligence-intake` (both private)** — **completely empty. Zero tracked
files.** `intelligence-intake` was last pushed 2026-05-04 and `cife-agent` 2026-07-07, so
something existed at some point or they were created and never used. Either way there is nothing
to present. **Omit.**

---

## 7. This site — `drake-krommenhoek-site`

- **Visibility:** public. **Remote branches: `main` only.** **Open PRs: 0. Open issues: 0.**
  (Verified via the GitHub API. The local working copy sits on an unpushed session branch,
  `claude/festive-wozniak-voawei`.)
- **Last push:** 2026-03-25 (before this rebuild). 7 commits on the working branch.
- **Stack:** Next.js 14 (App Router), React 18, TypeScript, Tailwind, `gray-matter` + `remark`
  for Markdown, `resend` for email, `sharp`, Playwright as a devDependency.
- **Structure:** `app/page.tsx` (Hero, About, Experience, Upcoming, Contact, Footer),
  `app/writing/` + `app/writing/[slug]/`, and `app/api/subscribe/route.ts`.
- **Content:** three essays in `content/writing/` — "Before TikTok, There Was Table Talk",
  "The Moment Before Structure", "What Golf Taught Me About Pressure".
- **No tests.** No CI workflow.

### Vercel configuration

**There is no `vercel.json` in the repository** and no `.github/workflows/`. Deployment settings
therefore live entirely in the Vercel dashboard, which I could not reach (same egress block).

**On branch previews:** I cannot verify this from here and will not assert it. What is true is
that Vercel's GitHub integration creates a preview deployment for every push to a non-production
branch **by default** when a project is connected, and nothing in this repository overrides that.
Confirm in the Vercel dashboard rather than trusting this paragraph.

### Two small things worth fixing

- `docs/source-materials/Krommenhoek Resume_Feb.docx` and `public/Krommenhoek_Resume_Feb.pdf` are
  committed, and the PDF is served publicly from `/Krommenhoek_Resume_Feb.pdf`. Text extraction
  did **not** find an email address or phone number in it, but PDF extraction is imperfect —
  **open the file and confirm** before leaving it publicly downloadable, and consider whether a
  February résumé should still be the one on the site.
- `app/api/subscribe/route.ts` hardcodes `drake.krommenhoek@gmail.com` as the notification
  address and interpolates the submitted email directly into the notification HTML. The email is
  regex-validated first, and the only recipient is himself, so the impact is negligible — but
  escaping it costs one line.

---

## 8. Recommended portfolio structure

**Flagship (2):**
1. **The Answer Movement** — 240 real users, a characterization test suite that pins a
   9,000-line file across three timezones, a Twilio broadcast pipeline, and an overnight research
   job that is forbidden from touching `main`. Lead with the constraint, not the feature list.
2. **Operation D.R.A.K.E.** — a personal agent OS with an approval gate, a mockable LLM provider
   abstraction, 280 tests, and a real VPS deployment with a soak-period discipline.

**Lab (4–5):**
- **Listing Forge** — quote the README's retirement paragraph verbatim.
- **Project SLOPE** — sell the idea (falsifier before outcome) more than the artifact.
- **Ascend** — labeled "alumni demo prototype," because it is live and clickable.
- **PhotoRank** — a one-day build with a real scoring pipeline and unit tests.
- Optionally the habit tracker, framed as "where I started."

**Omit entirely:** all four Mountaingate repos, the personal investing journal, both empty repos,
`the-answer-platform` and `the_answer_movement_app` (duplicates of the flagship),
`orcl-to-the-moon`, and the four one-file static sites.

**The single highest-value edit:** replace any claim of scale with the specific constraint each
project actually solved. The truthful version of this portfolio — 240 people who open an app
every morning, a test suite built because a file got too big to refactor safely, and a tool whose
README opens by saying it was never used — is stronger than any inflated version of it.

---

## 9. What could not be verified

- **All three live URLs.** `*.vercel.app` is blocked by this session's egress proxy
  (`403 CONNECT`, confirmed with both WebFetch and curl). Not routed around, per proxy policy.
  Everything about "what a visitor sees" is derived from deployed source. **Open them manually.**
- **Vercel project settings** for every repo, including whether branch pushes produce preview
  deployments, and whether `mc-performance-engine.vercel.app` is currently live and open.
- **Test execution** for `operation-drake` (280 tests) and `project-slope` (118 tests) —
  pytest / node_modules are not installed here. Test files were read and are substantive.
  The Answer Movement's 24 tests **were** executed and pass.
- **`Weekly Pipeline Report 7_6.pdf` contents** — deliberately not read beyond a structural
  classification, and deliberately not reproduced.
- Whether `cife-agent` and `intelligence-intake` ever contained anything.
