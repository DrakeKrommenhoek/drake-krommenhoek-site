import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnalyticalWorkSlot from '@/components/AnalyticalWorkSlot';
import ContactActions from '@/components/ContactActions';
import ProjectFeature from '@/components/ProjectFeature';
import { projects } from '@/lib/projects';
import { site } from '@/lib/site';
import headshot from '@/public/images/drake-krommenhoek.jpg';

const statement = [
  'I find problems worth solving,',
  'understand them with data,',
  'and build the products that fix them.',
];

const tools = [
  { group: 'Build', items: 'Next.js, TypeScript, React, Supabase, Python, AI-assisted development' },
  { group: 'Analyze', items: 'Econometrics, regression, statistical analysis, Excel' },
];

export default function Home() {
  return (
    <>
      <section className="page pb-20 pt-8 sm:pt-16 lg:pb-28 lg:pt-20">
        <div className="grid-page items-center gap-y-8">
          {/* Photo: the single focal point. Top right on desktop (Z pattern), first thing on mobile. */}
          <figure className="rise col-span-4 hidden sm:col-span-2 sm:block lg:order-2 lg:col-span-4 lg:col-start-9">
            <Image
              src={headshot}
              alt="Drake Krommenhoek"
              placeholder="blur"
              priority
              sizes="(min-width: 1024px) 26vw, (min-width: 640px) 40vw, 90vw"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <figcaption className="mt-3 font-mono text-[0.78rem] text-muted">
              Lexington, Virginia · Colorado
            </figcaption>
          </figure>

          <div className="col-span-4 lg:order-1 lg:col-span-8">
            {/* Mobile: the photo pairs with the name so the actions stay above the fold. */}
            <div className="rise flex items-center gap-5 sm:hidden">
              <Image
                src={headshot}
                alt="Drake Krommenhoek"
                placeholder="blur"
                priority
                sizes="8rem"
                className="aspect-[4/5] w-[7.5rem] shrink-0 object-cover object-top"
              />
              <div>
                <p className="font-display text-[1.4rem] leading-tight">{site.name}</p>
                <p className="mt-1 text-[0.95rem] leading-snug text-muted">
                  Economics, Washington and Lee, Class of 2028
                </p>
              </div>
            </div>
            <p className="rise hidden text-[1rem] text-muted sm:block" style={{ animationDelay: '80ms' }}>
              {site.name} · Economics, Washington and Lee, Class of 2028
            </p>
            <h1 className="mt-7 text-balance sm:mt-5 font-display text-[2.15rem] font-normal leading-[1.06] tracking-[-0.03em] sm:text-[3rem] xl:text-[3.5rem]">
              {statement.map((line, i) => (
                <Fragment key={line}>
                  <span className="rise inline-block" style={{ animationDelay: `${160 + i * 120}ms` }}>
                    {line}
                  </span>{' '}
                </Fragment>
              ))}
            </h1>
            <p className="rise mt-7 max-w-prose text-[1.15rem] leading-relaxed" style={{ animationDelay: '560ms' }}>
              I study economics and build software for problems I know firsthand: The Answer Movement, a 28-day
              wellness app I co-founded with my trainer, and Ascend, for the chaos of college recruiting.
            </p>
            <div className="rise mt-9" style={{ animationDelay: '660ms' }}>
              <ContactActions />
              <p className="mt-4 text-[0.95rem] text-muted">
                Looking for Summer 2027 roles in product, analytics, and venture.{' '}
                <a href="#projects" className="link text-ink">
                  See my work
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" aria-labelledby="projects-heading" className="page scroll-mt-20">
        <h2 id="projects-heading" className="font-display text-[1.6rem] tracking-[-0.01em]">
          Selected projects
        </h2>
        <div className="mt-6">
          {projects.map((project, i) => (
            <ProjectFeature key={project.slug} project={project} index={i} />
          ))}
          <AnalyticalWorkSlot />
        </div>
      </section>

      <section aria-labelledby="background-heading" className="page mt-24 lg:mt-32">
        <div className="grid-page gap-y-10">
          <div className="col-span-4 lg:col-span-6">
            <h2 id="background-heading" className="font-display text-[1.6rem] tracking-[-0.01em]">
              Background
            </h2>
            <p className="mt-5 max-w-prose leading-relaxed">
              Economics taught me to ask what is really driving a problem and how I would know. Entrepreneurship
              gave me a reason to act on the answer. I am looking for Summer 2027 roles in product management,
              product analytics, forward deployed engineering, startup product and operations, or venture
              capital, in New York, Denver, or Atlanta.
            </p>
            <p className="mt-6 flex gap-6">
              <Link href="/about" className="link">
                More about me
              </Link>
              <Link href="/experience" className="link">
                Experience and resume
              </Link>
            </p>
          </div>
          <dl className="col-span-4 space-y-6 lg:col-span-5 lg:col-start-8">
            {tools.map((t) => (
              <div key={t.group} className="border-t border-rule pt-4">
                <dt className="text-muted">{t.group}</dt>
                <dd className="mt-1.5 text-[1.05rem] leading-relaxed">{t.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
