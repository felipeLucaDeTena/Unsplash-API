import { Box } from "@mui/material";
import moment from "moment";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import details from "../../styles/details.scss";

function Detail({ detail, handleLike, setButtonPopUp }) {
  const date = new Date(detail.created_at);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {detail ? (
        <Box className="details">
          <img className="details__img" src={detail.urls.small} alt="none" />
          <Box className="details__info__container">
            {detail.isFavourite ? (
              <div className="delete__container">
                <span>Delete from Favourites</span> <DeleteIcon />
              </div>
            ) : (
              <Box className=" details__info details__info__like">
                Add to Favourites
                <FavoriteBorderIcon
                  onClick={() => handleLike(detail)}
                  className="details__heart-icon"
                />
              </Box>
            )}

            <Box className="details__info">
              <h3 className="details__title">User Details</h3>
              <p>Name : {detail.user.name || "Undefined"}</p>
              <p>Date: {moment(date).format("MMM Do YY") || "Undefined"}</p>
              <p>Location : {detail.location.country || "Undefined"}</p>
            </Box>
            <Box className="details__info">
              <h3 className="details__title">Camera Details</h3>
              <p>Camera : {detail.exif.name || "Undefined"}</p>
              <p>Exposure : {detail.exif.exposure_time || "Undefined"}</p>
              <p>ISO: {detail.exif.iso || "Undefined"}</p>
            </Box>
          </Box>
          <button
            onClick={() => setButtonPopUp(false)}
            className="details__button"
            type="button"
          >
            x
          </button>
        </Box>
      ) : (
        ""
      )}
    </>
  );
}

export default Detail;
