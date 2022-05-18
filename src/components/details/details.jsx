import { Box } from "@mui/material";
import moment from "moment";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";
import { Toaster } from "react-hot-toast";
import details from "../../styles/details.scss";

function Detail({
  toggleEditing,
  isEditing,
  handleDelete,
  detail,
  handleLike,
  setButtonPopUp,
  handleUpdate,
}) {
  const date = new Date(detail.created_at);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {detail ? (
        <Box className="details">
          <img className="details__img" src={detail.urls.small} alt="none" />
          <Box className="details__info__container">
            {detail.isFavourite ? (
              <>
                <Box className=" details__info ">
                  <Box
                    className="details__button__container"
                    onClick={() => toggleEditing()}
                  >
                    Edit Comments
                    <EditIcon className=" details__icon" />
                  </Box>
                  <Box
                    className="details__button__container"
                    onClick={() => handleDelete(detail)}
                  >
                    Delete From favourites
                    <DeleteIcon className=" details__icon" />
                  </Box>
                </Box>
                {isEditing ? (
                  <Box className="details__info">
                    <h3 className="details__title">Comments</h3>
                    <form>
                      <input
                        className="details__edit"
                        type="text"
                        onChange={(ev) => handleUpdate(ev, detail)}
                        defaultValue={detail.comment}
                      />
                    </form>
                  </Box>
                ) : (
                  <Box className="details__info">
                    <h3 className="details__title">Comments</h3>

                    <p>{detail.comment || ""}</p>
                  </Box>
                )}
                <Toaster />
              </>
            ) : (
              <Box className=" details__info">
                <Box
                  className="details__button__container"
                  onClick={() => handleLike(detail)}
                >
                  {" "}
                  Add to Favourites
                  <FavoriteBorderIcon className="details__icon details__icon__heart" />{" "}
                </Box>

                <Toaster />
              </Box>
            )}

            <Box className="details__info">
              <h3 className="details__title">User Details</h3>
              <p>Name : {detail.user.name || "Undefined"}</p>
              <p>Date: {moment(date).format("MMM Do YY") || "Undefined"}</p>
              {/* <p>Location : {detail.location.country || "Undefined"}</p> */}
            </Box>
            <Box className="details__info">
              <h3 className="details__title">Camera Details</h3>
              <p>Camera : {detail.exif.name || "Undefined"}</p>
              <p>Exposure : {detail.exif.exposure_time || "Undefined"}</p>
              <p>ISO: {detail.exif.iso || "Undefined"}</p>
            </Box>
          </Box>
          <ClearIcon
            onClick={() => setButtonPopUp(false)}
            className="details__icon details__icon-clear"
          />
        </Box>
      ) : (
        ""
      )}
    </>
  );
}

export default Detail;
