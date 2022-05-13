import React, { useEffect, useState } from "react";
import { getFavouriteDetail } from "../../services/api";
import Detail from "./details";

function FavouriteDetails({ handleLike, setButtonPopUp, photoId }) {
  const [detail, setDetail] = useState("");

  useEffect(() => {
    getFavouriteDetail(photoId).then((resp) => setDetail(resp.data));
  }, [photoId]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {detail ? (
        <Detail
          detail={detail}
          handleLike={handleLike}
          setButtonPopUp={setButtonPopUp}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default FavouriteDetails;
