import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Join from "./pages/Join";

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
        <Route
          path="/join"
          element={<Join token={token} handleToken={handleToken} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
