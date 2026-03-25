interface Props {
  html: string;
}

const ArticleContent = ({ html }: Props) => {
  return (
    <div
      className="prose-writing"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default ArticleContent;
