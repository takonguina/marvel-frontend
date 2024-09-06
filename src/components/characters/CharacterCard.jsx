import { useNavigate } from "react-router-dom";
import "./CharacterCard.css";

const CharacterCard = ({ characters }) => {
  const { _id, name, thumbnail } = characters;
  const navigate = useNavigate();
  return (
    <div
      className="character-card-container"
      onClick={() => {
        navigate(`/character/${_id}`);
      }}
    >
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
