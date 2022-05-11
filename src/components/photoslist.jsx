import { Masonry } from "@mui/lab";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/material";
import React from "react";

function PhotosList({ data }) {
  return (
    <Masonry sx={{ margin: 0 }} columns={4} spacing={2}>
      {data.map((photo) => (
        <>
          <Box className="home__img__container">
            <Box
              className="home__img"
              component="img"
              alt="The house from the offer."
              src={photo.urls.small}
            />
            <Box className="home__img__overlay">
              <p style={{ margin: "20% 0 0 0" }}>By</p>
              <p>{photo.user.name}</p>
              <FavoriteBorderIcon
                sx={{ fontSize: "30px", margin: "auto  20px 20px auto" }}
              />
            </Box>
          </Box>
        </>
      ))}
    </Masonry>
  );
}

export default PhotosList;
