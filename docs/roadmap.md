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

## Still open from the redesign
- About page: the moment recruiting broke for him and made him build Ascend (placeholder in `app/about/page.tsx`).
- Now section: what he's reading right now (placeholder in `lib/personal.ts`).
- Merge `redesign/v2` into `main` once he's happy with the Vercel preview.
