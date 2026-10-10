import Link from 'next/link';
import AnalyticalWorkSlot from '@/components/AnalyticalWorkSlot';
import ProjectFeature from '@/components/ProjectFeature';
import { projects } from '@/lib/projects';
import { site } from '@/lib/site';

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
      <section className="page pb-20 pt-16 sm:pt-24 lg:pb-28 lg:pt-32">
        <p className="rise text-[1rem] text-muted">
          Drake Krommenhoek, economics at Washington and Lee, Class of 2028
        </p>
        <h1 className="mt-6 font-display text-[2.6rem] font-normal leading-[1.04] tracking-[-0.03em] sm:text-[3.6rem] lg:text-[4.25rem] xl:text-[4.75rem]">
          {statement.map((line, i) => (
            <span key={line} className="rise block text-balance" style={{ animationDelay: `${120 + i * 140}ms` }}>
              {line}
            </span>
          ))}
        </h1>

        <div className="grid-page mt-14 gap-y-10">
          <p className="rise col-span-4 max-w-prose text-[1.15rem] leading-relaxed lg:col-span-6" style={{ animationDelay: '600ms' }}>
            I study economics with minors in entrepreneurship and philosophy, and I build software around
            problems I know firsthand: Ascend, for the chaos of college recruiting, and The Answer Movement, a
            28-day wellness program I co-founded with my trainer.
          </p>
          <div className="rise col-span-4 lg:col-span-5 lg:col-start-8" style={{ animationDelay: '700ms' }}>
            <div className="flex flex-wrap gap-3">
              <Link href="/projects" className="btn-solid">
                Explore the projects
              </Link>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                View GitHub
              </a>
            </div>
            <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              <a href={`mailto:${site.email}`} className="link">
                Get in touch
              </a>
              <a href={site.resume.href} download={site.resume.filename} className="link text-muted hover:text-ink">
                Download resume
              </a>
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="projects-heading" className="page">
        <h2 id="projects-heading" className="font-display text-[1.6rem] tracking-[-0.01em]">
          Selected projects
        </h2>
        <div className="mt-6">
          {projects.map((project) => (
            <ProjectFeature key={project.slug} project={project} />
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
