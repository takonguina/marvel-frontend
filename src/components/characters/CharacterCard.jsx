import "./CharacterCard.css";

const CharacterCard = ({ characters }) => {
  const { name, thumbnail } = characters;
  return (
    <div className="character-card-container">
      <img
        className="character-img"
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={`${name}-img`}
      />
      <p className="character-name">{name.toUpperCase()}</p>
    </div>
  );
};

export default CharacterCard;
