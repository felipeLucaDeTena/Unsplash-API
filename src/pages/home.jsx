import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import SearchBar from "../components/searchbar";
import * as api from "../services/api";
import * as actions from "../redux/action-creators";
import PhotosList from "../components/photoslist";
import SelectComponent from "../components/select";
import RandomPhoto from "../components/randomphoto";
import home from "../styles/home.scss";
import { Photo } from "../data/model";
import sortPhotos from "../helpers/sort";
import Popup from "../components/popup";
import Detail from "../components/details";

function Home() {
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState([]);
  const [random, setRandom] = useState("");

  useEffect(() => {
    api.getRandomPhotos().then((resp) => setRandom(resp.data));
    api.getHomePhotos().then((resp) => {
      setData(resp.data);
    });
  }, []);

  useEffect(() => {
    sortPhotos(data, setData, sortType);
  }, [searchTerm, sortType]);

  const handleLike = (photo) => {
    api.addFavouritePhoto(photo);
  };

  return (
    <>
      <RandomPhoto random={random} />
      <div id="search" className="search__container">
        <SearchBar
          searchTearm={searchTerm}
          setSearchTearm={setSearchTerm}
          data={data}
          setData={setData}
        />
        <SelectComponent sortType={sortType} setSortType={setSortType} />
      </div>

      {data && (
        <PhotosList
          setButtonPopUp={setButtonPopUp}
          handleLike={handleLike}
          data={data}
        />
      )}
      <Popup trigger={buttonPopUp}>
        <Detail setButtonPopUp={setButtonPopUp} />
      </Popup>
    </>
  );
}

export default Home;
