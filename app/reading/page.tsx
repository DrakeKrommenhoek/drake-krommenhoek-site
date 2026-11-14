import type { Metadata } from 'next';
import PageIntro from '@/components/PageIntro';
import { books } from '@/lib/personal';

export const metadata: Metadata = {
  title: 'Reading',
  description: 'Books Drake Krommenhoek has been reading lately, and the ones he grew up on.',
  alternates: { canonical: '/reading' },
};

const shelves = [
  { name: 'Lately', blurb: 'What I have picked up over the last couple of years.' },
  { name: 'Grew up on', blurb: 'The ones that made me a reader.' },
] as const;

export default function ReadingPage() {
  return (
    <>
      <PageIntro title="Reading">
        <p>Books I&rsquo;ve been reading, and a few I keep coming back to.</p>
      </PageIntro>

      <div className="page grid gap-x-10 gap-y-14 sm:grid-cols-2">
        {shelves.map((shelf) => (
          <section key={shelf.name} aria-labelledby={`shelf-${shelf.name.replace(/\s+/g, '-').toLowerCase()}`}>
            <h2
              id={`shelf-${shelf.name.replace(/\s+/g, '-').toLowerCase()}`}
              className="font-display text-[1.6rem] tracking-[-0.01em]"
            >
              {shelf.name}
            </h2>
            <p className="mt-1 text-[0.95rem] text-muted">{shelf.blurb}</p>
            <ul className="mt-6 border-t border-rule">
              {books
                .filter((b) => b.shelf === shelf.name)
                .map((b) => (
                  <li key={b.title} className="border-b border-rule py-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <p>
                        <span className="italic">{b.title}</span>
                        <span className="text-muted">, {b.author}</span>
                      </p>
                      {b.rating !== undefined && (
                        <p className="shrink-0 text-[0.95rem] text-muted">
                          {b.rating}/5<span className="sr-only"> rating</span>
                        </p>
                      )}
                    </div>
                    {b.note && <p className="mt-1 text-muted">{b.note}</p>}
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
