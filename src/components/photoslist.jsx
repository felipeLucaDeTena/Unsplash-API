import { Masonry } from "@mui/lab";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import { Box } from "@mui/material";
import React from "react";

function PhotosList({ setPhotoId, setButtonPopUp, data, handleLike }) {
  const handleClick = (photo) => {
    setPhotoId(photo.id);
    setButtonPopUp(true);
  };

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
            {photo.isFavourite && (
              <div className="delete__container">
                <span>Delete</span> <DeleteIcon />
              </div>
            )}
            <p style={{ margin: "20% 0 0 0" }}>By</p>
            <p>{photo.user.name}</p>
            {photo.isFavourite && <span>{photo.comment}</span>}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "auto  20px 20px auto",
              }}
            >
              <DownloadIcon />
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
