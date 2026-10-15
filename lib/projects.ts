import type { Status } from '@/components/StatusTag';

export interface ProjectSummary {
  slug: string;
  name: string;
  /** One sentence: what it is, in plain terms. */
  summary: string;
  role: string;
  status: Status;
  statusNote: string;
  period: string;
  stack: string[];
  /** What the cover screenshot should show, used as the placeholder label until coverImage exists. */
  cover: string;
  /** Drop a 1600x1000 PNG in public/images/projects/ and point here, e.g. '/images/projects/ascend.png'. */
  coverImage?: { src: string; alt: string };
  repo?: string;
  live?: string;
}

export const projects: ProjectSummary[] = [
  {
    slug: 'the-answer-movement',
    name: 'The Answer Movement',
    summary:
      'A 28-day wellness app built on my trainer’s ABC framework: one letter, one workout, and one journal entry each day.',
    role: 'Co-founder and builder',
    status: 'built',
    statusNote: 'live, 240 users in 3 countries',
    period: 'March 2026 to present',
    stack: ['JavaScript', 'PWA', 'Vercel Functions', 'Claude API'],
    cover: 'SCREENSHOT: The Answer Movement daily workout screen',
    live: 'https://the-answer-movement-app.vercel.app',
  },
  {
    slug: 'ascend',
    name: 'Ascend',
    summary:
      'A planning system for college students that puts recruiting, classes, deadlines, and networking in one place.',
    role: 'Founder, designer, and builder',
    status: 'prototype',
    statusNote: 'top 10 of about 120 ventures',
    period: 'January 2026 to present',
    stack: ['React', 'Vite', 'Tailwind CSS', 'PWA'],
    cover: 'SCREENSHOT: Ascend dashboard, master calendar view',
    repo: 'https://github.com/DrakeKrommenhoek/Ascend_App',
    live: 'https://ascend-app-one.vercel.app',
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
