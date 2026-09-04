export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tags: string[];
  /** Themes are editorial groupings, distinct from the free-form tags. */
  themes: string[];
  type: ArticleType;
  /** Unpublished pieces stay in the repo but are not routed or listed. */
  published: boolean;
  featured: boolean;
  /** Set when a claim in the piece still needs Drake's confirmation. */
  needsReview: boolean;
  content?: string;
}

export type ArticleType = 'essay' | 'note' | 'story';

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
