import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PhotosList from "../components/photoslist";
import * as actions from "../redux/action-creators";
import * as api from "../services/api";
import SearchBar from "../components/searchbar";
import SelectComponent from "../components/select";
import sortPhotos from "../helpers/sort";
import Popup from "../components/popup";

function Favourites() {
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState([]);
  const [random, setRandom] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    api.getFavoritePhotos().then((resp) => {
      setData(resp.data);
    });
  }, []);

  useEffect(() => {
    sortPhotos(data, setData, sortType);
  }, [searchTerm, sortType]);

  const handleDelete = (photo) => {
    api.deleteFavoritePhoto(photo).then((resp) => {
      dispatch(actions.removePhoto(resp.data));
    });
  };

  return (
    <>
      <div>Your photos</div>
      <div id="search" className="search__container">
        <SearchBar
          searchTearm={searchTerm}
          setSearchTearm={setSearchTerm}
          data={data}
          setData={setData}
        />
        <SelectComponent sortType={sortType} setSortType={setSortType} />
      </div>
      {data && <PhotosList setButtonPopUp={setButtonPopUp} data={data} />}
      <Popup trigger={buttonPopUp} />
    </>
  );
}

export default Favourites;
