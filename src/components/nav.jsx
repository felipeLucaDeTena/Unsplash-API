import React from "react";
import { RiCameraLensLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import nav from "../styles/nav.scss";
function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo__container">
        <RiCameraLensLine className="nav__logo" />
        <h1>Splash</h1>
      </div>
      <div className="nav__links__container">
        <Link className="nav__links" to="/Albums">
          <span>Albums</span>
        </Link>
        <Link className="nav__links" to="/Favourites">
          <span>Favourites</span>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
