import { getAllArticles } from '@/lib/writing';
import FeaturedArticle from '@/components/writing/FeaturedArticle';
import ArticleCard from '@/components/writing/ArticleCard';
import SubscribeForm from '@/components/writing/SubscribeForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'Writing | Drake Krommenhoek',
  description:
    'Essays on attention, building things, and what happens when you take a game seriously.',
};

export default function WritingPage() {
  const articles = getAllArticles();
  const [featured, ...rest] = articles;

  return (
    <>
      <Navbar />
      <main>
        {/* The reading room runs on a narrower measure and a serif register than
            the rest of the site. See docs/design-system.md § 10. */}
        <section className="section-y">
          <div className="shell-narrow">
            <Reveal>
              <p className="meta">Writing</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-5">Writing</h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="lede mt-8">
                Mostly essays about paying attention — to people, to games, and to the
                difference between a thing that works and a thing that only looks like it does.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="shell-narrow">
          {featured && (
            <Reveal>
              <FeaturedArticle article={featured} />
            </Reveal>
          )}

          {rest.length > 0 && (
            <div className="mt-4">
              {rest.map((article, i) => (
                <ArticleCard key={article.slug} article={article} delay={i * 70} />
              ))}
            </div>
          )}

          {articles.length === 0 && (
            <p className="body-text py-16">Nothing published yet.</p>
          )}

          <Reveal className="mt-20 border-t border-rule pt-14 pb-24">
            <h2 className="h3">Get a note when something new is ready.</h2>
            <p className="body-text mt-3 max-w-prose">
              Infrequent, and only when there is actually something worth reading.
            </p>
            <div className="mt-7">
              <SubscribeForm />
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
