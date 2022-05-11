import React, { useEffect, useState } from "react";
import {
  getHomePhotos,
  getQueryPhotos,
  getRandomPhotos,
} from "../services/api";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchBar from "../components/searchbar";
import { useDispatch, useSelector } from "react-redux";
import { loadPhotos } from "../redux/action-creators";
import home from "../styles/home.scss";

function Home() {
  const photoState = useSelector((state) => state.photos);
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState([]);
  const [random, setRandom] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    getRandomPhotos().then((resp) => {
      return setRandom(resp.data);
    });
  }, []);

  useEffect(() => {
    getHomePhotos().then((resp) => {
      dispatch(loadPhotos(resp.data));
    });
    setData(photoState.photos);
  }, []);

  useEffect(() => {
    const newData = [...photoState.photos];
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
    dispatch(loadPhotos(newData));
  }, [sortType]);

  return (
    <>
      {random && (
        <Box className="home__randomphoto__container">
          <Box
            className="home__randomphoto"
            component="img"
            alt="The house from the offer."
            src={random.urls.regular}
          />
          <Box className="home__randomphoto__overlay">
            <p>The internet’s source of freely-usable images.</p>
            <p>Powered by creators everywhere.</p>
          </Box>
        </Box>
      )}
      <Box className="search__container">
        <SearchBar></SearchBar>
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
          }}
          size="small"
        >
          <InputLabel id="demo-select-small">Sort by</InputLabel>
          <Select
            sx={{
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
            }}
            value={sortType}
            labelId="demo-select-small"
            id="demo-select-small"
            label="Age"
            onChange={(e) => setSortType(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="likes">Likes</MenuItem>
            <MenuItem value="date">Date</MenuItem>
            <MenuItem value="size">Size</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {photoState.photos && (
        <Masonry sx={{ margin: 0 }} columns={4} spacing={2}>
          {photoState.photos.map((photo) => (
            <>
              <Box className="home__img__container">
                <Box
                  className="home__img"
                  component="img"
                  alt="The house from the offer."
                  src={photo.urls.small}
                />
                <Box className="home__img__overlay">
                  <p style={{ margin: "20% 0 0 0" }}>By</p>
                  <p>{photo.user.name}</p>
                  <FavoriteBorderIcon
                    sx={{ fontSize: "30px", margin: "auto  20px 20px auto" }}
                  />
                </Box>
              </Box>
            </>
          ))}
        </Masonry>
      )}
    </>
  );
}

export default Home;
