import Reveal from './Reveal';

/**
 * The old About was a centred label/title/divider stack over four paragraphs of
 * inline-styled DM Sans, with every emphasis hard-coded to the university navy.
 * It is now a ledger: a mono margin column carrying the places, the prose held
 * on a single left axis, and a ground shift to paper-sunk instead of a card.
 * See docs/design-system.md § 4 and § 5.
 */
const places = ['Arizona', 'Rapid City, SD', 'Colorado', 'Lexington, VA'];

export default function About() {
  return (
    <section id="about" className="section-y bg-paper-sunk">
      <div className="shell">
        <div className="ledger">
          <Reveal>
            <p className="meta">About</p>
            <ul className="mt-5 space-y-1 font-mono text-meta text-ink-3">
              {places.map((place) => (
                <li key={place}>{place}</li>
              ))}
            </ul>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="h2">Who I am</h2>
            </Reveal>

            <Reveal delay={60}>
              <hr className="rule-line mt-8 w-10" />
            </Reveal>

            <div className="mt-8 space-y-6">
              <Reveal delay={120}>
                <p className="body-text">
                  Born in <strong className="font-medium text-ink">Arizona</strong> and raised in{' '}
                  <strong className="font-medium text-ink">Rapid City, South Dakota</strong>, I spent
                  my formative years in the heart of the Great Plains before moving to{' '}
                  <strong className="font-medium text-ink">Colorado</strong>, where I&apos;ve lived
                  for over a decade. I&apos;m now at{' '}
                  <strong className="font-medium text-ink">Washington and Lee University</strong> in
                  Lexington, Virginia.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <p className="body-text">
                  Competition has always been a driving force. Whether it was four years of{' '}
                  <strong className="font-medium text-ink">high school golf</strong> — serving as
                  team captain and helping secure back-to-back regional championships — or playing{' '}
                  <strong className="font-medium text-ink">club basketball</strong> with friends, I
                  thrive in environments that demand focus, strategy, and teamwork.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <p className="body-text">
                  Beyond sports, I grew up playing{' '}
                  <strong className="font-medium text-ink">card games with my family</strong> — a
                  pastime that taught me the value of calculated risk, reading people, and staying
                  calm under pressure. Those habits still shape how I approach problems and
                  decisions.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <p className="body-text">
                  At my core, I believe in{' '}
                  <strong className="font-medium text-ink">
                    discipline, consistency, and a long-term growth mindset
                  </strong>
                  . Whether in finance, entrepreneurship, or life, I&apos;m committed to continuous
                  improvement and to finding ways to create lasting value.
                </p>
              </Reveal>
            </div>

            {/* Pull quote — a hairline in the margin, not a bordered block. */}
            <Reveal delay={360}>
              <blockquote className="mt-12 border-l-2 border-clay/60 pl-6">
                {/* Was "Discipline, curiosity, and a relentless drive to improve",
                    which would fit any student on any site. This is his own
                    sentence, from the record he wrote at the end of the summer. */}
                <p className="h3 max-w-[38ch] italic">
                  &ldquo;Confirming a single unit before you move on feels slower, and is
                  dramatically faster.&rdquo;
                </p>
                <footer className="meta mt-4">
                  One of three rules I ended the summer with
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
