import { Box } from "@mui/system";
import React from "react";

function RandomPhoto({ random }) {
  return (
    <>
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
    </>
  );
}

export default RandomPhoto;
