# Design Research — drakekrommenhoek.com

Prepared for a rebuild of Drake Krommenhoek's personal site.
Subject: junior at Washington & Lee (Economics; Philosophy + Entrepreneurship minors, '28), private-equity/investing work, AI-native product building (student career-development platform, wellness/movement platform, internal PE workflow engine), and essays.

---

## 0. Method & limitations — read this first

**Live web research was substantially blocked by this session's network egress policy.** Attempts to load craigmod.com, stephango.com, maggieappleton.com, rauno.me, sive.rs, leerob.com, danluu.com, news.ycombinator.com, wikipedia.org, web.archive.org and r.jina.ai all returned `EGRESS_BLOCKED`. I did not render or screenshot any of these sites.

Three channels *did* work, and I used them:

1. **GitHub (github.com + raw.githubusercontent.com)** — reachable. I read actual published source for a small number of open-source personal sites. Claims sourced this way are marked **[source-read]**.
2. **Web search** — reachable. Returns indexed summaries, not page loads. Claims sourced this way are marked **[search-corroborated]**.
3. **Prior knowledge** — everything else. Marked **[prior knowledge]**.

**What this means for you as a reader:**

- Anything marked **[prior knowledge]** describes a *pattern I am confident these sites have used*, at a level of abstraction I can stand behind. I have deliberately **not** invented specific current copy, current typeface names, or current layouts for those sites and presented them as fresh observation. Where I name a typeface for a site I did not read, I say "I believe" and you should treat it as a lead to verify, not a fact.
- Sites redesign. Before citing any specific claim here in a conversation or a pitch, open the site and re-verify.
- **The prescriptive half of this document — sections 3 through 12 — does not depend on live fetching.** That is where the weight is, and that is what a designer should build from. Those sections are original synthesis and are stated as opinion, with mechanics specific enough to implement.

---

## 1. Where the current site stands (source-read, this repo)

Read directly from `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`, `components/Hero.tsx`:

| Token | Current value | Read |
|---|---|---|
| Display face | Cormorant Garamond 400–700 + italics | Delicate, high-contrast, wedding-invitation/luxury register |
| Body face | DM Sans 300–600 | Neutral geometric sans; fine, but generic |
| Primary | `#002147` W&L navy, used as a **full-bleed hero field** | Reads "university brochure" |
| Accent | `#9B8B5E` / `#C4AE78` gold | Reads "collegiate crest" |
| Neutral | `#F7F5F0` cream, white body | Warm, fine |
| Hero | Full-viewport navy, 45° repeating-line texture at 3.5% opacity, uppercase `WASHINGTON & LEE UNIVERSITY` overline in gold, name in Cormorant at `clamp(2.8rem, 5.5vw, 5.2rem)` | The overline gives the *institution* top billing over the person |
| Sections | `.section-title` is centred; `.section-label` is centred, gold, uppercase, `0.18em` tracking | Centred everything = brochure rhythm, not editorial rhythm |
| IA | Hero → Experience → Upcoming → About → Contact | This is a **resume in scroll form** |

**The three real problems, stated plainly:**

1. **The IA is a résumé.** "Experience / Upcoming / About / Contact" is the structure of a PDF, not of a person who builds things and writes. Nothing on it can only be true of Drake.
2. **The identity is borrowed.** Navy + gold + Cormorant is W&L's identity with the serial numbers filed off. It transfers *the school's* credibility, which is exactly the credibility a 20-year-old should stop leaning on.
3. **Centred + full-bleed navy + gold uppercase overline is the "prestige finance" template.** It is legible and safe. It is also indistinguishable from a thousand banking-club sites, and it actively hides the most interesting fact about him — that he ships software.

Everything below is aimed at those three problems.

---

## 2. Reference gallery

Provenance tag on every entry. Read section 0 before trusting a specific.

### 2.1 Interdisciplinary builders / founders who write

**Anthony Fu — antfu.me** — **[source-read]** (`antfu/antfu.me`: `pages/index.md`, `src/styles/main.css`)

- *Hero, verbatim from source:* "Hey! I'm Anthony Fu, a fanatical open sourceror and design engineer." One sentence, one self-label, done. Time-to-understand: about two seconds.
- *IA:* index page is prose-first, not card-first — a short paragraph of what he does ("Dreaming up cool ideas and making them come true", "tools that help myself and others to be more productive"), then activities enumerated in running text (talks, blog posts, a Mandarin podcast *No Coding Today*, live streams, generative art, photography), then a "Find me on" list. Projects are a *separate* destination, not a homepage grid.
- *Color, verbatim from `main.css`:* the entire palette is `--c-bg: #fff` / `#050505` (dark), scrollbar `#eee` / `#111`, selection `#8884`, progress bar `#888`, shadow `#0000001a`. **There is no brand accent colour at all.** The colour in the design comes from content — photos, code highlighting — never from chrome.
- *Motion, verbatim:* a 2px-tall top scroll-progress bar; entrance animation with `translate: 0 10px`, `1s` duration, `90ms` stagger between items. That is the whole motion budget.
- *Worth borrowing for Drake:* the one-sentence self-label; prose-first homepage instead of a card grid; the near-zero chrome palette; the 90ms stagger as the *only* entrance motion.
- *Wrong for Drake:* his "activities" list works because he has a decade of artifacts. Drake needs each item to carry evidence, not just be named.

**Steph Ango (kepano) — stephango.com** — **[prior knowledge; note: `kepano/kepano.github.io` returned 404 this session, so the repo name I remembered is wrong — re-verify]**

- The pattern I'm confident about: an extremely low-chrome, near-unstyled personal site publishing directly from Obsidian markdown, organised as a flat list of *many small pages* (essays, notes, lists, an explicit "now"-style page, opinionated things-I-use lists) rather than a few big ones. Search **[search-corroborated]** confirms the Obsidian→static-HTML publishing flow and a minimalist design philosophy consistent with his `obsidian-minimal` theme.
- *Worth borrowing:* the **flat-list homepage** — one long list of dated, titled things, no categories, no cards. It scales indefinitely and never looks empty.
- *Wrong for Drake:* it's *too* undesigned for someone who needs to signal design/product judgment. He needs more visual authorship than this.

**Paco Coursey — paco.me** — **[source-read]** (`pacocoursey/paco` README)

- README, verbatim: "Designed with a focus on minimalism, UI interactions, and typography." Next.js + CSS Modules. The repo is archived and labelled an outdated 2020 version kept as a template.
- The pattern: a designer-engineer's site where the *interactions themselves* are the portfolio — the site is the work sample. Notably it has no case-study section proving he can do UI; the nav, the theme toggle and the hover states do that job.
- *Worth borrowing:* the idea that **craft in the site's own micro-interactions substitutes for a paragraph claiming craft**. One or two genuinely well-made interactions beat a "Skills" list.
- *Wrong for Drake:* he is not selling interaction design. Over-investing here would read as decoration rather than evidence.

**Samuel Kraft — samuelkraft.com** — **[source-read]** (`samuelkraft/samuelkraft-next` README + tree)

- Stack per README: Next.js, TypeScript, MDX, Tailwind, Contentlayer, Fauna, Vercel. Root dirs: `components`, `data`, `hooks`, `lib`, `pages`, `public`, `scripts`, `styles`.
- The structurally interesting bit: a `data` directory separate from `pages` — i.e. **projects and writing are content records, not hand-built pages.** That is the architecture that makes a "ledger"-style site maintainable.
- *Worth borrowing:* content-as-data. Drake should define a single `entries` collection with a `type` field, not hand-code sections.

**Others in this category — [prior knowledge, pattern-level only]:** Robin Sloan (robinsloan.com), Nadia Asparouhova (nadia.xyz), Tom Critchlow (tomcritchlow.com), Linus Lee (thesephist.com). The shared pattern worth naming: **all of them lead with a claim about how they think, not a list of where they worked.** Sloan's site in particular treats "things I made" and "things I wrote" as the same kind of object. Critchlow's is the clearest example I know of *publishing your thinking in public while it is still incomplete*, with explicit framing that the work is in progress.

### 2.2 Product designers with strong project storytelling

**[prior knowledge]** — Rauno Freiberg (rauno.me), Emil Kowalski (emilkowalski.com), Brian Lovin (brianlovin.com), Jim Nielsen (blog.jim-nielsen.com — note `jimniels/blog.jim-nielsen.com` 404'd this session, so that repo path is wrong).

The reliable pattern across strong designer sites, stated at a level I can stand behind:

- **A "craft" or "experiments" surface that is explicitly separate from "work."** Small, self-contained UI pieces with no case-study apparatus. Their function is *proof of taste at high frequency* — many small artifacts beat three big ones.
- **Case studies open with the constraint, not the client.** The strong ones start with a specific problem statement and a specific number, then show the artifact. The weak ones start with "Role: Product Designer. Timeline: 12 weeks."
- **Annotated stills beat carousels.** The best project pages I can recall are a vertical sequence of screenshots, each with a caption making one argument. The caption is the story; the image is the evidence.
- *Worth borrowing:* the separation of **Work** (few, deep, argued) from **Craft/Bench** (many, small, undefended). Drake has exactly this shape — three real products plus a stream of experiments.
- *Wrong for Drake:* the full designer case-study template (Role / Team / Timeline / Process / Wireframes / Final). It is a job-application artifact. He is not applying to be a product designer, and the template would flatten what makes his projects interesting (that they were built to solve his own problems inside real institutions).

### 2.3 Writers/essayists with beautiful reading experiences

**Craig Mod — craigmod.com** — **[prior knowledge; fetch blocked]**

- The pattern I'd stake a claim on: **long-form essays with photography set inline as part of the argument, not as decoration.** Generous measure, generous leading, a serif reading face, and — crucially — photographs that are *captioned with facts* (place, walk, day) so they function as reportage. It is the single best answer I know to "how do I use personal photography without becoming a lifestyle blog."
- *Worth borrowing for Drake:* **caption discipline.** Every photo earns its place by carrying information the text doesn't.

**Henrik Karlsson (henrikkarlsson.xyz), Robin Sloan, Paul Graham (paulgraham.com), Gwern (gwern.net)** — **[prior knowledge]**

- Graham's site is the useful counter-example: typographically poor (narrow-ish measure, plain default type, no hierarchy) and *enormously* read. The lesson is not "typography doesn't matter"; it's that **substance density is the primary reading incentive** and design is a multiplier on it, never a substitute.
- Gwern's is the best-known example of **heavy metadata around an essay** — visible status, confidence, importance, and last-modified date attached to each piece. I'm confident about the presence of that apparatus; I'd re-verify the exact field names before quoting them.
- *Worth borrowing:* attaching **date + status + confidence** to writing. It signals intellectual honesty and it makes an essay page feel like a living record.
- *Wrong for Drake:* Gwern-level apparatus would be absurd on a 20-year-old's essays. Two fields, not seven.

### 2.4 Investors and operators who feel human, not corporate

**[prior knowledge]** — Elad Gil (eladgil.com), Sriram Krishnan (sriramk.com), Alex Danco (alexdanco.com), Packy McCormick (Not Boring).

- The pattern that separates the human ones from the corporate ones: **the writing is the front door and the portfolio is the footnote.** A corporate investor site leads with logos; a human one leads with an argument and mentions the fund in the third paragraph.
- Second pattern: **they say what they're wrong about.** A changed-my-mind note or a public revision is the single strongest anti-corporate signal available, because no comms team would ever approve one.
- *Worth borrowing for Drake:* leading with a point of view about markets/technology rather than a list of firms. He is a junior; a list of firms is short and a point of view is unlimited.
- *Wrong for Drake:* the "thesis" voice. A 20-year-old writing "our thesis is that…" reads as costume. First person singular, specific, and provisional is the only register that works at his stage.

### 2.5 Engineers with now pages, gardens, and labs

**The /now convention** — **[search-corroborated]**

- Originated by Derek Sivers, who added `/now` to his site because he was repeatedly asked what he was doing; the point was "a simple, easy-to-remember and easy-to-type link" describing where he's at, what he's focused on, **and what he's not**. It fills the gap between a static About page and a social feed. Greg Albritton suggested collecting them; that became nownownow.com, a directory of /now pages.
- The load-bearing detail most people miss: **"and what I'm not doing."** A now page that only lists activity is a brag list. A now page that names what's been deprioritised is a *decision document*, and that is what makes it interesting.

**Digital-garden maturity taxonomy** — **[search-corroborated]**

- Maggie Appleton's widely-copied convention grades notes as **Seedling → Budding → Evergreen** (🌱 → 🌿 → 🌳): seedlings are rough, early, possibly a few sentences; budding notes have structure and are still developing; evergreen notes are mostly finished with only minor iterations expected. The term "digital garden" was popularised by Mike Caulfield (2015); Appleton wrote the definitive history in 2020.
- Related convention: an **epistemic status** line — a short statement of how the author knows what they know and how much work went in ("I'm 70% confident in this", "this contradicts my earlier thinking").
- *This is the single most directly transferable pattern in this document for Drake's roadmap problem.* See section 5.

**Josh Comeau (joshwcomeau.com), Lee Robinson (leerob.com), Tania Rascia** — **[prior knowledge]**

- Comeau's is the clearest example of **whimsy as a trust signal** — interactive, playful components embedded in technical writing. It works because the play is *inside* the explanation; it never sits in the chrome.
- *Wrong for Drake:* the whimsy register. His audience includes PE professionals. Playfulness should live in the *writing voice*, not in bouncing UI.

---

## 3. Patterns worth borrowing — as mechanics

Each of these is stated so an engineer can build it without a second conversation.

### 3.1 The single dated stream ("ledger") homepage

**Mechanic.** One content collection, `entries`, where every record has: `date`, `type` (`build` | `write` | `note` | `ship` | `read`), `title`, `dek` (one sentence, ≤ 140 chars), optional `project` foreign key, optional `status`. The homepage renders these in reverse-chronological order as rows, not cards:

```
2026-08-14   BUILD   Rewrote the intake agent's ranking pass       [Slope]
                     Swapped a hand-tuned score for pairwise comparisons; recall up, latency down 40%.
2026-07-02   WRITE   What Aristotle got right about optionality
                     A defence of practical wisdom against expected-value maximalism.
```

- Row layout: `grid-template-columns: 8ch 6ch 1fr` on ≥768px; stacked on mobile with the date/type joined into one small mono line.
- `type` renders as a monospace uppercase 11px label at `letter-spacing: 0.08em` — **not** a coloured pill. Colour is reserved (section 6).
- The `dek` is mandatory. A row without a sentence explaining why it matters is not allowed to ship.

**Why it beats a project grid.** A grid of N rectangles is a claim that all N things are equally important and equally finished — which for Drake is false. A dated stream is honest about a 20-year-old's real position: he is *accumulating evidence over time*. It also compounds — the site gets more impressive every month with zero redesign — and it can never look empty, because three rows is a legitimate ledger and three cards is a sad grid.

### 3.2 Project pages that open with a constraint, not a category

**Mechanic.** Every project page opens with a fixed four-part block before any screenshot:

1. **One-line what** — plain, no adjectives. "An intake agent that turns a founder's messy first email into a structured deal record."
2. **The constraint** — the specific thing that made it hard, with a number. "The PE team wouldn't adopt anything that required leaving Outlook."
3. **State** — see section 5. One line: what actually exists right now.
4. **Evidence** — one concrete artifact within the first screenful: a real screenshot, a real number, or a quoted line from a real user.

Only after this block do you get the narrative. This ordering means a skimmer who reads 60 words has the whole story, and a reader who continues gets rewarded rather than repeated.

### 3.3 Separating "Work" from "Bench"

**Mechanic.** Two surfaces with deliberately different visual weight:

- **Work** — 3–5 items, each with a full page, an argued case study, and a status. Rendered as generous full-width rows with one image each.
- **Bench** — unlimited items, each 1–3 sentences, no dedicated page, no images or one small one. Rendered as a dense list at ~60% the type size of Work rows.

The density difference *is* the hierarchy. Don't use a heading to tell people Bench is less important; make the rows smaller and let them infer it. This lets Drake publish a half-finished experiment on Tuesday without diluting the three things he wants judged.

### 3.4 The one-sentence self-label in the hero

**Mechanic.** `<h1>` is his name at a *restrained* size (see 7.4 — not 5rem), immediately followed by a single sentence in the reading face at ~21px that does three jobs: what he does, what's unusual about the combination, and a concrete anchor.

Bad (current register): "Economics major at Washington and Lee University."
Better: "I'm Drake. I study economics and philosophy at Washington & Lee, work on private-equity deals, and build the software I wish those deals ran on."

Rules: no adjectives about himself ("passionate", "driven"), no institution before the person, one sentence, ≤ 30 words. Antfu's source-read hero is the model: one sentence, one self-label, done.

### 3.5 Evidence-grade metadata on writing

**Mechanic.** Every essay page carries a two-field header strip, mono, 12px, muted:

```
Published 2026-03-11 · Updated 2026-06-02 · Confidence: working theory
```

`Confidence` takes one of four values only: `notes` / `working theory` / `argued` / `settled`. Four values, defined once on the `/writing` index. This is a two-field version of the epistemic-status convention (section 2.5) — enough to signal honesty, not enough to become a bureaucracy.

### 3.6 The "what I'm not doing" line

**Mechanic.** On the `/now` page, the last block is headed **Not right now** and lists 3–4 things he has consciously deprioritised, each with a half-sentence reason. This is the highest-signal, lowest-cost element on the entire site. It converts a status page from a brag list into a decision document, and it is the thing a PE interviewer will remember.

### 3.7 Content-as-data architecture

**Mechanic.** Following the structure read in `samuelkraft-next`: keep `content/entries/*.mdx` and `content/projects/*.mdx` with frontmatter, and derive every index page from them. No hand-authored section components with hardcoded content (the current `Experience.tsx` / `Upcoming.tsx` pattern). This is what makes the ledger sustainable; without it, Drake stops updating the site in November.

### 3.8 Craft as substitute for claims

**Mechanic.** Budget for exactly **two** genuinely well-made interactions and make everything else invisible. Candidates: (a) keyboard-navigable entry list with `j`/`k` and `/` to filter, shown by a small `press / to filter` hint; (b) a footnote/sidenote system in essays that is genuinely good on mobile. Then delete the "Skills" section entirely — a working keyboard interface argues for competence better than the word "TypeScript" in a pill.

---

## 4. Patterns to avoid — and why

| Pattern | Why it's wrong here |
|---|---|
| **Generic AI-startup landing page** (centred hero, gradient blob, "Building the future of X", three feature cards with line icons, a fake dashboard mock) | It is a *company* grammar applied to a *person*. It makes claims impersonal and unfalsifiable. Every AI wrapper on the internet uses it, so it signals category membership, not distinction. |
| **Résumé-in-scroll-form** (Education → Experience → Skills → Contact) | This is the current site's IA. It competes on a dimension where a 20-year-old cannot win — length of history — and hides the dimension where he can win: that he builds and writes. Keep the résumé as a PDF link, not as the site's spine. |
| **Dark cyberpunk / neon "AI" aesthetic** | Black backgrounds with cyan-magenta glow read as crypto-adjacent and untrustworthy to exactly the finance audience he needs. It also ages in about nine months. |
| **Glassmorphism** (frosted translucent panels, backdrop-blur cards) | A 2021 Apple-derivative trend with real legibility costs (text contrast varies with whatever scrolls behind it). It signals "used a template", and it fails WCAG contrast unpredictably. |
| **Gradient soup** (multi-stop mesh gradients as background) | Decoration with zero information content, high file weight, and it makes every subsequent colour decision harder because nothing sits cleanly on it. |
| **Giant type for its own sake** (`clamp(3rem, 12vw, 12rem)` name across the viewport) | Scale should encode importance. If his *name* is the biggest thing on the page, the design is saying his name is the most interesting fact about him. It isn't — the combination of what he does is. The current `clamp(2.8rem, 5.5vw, 5.2rem)` is already at the edge; pull it back. |
| **17 equal project rectangles** | Equal visual weight is a claim of equal importance, which is always false. It also invites padding the grid with weak items to fill the row. Use the Work/Bench density split (3.3) instead. |
| **Sideways-scroll traps** (horizontal scroll-jacked full-viewport sections) | Breaks the scrollbar's meaning, breaks `Cmd+F`, breaks keyboard navigation, breaks deep-linking, and on trackpads it hijacks a gesture users didn't opt into. Never for content; acceptable only for a bounded, obviously-horizontal strip (section 8). |
| **Scroll-jacking / snap-to-section full-page scroll** | Same family. It removes the reader's control over pace, which is the one thing a reading site must never do. |
| **Centred everything** | The current `.section-title` / `.section-label` are centred. Centred axis is brochure grammar: it suits short declamatory statements and fights long-form reading. Move to a left-aligned single axis with a consistent left edge. |
| **Uppercase gold overlines with 0.2em tracking** | Currently used for `WASHINGTON & LEE UNIVERSITY`. This is the visual grammar of a private-bank annual report. It gives an institution top billing over the person and it's the fastest possible way to look like every campus finance-club site. |
| **Auto-playing carousels** | See section 8. Motion the user didn't request, on content they're trying to read. |
| **"Passionate about" / "driven" / "leveraging"** | Unfalsifiable self-description. Every sentence on the site should be a claim someone could, in principle, check. |
| **Testimonial slider with 3 quotes from friends** | At this career stage it reads as manufactured. One genuine, attributed, *specific* quote inline in a project page beats a slider. |
| **A chatbot on a personal site** | "Ask my AI about me" is the 2026 equivalent of a Flash intro. It replaces the thing people came for (his actual writing) with a lossy interface to it. |

---

## 5. Status + roadmap: showing what's real vs. what's speculative

This is the hardest problem on the brief and the one most personal sites get wrong. Drake's risk is specific and serious: he is describing products in progress to an audience (PE, recruiters) that treats overstatement as a character flaw. **A future idea that looks shipped is not a design mistake, it's a credibility loss.**

### 5.1 The two-axis model

Two independent things must be visible and must never be confused:

- **State** — what is true *now* about a thing that exists. Past/present tense.
- **Horizon** — when an idea *might* happen. Future/conditional tense.

Most sites collapse these into one badge row, which is exactly how "Later: multiplayer" ends up looking like a feature.

### 5.2 State: a four-value vocabulary, used consistently

Pick four values and never add a fifth:

| Value | Definition — write this down and enforce it | Visual |
|---|---|---|
| `Live` | Other people use it, today, without Drake present | Solid 1px border, ink text, small filled square marker |
| `Prototype` | It runs; the audience is Drake and ≤ 5 testers | Solid border, muted text, half-filled square |
| `Archived` | It ran; it no longer does | Muted text, strikethrough-free, hollow square, 60% opacity |
| `Paused` | Built, works, not currently maintained | Muted, hollow square |

Rendering: monospace, 11px, `letter-spacing: 0.06em`, uppercase, 1px border, `border-radius: 2px`, `padding: 2px 6px`. **No colour fills.** The moment a status badge is green, it starts reading as marketing.

Beside the badge, always show a **fact anchor** in mono: `Live · 140 users · updated 12 Aug 2026`. The number is what makes the badge believable.

### 5.3 Horizon: Now / Next / Later — with a hard visual break

The **Now / Next / Later** roadmap format was created by Janna Bastow in 2012 while building ProdPad **[search-corroborated]**. Its whole point is *anti-false-precision*: the further out something is, the more uncertain, so it replaces dates with ordered confidence. That is precisely the property Drake needs.

**Mechanic — the "state line."** On each project page, after the case study, one horizontal rule and a heading that does the disclaiming for you:

```
──────────────────────────────────────────────
WHERE THIS IS GOING            (nothing below this line is built)
──────────────────────────────────────────────

NOW      Multi-tenant auth so the W&L career centre can run it themselves.
         In progress · started 3 weeks ago

NEXT     Employer-side view. Designed, not started.

LATER    An open question, not a plan: could the ranking model be
         audited by students rather than by me?
```

The four mechanics that make this honest:

1. **A literal parenthetical disclaimer in the section heading.** "(nothing below this line is built)" — seven words, removes all ambiguity, and reads as confidence rather than hedging.
2. **Tense discipline as a content rule.** Above the line: past and present tense only. Below the line: infinitive and conditional only ("to add", "could", "might"). Never write a future item in the present tense. This is a copy rule, not a design rule, and it does more work than any badge.
3. **Progressive visual de-emphasis down the list.** `Now` at `--ink` 100% opacity; `Next` at 70%; `Later` at 55% *and* italic. The design literally fades as certainty fades. No borders, no cards, no icons below the line — cards imply objects, and objects imply existence.
4. **`Later` items are phrased as questions where possible.** "Could X?" cannot be mistaken for a shipped feature. This also converts the roadmap into the "open questions" surface (section 5.5) for free.

**What not to do:** no progress bars (they imply a measured denominator that doesn't exist), no percentages, no dates on `Next`/`Later`, no "Coming soon" (it's a marketing phrase and it promises), no checkbox lists (an unchecked box still implies a committed backlog).

### 5.4 Changelog as the proof-of-life mechanism

**Mechanic.** Each project page ends with a reverse-chronological changelog of 5–8 dated one-liners, plus a link to the full list.

```
12 Aug 2026   Ranking pass rewritten; p95 latency 1.9s → 1.1s
28 Jul 2026   Added CSV export after two testers asked the same day
04 Jul 2026   First outside user
```

Why it matters more than it looks: the changelog is the only element that **proves the status badge isn't stale.** A `Live` badge above a changelog whose last entry is 14 months old is self-correcting honesty; a `Live` badge alone is an unverifiable claim. It also feeds the homepage ledger (3.1) for free — every changelog line is an `entry` of type `ship`.

Keep entries factual and small. "Fixed the thing that broke on Safari" is a better entry than "Improved cross-browser compatibility."

### 5.5 Making "currently exploring / open questions" feel alive rather than cute

The failure mode is a section headed "Things I'm curious about 🤔" listing "AI, markets, philosophy." That is cute and dead. Four mechanics that make it alive:

1. **A question must be answerable in principle and unanswered in fact.** "Does the option-value framing survive when the optionholder has to fund the option?" is alive. "The intersection of AI and finance" is not a question, it's a category.
2. **Each question is dated and has a visible last-touched date.** A question opened in March and touched in August is visibly being worked on. A question with one date and no movement is visibly abandoned — which is *also* honest information.
3. **Each question links to the thing it came out of.** "Opened while building the intake agent →". Questions with provenance read as residue from real work; free-floating questions read as posturing.
4. **Questions must be able to die.** Include a `Resolved` and a `Dropped` treatment (muted, with a one-line outcome: "Dropped — I was asking the wrong question; the constraint was adoption, not accuracy."). A list that only grows is a wish list. A list where things get closed is a working notebook. **This is the single mechanic that separates alive from cute.**

Render the whole thing as a definition list, not cards: question in the reading face at body size, metadata line in mono at 12px beneath. Cap it at 5 visible with the rest behind a real disclosure.

### 5.6 Presenting work-in-progress attractively and honestly

- **Show the ugly artifact, framed.** A screenshot of a spreadsheet, a terminal, or a whiteboard, with a caption saying what it is, is more compelling than a polished mock of something that doesn't exist. Never show a designed mockup of an unbuilt feature without a `Concept — not built` overlay label; ideally, don't show it at all.
- **Give WIP its own container that's visually *lighter*, not heavier.** Common mistake: making the "In progress" section flashy to compensate. Do the opposite — smaller type, hairline rule, no image. Restraint reads as confidence.
- **Date-stamp everything WIP.** WIP without a date is indistinguishable from abandoned.
- **Let one thing fail in public.** A short "What didn't work" block inside a case study — one specific abandoned approach and why — buys more credibility than any amount of polish, and it's the one thing a template can't fake.

---

## 6. Colour direction

Constraint from the brief: neutral foundation plus **one** restrained accent; move past borrowed W&L identity; a subtle blue reference is acceptable.

A structural rule that applies to all three palettes: **brand accent and status colour must be different systems.** If the accent is blue and "Live" is also blue, the reader cannot tell decoration from data. In all palettes below, status uses the *neutral* scale (see 5.2) and the accent is reserved for links, the active nav marker, and rules under headings — nothing else.

### Palette A — "Graphite & Signal"
*Point of view: he is a builder first. Cool, current, product-literate. The accent is a signal colour, not a brand colour.*

| Role | Hex | Use |
|---|---|---|
| Page | `#FCFCFD` | Body background |
| Surface | `#F4F5F7` | Code blocks, inset callouts |
| Ink | `#0F1419` | Body text |
| Ink-muted | `#5B6570` | Metadata, deks, captions |
| Rule | `#E2E6EA` | 1px hairlines |
| **Accent** | **`#2B4EE6`** | Links, active nav marker, heading rules |
| Accent-quiet | `#EBEFFE` | Link hover background only |
| Dark page | `#0C0F13` | Dark mode ground |

*Risk:* the electric-blue-on-near-white look is the default of a thousand dev portfolios. It's safe and slightly anonymous.

### Palette B — "Field Notes" ★ recommended
*Point of view: an analyst's notebook. Warm paper, true ink, and a deep signal blue that keeps a whisper of blue heritage while abandoning the collegiate navy block entirely.*

| Role | Hex | Use |
|---|---|---|
| Paper | `#F8F6F1` | Body background — warm, not cream-yellow |
| Paper-raised | `#FFFFFF` | Cards/insets, used sparingly |
| Ink | `#1A1917` | Body text — warm near-black, never `#000` |
| Ink-muted | `#6E6A62` | Metadata, deks, `Later` items |
| Rule | `#DFDACE` | 1px hairlines |
| **Accent** | **`#1B3A6B`** | Links, active markers, heading rules — **never a background field** |
| Accent-hover | `#2C5490` | Link hover |
| Brass | `#8A6B2F` | Optional, ≤ 1 use per page (the ledger's `type` labels) |
| Dark page | `#141310` | Dark mode ground |
| Dark ink | `#EDEAE3` | Dark mode text |

*The load-bearing move:* `#1B3A6B` is a deep blue that is **only ever ink or a 1px rule.** The current site's problem isn't navy the colour, it's navy the *full-bleed field*. Using the same family as a hairline and a link converts an inherited institutional block into a personal, restrained mark. The brass replaces `#9B8B5E` with something less heraldic — it's an oxidised, printerly gold rather than a crest gold.

### Palette C — "Bone & Ember"
*Point of view: essayist first. Blue removed entirely; warmest and most human of the three; the accent is a printer's red.*

| Role | Hex | Use |
|---|---|---|
| Bone | `#F5F3EE` | Body background |
| Ink | `#191714` | Body text |
| Ink-muted | `#726C63` | Metadata |
| Rule | `#DCD6CA` | Hairlines |
| **Accent** | **`#B4462A`** | Links, drop-caps, heading rules |
| Dark page | `#151310` | Dark mode ground |

*Risk:* warm-paper-plus-rust reads slightly nostalgic/literary. It undersells the software side, and the red can feel like an error state in a UI context.

**Recommendation: Palette B, "Field Notes."** It is the only one of the three that solves the actual brief — it keeps a defensible trace of blue (so the site doesn't feel like a repudiation of where he is) while removing every mechanism that made the blue feel borrowed: the full-bleed field, the gold uppercase overline, the crest register.

**Contrast check (all AA+):** `#1A1917` on `#F8F6F1` ≈ 15.4:1. `#6E6A62` on `#F8F6F1` ≈ 4.9:1 — fine for 14px+ metadata, do not go below 14px with it. `#1B3A6B` on `#F8F6F1` ≈ 9.7:1.

---

## 7. Typography

Three pairings, all fully available on Google Fonts, with exact families and weights.

### Option 1 — "The Essayist" ★ recommended
**Newsreader** (display + long-form body) · **Inter Tight** (UI, nav, labels) · **JetBrains Mono** (metadata, status, changelog dates)

- Weights to load: Newsreader 400, 500, 600 + italic 400, 500 (it's a variable font with an optical-size axis — load the variable file and set `font-optical-sizing: auto`). Inter Tight 400, 500, 600. JetBrains Mono 400, 500.
- **Why it fits Drake specifically.** Newsreader is a Google-commissioned face designed for on-screen news reading: moderate contrast, sturdy at body sizes, and — the key asset — a genuinely excellent *italic* with real cursive construction. Philosophy writing lives on italics (term introduction, emphasis, book titles), and most web serifs have a slanted-roman italic that falls apart. It reads as *editorial* rather than *institutional*, which is exactly the move away from Cormorant.
- **Why it replaces Cormorant Garamond well.** Cormorant is a display Garamond: beautiful at 60px, spindly and low-contrast-failing at 18px, and it carries a luxury/wedding register. Newsreader keeps the "he reads books" signal while actually being readable in a 900-word essay. This is the single highest-leverage change in the whole document.
- **Why the mono matters.** JetBrains Mono on dates, status badges and changelog lines does the "this person ships software" work without a single line of copy claiming it. It's also what keeps the serif from tipping into precious.
- CSS: `font-family: Newsreader, ui-serif, Georgia, serif;` / `'Inter Tight', system-ui, sans-serif;` / `'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;`

### Option 2 — "The Analyst"
**Source Serif 4** (display + lede) · **Public Sans** (body + UI) · **IBM Plex Mono** (metadata)

- Weights: Source Serif 4 400, 600 + italic 400. Public Sans 400, 500, 700. IBM Plex Mono 400.
- Sans-for-body, serif-for-display. Reads more institutional and more neutral; the closest to what a finance audience unconsciously expects, without being W&L. Source Serif 4 is a variable Adobe face with optical sizing; Public Sans is the US Web Design System's face — deliberately plain, excellent numerals, and it never draws attention.
- **Trade-off:** safest of the three, and the least memorable. Sans body also makes long essays feel more like documentation than reading. Choose this only if the PE audience is weighted much more heavily than the writing.

### Option 3 — "The Builder"
**Instrument Serif** (display only) · **Inter** (body + UI) · **JetBrains Mono** (metadata)

- Weights: Instrument Serif 400 + italic 400 (that's all it has). Inter 400, 500, 600. JetBrains Mono 400, 500.
- Instrument Serif is a high-contrast, tightly-spaced display serif with real personality at 40px+. Pairing it with Inter gives a contemporary product-studio feel: dramatic headline, utterly neutral body.
- **Trade-off:** Instrument Serif is display-only — one weight, no body use — so all the reading burden falls on Inter, and Inter at essay length is a bit characterless. This is the most "2026 startup" of the three, which cuts both ways.

### 7.4 Type system (applies to the recommended Option 1)

```
Scale (1.25 ratio above body; body fixed for readability)
  mono-xs    11px / 1.4   JetBrains Mono 500, ls 0.06em, uppercase   status, type labels
  meta       13px / 1.5   JetBrains Mono 400                          dates, changelog
  ui         15px / 1.5   Inter Tight 500                             nav, buttons
  body       19px / 1.65  Newsreader 400                              essays, deks
  lede       22px / 1.5   Newsreader 400                              hero sentence, project one-liner
  h3         21px / 1.3   Inter Tight 600                             sub-headings
  h2         28px / 1.25  Newsreader 500, ls -0.01em                  section heads
  h1-page    36px / 1.2   Newsreader 500, ls -0.015em                 page titles
  h1-hero    clamp(34px, 4vw, 48px) / 1.1   Newsreader 600            his name — deliberately modest
```

- **Measure.** Essay body `max-width: 66ch`. Lede/hero sentence `52ch` (shorter measure at larger size). Sidenotes `34ch`. Ledger `dek` `72ch`. Never let body text exceed 72ch.
- **Vertical rhythm.** 4px base unit. Steps: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128. Paragraph spacing `0.75em` (not a full line — tighter paragraph spacing with generous leading reads better than the reverse). Section spacing 96px mobile / 128px desktop.
- **Radii.** `2px` on status badges, `4px` on images and code blocks, `0` on structural containers. The point of view: *documents, not apps.* Anything above 8px starts to look like a SaaS card.
- **Borders.** 1px `--rule` hairlines only. **No box-shadows anywhere.** Separation comes from rules and whitespace. This is the single rule that will keep the site from drifting back toward a card grid.
- **Numerals.** Set `font-variant-numeric: tabular-nums` on all dates, metrics and ledger dates so columns align. Use `oldstyle-nums` in essay body if Newsreader exposes it — figures in running prose read better as text figures.

---

## 8. Screenshot galleries and carousels

**The honest finding first: for Drake's three products, don't build a carousel.** The strongest project storytelling pattern is a **vertical annotated sequence** — 3–5 screenshots stacked, each with a caption that makes one argument. The caption is the story; a carousel actively hides captions behind interaction, which is backwards.

Build the gallery only where he genuinely has 8+ shots of one surface.

### 8.1 What works — the mechanic

A **CSS scroll-snap strip**, not a JS carousel. Search-corroborated: scroll-snap strips are touch-, mouse- and keyboard-friendly by default because every item is in the DOM and reachable by scrolling, unlike carousels where managing focus and screen-reader announcements is genuinely hard; newer CSS carousel primitives (`::scroll-button()`, `::scroll-marker()`) exist precisely to make this accessible without JS.

```css
.strip {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 78%;              /* the peek: next item is visibly clipped */
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 24px;
  overscroll-behavior-x: contain;      /* stops swipe-left triggering browser Back */
  scrollbar-width: thin;
}
.strip > * { scroll-snap-align: start; }
@media (min-width: 900px) { .strip { grid-auto-columns: 46%; } }
```

Requirements to make it actually good:

- **`grid-auto-columns` under 100%.** The clipped edge of the next image is the affordance. Full-width items give no signal that there's more.
- **`overscroll-behavior-x: contain`.** Without it, a horizontal swipe past the end triggers browser back-navigation on iOS/trackpads. This is the most common and most infuriating gallery bug.
- **Keep the scrollbar visible on desktop** (`scrollbar-width: thin`). Hiding it is the number-one reason desktop users never discover a horizontal strip.
- **Fixed aspect ratio on every item** (`aspect-ratio: 16/10; object-fit: cover`) so there's zero layout shift, plus `width`/`height` attributes on `<img>`.
- **Each item is a real focusable element** (a `<button>` or `<a>`), so `Tab` walks the strip and the browser scrolls it into view for free. That gets you keyboard support with no JS.
- **Prev/Next buttons on desktop that call `el.scrollBy({left: w, behavior: 'smooth'})`** — buttons must have text labels in `aria-label`, be ≥44×44px, and be genuinely disabled at the ends.
- **Captions live *below* the strip and persist**, or under each item — never as a hover-only overlay.
- **Lightbox on click**: a `<dialog>` with `Esc` to close, `←`/`→` to move, focus trapped inside and returned to the triggering thumbnail on close. If you can't do the focus-return properly, don't ship the lightbox.
- **`prefers-reduced-motion`**: swap `behavior: 'smooth'` for `'auto'`.

### 8.2 What frustrates people — the traps

- **Auto-advance.** Non-negotiable: never. It moves content while people read and it fails WCAG 2.2.2 unless you add a pause control nobody wants.
- **Dots-only navigation.** Unlabelled, tiny (below the 44px target), and gives no idea how much is left. Use a `3 / 8` counter in mono instead — it's more information in less space.
- **Swipe conflicting with vertical page scroll.** Mobile carousels commonly steal near-vertical drags. Scroll-snap avoids this because the browser arbitrates the gesture natively; hand-rolled touch handlers do not.
- **Hover-to-reveal captions.** Zero information on touch devices — i.e. for most visitors.
- **Full-bleed horizontal sections that hijack vertical scroll.** Covered in section 4; the worst version of this pattern.
- **Lightbox with no `Esc`, or that dumps focus back to `<body>`.** Common in hand-rolled implementations and a real accessibility failure.
- **Screenshots at device-frame scale with 11px UI text.** Unreadable. Crop to the one region the caption is talking about, at 2× density. A cropped detail with a caption beats a full-app screenshot every time.

---

## 9. Personal photography without becoming a lifestyle blog

The current repo has `public/images/` folders for `golf`, `basketball`, `family`, `about`. The instinct is right; the risk is a Squarespace personality page.

**The governing rule: a photo must be evidence, not vibe.** Six mechanics:

1. **Every photo carries a factual caption** — where, when, what happened — in mono 12px, `--ink-muted`, left-aligned under the image. If you can't write a factual caption, cut the photo. (This is the Craig Mod discipline, section 2.3.) "Lexington, VA — February 2026" is a caption. "Living life to the fullest" is not.
2. **Inline and small, not full-bleed.** Cap personal photos at ~420px wide inside the 66ch column. Full-bleed photography is a magazine move that makes a personal site feel like a brand campaign.
3. **One consistent grade.** Pick a single treatment — I'd suggest a very slight warm desaturation (`filter: saturate(0.92)`) applied globally — so a golf photo and a whiteboard photo look like they belong to one document. Do not use duotone/colour-overlay; it's a 2018 tech-brand tic.
4. **Photos appear where they're relevant, never in a dedicated grid.** A 3×3 gallery of life photos is the lifestyle-blog failure mode. A single photo of the actual whiteboard where the intake agent's flow was worked out, sitting inside that project's case study, is portfolio content.
5. **Sports only when they carry an argument.** Golf and basketball earn a place if they're attached to a claim he's making — a paragraph about repetition and feedback loops, say, that is genuinely about how he works. Decorative athletic photos read as résumé padding.
6. **One environmental portrait, not a studio headshot on navy.** A real photograph of him somewhere real, at ~320px, in the About section. The current full-navy hero headshot treatment is a LinkedIn convention and it's the most replaceable image on the site.

---

## 10. Curiosity mechanics: earning the scroll past the hero

Engagement tricks (scroll cues, "Scroll to explore", animated chevrons, counters) work on people who were already going to scroll. Substance mechanics work on people who weren't. Six that actually do the job:

1. **Break the fold on purpose.** The hero should occupy roughly 68–75vh, not 100vh, so the first ledger row is *visibly clipped* at the bottom edge. A partially-visible real sentence is a stronger scroll incentive than any animated arrow, because it promises specific content rather than generic "more".
2. **Put a number in the first 60 words.** Numbers are the cheapest form of specificity and the fastest credibility signal. "an internal tool that took a 40-minute diligence step to 4" outperforms any adjective.
3. **Lead with the unusual combination, not the categories.** Economics + philosophy + PE + shipping software is genuinely uncommon. The hero sentence should name the *tension* — the reason those things sit together — because an unresolved tension is a question, and questions pull.
4. **Show one open question above the fold-line.** A single italic line — "Currently stuck on: whether ranking quality or adoption friction is the real constraint" — is the highest-curiosity element available. It says there's a mind at work here, not a profile.
5. **Recency as proof.** A visible "last updated 12 Aug 2026" and a dated top ledger row tell the reader the site is *alive*. Most personal sites are gravestones; being demonstrably not-a-gravestone is a differentiator that costs nothing.
6. **Progressive disclosure with a real payoff.** Where you collapse something, the trigger must name what's inside ("3 things that didn't work →"), never "Read more". A disclosure that promises specifics and delivers them trains the reader to open the next one.

**And one anti-mechanic:** don't put nav links to every section in the hero. Giving people five exits above the fold is the opposite of building curiosity. One nav bar, four items, and let the page do the work.

---

## 11. Motion philosophy and tokens

Motion budget for this entire site: **small**. Every animation should be either (a) feedback for something the user did, or (b) a single signature moment. Nothing else moves.

```
--dur-fast:  120ms   hover, focus, button press
--dur-base:  180ms   theme toggle, disclosure open/close
--dur-enter: 280ms   first-paint entrance
--ease:      cubic-bezier(0.2, 0, 0, 1)     /* fast-out, settle-in */
--ease-out:  cubic-bezier(0.4, 0, 0.2, 1)
--stagger:   60ms                            /* between sibling entrances, cap at 6 items */
```

- **Entrance:** `opacity 0→1` plus `translateY(8px→0)` over `--dur-enter`, staggered `--stagger`, on the first screenful only. (Antfu's source uses `translate: 0 10px` with a 90ms stagger — same idea; I'd go slightly tighter and faster.) Never animate content on scroll below the fold — it delays reading and it breaks `Cmd+F`.
- **Links:** animate `text-decoration-color` and `color`, not `transform`. Underline offset `0.15em`, thickness `1px`, colour `--accent` at 40% opacity rising to 100% on hover over `--dur-fast`.
- **No parallax. No scroll-linked scale/rotation. No number count-ups. No text scramble/typewriter effects.** Each of these delays information delivery in exchange for a novelty that expires on the second visit.
- **Wrap everything:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important;
    animation-iteration-count: 1 !important; transition-duration: .01ms !important;
    scroll-behavior: auto !important; }
}
```
(Note: the current `globals.css` sets `scroll-behavior: smooth` on `*` with no reduced-motion guard — that's a real accessibility bug to fix, and it's on the universal selector, which is also a performance smell.)

---

## 12. Three art directions

### Direction A — "The Ledger" ★
**Mood.** A working record. Quiet, dense, dated, cumulative. The feeling of an analyst's own notebook that happens to be public — not a brochure about a person, but the trace a person leaves.

**Typography.** Option 1: Newsreader / Inter Tight / JetBrains Mono. Newsreader carries all reading; mono carries every date, status and label. Name at `clamp(34px, 4vw, 48px)` — deliberately smaller than the current site.

**Colour.** Palette B "Field Notes." Warm paper `#F8F6F1`, ink `#1A1917`, deep blue `#1B3A6B` as link/hairline only, brass `#8A6B2F` for ledger type-labels at most once per row.

**Layout logic.** A single left-aligned axis for the entire site — every heading, every row, every image starts at the same left edge. One column, `66ch` measure, with a **persistent left gutter** (`8ch` on ≥1024px) carrying only metadata: dates, status badges, entry types. On mobile the gutter collapses into a mono line above each row. Rules, never cards; hairlines, never shadows.

**Motion.** Entrance stagger on the first screenful; link underline transitions; nothing else. The one signature: the ledger's type-labels (`BUILD` / `WRITE` / `SHIP`) act as filters — clicking one filters the stream in place with a 120ms opacity cross-fade, and `/` focuses a filter input. Keyboard `j`/`k` move between rows.

**The one memorable thing.** **The homepage *is* the ledger.** A single dated stream where an essay, a shipped feature and a note are the same kind of object, in one chronological column. Nobody's college personal site looks like this, it's honest about his actual stage, and it compounds — every commit and every essay makes it better with no redesign.

### Direction B — "Open Bench"
**Mood.** A workshop with the door open. Unfinished things are first-class citizens; the site's premise is "here is what I'm in the middle of."

**Typography.** Option 3: Instrument Serif display / Inter body / JetBrains Mono. Big serif headline over an otherwise neutral, systemic sans — a workshop sign over a workbench.

**Colour.** Palette A "Graphite & Signal." Cool `#FCFCFD` ground, `#2B4EE6` signal accent used only on active/interactive states, so the page's colour reads as *system state* rather than decoration.

**Layout logic.** Two-tier throughout: **Built** (3 items, full-width rows, one image each, generous) above **Bench** (unlimited, dense 2-column list at 60% type scale, no images). Every project page is dominated by its "state strip" — Now / Next / Later plus changelog — which sits *above* the case study rather than below it, because the premise is currency, not completeness.

**Motion.** State changes only: badge transitions, disclosure expansion, filter cross-fades. Signature: a `Ctrl/⌘K` command palette that jumps to any project, essay or open question — a legitimate craft demonstration (3.8) that also solves navigation for a site with many small entries.

**The one memorable thing.** The **open-questions board** as a top-level nav item, where questions get opened, dated, linked to their originating project, and visibly **resolved or dropped with a one-line outcome**. It's a public research log, and the ability to close a question is what makes it read as serious.

### Direction C — "Marginalia"
**Mood.** Essayistic and warm. The writing is the front door; projects are argued *within* prose rather than displayed alongside it.

**Typography.** Option 1, but tuned up: Newsreader at 20px/1.7, measure `68ch`, and a genuine **sidenote system** — asides set in a `34ch` right margin at 15px on ≥1100px, collapsing to inline expandable notes below that.

**Colour.** Palette C "Bone & Ember." `#F5F3EE` bone, `#191714` ink, `#B4462A` printer's red for links and section rules.

**Layout logic.** Asymmetric: text column offset left with a permanent right margin reserved for sidenotes, photo captions and status metadata. Projects appear as long-form pieces with inline evidence rather than as a portfolio index; the "Work" page is a reading list of five essays that happen to be about things he built.

**Motion.** Effectively none. Sidenotes fade in at `--dur-fast` when their reference is hovered/focused; that's the entire budget. Stillness is the point.

**The one memorable thing.** **Real marginalia** — the running commentary in the margin, including retrospective notes dated later than the essay ("*Aug 2026 — I no longer believe this; see [x]*"). It makes visible the one thing a résumé can never show: that his thinking changes.

---

## 13. Recommendation

**Build Direction A, "The Ledger," on Palette B ("Field Notes") and Typography Option 1 (Newsreader / Inter Tight / JetBrains Mono) — and absorb Direction B's status mechanics wholesale.**

Reasoning:

1. **It solves the actual problem, which is structural, not decorative.** The current site's weakness isn't its colours — it's that its IA is a résumé, and a résumé is the format where a 20-year-old is weakest. A dated stream changes the axis of competition from *how much have you done* to *what are you doing, continuously*. That's a contest he can win now and win harder every month.

2. **It's the only direction that is honest about his stage without being apologetic about it.** Three products at different levels of realness, some essays, some abandoned experiments — that is *exactly* what a ledger is designed to hold. Direction B is slightly too "lab" for a PE audience; Direction C undersells the building. A is the only one that can hold finance, philosophy and shipping in a single column without one of them looking like a hobby.

3. **The typography does the interdisciplinary work by itself.** Newsreader says "reads and writes seriously." JetBrains Mono on every date and status says "ships software." Inter Tight in the chrome stays out of the way. A reader understands the combination before reading a word — which is the whole brief.

4. **The colour move is surgical rather than symbolic.** Keeping a deep blue but demoting it from a full-bleed field to a hairline and a link colour is a more sophisticated statement than deleting blue entirely. It reads as "I chose this," not "I left."

5. **Direction B's status vocabulary (5.2), state line (5.3) and changelog (5.4) must come along.** They are not optional decoration on the ledger — they're what stops "AI product I'm building" from sounding like vapour to the exact audience most allergic to it. The ledger provides the *proof of continuity*; the status system provides the *proof of honesty*. Neither works alone.

**The first three things to build, in order:** (1) rip out the navy hero field and the `WASHINGTON & LEE UNIVERSITY` gold overline, replace with name + one-sentence self-label at 70vh; (2) convert `Experience`/`Upcoming` into a single `entries` content collection and render the ledger; (3) add the four-value status vocabulary and one state line on the most real of the three products. Everything else can follow.

---

## Sources consulted

**Read directly this session (GitHub):**
- `antfu/antfu.me` — `pages/index.md`, `src/styles/main.css`
- `pacocoursey/paco` — README
- `samuelkraft/samuelkraft-next` — README, repository tree
- This repository — `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`, `components/Hero.tsx`

**Search-corroborated (indexed summaries, not page loads):**
- [The /now page movement — Derek Sivers](https://sive.rs/nowff) and [nownownow.com](https://nownownow.com/about)
- [A Brief History & Ethos of the Digital Garden — Maggie Appleton](https://maggieappleton.com/garden-history)
- [Ditch the Timeline Roadmap — ProdPad](https://www.prodpad.com/resources/guides/ditch-the-timeline-roadmap/) (Now/Next/Later, Janna Bastow, 2012)
- [Are 'CSS Carousels' accessible? — Sara Soueidan](https://www.sarasoueidan.com/blog/css-carousels-accessibility/)
- [Make accessible carousels — Chrome for Developers](https://developer.chrome.com/blog/accessible-carousel)
- [A Step-By-Step Guide To Building Accessible Carousels — Smashing Magazine](https://www.smashingmagazine.com/2023/02/guide-building-accessible-carousels/)

**Blocked this session (`EGRESS_BLOCKED`) — described from prior knowledge only, re-verify before citing:**
craigmod.com · stephango.com · maggieappleton.com · rauno.me · sive.rs · leerob.com · danluu.com · news.ycombinator.com · web.archive.org
