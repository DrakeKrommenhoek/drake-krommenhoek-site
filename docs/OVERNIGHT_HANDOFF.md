# Overnight Handoff — Drake Krommenhoek site rebuild

---

## ⚠️ SUPERSEDED IN PART — read `docs/MORNING_REVIEW.md` first

A second session (4 Sep 2026, branch **`site-2026-full-refresh`**) executed most of the
"what is left" list below. Current state, corrections to this document, and the open
questions are in **`docs/MORNING_REVIEW.md`**. The hostile second-pass review is in
**`docs/QA_CRITIQUE.md`**, and every public claim is traced in
**`docs/content-source-map.md`**.

**Corrections to this file:**

- **`docs/writing-candidates.md` does exist** (481 lines). This document says it does not.
  It was never mined for new pieces, so that gap is real, but the file is there.
- **`theanswermovement.com` is not the app.** It is the trainer's Shopify storefront. The
  habit app is at `the-answer-movement-app.vercel.app`. All three live URLs were opened and
  verified from a machine with normal egress.
- **The components have been rewritten and the compatibility layer is deleted.** "Step 1"
  below is done. So are the typed content layer, `/work/[slug]`, `/lab`, the reading room,
  metadata, sitemap, robots and favicon.
- **Branch:** work continued on `site-2026-full-refresh`, which contains everything from
  `claude/festive-wozniak-voawei` plus the previously-unpushed `feat/scroll-animations`.

**Verification tooling added** (`scripts/`): `qa-shots.mjs` (35 screenshots per pass across
five widths, with overflow and console-error detection), `a11y-check.mjs`, `check-motion.mjs`,
`measure-ia.mjs`. All currently pass.

---


**Branch:** `claude/festive-wozniak-voawei` (pushed to origin)
**Base:** `main` @ `dc76be0`
**Build status:** ✅ `npm run build` passes, with and without `RESEND_API_KEY`
**Session ended:** usage limit, partway through implementation
**Production:** untouched. Nothing has been merged to `main`.

> **Branch note.** The brief asked for a branch named `site-2026-full-refresh`. This
> session was pinned to `claude/festive-wozniak-voawei` by its harness and could not push
> anywhere else. Rename or re-branch freely — no work depends on the name.

---

## 🔴 READ THIS FIRST — three confidentiality findings

These came out of the GitHub audit and are more urgent than the website.

### 1. A real internal deal-pipeline report is committed to a GitHub repo

`DrakeKrommenhoek/mc_portfolio_intelligence` contains `Weekly Pipeline Report 7_6.pdf`.
The auditing agent assessed it as a **genuine internal Mountaingate pipeline report** —
IOI/LOI stages and dollar figures, using real names rather than the synthetic codenames the
rest of that repo uses. It violates the repo's own `CLAUDE.md` rule. Its contents were not
reproduced anywhere in this repo.

**Action:** purge it from git *history*, not just `HEAD` (`git filter-repo` or BFG), then
force-push and rotate nothing else — no credentials were involved. Do this before anything
else on this list.

### 2. `mc-performance-engine.vercel.app` is live, unauthenticated, and firm-branded

Real Mountaingate name and logo in the header, footer and `<h1>`. No auth, no `noindex`. The
root serves the branded app — there is no safe public landing page. It publishes internal
methodology (NDA redline, IC memo, IOI/LOI and CIM review runbooks). The seed data genuinely
is synthetic and a 14-check validator enforces that, so **the exposure is the brand and the
methodology, not client data** — but it is still a live internal firm tool on the open web.

**Decision made this session: the site will not link to, name, or screenshot it.** The brief
asked for it to be linked; I am overriding that, and flagging it rather than doing it
quietly. The project can still be told as a story — see §"Project 3" below.

**Action for Drake:** add auth or take the deployment down.

### 3. Two more repos must never be made public

- `voxai-platform` — a named live M&A target with thesis, meeting notes and financials.
- `mc-bond-targets` — 318 named targets and a 19-company shortlist for a named portfolio company.
- `mc-how-to-ai` — names a colleague across decks, emails and decision logs.

**One piece of good news:** zero secrets or credentials were found committed in any repo, on
any branch, across entire history. That part is genuinely clean.

---

## What is done

| | |
| --- | --- |
| ✅ | **Repository audit** — `docs/site-audit.md` (199 lines), verified against source and a real build |
| ✅ | **Drive research: Mountaingate + career** — `docs/research/drive-mountaingate-career.md` (441 lines) |
| ✅ | **Drive research: Ascend + Answer Movement** — `docs/research/drive-projects.md` (583 lines) |
| ✅ | **GitHub + live apps audit** — `docs/research/github-and-live-apps.md` (24 repos) |
| ✅ | **Design research** — `docs/design-research.md` (627 lines) |
| ✅ | **Design system** — `docs/design-system.md` + implemented tokens |
| ✅ | **Build fixes** — see below |
| ✅ | **Image pipeline** — 6.6 MB → 1.5 MB, renamed to describe actual contents |
| ✅ | **Typography** — three self-hosted variable families, 209 KB |
| ❌ | **Everything visual.** No component has been rewritten yet. |

### Build fixes shipped (commit `48478d4`)

- `npm run build` **failed outright** without `RESEND_API_KEY`, because `new Resend(...)` ran
  at module scope and Next evaluated it during page-data collection. Now constructed per
  request; the route returns 503 when unconfigured.
- The subscribe handler notified `drakekrommenhoek@gmail.com` — **missing the dot**. Every
  subscriber notification went nowhere. Fixed.
- `output: 'export'` was removed from `next.config.js`. It was incompatible with the POST
  route shipped alongside it, so **the subscribe form could not have worked as deployed**.
  Removing it also restores `next/image` optimization.
- The committed `.docx` résumé moved out of `content/`, which is the Markdown loader's directory.

### Photos — what they actually show

The old filenames were wrong. Verified by opening every image:

| New path | Actual content |
| --- | --- |
| `personal/with-dad.jpg` | Drake and his dad — *was* named `family/leadership-1` |
| `personal/team-event.jpg` | A large corporate soccer group shot — *was* named `family/dad-1`. Low value. |
| `personal/augusta.jpg` | Drake and a friend at the Augusta National clubhouse |
| `personal/surfing.jpg` | Drake surfing (Sunrise Surf School) |
| `personal/costa-rica.jpg` | Drake with a capuchin monkey on his shoulder in a mangrove |
| `personal/basketball.jpg` | Drake aged ~11 with a championship trophy |
| `personal/headshot.jpg` | Professional headshot |
| `personal/portrait-suit.jpg` | Full-length senior portrait |

The Augusta, surfing and Costa Rica shots are the three strongest. `team-event.jpg` is
probably unusable.

---

## Current repository state — IMPORTANT

`app/globals.css` now contains the **new design system** *plus* a clearly-marked
**temporary compatibility layer** at the bottom. The old components (`Hero`, `Experience`,
`Upcoming`, `About`, `Contact`, `Navbar`, `Footer`, and the writing components) have not been
rewritten and still reference the old utility classes. The compatibility block keeps the
deployed site coherent in the meantime.

**Step 1 of the next session is to rewrite the components and delete that block.** It is
labelled in the file.

---

## The facts, corrected

Research contradicted the brief in several places. **These corrections matter more than the design.**

| Claim | Reality | Source |
| --- | --- | --- |
| "~$3,000 in development funding" | **$2,866.00** exactly, non-dilutive seed grant | Signed CES term sheet, 16 May 2026 |
| Ascend "Founder", "independently built the MVP" | Signed as **Co-Founder**; three-person team — Drake, Carter, Emma | Same term sheet + Ascend team docs |
| "Top 10 among ~120 ventures" | **Top 10 confirmed.** The **~120 denominator is unverified** — it appears only on his résumé | Ascend final write-up |
| Economics + Philosophy + Entrepreneurship | Confirmed: **B.S. Economics; minors Entrepreneurship and Philosophy**, expected May 2028 | Master résumé |
| Sigma Chi **Social Chair** | **Not found anywhere in Drive.** The only documented office is **Rush Chair** (Aug 2025–present), and he was actively editing rush sheets on 3–4 Sep 2026 | Drive search |
| Campus AI initiative | **Not found in Drive.** No club or initiative by that name | Drive search |
| Club golf / club basketball | **Not found** as organisations. Golf appears as a *high-school* varsity captaincy and a personal interest | Drive search |
| Ascend interviews: "three" | **Five** — 2 persona + 3 unguided user tests. The write-up body says three; its own appendix lists five | Ascend write-up |
| "Project SLOPE", "career OS", "longitudinal career intelligence" | **These phrases appear nowhere in Drive.** `project-slope` exists as a 2-day GitHub prototype | Drive + GitHub |
| Family card game project | **No repo exists.** Euchre appears once, as a résumé interest | GitHub audit |
| Answer Movement "28 Day Journal Entries" | **Not a personal diary** — it is the app's product content, Joe's letter definitions and prompts. It is Joe's IP | Drive |
| GPA | Drifted 3.93 → 3.8 → **3.77** (Econ 3.80). Recommend omitting from a website entirely | Three résumés |

**Never publish:** portfolio company names (Bond Brand Loyalty, Harvest Group, Braze,
Relevate, TVEyes), the codename "Project Tube", the "How to AI" deck or any slide from it,
named Claude Enterprise projects, the `mc-performance-engine` URL, colleague names beyond
the first names he chose to thank himself (Michael and Mikayla), his phone number, or his
GPA. The full classification is in the research files, tagged per-fact.

---

## The best material found — use this

His **Summer 2026 Portable Record** is the strongest public-safe writing in the whole Drive,
and he sanitised it himself. Three highlights:

**The three converged principles** — he notes that modelling, diligence, AI enablement and
portfolio support all arrived at the same three rules without being designed to:

1. *Separate construction from audit.* Auditing while still building produces false confidence.
2. *One change at a time, verified, before the next.* "Confirming a single unit before
   proceeding feels slower and is dramatically faster."
3. *Never smooth over a gap.* "A number without its caveat becomes false precision."

**His single most original idea** — the delegation test:

> "The axis is not easy/hard, it is whether a human can verify the output cheaply.
> Extraction, restructuring, and comparison are cheap to verify. Recommendations,
> credibility assessments, and forecast assumptions are not. […] Better models move the
> line, they do not erase it."

**The story beat that works for the PE project:** it started as a broad "AI is coming" deck,
got narrowed after supervisor feedback to two concrete questions — *what use cases make a
team member's life easier, and how do they execute them quickly and securely* — and ended as
a use-case-first reference designed to be reopened mid-task rather than read once.

That last one is the whole Claude Student Partnership argument, told through evidence
instead of assertion. Lead with it.

---

## Honest project ranking (from the GitHub audit)

This contradicts the brief, which nominated Ascend as a flagship.

| Project | Reality | Recommended placement |
| --- | --- | --- |
| **The Answer Movement** | **Live, 302 commits, pushed 3 Sep.** Vanilla JS PWA + Vercel functions + Twilio + a VPS bot. Its test suite brace-extracts real functions out of a 9,058-line `index.html` and runs them in a Node VM across three timezones, with tests that deliberately assert *known bugs* until fixed. The auditor ran it: **24/24 green.** | **Flagship #1** |
| **Operation D.R.A.K.E.** | In development, deployed to a VPS. Python/FastAPI/SQLAlchemy/Notion/Docker + React 19. 40 commits. | **Flagship #2** |
| **The AI Playbook** (PE internship) | The story is excellent and fully sanitisable. The artifact is not publishable. | **Flagship #3 — narrative only, no link, no screenshots** |
| **Ascend** | A **3-day, self-described "interactive prototype"**: a 1,973-line mock dashboard, zero persistence, no tests, dormant since March. Calendar and Canvas integrations are explicit placeholders. It is also the most clickable thing he has. | **Lab, framed as a funded prototype** |
| **Listing Forge** | The surprise: 19.7k LOC, **386 tests**, and a README that opens by admitting it was never used for a real sale. Honestly retired. | **Lab** |
| **Project SLOPE** | 2-day prototype, 118 tests. React 19/TS/Zod/YAML. | Lab |
| **PhotoRank** | 1-day prototype, Next 16 + face-api.js | Lab |

Presenting a 3-day mock dashboard as a flagship next to a 302-commit live product with a
real test suite would be the single most damaging thing this site could do. Ascend's funded,
top-10 story is genuinely good — tell it as *a funded prototype that taught him something*,
which is both true and more interesting.

---

## What is left, in priority order

1. **Rewrite the components** against the new design system; delete the compatibility layer
   in `globals.css`.
2. **Typed content layer** — `content/projects/`, `experience.ts`, `explorations.ts`,
   `lab.ts`; extend writing frontmatter with `type`, `themes`, `published`, `featured`,
   `needsReview`.
3. **Homepage** as narrative: Hero → Now → Work → the connecting thread → Experience →
   Explorations → Writing → About → Contact.
4. **Project pages** at `/work/[slug]` with the state-line convention from
   `docs/design-system.md` §7.
5. **Lab** at `/lab`.
6. **Writing** — the reading room, plus the recovered Drive pieces. ⚠️ **The writing-research
   agent died before writing its file**, so `docs/writing-candidates.md` does not exist. This
   is the largest remaining research gap; re-run it.
7. **Screenshots.** `*.vercel.app` is blocked by this session's egress proxy, so none were
   captured. On a normal machine, just point Playwright at the live URLs. Chromium is
   already available and `playwright` + `sharp` are installed.
8. **Metadata / sitemap / robots / favicon / OG images.**
9. **Accessibility and performance passes.**
10. **Responsive QA** at 375 / 430 / 768 / 1024 / 1440.
11. **`docs/content-source-map.md`** — not yet written. Every public claim → source, date,
    confidence, classification.
12. **`docs/MORNING_REVIEW.md`.**

## Two existing essays are a problem

`content/writing/the-moment-before-structure.md` and
`content/writing/what-golf-taught-me-about-pressure.md` are fluent but generic — aphoristic
fragments, heavy em-dash cadence, tidy epigrammatic closings, and **no specific detail that
could only come from Drake's life.** Compare `before-tiktok-there-was-table-talk.md`, which
has an uncle who flipped the table after losing to quads with a full house. That one is
unmistakably his; the other two read as machine-assembled.

They were **not** deleted — that is Drake's call. But publishing them on a site whose whole
argument is "this person thinks for himself" works against the goal.

## Questions for Drake

1. Are you **Social Chair** now, or still **Rush Chair**? Drive only documents Rush Chair.
2. Does the **campus AI initiative** have a name, and how far along is it really?
3. **Ascend: Founder or Co-Founder?** You signed the term sheet as Co-Founder with a
   three-person team. The résumé says Founder and "independently built."
4. Where did **"~120 ventures"** come from? Top-10 is confirmed; the denominator isn't.
5. **Take `mc-performance-engine.vercel.app` down or put it behind auth?**
6. Confirm you want the **pipeline PDF purged from git history**.
7. Keep or kill the two essays above?
8. Is **DK Consulting** a real, presentable entity? Nothing in Drive names it directly.
9. **AMB** — location and exact entity name? Three résumés give three answers.
10. GPA on the site: 3.77, or omit? (Recommend omit.)
