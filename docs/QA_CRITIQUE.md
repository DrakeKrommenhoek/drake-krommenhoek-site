# QA Critique — pass 2

Written after building every route, screenshotting all seven at 375/430/768/1024/1440,
re-running with JavaScript disabled, and running keyboard/heading/target-size checks.
Screenshots are in `docs/qa-screenshots/` and `docs/qa-screenshots-nojs/`.

The instruction was to be hostile. This is not a victory lap.

---

## The question that matters: is this just a good-looking résumé?

**Partly, yes — and the evidence is in the page height.**

On the homepage at 1440, the sections measure roughly:

| Section | Share of page |
| --- | --- |
| Hero | 8% |
| Now | 8% |
| **Work** | **14%** |
| **Experience** | **~38%** |
| About | 12% |
| Contact | 12% |

Work is the argument of this site. Experience is a transcribed résumé — with bullet points,
a lifeguard job, a pizza restaurant, and a high school. It is **nearly three times the size**
of the thing it is supposed to support.

The order is right (Work before Experience). The *volume* says the opposite. A reader
skimming with their eyes rather than their intellect will conclude this is a résumé with a
projects section attached, which is exactly the failure mode the brief named.

**Fix:** collapse Experience hard. Mountaingate and AMB earn full entries. Lucky Pie, Water
World and Holy Family should be one compressed line, not four bullets each. The skills and
interests block — MS Excel, PowerPoint, Canva, Pickleback, Euchre — is résumé padding and
adds nothing a reader will act on.

## Do the three flagships feel like three domains, or three cards with different words?

**Three domains.** This one holds up. A consumer app pinned by a characterization suite, an
approval-gated agent OS with a pipeline diagram, and a private-equity narrative with no
artifact and a quote instead of a link — they do not read as the same page. The conditional
sections (`pipeline` only for D.R.A.K.E., `pullQuote` for the other two) earn their keep.

**But:** every entry on the homepage ends with the identical string *"Read the whole thing →"*,
three times, stacked. That is the symmetric-triad tell the quality bar bans, in miniature.

## Is there a reason to scroll past the hero that isn't politeness?

**Yes, barely.** The Now section immediately follows with a real open question in his own
words, which is the strongest thing above the fold. That works.

**But the hero's primary call to action is "Experience"** — a dark, filled button pointing at
the résumé block. The single most emphasised control on the site points at its weakest
section. It should point at Work.

## Does the writing section feel like an afterthought?

**Right now it looks abandoned.** Holding the two weak essays was correct, but the
consequence is a `/writing` page with exactly one article, and the layout still renders the
empty archive slot: there are **two horizontal rules with nothing between them**, a visible
dead band where the rest of the list would be.

Also, the word "Writing" appears **three times within the first 300 pixels** — nav item,
eyebrow label, `<h1>`. That is not a reading room, that is a stutter.

## Does it read as a finance student cosplaying as an engineer?

**No, and this is the site's real achievement.** The specifics do the work: 9,058 lines,
24/24 across three timezones, tests that deliberately assert known bugs, a ~320-company map
triaged to fifteen, a $2,866 grant stated exactly rather than rounded up. Almost none of
that would survive a find-and-replace with another student's name.

**The weakest copy by that test** is the About section, which still contains "Discipline,
curiosity, and a relentless drive to improve" — a sentence that would fit on ten thousand
other student sites. And the hero's "I build software with AI" is the vaguest sentence on
the page, in the most valuable position on the page.

## Is Claude/AI mentioned so often it reads as performative?

**No — the cap is respected.** No AI mention in the hero beyond "with AI", no "how I used AI"
section on the two non-PE project pages, and the delegation-test quote appears exactly once,
on the page built for it. This is fine. Leave it alone.

---

## Layout and craft findings

1. **Two competing left axes on every project page.** The `<h1>` and tagline sit in the
   ledger's content column (x≈393 at 1440), but the constraint quote, body copy and every
   section below start at the shell edge (x≈151). The design system's entire premise is *one
   strong left axis*. There are two, and the eye catches it immediately.

2. **Roughly 40% of the viewport is empty on the right at 1440**, on every page. The shell is
   78rem, the ledger eats 11rem, and prose caps at 62ch — so the content stops around x≈1000
   of 1440 and nothing ever uses the rest. Asymmetry is good; a dead third is not.

3. **Every section opens identically.** Mono eyebrow → serif `h2` → 2.5rem rule → content.
   Seven times on the homepage. The quality bar bans this pattern explicitly and I only
   changed it from *centred* to *left-aligned* — the monotony is untouched. Nothing on the
   page is asymmetric enough to feel authored.

4. **The Ascend fact anchor is a dangling fragment:** "Three days of work in March 2026 ·
   dormant since". Since when? It just stops.

5. **Mobile hero is 12,072px of page** at 375. Nothing is broken, but Experience is a very
   long scroll on a phone, which compounds finding #1 above.

## Accessibility findings (measured, not guessed)

6. **No skip link on any route.** The first focusable element everywhere is the wordmark, so
   a keyboard user tabs through six nav items on every single page before reaching content.

7. **Contact form inputs are 43px tall.** The design system specifies a 44px minimum touch
   target. One pixel under, on the only form on the site.

8. Heading order is clean on all five routes checked, every image has alt text, and every
   visible control shows the clay focus ring. The one element that refuses focus is the
   mobile menu button while hidden at desktop width, which is correct behaviour.

## What is genuinely good, so it does not get "fixed"

- The JS-off pass renders every route completely. That guarantee is real and verified.
- Zero horizontal overflow at any of the five widths, zero console errors, all routes 200.
- The status-badge-plus-dated-anchor convention is the best idea on the site. "Live · 302
  commits · last shipped 3 September 2026" is unarguable in a way "Live" alone never is.
- The state line, with "nothing below this line is built" set in the heading, is honest in a
  way roadmaps almost never are.
- The Lab page's per-entry "The caveat" is the most disarming thing here.

---

## Fix order

1. Skip link + 44px inputs (accessibility, cheap, non-negotiable)
2. Single left axis on project pages
3. Compress Experience; cut the skills/interests padding
4. Hero CTA points at Work
5. Vary section entrances; kill the repeated "Read the whole thing"
6. Fix the `/writing` dead band and the triple "Writing"
7. Ascend anchor wording; rewrite the About filler sentence
