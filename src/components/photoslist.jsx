import { Masonry } from "@mui/lab";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function PhotosList({ setButtonPopUp, data, handleLike }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleClick = (photo) => {
    navigate(photo.id);
    setButtonPopUp(true);
  };
  console.log("im the id", id);
  return (
    <Masonry sx={{ margin: 0 }} columns={4} spacing={2}>
      {data.map((photo) => (
        <Box
          onClick={() => handleClick(photo)}
          key={photo.id}
          className="home__img__container"
        >
          <Box
            className="home__img"
            component="img"
            alt="The house from the offer."
            src={photo.urls.small}
          />
          <Box className="home__img__overlay">
            <p style={{ margin: "20% 0 0 0" }}>By</p>
            <p>{photo.user.name}</p>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "auto  20px 20px auto",
              }}
            >
              <p>{photo.likes}</p>
              <FavoriteBorderIcon
                onClick={() => handleLike(photo)}
                className="home__heart-icon"
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Masonry>
  );
}

export default PhotosList;
