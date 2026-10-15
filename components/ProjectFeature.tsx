import Link from 'next/link';
import Placeholder from '@/components/Placeholder';
import StatusTag from '@/components/StatusTag';
import type { ProjectSummary } from '@/lib/projects';

export default function ProjectFeature({ project, index = 0 }: { project: ProjectSummary; index?: number }) {
  const href = `/projects/${project.slug}`;

  return (
    <article className="grid-page gap-y-8 border-t border-rule py-12 lg:py-16">
      <div className="col-span-4 flex flex-col lg:col-span-5">
        <StatusTag status={project.status}>{project.statusNote}</StatusTag>
        <h3 className="mt-4 font-display text-[2.25rem] leading-[1.05] tracking-[-0.02em] sm:text-[2.75rem]">
          <Link href={href} className="hover:text-navy">
            {project.name}
          </Link>
        </h3>
        <p className="mt-4 max-w-[34ch] text-[1.1rem] leading-relaxed">{project.summary}</p>
        <dl className="mt-6 grid grid-cols-[6.5rem_1fr] gap-y-1.5 text-[0.95rem]">
          <dt className="text-muted">Role</dt>
          <dd>{project.role}</dd>
          <dt className="text-muted">Built with</dt>
          <dd>{project.stack.join(', ')}</dd>
        </dl>
        <div className="mt-8">
          <Link href={href} className="btn-ghost">
            View case study
          </Link>
        </div>
      </div>
      <div className="col-span-4 lg:col-span-7">
        <Link href={href} tabIndex={-1} aria-hidden="true" className="block">
          <Placeholder
            label={project.cover}
            fallback={
              <div
                className={`flex aspect-[16/10] flex-col justify-between p-8 transition-colors sm:p-10 ${
                  index % 2 === 0
                    ? 'bg-navy text-paper hover:bg-ink'
                    : 'border border-ink bg-[#EAE5DA] text-ink hover:bg-[#E2DCCF]'
                }`}
              >
                <span className="font-mono text-[0.8rem] opacity-70">{project.period}</span>
                <span className="font-display text-[2.4rem] leading-[1.02] tracking-[-0.02em] sm:text-[3.4rem]">
                  {project.name}
                </span>
              </div>
            }
          />
        </Link>
      </div>
    </article>
  );
}
