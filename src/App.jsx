import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Comics from "./pages/Comics";
import Join from "./pages/Join";
import Favorite from "./pages/Favorite";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token);
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };

  return (
    <Router>
      <Header token={token} handleToken={handleToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
        <Route
          path="/join"
          element={<Join token={token} handleToken={handleToken} />}
        />
        <Route path="/favorite" element={<Favorite token={token} />} />
      </Routes>
    </Router>
  );
}

export default App;
