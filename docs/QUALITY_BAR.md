# The Quality Bar — read this after `CONTINUE_PROMPT.md`

`CONTINUE_PROMPT.md` tells you *what* to build. This tells you what separates a good result
from the one Drake actually wants to wake up to. If you only have budget for one of the two,
read this one.

---

## 1. Build twice. The second pass is the whole product.

Do not ship your first implementation. The sequence is:

**Pass 1 — get every route to B+.** All pages exist, real content, nothing broken.
**Commit and push.**

**Pass 2 — attack it.** Open every page and answer these out loud, in writing, in
`docs/QA_CRITIQUE.md`. Be genuinely hostile. Then fix what you found.

- Is this just a good-looking résumé? *If yes, the information architecture is wrong, not the styling.*
- Do the three flagship projects feel like three different domains, or three cards with different words in them?
- Is there a reason to scroll past the hero that isn't politeness?
- Does the writing section feel like an afterthought bolted to a portfolio?
- Does this read as a finance student cosplaying as an engineer? As an engineer's portfolio that forgot he does finance, philosophy, and sport?
- Is Claude mentioned so often it reads as performative? **Cap it: at most one "how I used AI" section per project page, and never in the hero.**
- Would a reviewer still conclude he uses AI at a high level? *If not, the fix is more evidence, not more mentions.*
- Read every page aloud. Which sentences could appear on ten thousand other student sites? Delete or rewrite each one.

**Pass 3 — fix, then re-run pass 2 once more.** Stop when a full hostile read produces
nothing but nits.

Budget roughly 50% of your remaining time for passes 2 and 3. That split is the instruction.

---

## 2. The unrepeatable-detail rule

**Every section must contain at least one fact that could only be true of Drake.**

Not "passionate about the intersection of finance and technology" — that fits everyone.
"A 14-check QC suite, because anonymised real data fails quietly and well-constructed fake
data does not" fits one person. The research files are dense with these; use them.

If a paragraph would survive find-and-replacing his name with another student's, it is
filler. Cut it or make it specific.

## 3. Banned structures, not just banned words

The word list in `CONTINUE_PROMPT.md` is necessary but insufficient. The tells are structural:

- The symmetric three-item bullet triad where the third item is padding.
- The three-column icon feature grid.
- A "My Approach" or "How I Work" section made of abstractions.
- Aphoristic sentence fragments strung on em-dashes. *(This is exactly why two of the three
  existing essays read as machine-written.)*
- Every section opening with a centred eyebrow label + centred heading + centred rule. Vary
  the entrance. Asymmetry is what makes a page feel authored.
- Paragraphs that all land within ten words of the same length.

## 4. Look at what you built

Sessions routinely ship pages they never viewed. Don't.

```bash
npm run dev
# then drive Playwright against localhost:3000
```

Screenshot **every route** at **375 / 430 / 768 / 1024 / 1440**, save them under
`docs/qa-screenshots/`, and **actually read the images**. You are looking for: horizontal
overflow, orphaned words, dead space, cropped photos, tiny touch targets, a nav that traps
you, and hero type that is enormous on desktop and absurd on mobile.

Then repeat the pass with `prefers-reduced-motion: reduce`, with JavaScript disabled, at
200% zoom, and with keyboard only — tab through the entire site and confirm you can reach
and operate every control, including the carousel and every accordion.

## 5. Finish everything before polishing anything

A stunning homepage next to a broken `/writing` is worse than four solid pages. Get every
route to B+ before taking any route to A+. If you run out of budget mid-polish, the site
must still be coherent end to end.

## 6. Checkpoint like the session will die — because it might

After **every** milestone, without exception:

```
npm run build   →   git add -A   →   commit   →   git push
```

then update `docs/OVERNIGHT_HANDOFF.md` with what changed, what's next, and anything
unresolved. If the session dies at 3am, Drake should still find a working site and a
document that explains exactly where it stopped.

Never leave the tree in a state where `npm run build` fails.

## 7. If budget runs short, cut in this order

Keep, in descending priority:

1. Homepage + the three project pages *(this is the deliverable)*
2. Honest statuses and working links *(a broken link costs more than a missing section)*
3. `/writing` with the one essay that genuinely sounds like him
4. `/lab`
5. Metadata, sitemap, OG images
6. Screenshot galleries
7. Everything else

Ship fewer things finished rather than more things half-done.

## 8. The morning review must be honest, not a victory lap

`docs/MORNING_REVIEW.md` is the first thing Drake reads. It must include, plainly:

- What changed, and the preview URL
- **The five things to look at first**
- **Copy he needs to approve** — quote it inline so he can approve from the doc
- **Claims he needs to verify** — with the source and why it's uncertain
- Writing pieces staged as `published: false`, and why each is held
- Confidentiality decisions made on his behalf, and the reasoning
- **What is still ugly, unfinished, or unverified.** Say it. A review that claims everything
  is perfect is useless and he will find the gaps himself in thirty seconds.
- At most 10 questions, ranked, none of which you could have answered yourself

Then give him a short terminal summary. He should not have to read 200 lines to know what happened.

---

## 9. What "unbelievable" actually means here

Not more animation. Not a bigger hero. It means a visitor lands, and within a minute thinks:
*this person builds real things, thinks unusually clearly about where machines help and where
they don't, and is still figuring it out in public.*

The single strongest asset you have is his own sentence:

> "The axis is not easy/hard, it is whether a human can verify the output cheaply. […]
> Better models move the line, they do not erase it."

That is a genuinely original idea, arrived at by doing the work, and almost nobody applying
to anything this year will have one. Build the private-equity page so that idea is the thing
a reader carries away — and make the rest of the site earn the right to say it by being
equally specific.

Evidence over adjectives. Every time.
