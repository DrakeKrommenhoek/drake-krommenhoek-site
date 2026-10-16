// Source: public/Krommenhoek_Drake_Resume.pdf (October 2026).

export type EntryKind = 'Building' | 'Work' | 'Leadership';

export interface Entry {
  org: string;
  role: string;
  kind: EntryKind;
  dates: string;
  location?: string;
  points: string[];
  href?: string;
  /** Not on the current resume. Shown under "Earlier experience", collapsed by default. */
  earlier?: boolean;
}

export const entries: Entry[] = [
  {
    org: 'Mountaingate Capital',
    role: 'Private Equity Intern',
    kind: 'Work',
    dates: 'May 2026 to Aug 2026',
    location: 'Denver, CO',
    points: [
      'Built a three-statement model with bear, base, and bull DCF cases, public comps, and a sum-of-the-parts analysis on a public connected-fitness company, and defended the investment thesis in a live presentation and Q&A with the Mountaingate team.',
      'Supported diligence across 5+ live platform and add-on processes, reviewing CIMs, QoE analyses, and customer retention data, and flagging open diligence questions for the deal team.',
      'Mapped a 300+ company software partner ecosystem for a portfolio company add-on search, scoring acquisition fit and partnership fit for each against theses, risks, and diligence questions.',
      'Built and presented an acquisition recommendation covering business model, financials, thesis, risks, and mitigants.',
      'Built and presented an AI implementation playbook and persistent web reference for associates and VPs, covering 10+ deal-team workflows with risk governance guardrails and security considerations.',
    ],
  },
  {
    org: 'Ascend',
    role: 'Founder, student productivity and recruiting platform',
    kind: 'Building',
    dates: 'Jan 2026 to present',
    location: 'Lexington, VA',
    points: [
      'Took a class venture beyond MVP into a live progressive web app, owning product design, development, and deployment.',
      'Won about $3,000 in development funding from the Entrepreneurship Society and placed top 10 of about 120 ventures.',
    ],
    href: '/projects/ascend',
  },
  {
    org: 'The Answer Movement',
    role: 'Co-founder and Product Lead',
    kind: 'Building',
    dates: 'Mar 2026 to present',
    location: 'Louisville, CO and Lexington, VA',
    points: [
      'Lead product for a 28-day wellness practice app built around a patented training device, launched to 240 users in 3 countries.',
      'Built and lead the App Store roadmap (native rebuild, content pipeline, device integration), ahead of schedule for January 2027.',
      'Placed top 10 of about 120 ventures at the W&L Entrepreneurship Summit.',
    ],
    href: '/projects/the-answer-movement',
  },
  {
    org: 'Connolly Entrepreneurship Society',
    role: 'Member',
    kind: 'Leadership',
    dates: 'Jan 2026 to present',
    location: 'Lexington, VA',
    points: [
      'Selected to a team that develops a startup idea, builds pitch decks, and presents progress to secure funding.',
      'Ten or more hours a week on research, product design, web development, and alumni mentorship.',
    ],
  },
  {
    org: 'RWEsearch and Health Innovation Summit, HealthArk',
    role: 'Student Guest Speaker',
    kind: 'Leadership',
    dates: 'Sep 2025',
    points: ['Selected to speak at a 2,800+ participant summit across 13 countries, on how AI can democratize education.'],
  },
  {
    org: 'Sigma Chi, Zeta Chapter',
    role: 'Rush Chair',
    kind: 'Leadership',
    dates: 'Aug 2025 to present',
    location: 'Lexington, VA',
    points: ['Manage the rush budget, event logistics, outreach, and new member evaluation.'],
  },
  {
    org: 'Lucky Pie Pizza',
    earlier: true,
    role: 'Busser/Server in training',
    kind: 'Work',
    dates: 'Jun 2025 to Aug 2025',
    location: 'Louisville, CO',
    points: ['Served guests at a fast-paced restaurant handling 300+ customers a day.'],
  },
  {
    org: 'AMB Investment Banking',
    role: 'Target Client Research Intern',
    kind: 'Work',
    dates: 'May 2025 to Sep 2025',
    location: 'Remote',
    points: [
      'Researched private equity firms and built target lists aligned with sell-side and buy-side objectives.',
      'Wrote summaries that fed industry research, pitch materials, and go-to-market strategy.',
    ],
  },
  {
    org: 'Freelance e-commerce',
    earlier: true,
    role: 'E-commerce Fashion Product Sourcing and Resale Specialist',
    kind: 'Building',
    dates: 'May 2023 to Sep 2025',
    location: 'Boulder, CO',
    points: [
      'Forecast demand across marketplaces, sourced from manufacturers and shipping agents, and resold below-market buys.',
      'Sold 50+ items for $2,200+ in profit at roughly 40% average margins, with 98% customer satisfaction.',
    ],
  },
  {
    org: 'Water World Colorado',
    earlier: true,
    role: 'Advanced Deep Dive Lifeguard',
    kind: 'Work',
    dates: 'Jun 2022 to Aug 2024',
    location: 'Denver, CO',
    points: [
      'Averaged 10+ saves a summer at one of the largest water parks in the world.',
      'Led specialized trainings and advanced certification courses.',
    ],
  },
];

export const education = [
  {
    school: 'Washington and Lee University',
    detail: 'BS in Economics, minors in Entrepreneurship and Philosophy. GPA 3.8.',
    dates: 'Class of 2028',
    location: 'Lexington, VA',
    points: [
      'Coursework: Managerial Finance, Econometrics, Entrepreneurship, Micro Theory, Buddhist Economics.',
      'Writing award for “The Monster Was Never In Your Closet,” one of 8 students selected from 400+ applicants.',
    ],
  },
  {
    school: 'Holy Family High School',
    detail: 'Varsity golf captain, two regional championships. Principal’s Honor Roll every semester.',
    dates: 'Class of 2024',
    location: 'Broomfield, CO',
    points: [],
  },
];
