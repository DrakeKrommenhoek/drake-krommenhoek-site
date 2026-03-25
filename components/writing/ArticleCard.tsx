'use client';

import Link from 'next/link';
import { Article, formatDate } from '@/lib/writing-types';

interface Props {
  article: Article;
}

const ArticleCard = ({ article }: Props) => {
  return (
    <Link href={`/writing/${article.slug}`} className="block group h-full">
      <div
        className="h-full flex flex-col"
        style={{
          border: '1px solid #E8E8E4',
          borderLeft: '2px solid #C4AE78',
          backgroundColor: '#FFFFFF',
          padding: '1.75rem',
          transition: 'all 0.3s',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget.style.borderLeftColor = '#9B8B5E');
          (e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)');
        }}
        onMouseLeave={(e) => {
          (e.currentTarget.style.borderLeftColor = '#C4AE78');
          (e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)');
        }}
      >
        {/* Meta */}
        <div
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.72rem',
            color: '#9CA3AF',
            letterSpacing: '0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginBottom: '0.75rem',
          }}
        >
          <span>{formatDate(article.date)}</span>
          <span style={{ color: '#D1D5DB' }}>·</span>
          <span>{article.readTime}</span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '1.35rem',
            fontWeight: 600,
            color: '#002147',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            marginBottom: '0.6rem',
            transition: 'color 0.2s',
          }}
        >
          {article.title}
        </h3>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.875rem',
            color: '#6B7280',
            lineHeight: 1.55,
            marginBottom: '1.25rem',
            flex: 1,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {article.subtitle}
        </p>

        {/* Arrow */}
        <span
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.8rem',
            color: '#9B8B5E',
            transition: 'transform 0.2s',
            display: 'inline-block',
          }}
        >
          →
        </span>
      </div>
    </Link>
  );
};

export default ArticleCard;
