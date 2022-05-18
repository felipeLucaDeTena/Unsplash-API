import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getDetail } from "../../services/api";
import Detail from "./details";

function HomeDetails({ handleLike, setButtonPopUp, photoId }) {
  const [detail, setDetail] = useState("");

  useEffect(() => {
    getDetail(photoId).then((resp) => setDetail(resp.data));
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

export default HomeDetails;
