import { Box } from "@mui/material";
import React from "react";
import { HashLink } from "react-router-hash-link";

function RandomPhoto({ random }) {
  return (
    <HashLink smooth to="/home/#photolist">
      {random && (
        <Box className="home__randomphoto__container">
          <Box
            className="home__randomphoto"
            component="img"
            alt="The house from the offer."
            src={random.urls.regular}
          />
          <Box className="home__randomphoto__overlay">
            <p>The internet’s source of freely-usable images.</p>
            <p>Powered by creators everywhere.</p>
          </Box>
        </Box>
      )}
    </HashLink>
  );
}

export default RandomPhoto;
