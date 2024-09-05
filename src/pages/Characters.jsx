import CharacterCard from "../components/characters/CharacterCard";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  // const [maxPage, setMaxPage] = useState(undefined);

  useEffect(() => {
    const handleCharacters = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API}/characters/`,
          {
            name: search,
            skip: (page - 1) * 100,
          }
        );
        setCharacters(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    setIsLoading(true);
    handleCharacters();
  }, [search, page]);

  return (
    <div className="characters-container">
      <div className="search-bar">
        <input
          type="text"
          value={search}
          placeholder="Recherche"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <div className="pagination">
        {page > 1 ? (
          <p
            onClick={() => {
              setPage(page - 1);
            }}
            className="next-page-text"
          >
            {"<< Page précédente"}
          </p>
        ) : (
          <p> </p>
        )}

        <p className="current-page">{page}</p>
        <p
          className="next-page-text"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          {"Page suivante >>"}
        </p>
      </div>

      {isLoading ? (
        <div className="loading-screen">
          <img className="loading-img" src="loading.gif" alt="" />
          <img className="loading-phone-img" src="loading-phone.gif" alt="" />
          <p className="loading-text">CHARGEMENT...</p>
        </div>
      ) : (
        <div className="characters-content">
          {characters &&
            characters.map((characters, index) => {
              return <CharacterCard characters={characters} key={index} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Characters;
