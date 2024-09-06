import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Character.css";

const Character = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleCharacter = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API}/characters/${id}`
        );
        if (response.status === 200) {
          setData(response.data);
          setIsLoading(false);
        }
        console.log(response.data.thumbnail);
      } catch (error) {
        error.response.message;
      }
    };
    handleCharacter();
  }, [id]);

  return (
    <div className="charater-container">
      <div className="container-content">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <div className="character-infos">
            <img
              className="character-img-page"
              src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              alt=""
            />
            <p>{data.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Character;
