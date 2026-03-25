import { getAllArticles } from '@/lib/writing';
import FeaturedArticle from '@/components/writing/FeaturedArticle';
import ArticleCard from '@/components/writing/ArticleCard';
import SubscribeForm from '@/components/writing/SubscribeForm';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Writing | Drake Krommenhoek',
  description: 'Essays and stories on leadership, entrepreneurship, and life.',
};

export default function WritingPage() {
  const articles = getAllArticles();
  const [featured, ...rest] = articles;

  return (
    <>
      <Navbar forceScrolled />
      <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
        <section style={{ paddingTop: '8rem' }}>
          <div className="container-custom">
            {/* Header */}
            <span className="section-label">Writing</span>
            <h1 className="section-title">Stories &amp; Essays</h1>
            <div className="section-divider" />

            {/* Featured article */}
            {featured && (
              <div style={{ marginBottom: '3rem' }}>
                <FeaturedArticle article={featured} />
              </div>
            )}

            {/* Archive grid */}
            {rest.length > 0 && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1.5rem',
                  marginBottom: '5rem',
                }}
              >
                {rest.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            )}

            {/* Subscribe banner */}
            <div
              style={{
                borderTop: '1px solid #E8E8E4',
                paddingTop: '3.5rem',
                paddingBottom: '3.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '1.5rem',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#9B8B5E',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  Newsletter
                </span>
                <h2
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    color: '#002147',
                    marginBottom: '0.4rem',
                  }}
                >
                  Get notified when a new piece drops.
                </h2>
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.9rem',
                    color: '#6B7280',
                  }}
                >
                  No noise — just a note when something worth reading is ready.
                </p>
              </div>
              <SubscribeForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
