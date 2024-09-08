import "./ComicCard.css";

const ComicCard = ({ comic }) => {
  const { title, thumbnail } = comic;
  return (
    <div className="comic-card-container">
      <div className="comic-card-content">
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="" />
        <span>{title.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default ComicCard;
