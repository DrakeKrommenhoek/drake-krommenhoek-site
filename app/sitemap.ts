import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
import { getAllArticles } from '@/lib/writing';
import { SITE_URL } from '@/lib/site';

/**
 * Only published routes. getAllArticles() already filters drafts, so a piece
 * held back with published:false cannot leak into the sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ['', '/lab', '/writing'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${SITE_URL}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const articleRoutes = getAllArticles().map((a) => ({
    url: `${SITE_URL}/writing/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
