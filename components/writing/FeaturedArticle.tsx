import Link from 'next/link';
import { Article, formatDate } from '@/lib/writing-types';
import Reveal from '../Reveal';

interface Props {
  article: Article;
}

/**
 * The lead essay. Same ledger grid as the archive entries, just at a larger type
 * scale — hierarchy comes from density and scale rather than from a heavier box.
 * The old bordered panel, its gold rule and its shadow-swapping mouse handlers
 * are gone. See docs/design-system.md §§ 5, 10.
 */
export default function FeaturedArticle({ article }: Props) {
  return (
    <Reveal as="article" className="border-y border-rule">
      <Link href={`/writing/${article.slug}`} className="ledger group py-10 lg:py-14">
        <div className="space-y-3">
          <p className="meta text-clay-deep">Latest</p>
          <p className="meta">
            <span>{formatDate(article.date)}</span>
            <span className="mx-2 text-rule-strong" aria-hidden="true">
              ·
            </span>
            <span>{article.readTime}</span>
          </p>
          {article.tags.length > 0 && <p className="meta">{article.tags.join(' · ')}</p>}
        </div>

        <div>
          <h2 className="h2 transition-colors duration-200 group-hover:text-clay-deep">
            {article.title}
          </h2>

          <p className="mt-5 max-w-[36rem] font-serif text-[1.1875rem] leading-[1.7] text-ink-2">
            {article.subtitle}
          </p>

          <span className="meta mt-8 inline-block text-clay-deep transition-colors duration-200 group-hover:text-ink">
            Read Article →
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
