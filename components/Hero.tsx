import Image from 'next/image';
import Reveal from './Reveal';

/**
 * The old hero was a full-bleed #002147 field with a gold-framed portrait — the
 * borrowed university identity the design research rejected. The problem was
 * never the hue, it was the block, so the field is gone entirely: paper ground,
 * a single strong left axis, and the portrait held by a hairline instead of a
 * crest colour. See docs/design-system.md § 1.
 */
export default function Hero() {
  return (
    <section id="home" className="section-y">
      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
          <div>
            <Reveal>
              <p className="meta">Washington &amp; Lee University — Economics, 2028</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display mt-5">
                Drake
                <br />
                Krommenhoek
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <hr className="rule-line mt-8 w-10" />
            </Reveal>

            <Reveal delay={200}>
              <p className="lede mt-8">
                I build software people actually use, and spent last summer inside a
                private equity firm working out which half of the work a machine can be
                trusted with.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                {/* The most emphasised control on the site used to point at the
                    résumé block. It points at the work now. */}
                <a href="#work" className="btn btn-primary">
                  See the work
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Get in touch
                </a>
                <a
                  href="/Krommenhoek_Resume_Feb.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta link-underline ml-1 text-ink-3 hover:text-clay-deep"
                >
                  Résumé ↓
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={240} className="justify-self-start lg:justify-self-end">
            <div className="relative w-[15rem] sm:w-[17rem]">
              {/* Offset hairline rather than a framed card — depth from rules, not shadow. */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 border border-rule"
              />
              <Image
                src="/images/personal/headshot.jpg"
                alt="Drake Krommenhoek"
                width={272}
                height={344}
                priority
                sizes="(min-width: 640px) 17rem, 15rem"
                className="relative aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
