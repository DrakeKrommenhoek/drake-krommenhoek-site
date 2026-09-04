import Reveal from './Reveal';

/**
 * This section used to be called "Upcoming" and described the Mountaingate
 * internship in future tense. That internship finished in August 2026 — it now
 * lives in Experience, in the past tense where it belongs. What replaces it is a
 * /now page in miniature: what is actually true this month.
 *
 * It keeps the single dark ground on the homepage. One piece of punctuation,
 * used once, for the section that earns it. See docs/design-system.md § 3.
 */

const current = [
  'Third year at Washington and Lee, studying economics.',
  'Running recruitment for Sigma Chi as rush chair.',
  'Building The Answer Movement, a habit app, with a fitness trainer.',
];

export default function Now() {
  return (
    <section id="now" className="section-y on-night bg-night">
      <div className="shell">
        <div className="ledger">
          <Reveal>
            <div>
              <p className="meta">Now</p>
              <p className="meta mt-1.5">September 2026</p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="h2">What I&apos;m doing at the moment</h2>
            </Reveal>

            <Reveal delay={60}>
              <hr className="rule-line mt-8 w-10" />
            </Reveal>

            <ul className="mt-8 space-y-3">
              {current.map((item, i) => (
                <Reveal as="li" key={item} delay={120 + i * 70} className="flex gap-4">
                  <span aria-hidden="true" className="text-clay-lift">
                    ·
                  </span>
                  <span className="body-text">{item}</span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={340}>
              <p className="body-text mt-12">
                Mostly, though, I am still chewing on a question I picked up over the
                summer and have not answered:
              </p>
            </Reveal>

            <Reveal delay={400}>
              <blockquote className="mt-6 border-l-2 border-clay-lift pl-6">
                <p className="max-w-[36rem] font-serif text-xl italic leading-relaxed text-night-ink">
                  How do you hand off a system whose value depends on tacit judgment? The
                  prompts and the workflows are the easy part. Knowing when not to use the
                  tool, how far to trust an output, and when to stop is what determines the
                  outcome, and it does not transfer in a document.
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
