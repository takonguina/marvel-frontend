import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Character.css";
import ComicCard from "../components/comics/ComicCard";

const Character = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  // const [comicsList, setComicsList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const handleCharacter = async () => {
    //   try {
    //     const response = await axios.post(
    //       `${import.meta.env.VITE_API}/characters/${id}`
    //     );
    //     if (response.status === 200) {
    //       setData(response.data);
    //       setIsLoading(false);
    //     }
    //     console.log(response.data.thumbnail);
    //   } catch (error) {
    //     error.response.message;
    //   }
    // };
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
    <div className="charater-container">
      <div className="container-content">
        {isLoading ? (
          <p>Loading</p>
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
              {data && data.description ? data.description : "Hero"}
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
    </div>
  );
};

export default Character;
