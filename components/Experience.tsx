import Reveal from './Reveal';

/**
 * The old Experience section was fourteen bordered rectangles in a stack, which
 * claimed a lifeguard shift and a private-equity-adjacent research role were
 * equally finished work (docs/design-system.md § 5). It is now an editorial
 * ledger: hairlines instead of cards, dates in the mono margin column, and
 * supporting work rendered at reduced weight so the trajectory reads first.
 *
 * No interactivity here, so it stays a server component; only <Reveal> is client.
 */

type Entry = {
  title: string;
  /** Role or degree — the mono kicker under the title. */
  role?: string;
  dates: string;
  place?: string;
  /** A short mono aside under the role. */
  note?: string;
  points: string[];
  /** Supporting work. Rendered at roughly 60% of the type scale — see § 5. */
  compact?: boolean;
};

type Group = {
  number: string;
  title: string;
  entries: Entry[];
};

const groups: Group[] = [
  {
    number: '01',
    title: 'Professional experience',
    entries: [
      {
        // Public-safe abstraction only. No portfolio-company names, no deal
        // codenames, no internal URLs, no figures from firm materials.
        // See docs/research/drive-mountaingate-career.md § 3b.
        title: 'Mountaingate Capital',
        role: 'Private Equity Intern',
        dates: 'Jun 2026 – Aug 2026',
        place: 'Denver, CO',
        points: [
          'Supported diligence across five or more active platform and add-on processes, preparing research, deal materials, and quality-of-earnings workpapers for partner review',
          'Built a three-statement model, DCF, comparable-company and sum-of-the-parts valuation for a public company as the intern capstone, and presented it to the deal team',
          'Mapped a ~320-company partner ecosystem for a portfolio company, profiled each by ownership, scale and fit, and triaged it down to a ranked shortlist of roughly fifteen',
          'Designed and delivered an internal AI reference for the deal team — narrowed after feedback from a broad overview to two questions: which use cases make a team member’s life easier, and how to run them quickly and securely',
        ],
      },
      {
        title: 'AMB Investment Banking',
        role: 'Target Client Research Intern',
        dates: 'May 2025 – Sep 2025',
        place: 'Remote',
        points: [
          'Conducted research on PE firms and built target lists aligned with sellside and buyside objectives',
          "Delivered timely summaries that assisted AMB's industry research, pitch materials, and go-to-market strategies",
        ],
      },
      {
        title: 'Freelance Entrepreneur',
        role: 'E-commerce Product Sourcing & Resale',
        dates: 'May 2023 – Sep 2025',
        place: 'Boulder, CO',
        points: [
          'Researched and forecasted high-demand products from multiple marketplaces, contacted manufacturers and shipping agents, purchased at below market value and resold across several e-commerce platforms',
          'Sold 50+ items, generating $2,200+ in profit with average margins of 40% while retaining 98% customer satisfaction',
        ],
      },
      {
        title: 'Lucky Pie Pizza',
        role: 'Server',
        dates: 'Jun 2025 – Aug 2025',
        place: 'Louisville, CO',
        compact: true,
        points: [
          'Improved operational efficiency serving guests, ensuring customer satisfaction, upselling menu items, and communicating with a team at a fast paced, upscale pizza restaurant serving 300+ customers daily',
        ],
      },
      {
        title: 'Water World Colorado',
        role: 'Advanced Deep Dive Lifeguard',
        dates: 'Jun 2022 – Aug 2024',
        place: 'Denver, CO',
        compact: true,
        points: [
          'Maintained safety at one of the largest water parks in the world, averaging 10+ saves per summer',
          'Led specialized trainings and advanced certification courses to strengthen response effectiveness',
        ],
      },
    ],
  },
  {
    number: '02',
    title: 'Leadership & activities',
    entries: [
      {
        title: 'Connolly Entrepreneurship Society',
        role: 'Member',
        dates: 'Jan 2026 – Present',
        place: 'Lexington, VA',
        points: [
          'Selected to elite team to develop a startup idea, build pitch decks, and present progress to secure funding',
          'Commit 6+ hours weekly to research, product design, web development, and alumni mentorship',
        ],
      },
      {
        title: 'Sigma Chi Fraternity — Zeta Chapter',
        role: 'Rush Chair',
        dates: 'Aug 2025 – Present',
        place: 'Lexington, VA',
        points: [
          'Manage rush budget, event logistics, outreach, and new member evaluation for group decisions',
        ],
      },
      {
        title: 'RWEsearch & Health Innovation Summit — HealthArk',
        role: 'Student Guest Speaker',
        dates: 'Sep 2025',
        points: [
          'Qualified alongside international candidates to present at RWE conference',
          'Collaborated with top industry leaders on the future of AI in Healthcare & Life Sciences',
        ],
      },
    ],
  },
  {
    number: '03',
    title: 'Education',
    entries: [
      {
        title: 'Washington and Lee University',
        // Corrected: the résumé's "Economics & Accounting, Minor: Philosophy" was
        // wrong on both counts. GPA omitted deliberately — it drifted 3.93 → 3.8 →
        // 3.77 across three résumés and adds nothing here.
        role: 'B.S. Economics — Minors in Entrepreneurship and Philosophy',
        dates: 'Expected May 2028',
        place: 'Lexington, VA',
        points: [
          'Coursework: Managerial Finance, Financial Accounting, Business Analytics, Microeconomic Theory',
          'Finalist and Honorable Mention, W&L First-Year Writing Award, for “The Monster Was Never In Your Closet”',
        ],
      },
      {
        title: 'Holy Family High School',
        dates: 'Class of 2024',
        place: 'Broomfield, CO',
        compact: true,
        points: [
          "Principal's Honor Roll every semester; Golf Regional Champions (x2)",
          'Captain for Varsity Golf; NHS Curator of Academic Inductions',
        ],
      },
    ],
  },
];

const capabilities = [
  { label: 'Technical', items: ['MS Excel', 'PowerPoint', 'Claude Code', 'Canva'] },
  {
    label: 'Certifications',
    items: ['Wall Street Prep', 'PADI Open Water', 'Lifeguard', 'CPR', '3D Design (In Progress)'],
  },
  {
    label: 'Interests',
    items: ['Golf', 'Travel', 'Basketball', 'SCUBA', 'Pickleball', 'Stock Trading', 'Euchre'],
  },
];

/** Group boundaries carry meaning, so they use ink-3; entry hairlines are decorative. */
function GroupHeading({ number, title }: { number: string; title: string }) {
  return (
    <Reveal className="ledger gap-y-3 border-t border-ink-3 pt-6 lg:gap-y-0">
      <p className="meta text-ink">{number}</p>
      <h3 className="h3">{title}</h3>
    </Reveal>
  );
}

function ExperienceEntry({ entry, delay }: { entry: Entry; delay: number }) {
  return (
    <Reveal
      as="li"
      delay={delay}
      className="ledger gap-y-4 border-t border-rule py-8 lg:gap-y-0 lg:py-9"
    >
      <div>
        <p className="meta">{entry.dates}</p>
        {entry.place ? <p className="meta mt-1.5">{entry.place}</p> : null}
      </div>

      <div>
        <h4 className={entry.compact ? 'font-serif text-lg text-ink' : 'h3'}>{entry.title}</h4>

        {entry.role ? <p className="meta mt-2 text-clay-deep">{entry.role}</p> : null}
        {entry.note ? <p className="meta mt-1.5">{entry.note}</p> : null}

        <ul
          className={
            entry.compact
              ? 'mt-4 space-y-2 text-sm text-ink-3'
              : 'mt-5 space-y-2.5 text-[0.9375rem] text-ink-2'
          }
        >
          {entry.points.map((point) => (
            <li key={point} className="relative max-w-measure pl-5 leading-relaxed">
              <span aria-hidden="true" className="absolute left-0 text-clay">
                —
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-y bg-paper-sunk">
      <div className="shell">
        <Reveal>
          <p className="meta">Background</p>
        </Reveal>

        <Reveal delay={70}>
          <h2 className="h2 mt-4">Experience</h2>
        </Reveal>

        <Reveal delay={140}>
          <hr className="rule-line mt-8 w-10" />
        </Reveal>

        {groups.map((group) => (
          <div key={group.number} className="mt-16 lg:mt-20">
            <GroupHeading number={group.number} title={group.title} />
            <ul className="mt-6">
              {group.entries.map((entry, index) => (
                <ExperienceEntry key={entry.title} entry={entry} delay={index * 70} />
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-16 lg:mt-20">
          <GroupHeading number="04" title="Skills & interests" />
          <ul className="mt-6">
            {capabilities.map((capability, index) => (
              <Reveal
                key={capability.label}
                as="li"
                delay={index * 70}
                className="ledger gap-y-2 border-t border-rule py-6 lg:gap-y-0"
              >
                <p className="meta">{capability.label}</p>
                <p className="max-w-measure text-[0.9375rem] text-ink-2">
                  {capability.items.join('  ·  ')}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
