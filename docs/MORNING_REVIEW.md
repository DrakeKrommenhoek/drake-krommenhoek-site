# Morning review — 4 September 2026

**Branch:** `site-2026-full-refresh` (pushed). **Build:** passing.
**Not merged to `main`.** Production is untouched.

**Preview URL:** whatever Vercel generated for this branch — I could not reach the
dashboard to confirm it exists. Locally: `npm run build && npm run start` → `localhost:3000`.

---

## What actually happened

The previous session left a design system that nothing used. Every component still
referenced the old university navy and two fonts — Cormorant Garamond and DM Sans — that
self-hosting had already removed, so **the deployed site was silently falling back to
Georgia and system sans.** That is fixed. Seven routes now exist where there were four.

| | |
| --- | --- |
| Components rewritten on the design system | Hero, Navbar, Now, Work, Experience, About, Contact, Footer, all four writing components |
| New routes | `/work/answer-movement`, `/work/operation-drake`, `/work/ai-playbook`, `/lab` |
| Typed content layer | `content/projects.ts`, `content/lab.ts`, extended writing frontmatter |
| Compatibility layer | Deleted, 194 lines |
| Homepage JS | 13.4 kB → 7.8 kB (most components are server components now) |
| Screenshots | 35 per pass, 5 widths × 7 routes, plus a full JS-disabled pass |

I also merged in your `feat/scroll-animations` branch — it was five commits that existed
**only on your laptop**, unpushed. It is now on `origin` as `feat/scroll-animations` and
merged here. Your `useInView` hook survived; it is the engine inside the new `<Reveal>`.

## The five things to look at first

1. **`/work/ai-playbook`** — the page built around your delegation-test sentence. It is
   narrative only: no link, no screenshots, no portfolio companies, no internal URL. This is
   the page that has to carry the Student Partnership argument.
2. **The homepage "Now" section** — replaces "Upcoming", which described the Mountaingate
   internship in **future tense** three weeks after it ended. That was the most visible
   factual error on the site.
3. **`/lab`** — Ascend is here, labelled a prototype, with the caveat stated in its own
   entry. Check you are comfortable with how directly it says "this is a demo".
4. **The Experience section** — every entry is now one line. Mountaingate links out to the
   project page instead of repeating it in bullets.
5. **`/writing`** — currently one essay, because you held the other two.

## Copy you need to approve

Quoted so you can approve or reject from this document.

**Hero:**
> I build software people actually use, and spent last summer inside a private equity firm
> working out which half of the work a machine can be trusted with.

**The thread above the three projects:**
> These look like three different projects — a habit app, an agent that runs on a server,
> and ten weeks inside a private equity firm. They are the same problem three times: work
> out which half of the job you can safely hand to a machine, then build the thing that
> tells you when you got that wrong.

**Experience section subtitle** (this one is a tone call):
> The résumé version, for anyone who needs it

**About pull quote** — I replaced *"Discipline, curiosity, and a relentless drive to
improve"* because it would have survived find-and-replacing your name with anyone else's:
> Confirming a single unit before you move on feels slower, and is dramatically faster.

**Footer:**
> Economics at Washington and Lee. Currently working out which half of the job a machine
> can be trusted with.

**Lab, on Ascend** — the sharpest thing on the site about your own work:
> It is a demo, and it should be described as one. Nothing persists across a refresh, the
> dashboard is a 1,973-line mock, and the Canvas, Calendar and Handshake icons are images
> rather than integrations. It is also the most clickable thing I have made, which is
> exactly why the label matters.

## Claims you need to verify

| Claim on the site | Why it is uncertain |
| --- | --- |
| **"about 240 people"** open The Answer Movement | Your own README figure. Nobody has counted. It appears on the homepage and the project page |
| **"~320-company partner map"** | From your master résumé, whose Drive timestamp (16 June) predates the work it describes (July–August). Either the timestamp is wrong or the document was regenerated |
| **AMB Investment Banking** — name, location, title | Three résumés give three different answers: Boulder / Charleston SC / Remote, and three different job titles. I published "AMB Investment Banking, Investment Research Intern, Remote" |
| **Writing award** | I used the softer, earliest wording — "Finalist and Honorable Mention" — not the current résumé's "1 of 8 from 400+ submissions" |
| **HealthArk panel topic** | Your 2025 résumé says the talk was about AI in *education*; the 2026 ones say *healthcare and life sciences*. I published the latter |
| **Operation D.R.A.K.E.'s 280 tests** | The files are real and were counted, but the suite was never executed. The site says "test functions", never "passing" — keep it that way unless you run them |

## Writing held back

- `the-moment-before-structure` — `published: false`
- `what-golf-taught-me-about-pressure` — `published: false`

Both are still in the repo with a comment saying why. Verified: they 404 on direct URL and
are absent from `sitemap.xml`. You confirmed this call in session. The golf one is
salvageable — you were a varsity captain with a low single-digit handicap, and a named
tournament and a specific hole would fix everything that is wrong with it.

## Confidentiality decisions made on your behalf

1. **`mc-performance-engine` is not linked, named or screenshotted anywhere.** The previous
   session overrode the brief on this and I have kept that override. It is firm-branded and
   publicly reachable with no auth.
2. **No portfolio company names, no "Project Tube", no deck content, no colleague names.**
3. **Your client on The Answer Movement is described as "a fitness trainer", not named.** He
   did not agree to appear in your portfolio.
4. **GPA omitted**, per your instruction.
5. **The résumé PDF is published as-is, with your phone number in it.** You were asked and
   chose this. It is linked from the nav, hero and footer. Reversible in one commit if you
   change your mind.

## What is still ugly, unfinished or unverified

Being blunt, because you will find these in thirty seconds otherwise.

- **Experience is still the largest section on the homepage** — 30.5% against Work's 18.5%.
  I cut it from 37% by making every entry one line, but a résumé block is still the biggest
  thing on a page arguing that you build software. Moving it to its own page is the real
  fix and I did not do it.
- **No project screenshots.** The brief asked for Playwright shots of the live apps. I
  built the QA tooling and ran it against localhost, but never captured
  `theanswermovement.com` or the Ascend demo. The project pages are all type, no images.
- **No OG image.** Metadata declares `summary_large_image` and there is no image behind it,
  so link previews will be bare. `app/icon.svg` exists; a proper OG card does not.
- **The canonical domain is a guess.** `lib/site.ts` falls back to
  `https://drakekrommenhoek.com`, which I invented. Set `NEXT_PUBLIC_SITE_URL` or the
  sitemap and canonical tags will point somewhere that may not exist.
- **The three live URLs were never opened.** Everything about The Answer Movement and Ascend
  comes from reading their source. Someone should click them.
- **`docs/writing-candidates.md` was never re-run.** The previous handoff said it did not
  exist; it does, at 481 lines, but I did not mine it for new pieces.
- **No `/explorations` section.** The brief asked for live open questions on the homepage.
  Open questions exist on each project page instead.
- **Contact is 16% of the homepage** for a form, which is more room than it earns.
- **Roughly 30 MB of screenshots went into git history in one commit** before I caught it.
  They are untracked now, but that commit still carries them. Not worth rewriting history
  over; just know the clone is bigger than it should be.
- **Two of your résumé's own claims are still unresolved** — see the verification table.

## Questions, ranked

1. **Do you want the pipeline PDF purged from `mc_portfolio_intelligence`'s git history?**
   Still the most urgent thing on this list, and it has nothing to do with the website.
2. **Take `mc-performance-engine.vercel.app` down, or put it behind auth?** It is live,
   unauthenticated and firm-branded right now.
3. **What is the real domain?** Everything canonical depends on it.
4. **Is "about 240 people" right?** It is on two pages.
5. **Should Experience move to its own page** so the homepage is genuinely work-first?
6. **AMB — what is the actual entity name, location and your title?**
7. **Is DK Consulting a real, presentable thing?** Nothing in Drive names it, so I left it
   off entirely.
8. **Do you want the two held essays rewritten rather than shelved?** The golf one has a
   real essay inside it.
9. **Can I name Joe as your Answer Movement collaborator,** or does that stay "a fitness
   trainer"?
10. **Is "The résumé version, for anyone who needs it" too flippant** for the audience you
    care about?
