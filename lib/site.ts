export const site = {
  name: 'Drake Krommenhoek',
  // [CONFIRM: production domain] Used for canonical URLs, sitemap, and Open Graph.
  url: 'https://drakekrommenhoek.com',
  description:
    'Drake Krommenhoek is an economics student at Washington and Lee who finds meaningful problems, studies them with data, and builds products that solve them.',
  email: 'drake.krommenhoek@gmail.com',
  github: 'https://github.com/DrakeKrommenhoek',
  linkedin: 'https://www.linkedin.com/in/drakekrommenhoek',
  resume: {
    href: '/Krommenhoek_Resume_Feb.pdf',
    filename: 'Drake_Krommenhoek_Resume.pdf',
  },
} as const;

export const nav = [
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
] as const;
