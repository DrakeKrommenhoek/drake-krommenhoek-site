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
- Primary email: drake.krommenhoek@gmail.com
- Project repos (read-only): `../Ascend_App`, `../the-answer-movement-app`
