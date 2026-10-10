# Drake Krommenhoek, personal site

Portfolio site: projects with full case studies, background, and experience.

Next.js 14 (App Router, static export), TypeScript, Tailwind CSS. Hosted on Vercel.

## Run it

```powershell
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
npm run lint
```

## Pages

| Route | Source |
| --- | --- |
| `/` | `app/page.tsx` |
| `/projects` | `app/projects/page.tsx` |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` (case studies) |
| `/about` | `app/about/page.tsx` |
| `/experience` | `app/experience/page.tsx` |

## Where content lives

- `lib/site.ts`: name, email, GitHub, LinkedIn, resume path, nav.
- `lib/projects.ts`: project cards (order here is the order on the site).
- `lib/case-studies.ts`: case study sections and timelines.
- `lib/experience.ts`: experience timeline and education.
- `public/Krommenhoek_Resume_Feb.pdf`: the downloadable resume. If you rename it, update `lib/site.ts`.

### Placeholders

Any text like `[METRIC: ...]`, `[SCREENSHOT: ...]`, or `[CONFIRM: ...]` in `lib/` renders as a visible rust-colored placeholder. Replace a token only with a fact you can source. Screenshot slots are `cover` in `lib/projects.ts` and `figure` blocks and `shot` fields in `lib/case-studies.ts`.

## Design

Direction and decisions: `docs/design-direction.md`. Tokens live in `tailwind.config.ts` (paper, ink, muted, rule, navy, rust). Fonts load through `next/font` in `app/layout.tsx`.

## Site URL and Open Graph

Canonical URLs, the sitemap, and Open Graph use `NEXT_PUBLIC_SITE_URL`. Set it in Vercel once the custom domain is live. Without it, Vercel builds fall back to the project's production URL.

The share image is `public/og.png`. To regenerate it after changing the headline:

```powershell
pwsh scripts/og-image.ps1
```
