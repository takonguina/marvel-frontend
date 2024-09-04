import "./Header.css";
import Hamburger from "./Hamburger";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <Hamburger />
        <Link to="/">
          <img src="/marvel.svg" alt="marvel-logo" />
        </Link>
        <div className="header-buttons">
          <div className="header-user-button">
            <button>Connectes toi !</button>
          </div>
          <button>Personnages</button>

          <button>Comics</button>

          <button>Favoris</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
