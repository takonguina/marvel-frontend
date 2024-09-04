import { useState } from "react";
import "./Hamburger.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <div className="hamburger-container">
      {hamburgerOpen ? (
        <GrClose
          className="icon-menu"
          size={32}
          onClick={() => {
            setHamburgerOpen(!hamburgerOpen);
          }}
        />
      ) : (
        <GiHamburgerMenu
          className="icon-menu"
          size={40}
          onClick={() => {
            setHamburgerOpen(!hamburgerOpen);
          }}
        />
      )}

      <div className={`hamburger-content ${hamburgerOpen ? "show" : ""}`}>
        <Link to="/join" className="hamburger-nav-link">
          <div
            className="burger"
            onClick={() => {
              setHamburgerOpen(false);
            }}
          >
            Connexion
            <MdOutlineArrowForwardIos color="#ec1d25" size={24} />
          </div>
        </Link>
        <Link to="/" className="hamburger-nav-link">
          <div
            className="burger"
            onClick={() => {
              setHamburgerOpen(false);
            }}
          >
            Personnages
            <MdOutlineArrowForwardIos color="#ec1d25" size={24} />
          </div>
        </Link>
        <Link to="/comics" className="hamburger-nav-link">
          <div
            className="burger"
            onClick={() => {
              setHamburgerOpen(false);
            }}
          >
            Comics
            <MdOutlineArrowForwardIos color="#ec1d25" size={24} />
          </div>
        </Link>
        <Link to="/favorite" className="hamburger-nav-link">
          <div
            className="burger"
            onClick={() => {
              setHamburgerOpen(false);
            }}
          >
            Favoris
            <MdOutlineArrowForwardIos color="#ec1d25" size={24} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hamburger;
