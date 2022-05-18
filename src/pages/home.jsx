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

function Home({ setData, searchTerm, sortType }) {
  const [photoId, setPhotoId] = useState("");
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [random, setRandom] = useState("");
  const dispatch = useDispatch();
  const photoState = useSelector((state) => state.photos);
  const data = photoState.apiPhotos;

  useEffect(() => {
    api.getRandomPhotos().then((resp) => setRandom(resp.data));
    api.getHomePhotos().then((resp) => {
      dispatch(actions.load(resp.data));
    });
  }, [dispatch]);

  useEffect(() => {
    sortPhotos(data, setData, sortType);
  }, [searchTerm, sortType]);

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
      <RandomPhoto random={random} />
      {data && (
        <div id="photolist">
          <PhotosList
            setPhotoId={setPhotoId}
            setButtonPopUp={setButtonPopUp}
            handleLike={handleLike}
            data={data}
          />
        </div>
      )}
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
