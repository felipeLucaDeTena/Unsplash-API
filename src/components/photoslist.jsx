import { Masonry } from "@mui/lab";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAs } from "file-saver";
import sortPhotos from "../helpers/sort";
import * as api from "../services/api";
import * as actions from "../redux/action-creators";

function PhotosList({
  setPhotoId,
  setButtonPopUp,
  handleLike,
  handleDelete,
  isEditing,
  toggleEditing,
  handleUpdate,
  sortType,
  page,
  data,
  setData,
}) {
  const handleClick = (photo) => {
    setPhotoId(photo.id);
    setButtonPopUp(true);
  };
  const photoState = useSelector(
    page === "home"
      ? (state) => state.photos.apiPhotos
      : (state) => state.photos.favPhotos
  );

  const dispatch = useDispatch();

  useEffect(() => {
    page === "home"
      ? api.getHomePhotos().then((resp) => {
          dispatch(actions.load(resp.data));
        })
      : api.getFavoritePhotos().then((resp) => {
          dispatch(actions.loadFavourites(resp.data));
        });
  }, [dispatch, toggleEditing]);

  useEffect(() => {
    const newData = sortPhotos(photoState, sortType);
    setData(newData);
  }, [sortType, photoState]);

  return (
    data && (
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
                    <DownloadIcon
                      onClick={() => saveAs(photo.urls.full, `${photo.id}.jpg`)}
                      className="list__icon"
                    />
                  </div>
                ) : (
                  <FavoriteBorderIcon
                    onClick={() => handleLike(photo)}
                    className="list__icon"
                  />
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </Masonry>
    )
  );
}

export default PhotosList;
