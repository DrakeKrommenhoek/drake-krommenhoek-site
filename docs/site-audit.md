# Site Audit — September 2026

Audit of `drake-krommenhoek-site` as it existed at commit `dc76be0` (branch `main`),
performed before the 2026 rebuild. Everything below was verified by reading the source
and building the project locally, not by reading the README.

## 1. What is actually there

**Stack (verified):** Next.js 14.2.35 (App Router), React 18.3, TypeScript 5.4 (strict),
Tailwind 3.4, `gray-matter` + `remark` for Markdown, `resend` for the subscribe endpoint.
Deployed on Vercel.

**Routes:** `/` (single-page: Hero → Experience → Upcoming → About → Contact → Footer),
`/writing`, `/writing/[slug]`, `POST /api/subscribe`.

**Content:** 3 Markdown essays in `content/writing/`, 8 personal JPEGs in `public/images/`,
1 resume PDF (`Krommenhoek_Resume_Feb.pdf`), 1 resume `.docx` committed inside `content/`.

## 2. Current strengths — keep these

- **The Markdown writing system works.** `lib/writing.ts` + frontmatter + `remark` is the
  right shape. It needs a richer schema (type, themes, published, featured, needsReview)
  but the foundation should be extended, not replaced.
- **The prose styling in `globals.css` (`.prose-writing`) is genuinely good.** Generous
  line-height (1.82), sensible measure, em-dash list markers, restrained blockquote rule.
  This is the most considered part of the existing design and its *intent* carries forward.
- **The personal photography is a real asset.** Eight authentic photos (golf, basketball,
  family, travel, surf, headshot) are worth far more than stock imagery. Keep the files.
- **Typographic instinct is sound.** A serif display face against a clean sans is the right
  family of decision, even if the specific pairing changes.
- **"Before TikTok, There Was Table Talk"** is the strongest existing content on the site —
  it sounds like a person. It survives the rebuild.
- **Static-first architecture.** No heavy client framework, no animation library, no CMS.
  The performance floor is high. Preserve that.

## 3. Current weaknesses

### 3.1 Content is materially out of date and, in places, wrong

| Claim on the live site | Status |
| --- | --- |
| "Economics & Accounting, Minor: Philosophy" | **Wrong.** Economics major; Philosophy and Entrepreneurship minors. |
| "Bachelor of Science" | **Needs verification.** W&L awards both BA and BS. |
| Mountaingate Capital shown under **"What's next"** | **Wrong tense.** The internship was Summer 2026; it is now September 2026. It is past experience, and it is the single most important professional item on the site. |
| Sigma Chi described via rush-budget / new-member-evaluation duties | **Outdated.** Current role is Social Chair. |
| Résumé link is `Krommenhoek_Resume_Feb.pdf` | **Stale.** February 2026 résumé, seven months old. |
| "Relevant Courses Through May 2026" | Stale framing. |
| High-school content is prominent: Principal's Honor Roll, NHS Curator of Academic Inductions, Golf Regional Champions, varsity golf captain | **Should not be a headline** for a college junior with a private-equity internship and three shipped products. |
| Lifeguard, pizza-restaurant server, e-commerce resale given equal weight to PE and IB work | Flattens the trajectory. |

### 3.2 The three most interesting things about Drake are entirely missing

The site contains **zero** mention of **Ascend**, **The Answer Movement**, or the
**MC Performance Engine** — three shipped, publicly-reachable products. A visitor
currently cannot tell that he builds anything at all. This is the largest single failure
of the current site.

Also absent: the campus AI initiative, Project SLOPE, Operation D.R.A.K.E., the family
card-game project, and any evidence of how he works with AI.

### 3.3 Two of the three published essays do not sound like him

`the-moment-before-structure.md` and `what-golf-taught-me-about-pressure.md` are fluent
but generic — aphoristic sentence fragments, heavy em-dash cadence, tidy epigrammatic
closings, no specific detail that could only come from Drake's life. Compare against
`before-tiktok-there-was-table-talk.md`, which is full of unrepeatable specifics (the
uncle who flipped the table after losing to quads with a full house). The first two read
as machine-assembled and should be pulled or substantially rewritten from source material.
**Flagged for Drake's decision — not deleted unilaterally.**

### 3.4 Technical debt

- **The production build is fragile.** `npm run build` **fails outright** without
  `RESEND_API_KEY` set, because `new Resend(...)` runs at module scope in
  `app/api/subscribe/route.ts` and Next evaluates it during page-data collection.
  A missing environment variable should never break a build.
- **`output: 'export'` conflicts with the API route.** `next.config.js` requests a static
  export while `POST /api/subscribe` requires a server. These cannot both be true; the
  subscribe form is unreliable by construction.
- **Wrong email in the subscribe handler.** It notifies `drakekrommenhoek@gmail.com`;
  the real address is `drake.krommenhoek@gmail.com`. Subscriber notifications go nowhere.
- **Design tokens are declared but unused.** `tailwind.config.ts` defines `wl-blue`,
  `cream`, `gold`, and font families, and then nearly every component ignores them in
  favour of enormous inline `style={{...}}` objects with hard-coded hex values. There is
  no single source of truth for colour or type.
- **Hover states are implemented in JavaScript.** `onMouseEnter` / `onMouseLeave`
  handlers mutate `style.color` directly (Hero, Footer, Navbar). This forces client
  components, breaks on keyboard focus, and is unreachable for touch users.
- **Almost everything is a client component** — `Hero`, `Footer`, `Navbar`, `About` all
  carry `'use client'`, several only to run a hover handler or a one-line `useState`.
- **Images are unoptimized and oversized.** `images.unoptimized: true` plus ~6.6 MB of raw
  JPEGs, including a single **3.7 MB** file (`family/leadership-1.jpeg.jpeg`). Filenames
  carry doubled extensions (`.jpg.jpeg`) and one contains a space (`Senior Photo.jpeg`).
- **A `.docx` résumé is committed under `content/`**, where the Markdown loader lives.
- **Metadata is thin.** No OpenGraph, no Twitter card, no canonical URL, no sitemap,
  no robots, no favicon, no per-page metadata. The description still says
  "Economics, Accounting and Philosophy student".
- **Fonts load via render-blocking `<link>` to Google Fonts** rather than `next/font`,
  costing a round trip and risking layout shift.
- **`* { scroll-behavior: smooth }`** is applied to every element and ignores
  `prefers-reduced-motion`.
- **No tests, no CI, no linting in the build path.**

### 3.5 UX and information-architecture problems

- **One long page with no destinations.** Nothing can be linked to, nothing rewards a
  second visit, and there is no room for depth. A project cannot be explained in a card.
- **Nothing progresses.** Every section is the same rhythm: centred label, centred serif
  heading, centred gold rule, grid of bordered cards. There is no pacing, no tension, no
  surprise, and therefore no reason to keep scrolling past the hero.
- **The hero says almost nothing.** "Economics, Accounting & Philosophy — driven by
  curiosity, competition, and a long-term growth mindset across finance, entrepreneurship,
  and leadership" is a string of abstractions that would fit thousands of students. It
  contains no evidence and no specificity.
- **The site is a résumé transcribed into HTML.** It answers "what has he done" and never
  touches "how does he think", "what pulls him in", or "what is he building right now".
- **Writing is a second-class citizen** — reachable only from the nav, visually identical
  to the rest of the site, and not featured on the homepage at all.
- **No sense of the present.** Nothing tells a visitor what Drake is working on *this week*.

### 3.6 Design problems

- **The identity is borrowed, not personal.** `#002147` is Washington & Lee's navy and the
  gold reads as institutional crest. The site looks like a university department page.
- **The card is the only compositional idea.** Bordered white rectangle, 1 px hairline,
  subtle shadow, repeated for every kind of content regardless of what it contains.
- **Centred everything.** Labels, headings, rules and intros are all centre-aligned, which
  removes the left edge the eye uses to move down a page.
- **Cormorant Garamond at small sizes** is delicate to the point of frailty, and the
  DM Sans body at weight 300 on navy is below comfortable contrast.
- **No dark-mode consideration, no motion system, no spacing scale** beyond Tailwind
  defaults used ad hoc.

### 3.7 Accessibility

- Hover-only colour changes (JS-driven) are invisible to keyboard users.
- No visible `:focus-visible` styling anywhere.
- Decorative `<div>` rules and the scroll indicator lack proper semantics.
- Body copy at `rgba(255,255,255,0.72)` weight 300 on `#002147` is thin.
- `scroll-behavior: smooth` unconditionally, with no `prefers-reduced-motion` guard.
- Résumé link opens a new tab with no indication.
- Heading order has not been verified across sections.

## 4. Missing stories

1. **He builds things.** Three live products, none mentioned.
2. **How he uses AI.** He treats it as a collaborator and builder; the site is silent.
3. **The through-line.** Why one person builds a career platform, a wellness platform, and
   a private-equity AI engine.
4. **Evolution.** Every project changed thesis substantially; that is the interesting part.
5. **The present tense.** What he is exploring right now, as open questions.
6. **The shift away from optimization.** The most distinctive thing he is currently
   thinking about does not appear anywhere.
7. **Depth behind each project.** No project has anywhere to go.

## 5. Recommended information architecture

```
/                     Home — narrative, not a résumé
  ├── Hero            One memorable line + grounding line + current status
  ├── Now             What he is actually doing this term (dated, editable)
  ├── Work            Three flagship projects, each visually distinct
  ├── The thread      Why these three belong to one person
  ├── Experience      Compact, trajectory-first
  ├── Explorations    Live open questions
  ├── Writing         Featured pieces, styled as reading not as cards
  ├── About           Human texture + real photographs
  └── Contact

/work                 Index of everything built
/work/[slug]          Project pages: ascend, answer-movement, performance-engine, …
/lab                  Smaller experiments (SLOPE, Operation D.R.A.K.E., card table)
/writing              Reading room — deliberately different from /work
/writing/[slug]       Individual pieces
```

**Content layer:** typed TypeScript data files under `content/` for projects, experience,
explorations and lab entries; Markdown + frontmatter for writing. Status, roadmap items,
explorations and screenshots must all be editable without touching component logic.

## 6. Opportunities

- Give each flagship project a distinct visual personality so three domains read as three
  domains, not three cards.
- Show current state and speculative roadmap in the same view, unmistakably separated, so
  the roadmap reveals judgement rather than overclaiming.
- Use real screenshots of the live products as evidence.
- Make the writing section feel like a different room: wider margins, longer measure,
  quieter chrome.
- Build a personal design system with one restrained accent, replacing borrowed navy.
- Treat "open questions" as first-class, dated content — proof of someone in motion.
- Fix build fragility, image weight, metadata and accessibility along the way.

## 7. What this audit did **not** conclude

- Whether the two suspect essays should be deleted — that is Drake's call.
- The correct degree designation (BA vs BS) — needs verification against the résumé.
- Whether any Mountaingate material is publishable — handled separately under the
  confidentiality classification in `docs/content-source-map.md`.
