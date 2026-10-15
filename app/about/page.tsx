import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import headshot from '@/public/images/drake-krommenhoek.jpg';
import EmailMenu from '@/components/EmailMenu';

export const metadata: Metadata = {
  title: 'About',
  description: 'How Drake Krommenhoek went from economics and entrepreneurship to building products.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro title="From economics to building products" />

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
            I grew up in Arizona and Rapid City, South Dakota, then moved to Colorado, where I have lived for more
            than a decade. I now study economics at Washington and Lee, with minors in entrepreneurship and
            philosophy.
          </p>
          <p>
            Competition came first. I captained a high school golf team that won back-to-back regional
            championships.
          </p>
          <p>
            My first business was reselling products online. From 2023 to 2025 I tracked what was in demand across
            marketplaces, sourced directly from manufacturers, and sold more than 50 items at around 40% margins.
            It was small, but it was the first time I tested a guess about what people wanted against real sales.
          </p>
          <p>
            Economics gave me better tools for that kind of guess. Econometrics and regression taught me to ask
            what is actually driving an outcome and how confident I should be, instead of trusting the story that
            sounds best.
          </p>
          <p>
            In 2026 I started building software. In February I helped ship the first version of{' '}
            <Link href="/projects/the-answer-movement" className="text-navy underline decoration-navy/40 decoration-1 underline-offset-4 hover:decoration-navy">
              The Answer Movement
            </Link>
            , a 28-day wellness program built with my longtime trainer, in four days. In March I built{' '}
            <Link href="/projects/ascend" className="text-navy underline decoration-navy/40 decoration-1 underline-offset-4 hover:decoration-navy">
              Ascend
            </Link>
            , a prototype of the recruiting system I wished I had, after living through the mess of spreadsheets,
            portals, and deadlines myself.
          </p>
          <p>
            For Summer 2027 I am looking for roles in product management, product analytics, forward deployed
            engineering, startup product and operations, or venture capital, in New York, Denver, or Atlanta.
          </p>
          <p className="pt-2">
            Outside of that: golf, basketball, pickleball, travel, and scuba.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <EmailMenu />
            <Link href="/experience" className="btn-ghost">
              See my experience
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
