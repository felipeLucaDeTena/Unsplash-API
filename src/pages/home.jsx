import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as api from "../services/api";
import * as actions from "../redux/action-creators";
import PhotosList from "../components/photoslist";
import RandomPhoto from "../components/randomphoto";
import sortPhotos, { notifyAdd } from "../helpers/sort";
import Popup from "../components/popup";
import HomeDetails from "../components/details/homedetails";
import home from "../styles/home.scss";
import { formatData } from "../helpers/format";

function Home({ searchTerm, sortType, page }) {
  const [photoId, setPhotoId] = useState("");
  const [buttonPopUp, setButtonPopUp] = useState(false);

  const dispatch = useDispatch();
  const [data, setData] = useState("");

  const handleLike = (photo) => {
    console.log(photo);
    const newPhoto = formatData(photo);
    api.addFavouritePhoto({ ...newPhoto }).then((resp) => {
      dispatch(actions.addFavourite(resp.data));
      notifyAdd();
    });
  };

  return (
    <>
      <div id="photolist">
        <PhotosList
          setPhotoId={setPhotoId}
          setButtonPopUp={setButtonPopUp}
          handleLike={handleLike}
          sortType={sortType}
          data={data}
          page={page}
          setData={setData}
          searchTerm={searchTerm}
        />
      </div>

      <Popup trigger={buttonPopUp}>
        <HomeDetails
          photoId={photoId}
          handleLike={handleLike}
          setButtonPopUp={setButtonPopUp}
        />
      </Popup>
    </>
  );
}

export default Home;
