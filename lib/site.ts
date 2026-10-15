export const site = {
  name: 'Drake Krommenhoek',
  // Used for canonical URLs, sitemap, and Open Graph. Set NEXT_PUBLIC_SITE_URL once a custom domain exists;
  // on Vercel it otherwise falls back to the project's production URL.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000'),
  description:
    'Drake Krommenhoek is an economics student at Washington and Lee who finds meaningful problems, studies them with data, and builds products that solve them.',
  // Two inboxes so work inquiries stay separate from personal mail.
  email: {
    professional: 'dkconsulting@gmail.com',
    personal: 'drake.krommenhoek@gmail.com',
  },
  github: 'https://github.com/DrakeKrommenhoek',
  linkedin: 'https://www.linkedin.com/in/drakekrommenhoek',
  resume: {
    href: '/Krommenhoek_Drake_Resume.pdf',
    filename: 'Drake_Krommenhoek_Resume.pdf',
  },
} as const;

export const contactOptions = [
  {
    id: 'professional',
    label: 'Work inquiry',
    hint: 'Roles, projects, and consulting',
    email: site.email.professional,
    subject: 'Work inquiry',
  },
  {
    id: 'personal',
    label: 'Personal',
    hint: 'Everything else',
    email: site.email.personal,
    subject: 'Hello',
  },
] as const;

/**
 * Bracketed tokens like [METRIC: ...] and screenshot slots show while developing so they are easy to find.
 * Production builds hide them. Set NEXT_PUBLIC_SHOW_PLACEHOLDERS=1 to show them in a preview deploy.
 */
export const showPlaceholders =
  process.env.NODE_ENV !== 'production' || process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === '1';

export const nav = [
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
] as const;
