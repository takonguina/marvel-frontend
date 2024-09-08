import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./CharacterCard.css";
import { useEffect, useState } from "react";

const CharacterCard = ({ characters, favorites, handleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { _id, name, thumbnail } = characters;
  const navigate = useNavigate();

  useEffect(() => {
    const checkFavorite = () => {
      if (favorites) {
        for (let i = 0; i < favorites.length; i++) {
          if (favorites[i]._id === _id) {
            setIsFavorite(true);
          }
        }
      }
    };
    checkFavorite();
  }, [_id, favorites]);

  return (
    <div className="character-card-container">
      <div
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
      {isFavorite ? (
        <FaHeart
          className="like-icon"
          size={32}
          color="#ec1d25"
          onClick={() => {
            handleFavorite(characters);
            setIsFavorite(!isFavorite);
          }}
        />
      ) : (
        <FaRegHeart
          className="like-icon"
          size={32}
          color={`lightgray`}
          onClick={() => {
            handleFavorite(characters);
            setIsFavorite(!isFavorite);
          }}
        />
      )}
    </div>
  );
};

export default CharacterCard;
