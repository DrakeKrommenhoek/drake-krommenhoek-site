import type { Metadata } from 'next';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import { education, entries, type Entry } from '@/lib/experience';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Experience, education, and resume for Drake Krommenhoek.',
  alternates: { canonical: '/experience' },
};

export default function ExperiencePage() {
  return (
    <>
      <PageIntro title="Experience">
        <p>What I have built, where I have worked, and where I study.</p>
        <a href={site.resume.href} download={site.resume.filename} className="btn-solid mt-8">
          Download resume (PDF)
        </a>
      </PageIntro>

      <section aria-labelledby="timeline-heading" className="page">
        <h2 id="timeline-heading" className="sr-only">
          Timeline
        </h2>
        <ol className="border-t border-rule">
          {entries.filter((e) => !e.earlier).map((e) => (
            <EntryRow key={e.org} entry={e} />
          ))}
        </ol>

        {/* Older roles stay on the page but out of the way until someone asks for them. */}
        <details className="group border-b border-rule">
          <summary className="flex cursor-pointer list-none items-center justify-between py-6 text-muted hover:text-ink [&::-webkit-details-marker]:hidden">
            <span className="font-display text-[1.25rem] tracking-[-0.01em]">Earlier experience</span>
            <svg aria-hidden="true" viewBox="0 0 12 12" className="h-4 w-4 transition-transform group-open:rotate-180">
              <path d="M2 4.5 6 8.5l4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </summary>
          <ol className="border-t border-rule [&>li:last-child]:border-b-0">
            {entries.filter((e) => e.earlier).map((e) => (
              <EntryRow key={e.org} entry={e} />
            ))}
          </ol>
        </details>
      </section>

      <section aria-labelledby="education-heading" className="page mt-20">
        <h2 id="education-heading" className="font-display text-[1.6rem] tracking-[-0.01em]">
          Education
        </h2>
        <ul className="mt-6 border-t border-rule">
          {education.map((ed) => (
            <li key={ed.school} className="grid-page gap-y-2 border-b border-rule py-8">
              <p className="col-span-4 text-[0.95rem] text-muted lg:col-span-3">{ed.dates}</p>
              <div className="col-span-4 lg:col-span-8">
                <h3 className="font-display text-[1.5rem] leading-snug tracking-[-0.01em]">{ed.school}</h3>
                <p className="mt-1 text-muted">{ed.location}</p>
                <p className="mt-3 max-w-prose">{ed.detail}</p>
                {ed.points.length > 0 && (
                  <ul className="prose-case max-w-prose">
                    {ed.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function EntryRow({ entry: e }: { entry: Entry }) {
  return (
    <li className="grid-page gap-y-2 border-b border-rule py-8">
      <div className="col-span-4 lg:col-span-3">
        <p className="text-[0.95rem] text-muted">{e.dates}</p>
        <p className="mt-1 text-[0.9rem] text-muted">{e.kind}</p>
      </div>
      <div className="col-span-4 lg:col-span-8">
        <h3 className="font-display text-[1.5rem] leading-snug tracking-[-0.01em]">
          {e.href ? (
            <Link href={e.href} className="link">
              {e.org}
            </Link>
          ) : (
            e.org
          )}
        </h3>
        <p className="mt-1 text-muted">
          {e.role}
          {e.location && `, ${e.location}`}
        </p>
        {e.points.length > 0 && (
          <ul className="prose-case max-w-prose">
            {e.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
