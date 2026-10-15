import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import headshot from '@/public/images/drake-krommenhoek.jpg';
import EmailMenu from '@/components/EmailMenu';
import RichText from '@/components/RichText';
import { books, offTheClock } from '@/lib/personal';
import { isBlank } from '@/lib/placeholders';
import { showPlaceholders } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Drake Krommenhoek: where he is from, what he has built, and what he does outside of work.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  // Books show once they have a real title; placeholders only show while developing.
  const shelf = showPlaceholders ? books : books.filter((b) => !isBlank(b.title));

  return (
    <>
      <PageIntro title="About" />

      <div className="page grid-page gap-y-12">
        <figure className="col-span-4 lg:col-span-4">
          <Image
            src={headshot}
            alt="Drake Krommenhoek"
            placeholder="blur"
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="h-auto w-full max-w-sm"
            priority
          />
        </figure>

        <div className="col-span-4 max-w-prose space-y-6 text-[1.1rem] leading-[1.7] lg:col-span-7 lg:col-start-6">
          <p>
            I grew up in Arizona and Rapid City, South Dakota, and have lived in Colorado for more than ten years.
            I study economics at Washington and Lee, with minors in entrepreneurship and philosophy.
          </p>
          <p>
            My first business was reselling fashion products online. From 2023 to 2025 I sourced straight from
            manufacturers, sold more than 50 items at about 40% margins, and cleared a little over $2,200.
          </p>
          <p>
            In January 2026 I started{' '}
            <Link href="/projects/ascend" className="text-navy underline decoration-navy/40 decoration-1 underline-offset-4 hover:decoration-navy">
              Ascend
            </Link>
            , a recruiting planner for college students. <RichText text="[ABOUT: the moment recruiting broke for you and made you want to build it]" />{' '}
            In March I launched{' '}
            <Link href="/projects/the-answer-movement" className="text-navy underline decoration-navy/40 decoration-1 underline-offset-4 hover:decoration-navy">
              The Answer Movement
            </Link>{' '}
            with my trainer of eight years. So far 240 people in three countries have used it.
          </p>
          <p>
            This summer I interned at Mountaingate Capital, a private equity firm in Denver, where most of my time
            went to diligence and modeling.
          </p>
          <p>
            Next summer I want to work in product, analytics, or venture capital, ideally in New York, Denver, or
            Atlanta.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <EmailMenu />
            <Link href="/experience" className="btn-ghost">
              See my experience
            </Link>
          </div>
        </div>
      </div>

      <section aria-labelledby="off-heading" className="page mt-24">
        <h2 id="off-heading" className="font-display text-[1.6rem] tracking-[-0.01em]">
          Off the clock
        </h2>
        <dl className="mt-6 grid gap-x-10 border-t border-rule sm:grid-cols-2">
          {offTheClock.map((o) => (
            <div key={o.name} className="border-b border-rule py-5">
              <dt className="font-medium">{o.name}</dt>
              {(showPlaceholders || !isBlank(o.detail)) && (
                <dd className="mt-1 text-muted">
                  <RichText text={o.detail} />
                </dd>
              )}
            </div>
          ))}
        </dl>
      </section>

      {shelf.length > 0 && (
        <section aria-labelledby="reading-heading" className="page mt-20">
          <h2 id="reading-heading" className="font-display text-[1.6rem] tracking-[-0.01em]">
            Reading list
          </h2>
          <ul className="mt-6 border-t border-rule">
            {shelf.map((b, i) => (
              <li key={i} className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[18rem_1fr] sm:gap-8">
                <p>
                  <span className="font-medium italic">
                    <RichText text={b.title} />
                  </span>
                  <span className="text-muted">
                    , <RichText text={b.author} />
                  </span>
                </p>
                <p className="text-muted">
                  <RichText text={b.note} />
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
