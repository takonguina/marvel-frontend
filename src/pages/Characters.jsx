import CharacterCard from "../components/characters/CharacterCard";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleCharacters = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API}/characters/`,
          {
            name: search,
          }
        );
        setCharacters(response.data.results);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    handleCharacters();
  }, [search]);
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
      <div className="characters-content">
        {characters &&
          characters.map((characters, index) => {
            return <CharacterCard characters={characters} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Characters;
