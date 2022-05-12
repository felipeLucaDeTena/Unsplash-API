import { Box } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../services/api";
import details from "../styles/details.scss";

function Detail({ setButtonPopUp, photo }) {
  const [detail, setDetail] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getDetail(id).then((resp) => setDetail(resp.data));
  }, [id]);

  console.log(detail);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {detail ? (
        <Box className="details">
          <img className="details__img" src={detail.urls.small} alt="none" />

          <Box className="details__info__container">
            <Box className="details__info">
              <h3 className="details__title">User Details</h3>
              <p>Name : {detail.user.name || "Undefined"}</p>
              <p>Date: {moment().format(detail.created_at) || "Undefined"}</p>
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
          {/* <img src={detail.urls.regular} alt="none" />
          <Box>
            <p>User Details</p>
            <p>{detail.user.name}</p>
            <p>{detail.created_at}</p>
            <p>{detail.location.city}</p>
            <Box>
              <p>Camera Details</p>
              <p>{detail.exif.name}</p>
              <p>{detail.exif.exposure_time}</p>
              <p>{detail.exif.iso}</p>
            </Box>
          </Box> */}
        </Box>
      ) : (
        ""
      )}
    </>
  );
}

export default Detail;
