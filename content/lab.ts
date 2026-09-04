/**
 * Lab entries. Smaller than a project page on purpose — density is the hierarchy
 * (design-system § 5). Everything here is either finished-and-retired or an
 * experiment, and each entry says which. Sourced from
 * docs/research/github-and-live-apps.md § 3, 4 and 6.
 */

import type { ProjectStatus } from './projects';

export interface LabEntry {
  name: string;
  status: ProjectStatus;
  /** Dated fact anchor. Never a bare badge. */
  anchor: string;
  blurb: string;
  /** The honest caveat. Every entry has one; that is the point of the page. */
  caveat: string;
  stack: string[];
  links?: { label: string; href: string }[];
}

export const lab: LabEntry[] = [
  {
    name: 'Ascend',
    status: 'Prototype',
    anchor: 'Three days of work in March 2026 · dormant since',
    blurb:
      'A productivity and recruiting dashboard for college students. It won a $2,866 non-dilutive grant from the Connolly Entrepreneurship Society and placed top ten at the W&L Entrepreneurship Summit. It started as a three-person course team; I designed and built the MVP and kept it after the others moved on.',
    caveat:
      'It is a demo, and it should be described as one. Nothing persists across a refresh, the dashboard is a 1,973-line mock, and the Canvas, Calendar and Handshake icons are images rather than integrations. It is also the most clickable thing I have made, which is exactly why the label matters.',
    stack: ['React 18', 'Vite', 'Tailwind'],
    links: [{ label: 'Live demo', href: 'https://ascend-app-one.vercel.app' }],
  },
  {
    name: 'Listing Forge',
    status: 'Archived',
    anchor: '19,771 lines · 386 tests · retired August 2026',
    blurb:
      'A photo-to-listing pipeline for a household estate sale: Telegram photo intake, vision identification, a confidence-scored pricing engine with list/expected/floor bands, and a markdown schedule that steps prices down toward a deadline without ever breaching the floor.',
    caveat:
      'The sale it was built for completed by manual marketplace posting. It was never used for a real sale end to end. If I rebuilt it I would cut vision identification first — it was the most code for the least trust, a model guessing what an item is that a human has to check anyway.',
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'Telegram'],
    links: [{ label: 'GitHub', href: 'https://github.com/DrakeKrommenhoek/listing-forge' }],
  },
  {
    name: 'Project SLOPE',
    status: 'Prototype',
    anchor: 'Two days in August 2026 · 118 tests',
    blurb:
      'A career compass built for exactly one person. Every screen is computed from YAML through a set of engines, and the central object is a learning loop where the falsifier — what would prove me wrong — has to be written before the outcome is known.',
    caveat:
      'Genuinely closed loops: zero. The corpus starts now. Five of its eighteen dimensions have no evidence behind them and are drawn as guesses, and the home screen prints "the next useful thing is not on this screen" while real-world actions sit at zero. The idea is better than the artifact.',
    stack: ['React 19', 'TypeScript', 'Zod', 'YAML', 'Vitest'],
  },
  {
    name: 'PhotoRank',
    status: 'Prototype',
    anchor: 'One day in May 2026',
    blurb:
      'Upload a batch of photos, get them ranked. Real pipeline underneath: face detection, person matching, then sharpness, lighting, eyes-open, smile and composition scoring, with unit tests over each scoring function.',
    caveat:
      'It will not run out of the box — you have to download the face-api model weights into the public folder by hand. Built in a day and abandoned the same week.',
    stack: ['Next.js', 'React 19', 'face-api.js', 'Jest'],
  },
  {
    name: 'Pursuit of Progress',
    status: 'Archived',
    anchor: '3,338 lines in one file · abandoned March 2026',
    blurb:
      'A habit tracker with XP, streaks and notifications. My first substantial project, written as a single vanilla-JS file with no framework and no build step.',
    caveat:
      'No tests, and it shows. Included here because it is where I started, and because the habit-tracking idea came back six months later as something people actually use.',
    stack: ['Vanilla JS', 'PWA'],
  },
];
