# Design Direction: Editorial Ledger

Chosen 2026-10-09.

## Type
- Display: Fraunces (variable, optical size)
- Body: Instrument Sans

## Color
- Paper `#F4F1EA`, ink `#16181D`
- Accent: W&L navy `#0B2545`, used sparingly
- Rust `#B4532A`: placeholders and "planned" markers only

## Layout
- Asymmetric 12-column grid, large left-aligned statement
- Project cards read as editorial features, not tiles

## Motion
- Link underline draw and timeline fill only. No text animation on load.
- All motion disabled under `prefers-reduced-motion`

## Decisions
- Resume: keep current PDF (approved exception)
- Writing pages and subscribe API: removed
- Email split (2026-10-15): "Email me" asks work or personal first. Work goes to dkconsulting@gmail.com,
  personal to drake.krommenhoek@gmail.com. Both set in `lib/site.ts`.

## Homepage hero (2026-10-15)
Applies the web principles from design thinking class: one focal point, Z reading pattern, intentional mobile.
- Desktop: name top left, photo top right (the focal point), statement down the left, actions at the bottom.
- Mobile: a compact photo sits beside the name so the actions stay above the fold.
- Three actions in priority order: Email me (work or personal), LinkedIn, Resume PDF.
- Placeholder tokens and screenshot slots are hidden in production; project covers fall back to a typographic card.
- Project repos (read-only): `../Ascend_App`, `../the-answer-movement-app`

## Making it read as human (2026-10-15)
Research found the site read as AI-made: a three-part slogan headline, abstract lines with no specifics, and the
cream + serif + mono-label recipe that AI tools default to. Changes:
- Headline and intro lead with facts (W&L, Mountaingate, 240 users) instead of a slogan.
- Mono font removed; dates and labels use the body sans. No numbered sections. No staggered text animation.
- Copy states the role list once, drops "lesson" sentences, and keeps details only Drake could write.
- Added Now (homepage), Off the clock and Reading list (About). Content lives in `lib/personal.ts`.
- Email picker kept, with a soft shadow instead of the hard offset one.

## Black and white, cursive, day/night (2026-10-16)
- Palette is black and white only (tokens in `app/globals.css`, mapped in `tailwind.config.ts`). The W&L navy
  accent is retired; `navy` now aliases ink so existing classes keep working.
- Name and nav are set in Dancing Script (`font-script`). Headings stay Fraunces, body stays Instrument Sans.
- Light mode 7am to 7pm on the visitor's clock, dark otherwise (`themeScript` in `app/layout.tsx`).

## White, black, and blue; script name only (2026-10-16, later)
- Drake found the all-cursive version less professional. Palette is white, black, and W&L navy (`--accent`).
- Only the header name is script (Pinyon Script), inspired by mayorclothing.com's logo. Nav tabs are plain
  sans in all caps with wide letter spacing. To try another script, swap the font in `app/layout.tsx`
  (options compared: Pinyon Script, Great Vibes, Allura, Mrs Saint Delafield, Herr Von Muellerhoff,
  Monsieur La Doulaise).
