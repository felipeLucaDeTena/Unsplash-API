import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhotosList from "../components/photoslist";
import * as actions from "../redux/action-creators";
import * as api from "../services/api";
import sortPhotos, { notifyDelete } from "../helpers/sort";
import Popup from "../components/popup";
import FavouriteDetails from "../components/details/favouritedetails";

function Favourites({ setData, sortType, data }) {
  const [detail, setDetail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [photoId, setPhotoId] = useState("");
  const photoState = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    api.getFavoritePhotos().then((resp) => {
      dispatch(actions.loadFavourites(resp.data));
      setData(photoState.favPhotos);
    });
  }, [dispatch, detail]);

  useEffect(() => {
    setData(photoState.favPhotos);
    sortPhotos(data, setData, sortType);
  }, [sortType]);

  const handleDelete = (photo) => {
    api.deleteFavoritePhoto(photo.id).then(() => {
      console.log(photo);
      dispatch(actions.deleteFavourite(photo));
      notifyDelete();
    });
  };
  const handleUpdate = (ev, photo) => {
    ev.preventDefault();
    api
      .commentFavoritePhoto(photo.id, { comment: ev.target.value })
      .then(() => {
        dispatch(actions.updateFavourite(photo));
      });
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <h2 className="favourites__title">Favourite photos</h2>
      {data && (
        <PhotosList
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          toggleEditing={toggleEditing}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          setPhotoId={setPhotoId}
          setButtonPopUp={setButtonPopUp}
          data={data}
        />
      )}
      <Popup trigger={buttonPopUp}>
        <FavouriteDetails
          detail={detail}
          setDetail={setDetail}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          toggleEditing={toggleEditing}
          handleUpdate={handleUpdate}
          photoId={photoId}
          handleDelete={handleDelete}
          setButtonPopUp={setButtonPopUp}
        />
      </Popup>
    </>
  );
}

export default Favourites;
