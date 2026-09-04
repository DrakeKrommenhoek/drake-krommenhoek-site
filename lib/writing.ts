import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { Article, ArticleType } from './writing-types';

export type { Article };
export { formatDate } from './writing-types';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'writing');

/**
 * Frontmatter defaults. `published` defaults to false so a new draft dropped into
 * content/writing/ never appears on the site by accident — a piece has to opt in.
 */
function toArticle(slug: string, data: Record<string, unknown>): Omit<Article, 'content'> {
  return {
    slug,
    title: data.title as string,
    subtitle: data.subtitle as string,
    date: data.date as string,
    readTime: data.readTime as string,
    tags: (data.tags as string[]) ?? [],
    themes: (data.themes as string[]) ?? [],
    type: (data.type as ArticleType) ?? 'essay',
    published: data.published === true,
    featured: data.featured === true,
    needsReview: data.needsReview === true,
  };
}

function readAll(): Omit<Article, 'content'>[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const { data } = matter(fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf8'));
      return toArticle(slug, data);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Published pieces only — this is what the site routes and lists. */
export function getAllArticles(): Article[] {
  return readAll().filter((a) => a.published);
}

/** Everything on disk, including drafts. For build-time reporting, not for rendering. */
export function getAllArticlesIncludingDrafts(): Article[] {
  return readAll();
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const fullPath = path.join(CONTENT_DIR, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const { data, content: markdownContent } = matter(fs.readFileSync(fullPath, 'utf8'));
  const article = toArticle(slug, data);

  // Drafts are not reachable even by direct URL.
  if (!article.published) return null;

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(markdownContent);

  return { ...article, content: processedContent.toString() };
}
