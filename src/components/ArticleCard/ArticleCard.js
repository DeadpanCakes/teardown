import "./ArticleCard.css";

const ArticleCard = ({ article, size }) => {
  return (
    <div className={size === "main" ? "mainArticle" : "secondaryArticle"}>
      <div>
        <p>
          <a href={article.author.profile}>{article.author.name}</a> wrote
        </p>
      </div>
      <h1>{article.title}</h1>
      <h2>
        {article.date} in{" "}
        {article.tags.map((tag) => {
          return (
            <p>
              <a href={tag.page} className="tagLink">
                tag.name
              </a>
              ,{" "}
            </p>
          );
        })}
      </h2>
    </div>
  );
};

export default ArticleCard;
