# Design Direction: Editorial Ledger

Chosen 2026-10-09.

## Type
- Display: Fraunces (variable, optical size)
- Body: Instrument Sans
- Labels, dates, evidence tags: JetBrains Mono

## Color
- Paper `#F4F1EA`, ink `#16181D`
- Accent: W&L navy `#0B2545`, used sparingly
- Rust `#B4532A`: placeholders and "planned" markers only

## Layout
- Asymmetric 12-column grid, large left-aligned statement
- Numbered sections (01 Projects, 02 Background) with margin notes
- Project cards read as editorial features, not tiles

## Motion
- 200ms fade/rise on scroll, link underline draw, timeline fill
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
