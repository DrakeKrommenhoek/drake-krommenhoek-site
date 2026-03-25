import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { Article } from './writing-types';

export type { Article };
export { formatDate } from './writing-types';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'writing');

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const fullPath = path.join(CONTENT_DIR, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title as string,
      subtitle: data.subtitle as string,
      date: data.date as string,
      readTime: data.readTime as string,
      tags: (data.tags as string[]) ?? [],
    };
  });

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const fullPath = path.join(CONTENT_DIR, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content: markdownContent } = matter(fileContents);

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(markdownContent);

  return {
    slug,
    title: data.title as string,
    subtitle: data.subtitle as string,
    date: data.date as string,
    readTime: data.readTime as string,
    tags: (data.tags as string[]) ?? [],
    content: processedContent.toString(),
  };
}

