import React, { useEffect, useState } from "react";
import {
  getHomePhotos,
  getQueryPhotos,
  getRandomPhotos,
} from "../services/api";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchBar from "../components/searchbar";
import { useDispatch, useSelector } from "react-redux";
import { loadPhotos } from "../redux/action-creators";
import PhotosList from "../components/photoslist";
import home from "../styles/home.scss";
import SelectComponent from "../components/select";
import RandomPhoto from "../components/randomphoto";

function Home() {
  const photoState = useSelector((state) => state.photos);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState([]);
  const [random, setRandom] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    getRandomPhotos().then((resp) => {
      return setRandom(resp.data);
    });
    getHomePhotos().then((resp) => {
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

  return (
    <>
      <RandomPhoto random={random} />
      <Box className="search__container">
        <SearchBar
          searchTearm={searchTerm}
          setSearchTearm={setSearchTerm}
        ></SearchBar>
        <SelectComponent
          sortType={sortType}
          setSortType={setSortType}
        ></SelectComponent>
      </Box>

      {data && <PhotosList data={data} />}
    </>
  );
}

export default Home;
