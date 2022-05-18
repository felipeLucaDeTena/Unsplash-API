import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getFavouriteDetail } from "../../services/api";
import Detail from "./details";

function FavouriteDetails({ handleDelete, setButtonPopUp, photoId }) {
  const [detail, setDetail] = useState("");
  useEffect(() => {
    getFavouriteDetail(photoId).then((resp) => setDetail(resp.data));
  }, [photoId]);
  console.log(detail);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {detail ? (
        <Detail
          detail={detail}
          handleDelete={handleDelete}
          setButtonPopUp={setButtonPopUp}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default FavouriteDetails;
