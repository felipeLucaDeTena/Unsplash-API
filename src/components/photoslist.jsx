import { Masonry } from "@mui/lab";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { commentFavoritePhoto } from "../services/api";

function PhotosList({
  setPhotoId,
  setButtonPopUp,
  data,
  handleLike,
  handleDelete,
  isEditing,
  toggleEditing,
  handleUpdate,
}) {
  const handleClick = (photo) => {
    setPhotoId(photo.id);
    setButtonPopUp(true);
  };

  return (
    <Masonry sx={{ margin: 0 }} columns={4} spacing={2}>
      {data.map((photo) => (
        <Box
          onDoubleClick={() => handleClick(photo)}
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
            {photo.isFavourite && (
              <Box className="home__info">
                {" "}
                {isEditing ? (
                  <form>
                    <input
                      className="home__edit"
                      type="text"
                      onChange={(ev) => handleUpdate(ev, photo)}
                      defaultValue={photo.comment}
                    />
                  </form>
                ) : (
                  <p className="home__comment">{photo.comment || ""}</p>
                )}{" "}
              </Box>
            )}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "auto  20px 20px auto",
              }}
            >
              {photo.isFavourite ? (
                <div className="delete__container">
                  <DeleteIcon
                    className="list__icon"
                    onClick={() => handleDelete(photo)}
                  />
                  <EditIcon
                    className="list__icon"
                    onClick={() => toggleEditing()}
                  />
                  <DownloadIcon className="list__icon" />
                </div>
              ) : (
                <FavoriteBorderIcon
                  onClick={() => handleLike(photo)}
                  className="list__icon"
                />
              )}

              <Toaster />
            </Box>
          </Box>
        </Box>
      ))}
    </Masonry>
  );
}

export default PhotosList;
