import { Box } from "@mui/material";
import { RiCameraLensLine } from "react-icons/ri";
import React from "react";
import footer from "../styles/footer.scss";

function Footer() {
  return (
    <Box className="footer">
      <Box />
      <Box>
        <RiCameraLensLine className="nav__logo" />
        <p>Splash</p>
      </Box>
      <Box />
    </Box>
  );
}

export default Footer;
