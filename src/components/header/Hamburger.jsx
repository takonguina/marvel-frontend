import { useState } from "react";
import "./Hamburger.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Hamburger = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <GiHamburgerMenu
        className="icon-menu"
        size={48}
        onClick={() => {
          setHamburgerOpen(!hamburgerOpen);
        }}
      />
      <div
        className="hamburger-content"
        style={{
          display: `${hamburgerOpen ? "flex" : "none"}`,
          backgroundColor: "blue",
          position: "absolute",
          top: "80px",
          left: "0",
        }}
      >
        <div className="burger">Connectes toi !</div>
        <div className="burger">Personnages</div>
        <div className="burger">Comics</div>
        <div className="burger">Favoris</div>
      </div>
    </div>
  );
};

export default Hamburger;
