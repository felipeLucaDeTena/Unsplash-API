import { Box } from "@mui/material";
import React from "react";
import { RiCameraLensLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import nav from "../styles/nav.scss";

function Nav() {
  return (
    <nav className="nav">
      <Link style={{ color: "white", textDecoration: "none" }} to="/home">
        <Box className="nav__logo__container">
          <RiCameraLensLine className="nav__logo" />
          <h1>Splash</h1>
        </Box>
      </Link>
      <Box className="nav__links__container">
        <Link className="nav__links" to="/albums">
          <span>Albums</span>
        </Link>
        <Link className="nav__links" to="/favourites">
          <span>Favourites</span>
        </Link>
      </Box>
    </nav>
  );
}

export default Nav;
