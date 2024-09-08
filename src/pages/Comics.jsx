import { useState, useEffect } from "react";
import Pagination from "../components/pagination/Pagination";
import ComicCard from "../components/comics/ComicCard";
import axios from "axios";

const Comics = () => {
  const [comics, setComics] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [maxPage, setMaxPage] = useState(undefined);

  const handleMaxPage = (count) => {
    const countPage = (count / 100).toFixed(0);
    setMaxPage(countPage);
  };

  useEffect(() => {
    const handleCharacters = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API}/comics/`,
          {
            title: search,
            skip: (page - 1) * 100,
          }
        );
        // Sort alphabetically
        const comicsList = response.data.results.sort((a, b) =>
          a.title > b.title ? 1 : -1
        );
        handleMaxPage(response.data.count);
        setComics(comicsList);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    setMaxPage(undefined);
    setIsLoading(true);
    handleCharacters();
  }, [search, page]);

  useEffect(() => {
    setPage(1);
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
      {isLoading ? (
        <div className="loading-screen">
          <img className="loading-img" src="/loading.gif" alt="" />
          <img className="loading-phone-img" src="/loading-phone.gif" alt="" />
          <p className="loading-text">CHARGEMENT...</p>
        </div>
      ) : (
        <>
          <Pagination page={page} setPage={setPage} maxPage={maxPage} />
          <div className="characters-content">
            {comics &&
              comics.map((comic, index) => {
                return <ComicCard comic={comic} key={index} />;
              })}
          </div>
          <Pagination page={page} setPage={setPage} maxPage={maxPage} />
        </>
      )}
    </div>
  );
};

export default Comics;
