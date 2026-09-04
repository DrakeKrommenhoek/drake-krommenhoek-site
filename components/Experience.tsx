import Link from 'next/link';
import Reveal from './Reveal';

/**
 * Deliberately a list, not a narrative.
 *
 * This section was 37% of the homepage against Work at 17% — the page read as a
 * résumé with projects attached, which is the exact failure the brief named. The
 * first attempt at fixing it trimmed the supporting jobs and barely moved the
 * number, because the real bulk was four long bullets under Mountaingate that
 * re-told a story already told properly on /work/ai-playbook.
 *
 * So every entry is now one line. Anyone who wants the bullet-point version can
 * download the résumé; anyone who wants the real version reads the project page.
 */

type Entry = {
  title: string;
  role?: string;
  dates: string;
  place?: string;
  summary: string;
  /** Where the full story actually lives, if it lives somewhere. */
  href?: string;
  hrefLabel?: string;
  /** Supporting work, rendered at reduced weight. */
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
    title: 'Professional',
    entries: [
      {
        // Public-safe abstraction only. No portfolio companies, no deal
        // codenames, no internal URLs. docs/research/drive-mountaingate-career.md § 3b.
        title: 'Mountaingate Capital',
        role: 'Private Equity Intern',
        dates: 'Jun – Aug 2026',
        place: 'Denver, CO',
        summary:
          'Ten weeks on a lower-middle-market deal team: diligence across five or more active processes, a public-company valuation as the intern capstone, a ~320-company partner map triaged to a shortlist of fifteen, and an internal AI reference for the deal team.',
        href: '/work/ai-playbook',
        hrefLabel: 'What that summer actually taught me',
      },
      {
        title: 'AMB Investment Banking',
        role: 'Investment Research Intern',
        dates: 'May – Sep 2025',
        place: 'Remote',
        summary:
          'Researched and profiled 15–20 investment firms by focus, portfolio and strategic fit, and turned them into target lists and summary briefs for the sourcing team.',
      },
      {
        title: 'Freelance e-commerce sourcing and resale',
        dates: 'May 2023 – Sep 2025',
        place: 'Boulder, CO',
        summary:
          'Forecast demand, negotiated with suppliers, bought below market and resold. 50+ items, $2,200+ profit, roughly 40% average margins.',
      },
      {
        title: 'Earlier',
        dates: '2022 – 2025',
        place: 'Colorado',
        compact: true,
        summary:
          'Server at a high-volume pizza restaurant. Before that, advanced lifeguard at one of the largest water parks in the world, averaging 10+ saves a summer and later running the training for it.',
      },
    ],
  },
  {
    number: '02',
    title: 'Leadership',
    entries: [
      {
        title: 'Connolly Entrepreneurship Society',
        role: 'Member',
        dates: 'Jan 2026 – present',
        place: 'Lexington, VA',
        summary:
          'Selective venture program. Six-plus hours a week on research, product design and alumni mentorship. It funded Ascend with a $2,866 grant.',
      },
      {
        title: 'Sigma Chi, Zeta Chapter',
        role: 'Rush Chair',
        dates: 'Aug 2025 – present',
        place: 'Lexington, VA',
        summary:
          'Run recruitment: budget, event logistics, outreach, and new-member evaluation for chapter decisions.',
      },
      {
        title: 'HealthArk RWE & Health Innovation Summit',
        role: 'Student Panelist',
        dates: 'Sep 2025',
        summary:
          'Spoke on a panel about AI use cases across healthcare and life sciences.',
      },
    ],
  },
  {
    number: '03',
    title: 'Education',
    entries: [
      {
        title: 'Washington and Lee University',
        role: 'B.S. Economics, minors in Entrepreneurship and Philosophy',
        dates: 'Expected May 2028',
        place: 'Lexington, VA',
        summary:
          'Managerial Finance, Financial Accounting, Business Analytics, Microeconomic Theory. Finalist and Honorable Mention for the First-Year Writing Award, for an essay called “The Monster Was Never In Your Closet”.',
      },
      {
        title: 'Holy Family High School',
        dates: 'Class of 2024',
        place: 'Broomfield, CO',
        compact: true,
        summary:
          "Principal's Honor Roll every semester. Varsity golf captain, two regional titles.",
      },
    ],
  },
];

const capabilities = [
  {
    label: 'Certifications',
    items: [
      'Wall Street Prep: Excel, Accounting, Financial Statement Analysis',
      'PADI Open Water',
    ],
  },
  {
    label: 'Away from a screen',
    items: ['Golf (former varsity captain, low single-digit handicap)', 'SCUBA', 'Euchre'],
  },
];

function ExperienceEntry({ entry, delay }: { entry: Entry; delay: number }) {
  return (
    <Reveal
      as="li"
      delay={delay}
      className="ledger gap-y-3 border-t border-rule py-6 lg:gap-y-0 lg:py-7"
    >
      <div>
        <p className="meta">{entry.dates}</p>
        {entry.place ? <p className="meta mt-1.5">{entry.place}</p> : null}
      </div>

      <div className="max-w-measure">
        <h4 className={entry.compact ? 'font-serif text-lg text-ink' : 'h3'}>{entry.title}</h4>
        {entry.role ? <p className="meta mt-2 text-clay-deep">{entry.role}</p> : null}

        <p className={`mt-3 ${entry.compact ? 'text-sm text-ink-3' : 'text-[0.9375rem] text-ink-2'}`}>
          {entry.summary}
        </p>

        {entry.href && entry.hrefLabel ? (
          <Link href={entry.href} className="meta link-underline mt-4 inline-block text-clay-deep">
            {entry.hrefLabel} →
          </Link>
        ) : null}
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-y bg-paper-sunk">
      <div className="shell">
        {/* A quieter entrance than Work or Now. Every section opening the same
            way is what makes a page feel generated rather than authored. */}
        <Reveal>
          <hr className="rule-line" />
        </Reveal>

        <Reveal delay={60} className="ledger mt-10">
          <p className="meta">Background</p>
          <div>
            <h2 className="h2">Experience</h2>
            <p className="meta mt-3">The résumé version, for anyone who needs it</p>
          </div>
        </Reveal>

        {groups.map((group) => (
          <div key={group.number} className="mt-14">
            <Reveal className="ledger gap-y-2 border-t border-ink-3 pt-5 lg:gap-y-0">
              <p className="meta text-ink">{group.number}</p>
              <h3 className="font-serif text-lg text-ink">{group.title}</h3>
            </Reveal>
            <ul className="mt-4">
              {group.entries.map((entry, index) => (
                <ExperienceEntry key={entry.title} entry={entry} delay={index * 60} />
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-14">
          <Reveal className="ledger gap-y-2 border-t border-ink-3 pt-5 lg:gap-y-0">
            <p className="meta text-ink">04</p>
            <h3 className="font-serif text-lg text-ink">Also</h3>
          </Reveal>
          <ul className="mt-4">
            {capabilities.map((capability, index) => (
              <Reveal
                key={capability.label}
                as="li"
                delay={index * 60}
                className="ledger gap-y-2 border-t border-rule py-5 lg:gap-y-0"
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
