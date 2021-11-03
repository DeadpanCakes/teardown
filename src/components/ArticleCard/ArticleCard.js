import "./ArticleCard.css";

const ArticleCard = ({ article, size }) => {
  return (
    <div
      className={
        size === "main" ? "mainArticle article" : "secondaryArticle article"
      }
    >
      <img alt={article.author.name} />
      <div className="byline">
        <p>
          <a href={article.author.profile}>{article.author.name}</a> wrote
        </p>
        <h1>{article.title}</h1>
        <span className="bylineSpan">
          <h2>{article.date} in </h2>
          {article.tags.map((tag, index) => {
            return (
              <p key={tag.name} className="tag">
                <a href={tag.page} className="tagLink">
                  {tag.name}
                </a>
                {index + 1 < article.tags.length ? "," : ""}
              </p>
            );
          })}
        </span>
      </div>
      <p className="articleSummary">{article.summary}</p>
      <a href={article.link}>Continue Reading</a>
    </div>
  );
};

export default ArticleCard;
