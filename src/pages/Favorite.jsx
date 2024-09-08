import { Navigate } from "react-router-dom";
import "./Favorite.css";
import CharacterCard from "../components/characters/CharacterCard";

const Favorite = ({ favorites, handleFavorite, token }) => {
  return token ? (
    <div className="favorite-container">
      <div className="favorite-content">
        <div className="characters-favorite">
          <span className="title-favorite">PERSONNAGES</span>
          <div className="favorite-scroll">
            {favorites
              ? favorites.map((character, index) => {
                  return (
                    <CharacterCard
                      characters={character}
                      key={index}
                      favorites={favorites}
                      handleFavorite={handleFavorite}
                    />
                  );
                })
              : "Aucun favori"}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/join" />
  );
};

export default Favorite;
