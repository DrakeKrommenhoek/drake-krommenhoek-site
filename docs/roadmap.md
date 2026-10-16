# Roadmap: the personal side of the site

Drake's plan (2026-10-15): make the site a personal reference for who he is and what he cares about, not only
a resume. Pick these up after midterms.

## Headline
- Replace "Hi, I'm Drake." (`app/page.tsx`, `headline`) with one of Drake's favorite quotes. He hasn't picked it yet.

## Books (`lib/personal.ts`, `books`)
- Rank and rate each book, with a short testimony on why he loves it (`note` field already exists).
- Add more: "and many others."

## Movies (new)
- Favorite movies of all time, grouped by category.
- Connect Letterboxd (it publishes an RSS feed per user, which a static site can read at build time).

## Music (new)
- Favorite genres, artists he's listening to now, new finds. Could pull from Spotify later.

## Off the clock → travel log (`lib/personal.ts`, `offTheClock`)
- Fill in the details (golf handicap or favorite course, best dive, Euchre story, favorite trip).
- Turn it into a travel log Drake controls instead of Instagram. First use: his time in Sydney.
  Each entry: place, dates, a few photos, a short note.

## Look and feel
- **Animation (Drake wants one).** Ideas that fit the black-and-white, cursive style: the name in the header
  writing itself in on first load (SVG stroke animation of the script), a slow fade between light and dark
  at sunrise and sunset, or project covers easing in as they scroll into view. Respect
  `prefers-reduced-motion` (globals.css already turns motion off for it).
- **Real sunrise and sunset.** Light/dark currently flips at 7am and 7pm on the visitor's clock
  (`themeScript` in `app/layout.tsx`). A sunrise calculation from the visitor's time zone would be more exact.
  Consider a small sun/moon toggle so people can override it.
- **Project covers in dark mode.** Both covers have a baked-in cream background (#F4F1EA) from before the
  black-and-white switch. Re-export them on white, or with a transparent background, so they sit cleanly in
  both modes.
- The mobile hero repeats the name (header and the card beside the photo). Consider dropping one.

## Still open from the redesign
- About page: the moment recruiting broke for him and made him build Ascend (placeholder in `app/about/page.tsx`).
- Now section: what he's reading right now (placeholder in `lib/personal.ts`).
- Merge `redesign/v2` into `main` once he's happy with the Vercel preview.
