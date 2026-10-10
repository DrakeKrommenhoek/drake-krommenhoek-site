// Source: public/Krommenhoek_Resume_Feb.pdf, plus project start dates from each project's git history.
// Mountaingate Capital is listed by name, role, and dates only. Do not describe the work.

export type EntryKind = 'Building' | 'Work' | 'Leadership';

export interface Entry {
  org: string;
  role: string;
  kind: EntryKind;
  dates: string;
  location?: string;
  points: string[];
  href?: string;
}

export const entries: Entry[] = [
  {
    org: 'Mountaingate Capital',
    role: 'Private equity intern',
    kind: 'Work',
    dates: 'Jun 2026 to Aug 2026',
    points: [],
  },
  {
    org: 'Ascend',
    role: 'Founder and builder',
    kind: 'Building',
    dates: 'Mar 2026 to present',
    points: ['Designed and built an interactive prototype of a planning system for college recruiting and coursework.'],
    href: '/projects/ascend',
  },
  {
    org: 'The Answer Movement',
    role: 'Co-founder and builder',
    kind: 'Building',
    dates: 'Feb 2026 to present',
    points: ['Built and shipped a 28-day wellness web app, then kept improving it through monthly program releases.'],
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
      'Six or more hours a week on research, product design, web development, and alumni mentorship.',
    ],
  },
  {
    org: 'RWEsearch and Health Innovation Summit, HealthArk',
    role: 'Student guest speaker',
    kind: 'Leadership',
    dates: 'Sep 2025',
    points: ['Spoke on a panel with industry leaders about AI use cases in healthcare and life sciences.'],
  },
  {
    org: 'Sigma Chi, Zeta Chapter',
    role: 'Rush chair',
    kind: 'Leadership',
    dates: 'Aug 2025 to present',
    location: 'Lexington, VA',
    points: ['Manage the rush budget, event logistics, outreach, and new member evaluation.'],
  },
  {
    org: 'Lucky Pie Pizza',
    role: 'Busser and server in training',
    kind: 'Work',
    dates: 'Jun 2025 to Aug 2025',
    location: 'Louisville, CO',
    points: ['Served guests at a fast-paced restaurant handling 300+ customers a day.'],
  },
  {
    org: 'AMB Investment Banking',
    role: 'Target client research intern',
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
    role: 'Product sourcing and resale',
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
    role: 'Advanced deep dive lifeguard',
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
    detail: 'BS in Economics, minors in Philosophy and Entrepreneurship. GPA 3.8.',
    dates: 'Class of 2028',
    location: 'Lexington, VA',
    points: [
      'Coursework: Managerial Finance, Accounting, Business Analytics, Microeconomic Theory.',
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
