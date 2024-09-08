import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Comics from "./pages/Comics";
import Join from "./pages/Join";
import Favorite from "./pages/Favorite";
import axios from "axios";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [favorites, setFavorites] = useState([]);
  const [loadingData, setIsLoadingData] = useState(false);

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token);
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };

  const handleFavorite = async (character) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API}/favorite/`,
        {
          character,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      setIsLoadingData(!loadingData);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}/favorite`,

          {
            headers: {
              Authorization: token,
              "Content-type": "application/json",
            },
          }
        );
        setFavorites(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    if (token) {
      getFavorites();
    }
  }, [token, loadingData]);

  return (
    <Router>
      <Header token={token} handleToken={handleToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={
            <Characters handleFavorite={handleFavorite} favorites={favorites} />
          }
        />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
        <Route
          path="/join"
          element={<Join token={token} handleToken={handleToken} />}
        />
        <Route
          path="/favorite"
          element={
            <Favorite
              token={token}
              favorites={favorites}
              handleFavorite={handleFavorite}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
