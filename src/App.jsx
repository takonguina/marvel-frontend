import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Join from "./pages/Join";

function App() {
  const [token, setToken] = useState();

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token);
    } else {
      Cookies.remove("token");
    }
  };

  return (
    <Router>
      <Header token={token} handleToken={handleToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/join" element={<Join handleToken={handleToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
