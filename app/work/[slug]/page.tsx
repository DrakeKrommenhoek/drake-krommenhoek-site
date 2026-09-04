import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projects, getProject } from '@/content/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import StatusBadge from '@/components/work/StatusBadge';
import StateLine from '@/components/work/StateLine';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} | Drake Krommenhoek`,
    description: project.tagline,
    openGraph: { title: project.name, description: project.tagline, type: 'article' },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main>
        <article className="section-y">
          <div className="shell">
            <Reveal>
              <Link href="/#work" className="meta link-underline hover:text-ink">
                ← Work
              </Link>
            </Reveal>

            <div className="ledger mt-12">
              <Reveal>
                <div>
                  <p className="meta">{project.period}</p>
                  <p className="meta mt-1.5 text-clay-deep">{project.domain}</p>
                </div>
              </Reveal>

              <div>
                <Reveal>
                  <h1 className="display">{project.name}</h1>
                </Reveal>

                <Reveal delay={80}>
                  <p className="lede mt-8 max-w-[46ch]">{project.tagline}</p>
                </Reveal>

                <Reveal delay={140}>
                  <div className="mt-8">
                    <StatusBadge status={project.status} anchor={project.anchor} />
                  </div>
                </Reveal>

                {project.links.length > 0 && (
                  <Reveal delay={180}>
                    <div className="mt-6 flex flex-wrap gap-4">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="meta link-underline text-clay-deep"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  </Reveal>
                )}
              </div>
            </div>

            {/* The constraint. This is the sentence that stops the three flagships
                reading as the same page with different nouns. */}
            <Reveal delay={120}>
              <blockquote className="mt-20 border-l-2 border-clay pl-6 sm:pl-8">
                <p className="max-w-[38rem] font-serif text-2xl italic leading-snug text-ink">
                  {project.constraint}
                </p>
                <p className="meta mt-4">The constraint</p>
              </blockquote>
            </Reveal>

            <div className="mt-20 max-w-measure space-y-6">
              {project.body.map((para, i) => (
                <Reveal key={para.slice(0, 40)} delay={i * 50}>
                  <p className="text-ink-2">{para}</p>
                </Reveal>
              ))}
            </div>

            {/* Only where the flow is the story. */}
            {project.pipeline && (
              <section className="mt-20" aria-labelledby="pipeline-heading">
                <h2 id="pipeline-heading" className="h3">
                  How a message moves through it
                </h2>
                <ol className="mt-8">
                  {project.pipeline.map((step, i) => (
                    <Reveal
                      as="li"
                      key={step}
                      delay={i * 60}
                      className="ledger gap-y-1 border-t border-rule py-4 lg:gap-y-0"
                    >
                      <p className="meta text-ink">
                        {String(i + 1).padStart(2, '0')}
                      </p>
                      <p className="max-w-measure text-ink-2">{step}</p>
                    </Reveal>
                  ))}
                </ol>
              </section>
            )}

            {project.pullQuote && (
              <Reveal>
                <figure className="mt-20 border-y border-rule py-12">
                  <blockquote>
                    <p className="max-w-[40rem] font-serif text-2xl italic leading-snug text-ink sm:text-[1.75rem]">
                      “{project.pullQuote.text}”
                    </p>
                  </blockquote>
                  <figcaption className="meta mt-6">{project.pullQuote.source}</figcaption>
                </figure>
              </Reveal>
            )}

            <section className="mt-20" aria-labelledby="evidence-heading">
              <h2 id="evidence-heading" className="h3">
                Evidence
              </h2>
              <dl className="mt-8">
                {project.evidence.map((item, i) => (
                  <Reveal
                    key={item.label}
                    delay={i * 60}
                    className="ledger gap-y-1 border-t border-rule py-5 lg:gap-y-0"
                  >
                    <dt className="meta">{item.label}</dt>
                    <dd className="max-w-measure">
                      <span className="text-ink">{item.value}</span>
                      {item.note && <span className="text-ink-3"> — {item.note}</span>}
                    </dd>
                  </Reveal>
                ))}
              </dl>
            </section>

            <div className="mt-20">
              <StateLine roadmap={project.roadmap} />
            </div>

            <section className="mt-20" aria-labelledby="questions-heading">
              <h2 id="questions-heading" className="h3">
                Open questions
              </h2>
              <ul className="mt-8">
                {project.questions.map((q, i) => (
                  <Reveal
                    as="li"
                    key={q.text}
                    delay={i * 60}
                    className="ledger gap-y-2 border-t border-rule py-6 lg:gap-y-0"
                  >
                    <p className="meta">{q.state}</p>
                    <div className="max-w-measure">
                      <p className="font-serif text-lg italic text-ink">{q.text}</p>
                      {q.outcome && <p className="mt-2 text-ink-3">{q.outcome}</p>}
                    </div>
                  </Reveal>
                ))}
              </ul>
            </section>

            <Reveal className="mt-20 border-t border-rule pt-8">
              <p className="meta">Built with</p>
              <p className="mt-3 max-w-measure text-ink-2">{project.stack.join('  ·  ')}</p>
            </Reveal>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
