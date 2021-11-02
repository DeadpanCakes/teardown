import "./GuideCard.css";

const GuideCard = ({ title, desc, link, linkText }) => {
  return (
    <div className="guideCard">
      <h2>{title}</h2>
      <p>{desc}</p>
      <a href={link}>
        <button>{linkText}</button>
      </a>
    </div>
  );
};

export default GuideCard;
