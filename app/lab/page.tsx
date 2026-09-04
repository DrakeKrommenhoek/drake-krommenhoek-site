import type { Metadata } from 'next';
import { lab } from '@/content/lab';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import StatusBadge from '@/components/work/StatusBadge';

export const metadata: Metadata = {
  title: 'Lab | Drake Krommenhoek',
  description:
    'Smaller experiments — some finished, most retired. Every entry says what is wrong with it.',
};

export default function LabPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section-y">
          <div className="shell">
            <Reveal>
              <p className="meta">Lab</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display mt-5">Lab</h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="lede mt-8">
                Things I built to find out whether they were worth building. Most were not.
                Each one below says what is wrong with it, because a portfolio of only
                successes is a portfolio that is hiding its denominator.
              </p>
            </Reveal>

            {/* Reduced type scale relative to /work — density is the hierarchy. */}
            <ul className="mt-16">
              {lab.map((entry, i) => (
                <Reveal
                  as="li"
                  key={entry.name}
                  delay={i * 70}
                  className="ledger gap-y-3 border-t border-rule py-9 lg:gap-y-0"
                >
                  <div>
                    <p className="meta text-ink">{entry.name}</p>
                    <p className="meta mt-1.5">{entry.stack.join(' · ')}</p>
                  </div>

                  <div className="max-w-measure">
                    <StatusBadge status={entry.status} anchor={entry.anchor} />

                    <p className="mt-5 text-[0.9375rem] text-ink-2">{entry.blurb}</p>

                    <p className="mt-4 text-[0.9375rem] text-ink-3">
                      <span className="meta mr-2 text-clay-deep">The caveat</span>
                      {entry.caveat}
                    </p>

                    {entry.links && entry.links.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-4">
                        {entry.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="meta link-underline text-clay-deep"
                          >
                            {link.label} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
