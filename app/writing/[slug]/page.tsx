import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticleBySlug, getAllArticles, formatDate } from '@/lib/writing';
import ArticleContent from '@/components/writing/ArticleContent';
import SubscribeForm from '@/components/writing/SubscribeForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.subtitle,
    openGraph: {
      title: article.title,
      description: article.subtitle,
      type: 'article',
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);

  if (!article) notFound();

  return (
    <>
      <Navbar />
      <main id="main">
        <article className="section-y">
          <div className="shell-narrow">
            <Link href="/writing" className="meta link-underline hover:text-ink">
              ← Writing
            </Link>

            <h1 className="display mt-10">{article.title}</h1>

            <p className="mt-6 font-serif text-xl italic leading-snug text-ink-3">
              {article.subtitle}
            </p>

            <p className="meta mt-8">
              {formatDate(article.date)} · {article.readTime}
              {article.tags.length > 0 && ` · ${article.tags.join(' · ')}`}
            </p>

            <hr className="rule-line mt-8 w-14" />

            {article.content && (
              <div className="mt-12">
                <ArticleContent html={article.content} />
              </div>
            )}

            <div className="mt-20 border-t border-rule pt-14">
              <h2 className="h3">Enjoyed this?</h2>
              <p className="body-text mt-3 max-w-prose">
                I send a note when something new is ready. Nothing else.
              </p>
              <div className="mt-7">
                <SubscribeForm />
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
