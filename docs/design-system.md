# Design System — "Field Notes"

The visual language for the 2026 rebuild. Tokens live in `app/globals.css`; Tailwind
surfaces them in `tailwind.config.ts`. **Nothing in the app should hard-code a hex value.**

## 1. The idea

A working notebook that thinks in systems. Editorial in its typography, engineered in
its structure. It should read as someone who takes both reading and building seriously,
and as neither a finance résumé nor an AI startup landing page.

**Rejected:** the borrowed Washington & Lee identity. `#002147` is the university's navy
and the gold reads as institutional crest — the old site looked like a department page.
A subtle blue reference was permitted by the brief, but the design research made the
sharper point: *the problem was never navy the hue, it was navy the block.* The new
system solves it by removing the full-bleed field entirely.

## 2. Three typographic registers

The organising idea. Drake has three sides, so the type has three voices.

| Register | Face | Used for | Signals |
| --- | --- | --- | --- |
| **Serif** | Newsreader (variable 200–800, with italic) | Display, headings, essay body, pull quotes | Reads books. Writes. Philosophy minor. |
| **Sans** | Inter (variable 100–900) | Interface, body copy outside the reading room | Builds things. Modern, neutral, unfussy. |
| **Mono** | JetBrains Mono (variable 100–800) | Dates, status, section numbers, stage labels, buttons | Ships software. Says it without a word of copy. |

Newsreader replaces Cormorant Garamond deliberately: the same "reads books" signal, but
it holds up at 19px where Cormorant goes frail.

**Hosting.** Self-hosted latin subsets in `public/fonts/` (209 KB total for three variable
families), declared in `app/fonts.css`. Deliberately *not* `next/font/google` — that fetches
from Google at build time and fails in network-restricted CI. The two most critical faces
are preloaded in `app/layout.tsx`.

### Scale

Fluid, roughly a major third. Defined as component classes in `globals.css`.

| Token | Size | Line height | Notes |
| --- | --- | --- | --- |
| `.display` | `clamp(2.6rem, 6.4vw, 4.75rem)` | 1.03 | Serif 400, `-0.022em`, `text-wrap: balance` |
| `.h2` | `clamp(1.85rem, 3.4vw, 2.6rem)` | 1.12 | Serif 400 |
| `.h3` | `clamp(1.3rem, 2vw, 1.6rem)` | 1.2 | Serif 400 |
| `.lede` | `clamp(1.0625rem, 1.5vw, 1.1875rem)` | 1.68 | Sans, max 46ch |
| body | `1rem` | 1.65 | Sans |
| `.reading` | `1.1875rem` | 1.75 | Serif, max 36rem |
| `.meta` | `0.6875rem` | 1.4 | Mono, `0.11em`, uppercase |

**Measure.** Body prose caps at 62ch. Essay prose caps at 36rem (~68 characters at 19px).
Never let a paragraph run the full shell width.

### No em dashes

**The site uses no em dashes (`—`) anywhere in rendered output.** Not in prose, not as a
list marker, not as a separator between a value and its note. Verified by scanning the
built HTML of every route and the compiled CSS for `U+2014`; both return zero.

This is partly a voice decision — stacked em-dash clauses are one of the structural tells
that make writing read as machine-assembled, and two of the three existing essays suffer
from exactly that — and partly a consistency one. Replacements, in order of preference:

| Instead of an em dash | Use |
| --- | --- |
| A parenthetical aside | A comma pair, or recast as two sentences |
| A dramatic pause before a clause | A full stop |
| Introducing a list or elaboration | A colon |
| Separating metadata in a mono line | A middot `·`, which the meta lines already use |
| A `::before` list marker | A middot `·` |

En dashes (`–`) are fine and still correct for numeric and date ranges: `May – Sep 2025`,
`15–20 firms`. Code comments are exempt; they are not rendered.

## 3. Colour

Warm paper, not clinical white. One accent. Dark grounds used as *punctuation*, not as a
theme — there is no dark mode, and that is a deliberate commitment rather than an omission.

```
Light ground              Dark punctuation          Accent
--paper       #FBFAF7     --night        #171613    --clay       #B4552D
--paper-sunk  #F3F0E9     --night-raised #211F1B    --clay-deep  #8E3F1E
--rule        #E4DFD4     --night-rule   #332F28    --clay-soft  #F2E4DA
--rule-strong #B5AD9C     --night-ink    #F4F1EA    --clay-lift  #E0895E
--ink         #1B1A17     --night-ink-2  #B4AEA2
--ink-2       #45423B
--ink-3       #6B665E
```

**Why clay.** His photographs are green (Augusta, a Costa Rican mangrove) and blue (ocean,
surf). A warm terracotta is the complement to both, and it is the one accent family that
reads neither finance-corporate nor AI-startup.

Stored as space-separated RGB channels so Tailwind opacity modifiers work: `text-ink/70`.

### Measured contrast (WCAG 2.1, computed not estimated)

| Pair | Ratio | Verdict |
| --- | --- | --- |
| `ink` on `paper` | 16.67 | AA / AAA |
| `ink-2` on `paper` | 9.60 | AA / AAA |
| `ink-3` on `paper` | 5.46 | AA |
| `ink-3` on `paper-sunk` | 5.00 | AA |
| `clay` on `paper` | 4.70 | AA |
| `clay-deep` on `paper` | 6.99 | AA |
| `night-ink` on `night` | 16.04 | AA / AAA |
| `night-ink-2` on `night` | 8.20 | AA / AAA |
| `clay-lift` on `night` | 6.81 | AA |

`ink-3` was darkened from `#78736A` to `#6B665E` specifically because the original failed
AA on the sunk ground (4.14). `--rule` is decorative only; any boundary that carries
meaning uses `ink-3` or darker.

## 4. Layout

- **Shell:** `max-width: 78rem`, padding `clamp(1.25rem, 5vw, 3.5rem)`.
- **Narrow shell:** `52rem`, for reading pages.
- **Section rhythm:** `padding-block: clamp(4.5rem, 10vw, 8.5rem)`.
- **The ledger grid** (`.ledger`): an `11rem` mono metadata column beside the content at
  ≥1024px, collapsing to a stacked label below. This margin column is what gives the site
  its notebook feel and its single strong left axis.

**Breakpoints:** 375 / 430 / 768 / 1024 / 1440 are the QA targets. The only structural
change is the ledger collapse at 1024.

## 5. Cards, or the absence of them

The old site had exactly one compositional idea: a bordered white rectangle, repeated for
every kind of content. **Avoid cards.** Depth comes from hairlines and ground shifts, not
shadows. Radii are `0` almost everywhere; editorial, not SaaS.

Where a container is genuinely needed (Lab entries), it is a hairline-bordered block with a
mono header row — an index card or spec sheet, not a product card.

**A grid of N equal rectangles claims N things are equally finished.** Hierarchy is
expressed through density and type scale: flagship projects at full weight, experiments at
roughly 60% of the type scale.

## 6. Status vocabulary

Four values only, set in mono, 1px border, **no colour fills** — a green badge reads as
marketing.

`Live` · `Prototype` · `Paused` · `Archived`

Every badge carries a fact anchor next to it (`Live · 302 commits · updated 3 Sep`). A
status badge with nothing behind it is a claim; with a date attached it is evidence.

## 7. Present vs. speculative — the state line

The single most important convention on the project pages. Roadmaps must reveal judgement,
never overclaim.

1. A rule, then a heading: **"Where this could go"** with the parenthetical
   *(nothing below this line is built)*.
2. Stages at descending emphasis: `Now` 100% · `Next` 70% · `Later` 55% opacity.
3. `Later` items are set in italic and **phrased as questions**.
4. **Tense rule:** present tense above the line, conditional below. "Sends a daily SMS"
   above; "could learn which time of day actually works" below.

Open questions get a lifecycle — `Open` / `Resolved` / `Dropped` with a one-line outcome.
That is what separates a live question from a decorative one.

## 8. Motion

Every animation must orient, reveal, connect, or reinforce hierarchy. Nothing decorative.

- **Entrance:** opacity 0→1 plus `translateY(10px)`, 550ms, `cubic-bezier(0.22, 0.61, 0.24, 1)`,
  staggered ~60ms.
- **Hover:** 180ms, colour and border only. Never layout.
- **Underline:** `background-size` grows left-to-right over 280ms — cheap, inherits colour.
- **`prefers-reduced-motion: reduce`** removes every transform and transition, and
  `scroll-behavior: smooth` is applied only inside `prefers-reduced-motion: no-preference`.
  (The old site set `scroll-behavior: smooth` on `*` with no guard — a real accessibility bug.)
- **JS-off safety:** `[data-reveal]` elements are visible by default. They only start hidden
  once JS sets `data-reveal-ready="true"` on `<html>`, so the page is fully readable without
  JavaScript.

## 9. Focus and interaction

One focus treatment sitewide: `2px solid clay`, `3px` offset, switching to `clay-lift`
inside `.on-night`. Minimum touch target 44×44 (`.btn` has `min-height: 2.75rem`).

**No hover-only information anywhere.** The old site drove colour changes through
`onMouseEnter`/`onMouseLeave` handlers, which forced client components, broke on keyboard
focus, and did nothing on touch. All state changes are now CSS.

## 10. Two rooms

`/work` and `/writing` should feel like different rooms in the same building.

| | Work | Writing |
| --- | --- | --- |
| Body face | Inter | Newsreader |
| Measure | 62ch | 36rem |
| Chrome | Metadata, status, rules | Almost none |
| Density | High | Low — air is the point |

Same tokens, same accent, same grid. Different register.
