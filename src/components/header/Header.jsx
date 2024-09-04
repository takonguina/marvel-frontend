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
            <Link to="login" className="nav-link-red">
              <button onClick={() => {}}>Connexion</button>
            </Link>
          </div>
          <Link to="/characters" className="nav-link">
            <button>Personnages</button>
          </Link>
          <Link to="/comics" className="nav-link">
            <button>Comics</button>
          </Link>
          <Link to="/favoris" className="nav-link">
            <button>Favoris</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
