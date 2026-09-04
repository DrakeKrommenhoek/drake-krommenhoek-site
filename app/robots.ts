import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // The subscribe endpoint has nothing to index and returns 503 when the
      // mail provider is not configured.
      disallow: '/api/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
