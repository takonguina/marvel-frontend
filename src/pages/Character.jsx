import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Character.css";
import "./Characters.css";
import ComicCard from "../components/comics/ComicCard";

const Character = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleComicsList = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}/comics/${id}`
        );
        if (response.status === 200) {
          setData(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error.response.message);
      }
    };

    setIsLoading(true);
    handleComicsList();
  }, [id]);

  return (
    <div className="character-container">
      {isLoading ? (
        <div className="loading-screen-character">
          <img className="loading-img" src="/loading.gif" alt="loading" />
          <img
            className="loading-phone-img"
            src="/loading-phone.gif"
            alt="loading"
          />
          <p className="loading-text">CHARGEMENT...</p>
        </div>
      ) : (
        <div className="character-infos">
          <div
            className="character-img-page"
            style={{
              backgroundImage: `url(${data.thumbnail.path}.${data.thumbnail.extension})`,
            }}
          >
            <div className="linear-gradient"></div>
            <p
              style={{
                top: data.name.length >= 26 ? "300px" : "330px",
              }}
            >
              {data.name}
            </p>
          </div>
          <div className="description-character">
            {data && data.description
              ? data.description
              : `Dans l'univers infini de Marvel, où se croisent dieux, mutants et héros, ${data.name} est gravé parmi les légendes de l'univers Marvel.`}
          </div>
          <div className="character-comics-mentions">
            {data &&
              data.comics.map((comic, index) => {
                return <ComicCard comic={comic} key={index} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Character;
