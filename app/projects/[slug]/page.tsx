import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CaseTimeline from '@/components/CaseTimeline';
import EmailMenu from '@/components/EmailMenu';
import Placeholder from '@/components/Placeholder';
import ProjectCover from '@/components/ProjectCover';
import RichText from '@/components/RichText';
import StatusTag from '@/components/StatusTag';
import { caseStudies, publishable, type Block } from '@/lib/case-studies';
import { getProject, projects } from '@/lib/projects';
import { showPlaceholders, site } from '@/lib/site';

interface Props {
  params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} case study`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: `${project.name} | ${site.name}`, description: project.summary, url: `/projects/${project.slug}` },
  };
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case 'p':
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );
    case 'list':
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    case 'status':
      return (
        <ul className="!mt-6 !space-y-0 border-t border-rule">
          {block.items.map((item) => (
            <li key={item.text} className="grid gap-1 border-b border-rule py-3 !pl-0 before:!hidden sm:grid-cols-[7.5rem_1fr]">
              <StatusTag status={item.status} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      );
    case 'figure':
      return (
        <figure className="!mt-8">
          <Placeholder label={block.label} ratio={block.ratio} className={block.ratio === '9 / 16' ? 'max-w-[18rem]' : ''} />
        </figure>
      );
  }
}

export default function CaseStudyPage({ params }: Props) {
  const project = getProject(params.slug);
  const draft = caseStudies[params.slug];
  if (!project || !draft) notFound();
  const study = showPlaceholders ? draft : publishable(draft);

  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <article>
      <header className="page pb-12 pt-12 sm:pt-16">
        <Link href="/projects" className="link text-[0.95rem] text-muted hover:text-ink">
          All projects
        </Link>
        <h1 className="mt-8 font-display text-[2.8rem] leading-[1.02] tracking-[-0.03em] sm:text-[4rem] lg:text-[5rem]">
          {project.name}
        </h1>
        <p className="mt-6 max-w-[46ch] text-[1.2rem] leading-relaxed">{study.lede}</p>

        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-rule pt-6 text-[0.95rem] lg:grid-cols-4">
          <div>
            <dt className="text-muted">Role</dt>
            <dd className="mt-1">{project.role}</dd>
          </div>
          <div>
            <dt className="text-muted">Timeline</dt>
            <dd className="mt-1">{project.period}</dd>
          </div>
          <div>
            <dt className="text-muted">Status</dt>
            <dd className="mt-1.5">
              <StatusTag status={project.status}>{project.statusNote}</StatusTag>
            </dd>
          </div>
          <div>
            <dt className="text-muted">Built with</dt>
            <dd className="mt-1">{project.stack.join(', ')}</dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-solid">
              Open the live app
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              View GitHub
            </a>
          )}
        </div>
      </header>

      <div className="page">
        <ProjectCover project={project} index={projects.indexOf(project)} priority />
      </div>

      <div className="page grid-page mt-16 lg:mt-24">
        <nav aria-label="Case study sections" className="col-span-4 hidden lg:col-span-3 lg:block">
          <ol className="sticky top-24 space-y-2 text-[0.95rem] text-muted">
            {study.sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="link hover:text-ink">
                  <span className="mr-3 font-mono text-[0.8rem]">{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="col-span-4 lg:col-span-8 lg:col-start-5">
          {study.sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-heading`} className="scroll-mt-24 border-t border-rule py-12 first:border-t-0 first:pt-0">
              <h2 id={`${s.id}-heading`} className="flex items-baseline gap-4 font-display text-[1.9rem] leading-tight tracking-[-0.01em]">
                <span className="font-mono text-[0.85rem] font-normal text-muted">{String(i + 1).padStart(2, '0')}</span>
                {s.title}
              </h2>
              <div className="prose-case mt-6 max-w-prose text-[1.08rem] leading-[1.7]">
                {s.blocks.map((b, j) => (
                  <BlockView key={j} block={b} />
                ))}
              </div>
              {s.timeline && <CaseTimeline milestones={study.timeline} />}
            </section>
          ))}
        </div>
      </div>

      <aside className="page mt-16 grid-page gap-y-8 border-t border-rule pt-12">
        <div className="col-span-4 lg:col-span-6">
          <p className="text-muted">Next project</p>
          <Link href={`/projects/${next.slug}`} className="mt-2 inline-block font-display text-[2.2rem] leading-tight hover:text-navy">
            {next.name}
          </Link>
        </div>
        <div className="col-span-4 lg:col-span-5 lg:col-start-8 lg:self-end">
          <EmailMenu variant="ghost" />
        </div>
      </aside>
    </article>
  );
}
