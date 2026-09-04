import Link from 'next/link';
import { projects } from '@/content/projects';
import Reveal from './Reveal';
import StatusBadge from './work/StatusBadge';

/**
 * Deliberately not a three-card grid. Three equal rectangles would claim three
 * equally finished things, and one of these has no artifact at all. Each entry is
 * a ledger row separated by a hairline, at full type scale.
 */
export default function Work() {
  return (
    <section id="work" className="section-y">
      <div className="shell">
        <Reveal>
          <p className="meta">Work</p>
        </Reveal>

        <Reveal delay={70}>
          <h2 className="h2 mt-4">Three things I built, and what each one cost</h2>
        </Reveal>

        <Reveal delay={140}>
          <hr className="rule-line mt-8 w-10" />
        </Reveal>

        {/* The thread. Without this the three read as unrelated line items. */}
        <Reveal delay={180}>
          <p className="body-text mt-10 max-w-[52ch]">
            These look like three different projects — a habit app, an agent that runs on
            a server, and ten weeks inside a private equity firm. They are the same
            problem three times: work out which half of the job you can safely hand to a
            machine, then build the thing that tells you when you got that wrong.
          </p>
        </Reveal>

        <ul className="mt-16">
          {projects.map((project, i) => (
            <Reveal
              as="li"
              key={project.slug}
              delay={i * 80}
              className="ledger gap-y-4 border-t border-rule py-10 lg:gap-y-0 lg:py-12"
            >
              <div>
                <p className="meta">{project.period}</p>
                <p className="meta mt-1.5 text-clay-deep">{project.domain}</p>
              </div>

              <div>
                <h3 className="h3">
                  <Link href={`/work/${project.slug}`} className="link-underline">
                    {project.name}
                  </Link>
                </h3>

                <p className="mt-4 max-w-measure text-ink-2">{project.tagline}</p>

                <div className="mt-6">
                  <StatusBadge status={project.status} anchor={project.anchor} />
                </div>

                <Link
                  href={`/work/${project.slug}`}
                  className="meta link-underline mt-6 inline-block text-clay-deep"
                >
                  {project.cta} →
                </Link>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="meta mt-12">
            Smaller experiments, finished and unfinished, live in the{' '}
            <Link href="/lab" className="link-underline text-clay-deep">
              lab
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
