import React, { useEffect } from "react";
import { getFavouriteDetail } from "../../services/api";
import Detail from "./details";

function FavouriteDetails({
  handleUpdate,
  handleDelete,
  setButtonPopUp,
  photoId,
  toggleEditing,
  isEditing,
  detail,
  setDetail,
}) {
  useEffect(() => {
    getFavouriteDetail(photoId).then((resp) => setDetail(resp.data));
  }, [detail]);
  console.log(detail);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {detail ? (
        <Detail
          isEditing={isEditing}
          toggleEditing={toggleEditing}
          handleUpdate={handleUpdate}
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
