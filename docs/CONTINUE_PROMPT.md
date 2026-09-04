# Continuation prompt — paste this into Claude Code in VS Code

Run this from the repo root, on branch `claude/festive-wozniak-voawei`
(`git fetch origin && git checkout claude/festive-wozniak-voawei`).

---

You are continuing a full rebuild of Drake Krommenhoek's personal website. A previous
session did all the research and laid the foundations, then hit a usage limit. Everything
you need is already in the repo — **read it before you write any code.**

## Read these first, in this order

1. `docs/OVERNIGHT_HANDOFF.md` — start here. It opens with three confidentiality findings,
   then lists corrected facts, the honest project ranking, and what's left.
2. `docs/site-audit.md` — what the old site got wrong and why.
3. `docs/design-system.md` — the visual language. It is already implemented in
   `app/globals.css` and `tailwind.config.ts`.
4. `docs/design-research.md` — patterns to borrow and avoid.
5. `docs/research/drive-mountaingate-career.md` — the professional record, with every fact
   tagged PUBLIC SAFE / PRIVATE CAREER CONTEXT / CONFIDENTIAL.
6. `docs/research/drive-projects.md` — Ascend and The Answer Movement, with a verification table.
7. `docs/research/github-and-live-apps.md` — what each repo actually is.

## Hard rules

- **Confidentiality.** Never publish: portfolio-company names (Bond Brand Loyalty, Harvest
  Group, Braze, Relevate, TVEyes), the codename "Project Tube", the "How to AI" deck or any
  slide from it, named Claude Enterprise projects, the `mc-performance-engine.vercel.app`
  URL, colleague names beyond Michael and Mikayla, Drake's phone number, or his GPA. When
  in doubt, leave it out and note it.
- **Accuracy over flattery.** The research corrected several claims from the original brief.
  Use the research, not the brief, wherever they disagree. Specifically: the CES grant is
  **$2,866**; Ascend was **co-founded** by a three-person team (Drake, Carter, Emma) and the
  shipped artifact is a **three-day interactive prototype with no persistence and no tests**;
  "top 10" is confirmed but "~120 ventures" is not; "Project SLOPE", "career OS" and
  "longitudinal career intelligence" appear nowhere in his own materials.
- **Never invent a metric.** If a number isn't in the research, it doesn't go on the site.
- **Mark uncertainty rather than blocking.** Build the section, set `needsReview: true`,
  keep moving.
- Work on `claude/festive-wozniak-voawei`. **Do not merge to `main`.** Commit in logical
  milestones and push after each one.

## Voice

He is a junior at Washington and Lee — B.S. Economics, minors in Entrepreneurship and
Philosophy, expected May 2028. He builds things, spent summer 2026 inside a private equity
firm working out where AI actually helps, and is currently questioning his own instinct to
optimise everything.

Write like him, not like a landing page. Ban: "passionate about", "at the intersection of",
"leveraging", "cutting-edge", "innovative solutions", "transformative", "results-driven",
"thought leader", "disrupt", "revolutionize". Prefer specifics, questions, evidence and
humour. The one existing essay that genuinely sounds like him is
`content/writing/before-tiktok-there-was-table-talk.md` — read it for cadence.

The strongest raw material is quoted in `docs/OVERNIGHT_HANDOFF.md` under "The best material
found". His delegation test — *"the axis is not easy/hard, it is whether a human can verify
the output cheaply… better models move the line, they do not erase it"* — is the single best
thing he has written. Build the private-equity project page around it.

## Work in this order

**1. Rewrite the components and delete the compatibility layer.**
`app/globals.css` ends with a clearly-marked temporary block that keeps the old components
rendering. Rewrite `Hero`, `Experience`, `Upcoming`, `About`, `Contact`, `Navbar`, `Footer`
and the writing components against the new design system, then delete that block. Prefer
server components; the old ones were client components only to run hover handlers, which
is now pure CSS.

**2. Typed content layer.** `content/projects/`, `content/experience.ts`,
`content/explorations.ts`, `content/lab.ts` as typed TypeScript. Extend the writing
frontmatter with `type`, `themes`, `published`, `featured`, `needsReview`. Drake must be able
to change a project status, a roadmap item or an open question without touching component code.

**3. Homepage as narrative** — Hero → Now → Work → the thread connecting the three projects →
Experience → Explorations (live open questions) → Writing → About → Contact. Not a résumé.
Break the fold around 70vh so the first real row is clipped.

**4. Project pages** at `/work/[slug]`. Three flagships, and they must feel like three
different domains rather than three cards:
- `answer-movement` — live, 302 commits, real test suite. Link it.
- `operation-drake` — in development, deployed to a VPS.
- `ai-playbook` — the PE internship story. **Narrative only: no link, no screenshots, no
  firm-internal detail.** The story is the narrowing — a broad "AI is coming" deck cut down
  after feedback to two concrete questions.
Use the state-line convention in `docs/design-system.md` §7: present tense above the line,
conditional below, and `Later` items phrased as questions.

**5. `/lab`** for Ascend (funded prototype, honestly framed), Listing Forge, Project SLOPE,
PhotoRank. Smaller type scale — density is the hierarchy.

**6. Writing.** Reading room at `/writing`, visually distinct from `/work`.
⚠️ **`docs/writing-candidates.md` does not exist** — the research agent that was building it
died. Re-run that research against Google Drive if the connector is available: search for
reflection, essay, poem, "Ordinary Time Traveler", "WRIT 100", energy, optimization,
movement, presence. Anything personal ships as `published: false` pending Drake's approval.

**7. Screenshots.** Point Playwright at `https://the-answer-movement-app.vercel.app/` and
`https://ascend-app-one.vercel.app/` — they were unreachable from the previous session's
sandbox but will work on a normal machine. `playwright` and `sharp` are already installed.
Never screenshot `mc-performance-engine`. Store under `public/images/projects/<slug>/`.

**8. Then:** metadata/sitemap/robots/favicon/OG, an accessibility pass, a performance pass,
responsive QA at 375/430/768/1024/1440, `docs/content-source-map.md`, and
`docs/MORNING_REVIEW.md`.

## Definition of done

The site accurately reflects who he is in September 2026; the three flagships tell real
stories with honest status; experiments are present without clutter; Mountaingate and campus
leadership are current; the writing section exists and personal pieces stay unpublished
until approved; links work; mobile is genuinely good; the production build passes;
confidential material stays confidential; and the copy sounds like Drake.

Work autonomously. Don't stop to ask unless proceeding would misrepresent him or expose
something confidential — otherwise make a reversible decision, write it down, and continue.
Update `docs/OVERNIGHT_HANDOFF.md` after each milestone so the next session can pick up cold.
