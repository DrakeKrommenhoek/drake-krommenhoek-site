// Case study content. Every claim here was checked against the project's repo (docs, code, git history)
// on 2026-10-09. Anything not verifiable is a bracketed token, e.g. [METRIC: ...], which renders as a
// visible placeholder. Do not replace a token without a source.

import type { Status } from '@/components/StatusTag';

export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'status'; items: { text: string; status: Status }[] }
  | { kind: 'figure'; label: string; ratio?: string };

export interface Section {
  id: string;
  title: string;
  blocks: Block[];
  /** Render the project timeline at the end of this section. */
  timeline?: boolean;
}

export interface Milestone {
  date: string;
  title: string;
  detail: string;
  shot?: string;
}

export interface CaseStudy {
  slug: string;
  lede: string;
  sections: Section[];
  timeline: Milestone[];
}

const ascend: CaseStudy = {
  slug: 'ascend',
  lede:
    'Recruiting as a college student means tracking opportunities, applications, deadlines, alumni outreach, interview prep, and company research across a dozen tools. Ascend is my attempt at the one system I wished I had.',
  sections: [
    {
      id: 'problem',
      title: 'Problem',
      blocks: [
        {
          kind: 'p',
          text: 'Recruiting runs alongside classes, not instead of them. Opportunities live on job boards, deadlines in email, coursework in Canvas, alumni conversations in a spreadsheet, and interview prep in notes. Nothing connects them, so the real question every week, what should I do next and what can I drop, has to be answered by hand.',
        },
      ],
    },
    {
      id: 'why',
      title: 'Why I cared',
      blocks: [
        {
          kind: 'p',
          text: 'I lived this problem as a student going through recruiting. I mapped the workflows I was running across tools and started building the system I wished existed. [STORY: the specific week or moment when your recruiting system broke down]',
        },
      ],
    },
    {
      id: 'prototypes',
      title: 'Early prototypes',
      blocks: [
        {
          kind: 'p',
          text: 'I wrote a design document and build plan on March 12, 2026, and shipped the first working version of the app four days later. The first version was built for a live demo to Washington and Lee alumni, on iPad and desktop.',
        },
        {
          kind: 'p',
          text: 'The original design called for a seven-question onboarding quiz, four animal archetypes, and separate modes for students and alumni. For the demo I cut it to four questions, three archetypes, and one mode.',
        },
        { kind: 'figure', label: 'SCREENSHOT: Ascend design doc or early sketch, March 2026' },
      ],
    },
    {
      id: 'research',
      title: 'Research and assumptions',
      blocks: [
        { kind: 'p', text: '[RESEARCH: who you talked to, how many students, and what you learned]' },
        { kind: 'p', text: 'The prototype is built on a few assumptions I still need to test with real users:' },
        {
          kind: 'list',
          items: [
            'Students want one weekly view that puts classes, recruiting, and personal commitments on the same calendar.',
            'Finding free time between commitments, and deciding what to cut, is more useful than another to-do list.',
            'A planning tool is easier to come back to if it has personality: a short quiz assigns an archetype (Strategist, Explorer, or Operator) and a companion that talks in the humor style you pick.',
            'Students will pay for advanced features, so the design includes a free tier and a Pro tier.',
          ],
        },
      ],
    },
    {
      id: 'technical',
      title: 'Technical approach',
      blocks: [
        {
          kind: 'p',
          text: 'Ascend is a React 18 app built with Vite and styled with Tailwind CSS. It installs as a progressive web app so it works like a native app on a phone or iPad, and it deploys on Vercel.',
        },
        {
          kind: 'list',
          items: [
            'Flow: a simple state machine moves the user through six screens: intro, name, quiz, archetype reveal, companion intro, and dashboard.',
            'Data: questions, archetypes, companion messages, and all dashboard content (events, assignments, recruiting activities, networking contacts, tasks) are in-memory data for a fixed demo day in March. Nothing is saved yet.',
            'Logic: weighted quiz scoring with a tiebreak, free-time gap detection across the calendar, and a real Excel export of the networking tracker.',
            'AI: none in the current build. The syllabus upload flow is simulated for the demo, and an AI-written weekly preview is on the roadmap.',
          ],
        },
      ],
    },
    {
      id: 'evolution',
      title: 'Product evolution',
      timeline: true,
      blocks: [
        {
          kind: 'p',
          text: 'Most of the build happened in one focused week leading up to the demo, followed by work on monetization and a waitlist.',
        },
      ],
    },
    {
      id: 'challenges',
      title: 'Challenges and tradeoffs',
      blocks: [
        {
          kind: 'list',
          items: [
            'Speed over persistence. Using demo data instead of a backend made a polished demo possible in days, but nothing a user enters survives a refresh.',
            'Scope cuts. The quiz, archetypes, and alumni mode were all trimmed so the core weekly view could be finished first.',
            'One large dashboard file. The dashboard grew to almost 2,000 lines in a single component, which now needs to be split before the next round of features.',
            'Integrations are the hard part. Canvas, Google Calendar, and Outlook appear in the interface but are not connected yet.',
          ],
        },
      ],
    },
    {
      id: 'current',
      title: 'Current product',
      blocks: [
        {
          kind: 'status',
          items: [
            { status: 'built', text: 'Onboarding: animated intro, name capture, four-question quiz, archetype reveal, and companion setup' },
            { status: 'built', text: 'Dashboard with master, coursework, recruiting, and personal views' },
            { status: 'built', text: 'Week, month, and day calendar views with color-coded events' },
            { status: 'built', text: 'Free-time detection with suggestions, and a "what would you cut" view' },
            { status: 'built', text: 'Personal task check-off with progress points' },
            { status: 'built', text: 'Thank-you email drafting from a template, with copy to clipboard' },
            { status: 'built', text: 'Networking tracker export to Excel' },
            { status: 'built', text: 'Waitlist signup page' },
            { status: 'prototype', text: 'Calendar, coursework, recruiting, and networking data (demo data for one day)' },
            { status: 'prototype', text: 'Syllabus upload and parsing (simulated)' },
            { status: 'prototype', text: 'Free and Pro tiers (interface only, no billing)' },
          ],
        },
        { kind: 'figure', label: 'SCREENSHOT: Ascend dashboard, week view' },
        { kind: 'figure', label: 'SCREENSHOT: Ascend onboarding quiz and archetype reveal' },
      ],
    },
    {
      id: 'impact',
      title: 'Evidence of impact',
      blocks: [
        {
          kind: 'list',
          items: [
            'Demo: [METRIC: audience size and feedback from the W&L alumni demo]',
            'Waitlist: [METRIC: waitlist signups to date]',
            'User testing: [METRIC: number of students who tried the prototype]',
          ],
        },
      ],
    },
    {
      id: 'roadmap',
      title: 'Roadmap',
      blocks: [
        {
          kind: 'status',
          items: [
            { status: 'planned', text: 'Accounts and saved data' },
            { status: 'planned', text: 'Canvas connection for real assignments and deadlines' },
            { status: 'planned', text: 'Google Calendar and Outlook sync' },
            { status: 'planned', text: 'A recruiting data layer for opportunities, applications, and contacts' },
            { status: 'planned', text: 'An AI-written weekly preview using Claude' },
            { status: 'planned', text: 'Push notifications' },
            { status: 'planned', text: 'Accountability groups and a campus ambassador program' },
            { status: 'planned', text: 'A paid Pro tier' },
          ],
        },
      ],
    },
    {
      id: 'lessons',
      title: 'Lessons',
      blocks: [
        {
          kind: 'list',
          items: [
            '[LESSON: what building for a live demo taught you about scope]',
            '[LESSON: what you would do differently on the next version]',
          ],
        },
      ],
    },
  ],
  timeline: [
    {
      date: 'Mar 12, 2026',
      title: 'Design doc and build plan',
      detail: 'Wrote the product design and a step-by-step build plan for the demo.',
      shot: 'SCREENSHOT: design doc excerpt',
    },
    {
      date: 'Mar 16, 2026',
      title: 'First working app',
      detail: 'Shipped the installable web app with onboarding and a color-coded calendar.',
      shot: 'SCREENSHOT: Ascend v1 calendar',
    },
    {
      date: 'Mar 17, 2026',
      title: 'Demo polish',
      detail: 'Added a skip-to-demo path, recruiting timeline, weekly plan, calendar views, and the syllabus flow.',
      shot: 'SCREENSHOT: recruiting timeline view',
    },
    {
      date: 'Mar 19, 2026',
      title: 'Free and Pro, waitlist',
      detail: 'Added the free and Pro tiers, thank-you email drafting, and a waitlist signup page.',
      shot: 'SCREENSHOT: Pro theme or waitlist page',
    },
    {
      date: '[DATE: next milestone]',
      title: 'Next',
      detail: '[MILESTONE: what you are building next and when]',
    },
  ],
};

const answer: CaseStudy = {
  slug: 'the-answer-movement',
  lede:
    'My trainer spent fifteen years developing a framework for physical and mental growth. We turned it into a 28-day program people can follow on their phone: one letter, one workout, and one journal entry a day.',
  sections: [
    {
      id: 'problem',
      title: 'Problem',
      blocks: [
        {
          kind: 'p',
          text: 'My trainer’s ABC framework existed in his coaching, not in a form someone could follow on their own every day. [CONFIRM: the problem in your words, e.g. why people struggled to keep the practice going between sessions]',
        },
      ],
    },
    {
      id: 'why',
      title: 'Why I cared',
      blocks: [
        {
          kind: 'p',
          text: 'I trained with him for eight years before we built this together. [STORY: what the training meant to you and why you wanted more people to have it]',
        },
      ],
    },
    {
      id: 'prototypes',
      title: 'Origin and early designs',
      blocks: [
        {
          kind: 'p',
          text: 'I built a working skeleton of the app, and four days later the first version shipped to people in my co-founder’s network. [CONFIRM: credit anyone else who helped build or launch it]',
        },
        {
          kind: 'p',
          text: 'Before writing code we considered a native app stack with a no-code builder, a subscription service, and a video platform. We chose a single installable web app instead, with nothing to download from an app store.',
        },
        { kind: 'figure', label: 'SCREENSHOT: first version of The Answer Movement, March 2026' },
      ],
    },
    {
      id: 'research',
      title: 'Research and assumptions',
      blocks: [
        { kind: 'p', text: '[RESEARCH: what you learned from early users or from your co-founder’s clients]' },
        {
          kind: 'list',
          items: [
            'A small daily unit is easier to keep than a big plan: one letter of the framework, one workout, one reflection.',
            'Streaks should reward showing up to train. Streak credit comes from finishing the workout, never from the journal alone.',
            'People miss days, so the streak includes grace days instead of resetting on the first miss.',
            'A phone-first web app is enough to start; an app store release can wait.',
          ],
        },
      ],
    },
    {
      id: 'technical',
      title: 'Technical approach',
      blocks: [
        {
          kind: 'p',
          text: 'The app is a progressive web app written in plain JavaScript, HTML, and CSS, hosted on Vercel. A service worker caches the app and checks the network first for program content, so updates reach people quickly.',
        },
        {
          kind: 'list',
          items: [
            'Content: each month’s program is a JSON file. Days 1 to 26 follow the letters A to Z, days 27 and 28 are special days, and optional days cover longer months. The app picks the right file by month and rolls the cycle over while keeping journal history.',
            'Storage: progress, journals, and streaks are stored on the device. There are no accounts yet.',
            'AI: a serverless function uses Claude to write a summary, which is sent by email.',
            'Messaging: serverless functions for daily text reminders through Twilio are written but not live yet.',
            'Quality: a custom test harness runs the app’s real functions across three time zones, a content validator checks each month’s file, and a weekly automated audit runs in GitHub Actions.',
          ],
        },
      ],
    },
    {
      id: 'evolution',
      title: 'Product evolution',
      timeline: true,
      blocks: [
        {
          kind: 'p',
          text: 'The app has shipped continuously since launch, with more than 300 commits by September 2026 and a new program release each month.',
        },
      ],
    },
    {
      id: 'challenges',
      title: 'Onboarding, engagement, and tradeoffs',
      blocks: [
        {
          kind: 'p',
          text: 'Onboarding walks a new user through a splash screen, the story behind the program, their name, and an optional phone number and reminder time. Returning users see a new intro screen each month and a relaunch screen when a new cycle starts.',
        },
        {
          kind: 'list',
          items: [
            'On-device storage was the fastest way to launch, but some phones clear it, and without accounts a user can lose progress.',
            'Reminders are the main engagement lever, and they are not reliable yet: browser notifications only fire locally, and the text reminder pipeline needs a database before it can send.',
            'Monthly content releases keep the program fresh but create room for stale copy. A content validator now checks each release.',
            'Streak logic is hard to get right across time zones and missed days. A known display bug is tracked in the test suite.',
          ],
        },
      ],
    },
    {
      id: 'current',
      title: 'Current product',
      blocks: [
        {
          kind: 'status',
          items: [
            { status: 'built', text: 'Onboarding and monthly intro screens' },
            { status: 'built', text: 'Daily home screen with the letter of the day' },
            { status: 'built', text: 'Guided workout with embedded video' },
            { status: 'built', text: 'Journal with history and voice dictation' },
            { status: 'built', text: 'Streaks with grace days, plus weekly challenges' },
            { status: 'built', text: 'Library of past days, breathing exercise, and a Day 28 finale' },
            { status: 'built', text: 'AI-written summary by email' },
            { status: 'prototype', text: 'Daily text reminders (sign-up screen built, sending is not live)' },
            { status: 'prototype', text: 'Conversational coaching bot (in development, not connected to the app)' },
          ],
        },
        { kind: 'figure', label: 'SCREENSHOT: The Answer Movement home screen', ratio: '9 / 16' },
        { kind: 'figure', label: 'SCREENSHOT: workout and journal screens', ratio: '16 / 10' },
      ],
    },
    {
      id: 'impact',
      title: 'Evidence of impact',
      blocks: [
        {
          kind: 'list',
          items: [
            'Reach: [METRIC: number of people the first version went to, and how many still use it]',
            'Engagement: [METRIC: completion rate for a 28-day cycle or average streak]',
            'Feedback: [QUOTE: a user or client quote, with permission]',
          ],
        },
        {
          kind: 'p',
          text: 'Usage is logged on each device, not on a server, so cross-user retention is not measurable yet. Adding accounts and analytics is part of the roadmap.',
        },
      ],
    },
    {
      id: 'roadmap',
      title: 'Roadmap',
      blocks: [
        {
          kind: 'status',
          items: [
            { status: 'planned', text: 'Accounts so progress follows the user across devices' },
            { status: 'planned', text: 'Push notifications and working text reminders' },
            { status: 'planned', text: 'Small accountability groups' },
            { status: 'planned', text: 'An app store release' },
            { status: 'planned', text: 'An AI coaching tier built on the framework' },
          ],
        },
      ],
    },
    {
      id: 'lessons',
      title: 'Lessons',
      blocks: [
        {
          kind: 'list',
          items: [
            '[LESSON: what building with a co-founder who is not technical taught you]',
            '[LESSON: what shipping in four days and then maintaining it for months taught you]',
          ],
        },
      ],
    },
  ],
  timeline: [
    {
      date: 'Mar 2026',
      title: 'Built and shipped in four days',
      detail: 'The first version of the 28-day app went out to people in my co-founder’s network.',
      shot: 'SCREENSHOT: launch version',
    },
    {
      date: 'Mar 2026',
      title: 'Journal storage and a live demo',
      detail: 'Per-day journal storage, plus a demo and challenge page for a Washington and Lee event.',
      shot: 'SCREENSHOT: demo or challenge page',
    },
    {
      date: 'Apr 1, 2026',
      title: 'New streak engine',
      detail: 'Rebuilt streaks with grace days and backfill.',
    },
    {
      date: 'May 2026',
      title: 'Monthly cycles',
      detail: 'The program now rolls over each month with new content, keeping journal history.',
    },
    {
      date: 'Jun 2026',
      title: 'Day 28 finale and a warmer design',
      detail: 'Added a finale for completing the program and refreshed the visual design.',
      shot: 'SCREENSHOT: Day 28 finale',
    },
    {
      date: 'Jul 2026',
      title: 'Full audit and test suite',
      detail: 'Audited the whole app, then added automated tests and a content validator.',
    },
    {
      date: 'Aug 2026',
      title: 'Redesigned intro and dictation',
      detail: 'New monthly intro and voice dictation for journal entries.',
      shot: 'SCREENSHOT: August intro screen',
    },
    {
      date: 'Sep 2026',
      title: 'Coaching bot in development',
      detail: 'Started a conversational coaching service, separate from the app.',
    },
  ],
};

export const caseStudies: Record<string, CaseStudy> = {
  [ascend.slug]: ascend,
  [answer.slug]: answer,
};

const TOKEN = /\s*\[[A-Z][A-Z ]*:[^\]]+\]/g;
const strip = (text: string) => text.replace(TOKEN, '').trim();
/** Empty once tokens are removed, or only a label left over like "Reach:". */
const isBlank = (text: string) => strip(text) === '' || strip(text).endsWith(':');

/**
 * The published version of a case study: placeholder tokens removed, along with anything that was only a
 * placeholder (screenshot slots, unfinished metrics, empty sections). Used when placeholders are hidden.
 */
export function publishable(study: CaseStudy): CaseStudy {
  const blocks = (list: Block[]): Block[] =>
    list.flatMap((b): Block[] => {
      if (b.kind === 'figure') return [];
      if (b.kind === 'p') return isBlank(b.text) ? [] : [{ ...b, text: strip(b.text) }];
      if (b.kind === 'list') {
        const items = b.items.filter((i) => !isBlank(i)).map(strip);
        return items.length ? [{ ...b, items }] : [];
      }
      return [b];
    });

  return {
    ...study,
    sections: study.sections
      .map((s) => ({ ...s, blocks: blocks(s.blocks) }))
      .filter((s) => s.blocks.length > 0 || s.timeline),
    timeline: study.timeline
      .filter((m) => !isBlank(m.date) && !isBlank(m.detail))
      .map(({ shot: _shot, ...m }) => ({ ...m, date: strip(m.date), detail: strip(m.detail) })),
  };
}
