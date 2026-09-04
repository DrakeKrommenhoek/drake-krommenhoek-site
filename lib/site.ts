/**
 * One place for the canonical origin. Vercel sets VERCEL_PROJECT_PRODUCTION_URL
 * on production builds; NEXT_PUBLIC_SITE_URL overrides it when a custom domain
 * is attached. The fallback is a guess and should be replaced once the real
 * domain is known — see docs/MORNING_REVIEW.md.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://drakekrommenhoek.com');

export const SITE_NAME = 'Drake Krommenhoek';

export const SITE_DESCRIPTION =
  'Economics at Washington and Lee. I build software people use, and spent a summer inside a private equity firm working out which half of the work a machine can be trusted with.';
