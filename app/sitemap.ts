import type { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/projects', '/about', '/experience', ...projects.map((p) => `/projects/${p.slug}`)];
  return paths.map((path) => ({ url: new URL(path, site.url).toString() }));
}
