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
