import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import PhotosList from "../components/photoslist";
import * as actions from "../redux/action-creators";
import * as api from "../services/api";
import SearchBar from "../components/searchbar";
import SelectComponent from "../components/select";
import sortPhotos, { notifyDelete, notifyUpdate } from "../helpers/sort";
import Popup from "../components/popup";
import FavouriteDetails from "../components/details/favouritedetails";

function Favourites({
  setData,
  searchTerm,
  setSearchTerm,
  sortType,
  setSortType,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [photoId, setPhotoId] = useState("");
  const photoState = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  useEffect(() => {
    api.getFavoritePhotos().then((resp) => {
      dispatch(actions.loadFavourites(resp.data));
    });
  }, [dispatch]);
  const data = photoState.favPhotos;

  useEffect(() => {
    sortPhotos(data, setData, sortType);
  }, [searchTerm, sortType]);

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
        notifyUpdate();
      });
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <div>Your photos</div>
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
