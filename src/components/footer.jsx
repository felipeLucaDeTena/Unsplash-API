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
      <Box className="footer__container">
        <h2 className="footer__title">Splash</h2>
        <RiCameraLensLine className="footer__logo" />
        <p />
        <p />
      </Box>
      <Box className="footer__container">
        Follow us on our social media
        <Box className="footer__social">
          <a
            className="footer__social__links"
            target="_blank"
            rel="noopener noreferrer"
            href={social.FACEBOOK_URL}
          >
            <FacebookIcon className="footer__icons" />
          </a>
          <a
            className="footer__social__links"
            target="_blank"
            rel="noopener noreferrer"
            href={social.TWITTER_URL}
          >
            <TwitterIcon className="footer__icons" />
          </a>
          <a
            className="footer__social__links"
            target="_blank"
            rel="noopener noreferrer"
            href={social.INSTAGRAM_URL}
          >
            <InstagramIcon className="footer__icons" />
          </a>
        </Box>
      </Box>
      <Box className=" footer__container footer__container__links">
        <Link className="footer__link" to="/about">
          About
        </Link>
        <Link className="footer__link" to="/conditions">
          Conditions
        </Link>
        <Link className="footer__link" to="/contact">
          Contact
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
