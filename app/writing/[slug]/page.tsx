import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticleBySlug, getAllArticles, formatDate } from '@/lib/writing';
import ArticleContent from '@/components/writing/ArticleContent';
import SubscribeForm from '@/components/writing/SubscribeForm';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | Drake Krommenhoek`,
    description: article.subtitle,
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);

  if (!article) notFound();

  return (
    <>
      <Navbar forceScrolled />
      <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
        <article style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 1.5rem' }}>

            {/* Back link */}
            <Link
              href="/writing"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#9B8B5E',
                textDecoration: 'none',
                display: 'inline-block',
                marginBottom: '2.5rem',
              }}
            >
              ← Writing
            </Link>

            {/* Tags */}
            {article.tags.length > 0 && (
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {article.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 600,
                color: '#002147',
                lineHeight: 1.12,
                letterSpacing: '-0.01em',
                marginBottom: '0.75rem',
              }}
            >
              {article.title}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '1.1rem',
                color: '#6B7280',
                lineHeight: 1.55,
                marginBottom: '1.25rem',
              }}
            >
              {article.subtitle}
            </p>

            {/* Meta */}
            <div
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.8rem',
                color: '#9CA3AF',
                letterSpacing: '0.02em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '2.5rem',
              }}
            >
              <span>Drake Krommenhoek</span>
              <span style={{ color: '#D1D5DB' }}>·</span>
              <span>{formatDate(article.date)}</span>
              <span style={{ color: '#D1D5DB' }}>·</span>
              <span>{article.readTime}</span>
            </div>

            {/* Divider */}
            <div style={{ width: '3rem', height: '1px', backgroundColor: '#C4AE78', marginBottom: '2.5rem' }} />

            {/* Body */}
            {article.content && <ArticleContent html={article.content} />}

            {/* Divider */}
            <div style={{ width: '100%', height: '1px', backgroundColor: '#E8E8E4', margin: '3.5rem 0' }} />

            {/* Subscribe CTA */}
            <div>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#002147',
                  marginBottom: '0.5rem',
                }}
              >
                Enjoyed this piece?
              </p>
              <p
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.9rem',
                  color: '#6B7280',
                  marginBottom: '1.5rem',
                }}
              >
                Subscribe to get a note when something new is ready.
              </p>
              <SubscribeForm />
            </div>

          </div>
        </article>
      </main>
    </>
  );
}
