interface Props {
  html: string;
}

/**
 * The essay body. Every typographic decision lives in the `.reading` block in
 * globals.css — the reading room's serif face, 36rem measure and quiet chrome —
 * so this stays a plain server component with no styling of its own. It replaces
 * the old `.prose-writing` class, which is being deleted with the compatibility
 * layer. See docs/design-system.md § 10.
 */
export default function ArticleContent({ html }: Props) {
  return <div className="reading" dangerouslySetInnerHTML={{ __html: html }} />;
}
