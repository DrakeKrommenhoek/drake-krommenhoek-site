# Content source map

Every factual claim the site makes in public, with where it came from and how much
weight it can carry. Written so that if someone challenges a line on the site, the
answer is one lookup away rather than a memory test.

**Confidence key**
- **High** — corroborated by a primary artifact (signed document, source code, executed test).
- **Medium** — appears in Drake's own materials but is self-reported and uncorroborated.
- **Low** — appears once, or versions disagree. Flagged on the site or held back.

**Classification key** — `PUBLIC SAFE`, `HELD` (deliberately not published), `NEEDS DRAKE`.

---

## Hero and Now

| Claim | Source | Confidence | Class |
| --- | --- | --- | --- |
| Washington and Lee, Economics, 2028 | Master résumé; all three résumé versions agree on the year | High | PUBLIC SAFE |
| "spent last summer inside a private equity firm" | Mountaingate internship, Jun–Aug 2026 | High | PUBLIC SAFE |
| Third year at W&L | Class of 2028, so junior year in Sep 2026 | High | PUBLIC SAFE |
| Rush Chair, Sigma Chi | Résumé (Aug 2025 – present); Drive shows him editing rush sheets 3–4 Sep 2026. **Confirmed by Drake in session, 4 Sep 2026** | High | PUBLIC SAFE |
| Building The Answer Movement with a fitness trainer | 302-commit repo, last pushed 3 Sep 2026 | High | PUBLIC SAFE |
| The tacit-judgment handoff question (quoted) | Summer 2026 Portable Record, verbatim | High | PUBLIC SAFE |

## /work/answer-movement

| Claim | Source | Confidence | Class |
| --- | --- | --- | --- |
| 302 commits, last shipped 3 Sep 2026 | Git history, read directly | High | PUBLIC SAFE |
| 9,058-line `index.html` | File measured in the audit | High | PUBLIC SAFE |
| 24 of 24 tests passing across three timezones | **The auditor executed the suite.** America/Denver, UTC, Australia/Sydney | High | PUBLIC SAFE |
| Tests deliberately assert known bugs; 3 pinned, 1 fixed | Test files read; findings C-02, C-04, D-02 open, B-01 flipped | High | PUBLIC SAFE |
| "about 240 people" | Drake's own README. **Never independently counted** — flagged `needsReview` in `content/projects.ts` | Medium | NEEDS DRAKE |
| README quote about the worst bug | Verbatim from the repository README | High | PUBLIC SAFE |
| Admin endpoint fallback secret removed | Audit finding D-09, fix present in source | High | PUBLIC SAFE |
| Client is a fitness trainer | Repo and Drive. **His name is not published** — he did not consent to appear here | High | PUBLIC SAFE |

## /work/operation-drake

| Claim | Source | Confidence | Class |
| --- | --- | --- | --- |
| 40 commits, last shipped 3 Sep 2026 | Git history | High | PUBLIC SAFE |
| 280 test functions across 29 files | Files counted. **Not executed** — pytest unavailable in the audit environment. The page says "test functions", never "passing" | High | PUBLIC SAFE |
| Notion sync: 12 modules, 98 tests | Source read | High | PUBLIC SAFE |
| Deployed to a DigitalOcean VPS, Ubuntu 24.04, Docker | `CURRENT_STATE.md`, updated 3 Sep 2026 | High | PUBLIC SAFE |
| 14-day soak per phase | Project roadmap doc | High | PUBLIC SAFE |
| Whisper transcription **not** claimed as working in production | Roadmap lists it as open; the page puts it under "Next" | High | PUBLIC SAFE |
| Repo and live URL | **Private repo, no public URL. Nothing linked** | — | HELD |

## /work/ai-playbook

The most constrained page on the site. Nothing here names a portfolio company, a deal
codename, a colleague, an internal URL, or reproduces any slide.

| Claim | Source | Confidence | Class |
| --- | --- | --- | --- |
| Private Equity Intern, Denver, Jun–Aug 2026, ~10 weeks | Résumé + portable record | High | PUBLIC SAFE |
| Diligence across 5+ active processes | Master résumé | Medium | PUBLIC SAFE |
| ~320-company partner map, triaged to ~15 | Master résumé. **The document's timestamps are internally inconsistent** — flagged `needsReview` | Medium | NEEDS DRAKE |
| Capstone: three-statement model, DCF, comps, sum-of-the-parts | Portable record | High | PUBLIC SAFE |
| The narrowing to two questions after supervisor feedback | Portable record, close paraphrase | High | PUBLIC SAFE |
| "supports analysis" → "structures data and prepares for audit" | Portable record, verbatim | High | PUBLIC SAFE |
| The delegation-test pull quote | Portable record, verbatim | High | PUBLIC SAFE |
| The firm's name (Mountaingate Capital) | On his résumé already; naming an employer is normal | High | PUBLIC SAFE |
| Portfolio companies, "Project Tube", deck slides, internal tool URL, colleague names | — | — | **HELD — never publish** |

## /lab

| Claim | Source | Confidence | Class |
| --- | --- | --- | --- |
| Ascend: $2,866 grant | **Signed CES term sheet, 16 May 2026.** Exact figure, not the résumé's "~$3,000" | High | PUBLIC SAFE |
| Ascend: top ten at the W&L Entrepreneurship Summit | Ascend write-up | Medium | PUBLIC SAFE |
| Ascend: "~120 ventures" | **Not published.** The denominator appears only on his résumé and is uncorroborated | Low | HELD |
| Ascend: three-person course team, Drake built the MVP | Term sheet signed "Co-Founder"; team docs name Drake, Carter, Emma. **Drake stated in session that he designed and built the MVP solo and the other two are no longer involved.** The site reflects both facts | High | PUBLIC SAFE |
| Ascend: three days, 1,973-line mock dashboard, no persistence | Source read; 14 commits 16–19 Mar 2026 | High | PUBLIC SAFE |
| Listing Forge: 19,771 lines, 386 tests | Counted in the audit | High | PUBLIC SAFE |
| Listing Forge retirement quote | README, close paraphrase | High | PUBLIC SAFE |
| Project SLOPE: 118 tests, "closed loops: zero" | Source and README | High | PUBLIC SAFE |
| PhotoRank: one day, needs manual model weights | Git history and README | High | PUBLIC SAFE |
| Pursuit of Progress: 3,338 lines, abandoned Mar 2026 | Source and git history | High | PUBLIC SAFE |

## Experience section

| Claim | Source | Confidence | Class |
| --- | --- | --- | --- |
| B.S. Economics, minors Entrepreneurship and Philosophy | Master résumé. **Corrected** — the old site said "Economics & Accounting, Minor: Philosophy", wrong on both counts | High | PUBLIC SAFE |
| Writing award | Published as "Finalist and Honorable Mention", the earliest and most contemporaneous wording. The current résumé's stronger "1 of 8 from 400+" is **not** used | Medium | NEEDS DRAKE |
| GPA | **Omitted.** Drifted 3.93 → 3.8 → 3.77 across three résumés. Drake chose to omit | — | HELD |
| AMB: 15–20 firms, May–Sep 2025, Remote | Master résumé. **Entity name, location and title differ across three résumés** | Low | NEEDS DRAKE |
| Resale: 50+ items, $2,200+, ~40% margins | Master résumé. 40% used; the 2025 résumé's "70%" is contradicted by both later versions | Medium | PUBLIC SAFE |
| Water World: 10+ saves a summer | Résumé, self-reported | Medium | PUBLIC SAFE |
| CES member, $2,866 grant to Ascend | Term sheet + résumé | High | PUBLIC SAFE |
| HealthArk panel, Sep 2025, healthcare and life sciences | Two of three résumés agree; the 2025 version says "education" instead | Medium | NEEDS DRAKE |
| Holy Family: honor roll, golf captain, two regional titles | Résumés | Medium | PUBLIC SAFE |
| "Social Chair", campus AI initiative, club golf, club basketball | **Not published.** None appear anywhere in Drive | Low | HELD |
| DK Consulting | **Not published.** No Drive artifact names it directly | Low | NEEDS DRAKE |

## Writing

| Piece | State | Reason |
| --- | --- | --- |
| Before TikTok, There Was Table Talk | **Published** | Unmistakably his — his own opening poem, the Krommenhoek household, an uncle losing to quads |
| The Moment Before Structure Takes Hold | `published: false` | Aphoristic fragments on em-dashes, no detail that could only be his. Drake's call, confirmed in session |
| What Golf Taught Me About Pressure | `published: false` | Same problem. He was a varsity captain with a low single-digit handicap; a named tournament would fix it |

Both drafts remain in the repository with a comment explaining the hold. Verified: they
return 404 on direct URL and do not appear in `sitemap.xml`.

---

## Standing confidentiality rules

Never publish, in any form: portfolio-company names (Bond Brand Loyalty, Harvest Group,
Braze, Relevate, TVEyes), the codename "Project Tube", any slide or copy from the "How to
AI" deck, named Claude Enterprise projects, the `mc-performance-engine` URL, colleague
names beyond Michael and Mikayla, or firm methodology specifics.

**One deliberate exception, made by Drake:** the résumé PDF at
`/Krommenhoek_Resume_Feb.pdf` is linked from the nav, hero and footer, and almost certainly
contains his phone number. He was asked and chose to publish it as-is on 4 Sep 2026.
