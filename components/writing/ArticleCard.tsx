import Link from 'next/link';
import { Article, formatDate } from '@/lib/writing-types';
import Reveal from '../Reveal';

interface Props {
  article: Article;
  /** Stagger offset in ms when several entries are listed together. */
  delay?: number;
}

/**
 * An index entry, not a card. The old version was a bordered white rectangle with
 * a gold left edge and two box-shadows swapped through mouse handlers — the single
 * compositional idea the rebuild rejects. It is now a hairline-separated row on the
 * ledger grid: mono metadata in the margin column, serif headline in the text
 * column, depth from rules. See docs/design-system.md §§ 5, 10.
 */
export default function ArticleCard({ article, delay = 0 }: Props) {
  return (
    <Reveal as="article" delay={delay} className="border-t border-rule">
      <Link href={`/writing/${article.slug}`} className="ledger group py-8 lg:py-10">
        <p className="meta transition-colors duration-200 group-hover:text-clay-deep">
          <span>{formatDate(article.date)}</span>
          <span className="mx-2 text-rule-strong" aria-hidden="true">
            ·
          </span>
          <span>{article.readTime}</span>
        </p>

        <div>
          <h3 className="h3 transition-colors duration-200 group-hover:text-clay-deep">
            {article.title}
            <span className="ml-2 align-baseline text-clay" aria-hidden="true">
              →
            </span>
          </h3>
          <p className="mt-3 max-w-[36rem] font-serif text-[1.0625rem] leading-relaxed text-ink-3">
            {article.subtitle}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
