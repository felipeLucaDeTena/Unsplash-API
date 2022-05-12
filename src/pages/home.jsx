import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/searchbar";
import * as api from "../services/api";
import * as actions from "../redux/action-creators";
import PhotosList from "../components/photoslist";
import SelectComponent from "../components/select";
import RandomPhoto from "../components/randomphoto";
import home from "../styles/home.scss";
import { Photo } from "../data/model";

function Home() {
  const [favourite, setFavourite] = useState(new Photo());
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState([]);
  const [random, setRandom] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    api.getRandomPhotos().then((resp) => setRandom(resp.data));
    api.getHomePhotos().then((resp) => {
      setData(resp.data);
    });
  }, []);

  useEffect(() => {
    sortPhotos();
  }, [searchTerm, sortType]);

  function sortPhotos() {
    const newData = [...data];
    const types = {
      likes: "likes",
      size: "height",
      date: "created_at",
    };
    const sortProperty = types[sortType];
    sortProperty === "created_at"
      ? newData.sort(
          (a, b) =>
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        )
      : newData.sort((a, b) => b[sortProperty] - a[sortProperty]);
    setData(newData);
  }

  const handleLike = (photo) => {
    console.log(photo);
    api.addFavouritePhoto(photo).then(() => {
      dispatch(actions.addPhoto());
    });
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

      {data && <PhotosList handleLike={handleLike} data={data} />}
    </>
  );
}

export default Home;
