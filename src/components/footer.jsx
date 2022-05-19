import { Box } from "@mui/material";
import { RiCameraLensLine } from "react-icons/ri";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import { Link } from "react-router-dom";
import * as social from "../helpers/socialurl";
import footer from "../styles/footer.scss";

function Footer() {
  return (
    <Box className="footer">
      <Box />
      <Box className="footer__container">
        <h2 className="Footer__title">Splash</h2>
      </Box>
      <Box className="footer__container">
        <RiCameraLensLine className="footer__logo" />
        Follow us on our social media
        <Box className="footer">
          <Link to={social.FACEBOOK_URL}>
            <FacebookIcon />
          </Link>
          <Link to={social.TWITTER_URL}>
            <TwitterIcon />
          </Link>
          <Link to={social.INSTAGRAM_URL}>
            <InstagramIcon />
          </Link>
        </Box>
      </Box>
      <Box className="footer__container">
        <p>Splash</p>
      </Box>
      <Box />
    </Box>
  );
}

export default Footer;
