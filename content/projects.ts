/**
 * The typed content layer for /work. Every claim here traces to
 * docs/research/github-and-live-apps.md or docs/research/drive-mountaingate-career.md.
 *
 * Rules that are load-bearing, not stylistic:
 *  - `status` is one of four words and always ships with a dated `anchor`.
 *    A badge with nothing behind it is a claim; with a date it is evidence.
 *  - `roadmap` items below stage 'Now' are speculative. The page renders them
 *    under a literal "nothing below this line is built" rule, `Later` items are
 *    phrased as questions, and tense shifts to conditional. See design-system § 7.
 *  - `needsReview` marks a number Drake has not personally confirmed.
 */

export type ProjectStatus = 'Live' | 'Prototype' | 'Paused' | 'Archived';
export type Stage = 'Now' | 'Next' | 'Later';
export type QuestionState = 'Open' | 'Resolved' | 'Dropped';

export interface RoadmapItem {
  stage: Stage;
  text: string;
}

export interface OpenQuestion {
  text: string;
  state: QuestionState;
  outcome?: string;
}

export interface Evidence {
  label: string;
  value: string;
  note?: string;
}

export interface Project {
  slug: string;
  name: string;
  /** The domain line. Three flagships should read as three different fields. */
  domain: string;
  tagline: string;
  status: ProjectStatus;
  /** Fact anchor rendered beside the status badge. */
  anchor: string;
  period: string;
  links: { label: string; href: string }[];
  /** The one sentence that makes this project not interchangeable. */
  constraint: string;
  /** Per-project link text. Three identical "Read more" links stacked is the
      symmetric-triad tell; each of these names what you actually get. */
  cta: string;
  body: string[];
  evidence: Evidence[];
  stack: string[];
  /** Optional ordered pipeline, for systems where the flow *is* the story. */
  pipeline?: string[];
  /** Optional verbatim quote to carry the page. */
  pullQuote?: { text: string; source: string };
  /** Optional screenshot of the real thing. Only where publishing one exposes
      nothing that belongs to someone else — see docs/content-source-map.md. */
  shot?: { src: string; alt: string; caption: string; width: number; height: number };
  roadmap: RoadmapItem[];
  questions: OpenQuestion[];
  needsReview?: string[];
}

export const projects: Project[] = [
  {
    slug: 'answer-movement',
    name: 'The Answer Movement',
    domain: 'Consumer app · built for one real client',
    tagline:
      'A 28-day habit app that about 240 people open in the morning, pinned by a test suite I wrote because the file got too big to touch safely.',
    status: 'Live',
    anchor: '302 commits · last shipped 3 September 2026',
    period: 'February 2026 – present',
    // theanswermovement.com is the trainer's Shopify storefront, not this app —
    // verified by opening it. The app lives at the Vercel URL.
    links: [
      {
        label: 'Open the app',
        href: 'https://the-answer-movement-app.vercel.app',
      },
    ],
    shot: {
      src: '/images/projects/answer-movement/app-intro.jpg',
      alt: 'The Answer Movement app intro screen, reading “One choice. One movement. One breath at a time.”',
      caption:
        'The intro screen, deliberately not the daily practice, because those pages carry the trainer’s own writing, which is his.',
      width: 780,
      height: 1688,
    },
    constraint:
      'The whole application is one 9,058-line HTML file. I inherited it from myself, and by the time it was too big to refactor safely, people were already depending on it.',
    cta: 'How I made a 9,058-line file safe to change',
    body: [
      'A fitness trainer wanted a daily practice his clients would actually finish. The result is one letter of the alphabet per day for 28 days: his definition, a reflection, a journal box, and a workout video. State lives in localStorage. There are no accounts and no database, because asking someone to sign up before their first workout is how you lose them.',
      'A three-day grace system means missing a day does not break a streak. That is not a feature so much as an argument: the app is for people who will miss days, and a streak that punishes them is a streak that ends.',
      'The interesting engineering is not the app. It is that I could not safely change it. So the test suite brace-extracts the real shipped functions straight out of the HTML at runtime and executes them in a Node VM with an in-memory localStorage and a frozen, settable clock, across three timezones. Nothing is hand-copied, so the tests cannot drift from the code they claim to cover.',
      'Some of those tests deliberately assert behavior that is wrong. Each one is tagged and mapped to a numbered audit finding, under a rule that fixing the bug has to flip the assertion in the same commit. A known bug that is written down and pinned is a liability I can schedule. An unknown one is a liability that finds me on a Tuesday morning in front of 240 people.',
    ],
    evidence: [
      { label: 'Tests', value: '24 of 24 passing', note: 'run across America/Denver, UTC and Australia/Sydney' },
      { label: 'Largest file', value: '9,058 lines', note: 'the reason the suite exists' },
      { label: 'Known bugs', value: '3 pinned, 1 fixed', note: 'each asserted until repaired' },
      { label: 'Daily reach', value: '~240 people' },
    ],
    stack: ['Vanilla JS', 'No build step', 'Vercel functions', 'Twilio', 'Node + Anthropic bot on a VPS'],
    pullQuote: {
      text: '240 people open this app every morning, and this month’s worst bug passed every automated check while it was live.',
      source: 'From the repository README, explaining why the overnight research job is forbidden from pushing to main',
    },
    roadmap: [
      { stage: 'Now', text: 'Serves a daily letter, tracks streaks with three grace days, and broadcasts a daily SMS through Twilio.' },
      { stage: 'Now', text: 'A nightly job on the VPS answers one queued research question and pushes to a research branch, never to main.' },
      { stage: 'Next', text: 'Fix the UTC-versus-local date comparison that fails silently for users east of UTC.' },
      { stage: 'Next', text: 'Make the displayed streak a real consecutive count instead of the day of the month.' },
      { stage: 'Later', text: 'Could the 9,058-line file be split without breaking the extraction the tests depend on?' },
      { stage: 'Later', text: 'Would a second cohort want a different alphabet, or is the content the product?' },
    ],
    questions: [
      {
        text: 'Does a streak mean anything if you design it to be unbreakable?',
        state: 'Open',
      },
      {
        text: 'Should the admin endpoint have ever had a hardcoded fallback secret?',
        state: 'Resolved',
        outcome: 'No. It shipped inside client HTML, was caught in an audit, and was removed. The endpoint now returns 503 rather than falling back.',
      },
    ],
    needsReview: ['~240 people: his own README figure, never independently counted'],
  },
  {
    slug: 'operation-drake',
    name: 'Operation D.R.A.K.E.',
    domain: 'Backend infrastructure · a system with one user',
    tagline:
      'A personal agent OS with an approval gate, built so that the dangerous half cannot run without me saying yes.',
    status: 'Prototype',
    anchor: '40 commits · deployed to a VPS · last shipped 3 September 2026',
    period: 'June 2026 – present',
    links: [],
    constraint:
      'An agent that can act on your behalf is only as safe as the moment where it has to stop and ask. Most of the design is that moment.',
    cta: 'How the approval gate decides',
    body: [
      'A message arrives over Telegram or the command line. It gets stored, normalized, and handed to a router agent that decides what kind of thing it is. That becomes a task with a status lifecycle. If it is the sort of thing that is safe to run unattended, it executes. If it is not, it parks and waits for approval. Either way the result comes back as a Markdown artifact on the channel it came in on.',
      'The split between those two paths is the actual product. Extraction, restructuring and summarizing go through. Anything that commits me to something waits.',
      'The provider layer has a mock implementation alongside the real Anthropic and OpenAI clients, which is why the test suite runs with no API keys and no network. That is a small decision that pays every single day: tests that need a key are tests that eventually stop being run.',
      'It runs on a DigitalOcean box under Docker. I keep a state file that records what is actually deployed against what is committed, because I have been wrong about that before. New phases soak for fourteen days before I move on, one at a time.',
    ],
    evidence: [
      { label: 'Test functions', value: '280 across 29 files', note: 'not executed in the audit environment; file contents verified' },
      { label: 'Largest subsystem', value: 'Notion sync', note: '12 modules, 98 tests' },
      { label: 'Deployment', value: 'Ubuntu 24.04, Docker', note: 'deployed commit tracked against local and origin' },
      { label: 'Soak period', value: '14 days per phase' },
    ],
    stack: ['Python 3.12', 'FastAPI', 'SQLAlchemy 2', 'Pydantic 2', 'Telegram', 'Notion', 'Docker', 'React 19 PWA'],
    pipeline: [
      'Message arrives over Telegram or the CLI',
      'Stored and normalized: URL detection, type classification',
      'Router agent classifies intent',
      'Task record created, status lifecycle begins',
      'Safe? Execute. Not safe? Hold for approval',
      'Result written as a Markdown artifact, returned on the original channel',
    ],
    roadmap: [
      { stage: 'Now', text: 'Captures notes, summarizes, extracts actions, and builds research briefs from Telegram or the CLI.' },
      { stage: 'Now', text: 'Syncs classified tasks into Notion through a mockable client with 98 tests behind it.' },
      { stage: 'Next', text: 'Prove voice transcription against the live Whisper API rather than the mock.' },
      { stage: 'Next', text: 'Fix the seven-day OAuth token expiry in the health ingest module.' },
      { stage: 'Later', text: 'Does an approval gate stay useful once you trust it, or does it become a button you press without reading?' },
      { stage: 'Later', text: 'Could the router explain why it classified something the way it did, in a form worth reading?' },
    ],
    questions: [
      {
        text: 'How do you hand off a system whose value depends on tacit judgment?',
        state: 'Open',
        outcome: undefined,
      },
      {
        text: 'Should transcription be described as working in production?',
        state: 'Resolved',
        outcome: 'No. It is proven against mocks only. The roadmap says so and this page says so.',
      },
    ],
  },
  {
    slug: 'ai-playbook',
    name: 'How to AI',
    domain: 'Private equity · internal enablement, no artifact to show',
    tagline:
      'An internal reference for a deal team, and the summer I spent working out which half of the work a machine can actually be trusted with.',
    status: 'Archived',
    anchor: 'Delivered August 2026 · internal to the firm',
    period: 'June – August 2026',
    links: [],
    constraint:
      'Everything I made that summer belongs to the firm. What I can show is the reasoning, which turned out to be the part worth keeping anyway.',
    cta: 'What ten weeks changed my mind about',
    body: [
      'I spent ten weeks as a private equity intern in Denver. Alongside the diligence and the modeling, I was asked to work out how the deal team should actually use AI. I started by making the mistake everyone makes.',
      'The first version was a broad, forward-looking case for why AI matters. Market statistics. Model comparisons. Infrastructure we did not have. My supervisor’s feedback narrowed it to two questions, and they are much better questions than mine: what use cases make a team member’s life easier, and how do they run them quickly and securely?',
      'Everything after that got easier, because those two questions kill bad ideas quickly. Several attractive use cases turned out to depend on public-market data in a portfolio of exclusively private companies. They were cut, not adapted. Checking the data premise before designing the workflow would have saved me a week.',
      'The strongest edit I made all summer narrowed one tool from "supports analysis" to "structures data and prepares for audit." The narrower claim was the one that survived scrutiny, and it was also the one that actually worked.',
      'Underneath all of it was a distinction I have not stopped using since.',
    ],
    evidence: [
      { label: 'Duration', value: '10 weeks' },
      { label: 'Diligence processes supported', value: '5+ platform and add-on' },
      { label: 'Ecosystem mapped', value: '~320 companies', note: 'triaged to a shortlist of roughly fifteen' },
      { label: 'Capstone', value: 'Three-statement model, DCF, comps and sum-of-the-parts' },
    ],
    stack: ['Financial modeling', 'Workflow design', 'Instructional design for a skeptical audience'],
    pullQuote: {
      text: 'The axis is not easy/hard, it is whether a human can verify the output cheaply. Extraction, restructuring, and comparison are cheap to verify. Recommendations, credibility assessments, and forecast assumptions are not. Better models move the line, they do not erase it.',
      source: 'Summer 2026 portable record',
    },
    roadmap: [
      { stage: 'Now', text: 'The reference was delivered as a live training session and remains internal to the firm.' },
      { stage: 'Later', text: 'Does a shared method survive the departure of the person who wrote it, or does usage quietly regress to ad hoc?' },
      { stage: 'Later', text: 'Where is the real boundary between structuring and interpreting, and who decides where it sits?' },
    ],
    questions: [
      {
        text: 'Can a capability be genuinely model-agnostic, or is portability across providers an architectural fiction?',
        state: 'Open',
        outcome: undefined,
      },
      {
        text: 'Should the internal tool built alongside this be linked from a portfolio?',
        state: 'Dropped',
        outcome: 'No. It carries the firm’s brand and its internal methodology. It is not named, linked or screenshotted anywhere on this site.',
      },
    ],
    needsReview: [
      '~320-company ecosystem map: the figure comes from the résumé and the timestamps around it are inconsistent',
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
