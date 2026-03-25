'use client';

import Link from 'next/link';
import { Article, formatDate } from '@/lib/writing-types';

interface Props {
  article: Article;
}

const FeaturedArticle = ({ article }: Props) => {
  return (
    <Link href={`/writing/${article.slug}`} className="block group">
      <div
        style={{
          border: '1px solid #E8E8E4',
          backgroundColor: '#FFFFFF',
          padding: '2.5rem',
          transition: 'all 0.3s',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        }}
        className="group-hover:shadow-lg"
        onMouseEnter={(e) => {
          (e.currentTarget.style.borderColor = 'rgba(155,139,94,0.4)');
          (e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)');
        }}
        onMouseLeave={(e) => {
          (e.currentTarget.style.borderColor = '#E8E8E4');
          (e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)');
        }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            {/* Latest label */}
            <span
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#9B8B5E',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Latest
            </span>

            {/* Title */}
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 600,
                color: '#002147',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                marginBottom: '0.75rem',
                transition: 'color 0.2s',
              }}
            >
              {article.title}
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '1rem',
                color: '#6B7280',
                lineHeight: 1.6,
                marginBottom: '1.25rem',
              }}
            >
              {article.subtitle}
            </p>

            {/* Meta */}
            <div
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.78rem',
                color: '#9CA3AF',
                letterSpacing: '0.02em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <span>{formatDate(article.date)}</span>
              <span style={{ color: '#D1D5DB' }}>·</span>
              <span>{article.readTime}</span>
            </div>

            {/* Tags */}
            {article.tags.length > 0 && (
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {article.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <span
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.78rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#002147',
                borderBottom: '1px solid rgba(155,139,94,0.6)',
                paddingBottom: '1px',
                display: 'inline-block',
                transition: 'border-color 0.2s',
              }}
            >
              Read Article →
            </span>
          </div>

          {/* Decorative accent */}
          <div
            style={{
              width: '3px',
              alignSelf: 'stretch',
              backgroundColor: '#C4AE78',
              flexShrink: 0,
              display: 'none',
            }}
            className="md:block"
          />
        </div>
      </div>
    </Link>
  );
};

export default FeaturedArticle;
