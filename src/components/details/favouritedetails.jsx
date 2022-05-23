import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

  useEffect(() => {
    getFavouriteDetail(photoId).then((resp) => setDetail(resp.data));
  }, [dispatch, isEditing]);

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
