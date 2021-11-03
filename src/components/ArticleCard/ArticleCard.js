import "./ArticleCard.css";

const ArticleCard = ({ article, size }) => {
  return (
    <div
      className={
        size === "main" ? "mainArticle article" : "secondaryArticle article"
      }
    >
      <img alt={article.author.name} />
      <div>
        <p>
          <a href={article.author.profile}>{article.author.name}</a> wrote
        </p>
        <h1>{article.title}</h1>
        <h2>
          {article.date} in{" "}
          {article.tags.map((tag, index) => {
            return (
              <p>
                <a href={tag.page} className="tagLink">
                  {tag.name}
                </a>
                {index + 1 < article.tags.length ? ", " : ""}
              </p>
            );
          })}
        </h2>
      </div>
      <p className="articleSummary">{article.summary}</p>
      <a href={article.link}>Continue Reading</a>
    </div>
  );
};

export default ArticleCard;
