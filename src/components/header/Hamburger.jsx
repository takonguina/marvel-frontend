import { useState } from "react";
import "./Hamburger.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Hamburger = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <div className="hamburger-container">
      {hamburgerOpen ? (
        <GrClose
          className="icon-menu"
          size={40}
          onClick={() => {
            setHamburgerOpen(!hamburgerOpen);
          }}
        />
      ) : (
        <GiHamburgerMenu
          className="icon-menu"
          size={48}
          onClick={() => {
            setHamburgerOpen(!hamburgerOpen);
          }}
        />
      )}

      <div className={`hamburger-content ${hamburgerOpen ? "show" : ""}`}>
        <div className="burger">Connectes toi !</div>
        <div className="burger">Personnages</div>
        <div className="burger">Comics</div>
        <div className="burger">Favoris</div>
      </div>
    </div>
  );
};

export default Hamburger;
