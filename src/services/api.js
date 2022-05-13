import axios from "axios";

const RANDOM__URL =
  "https://api.unsplash.com/photos/random?client_id=6haNOSOrqVhRE77ErSFNZZdBasF0OL2rTb0oXgZbvqI";
const UNSPLASH_URL =
  "https://api.unsplash.com/photos/?client_id=6haNOSOrqVhRE77ErSFNZZdBasF0OL2rTb0oXgZbvqI&per_page=30";

const LOCAL_URL = "http://localhost:3001/photos";

export async function getHomePhotos() {
  return axios.get(UNSPLASH_URL);
}

export async function getQueryPhotos(query) {
  const QUERY__URL = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=6haNOSOrqVhRE77ErSFNZZdBasF0OL2rTb0oXgZbvqI&per_page=30`;
  return axios.get(QUERY__URL);
}

export async function getRandomPhotos() {
  return axios.get(RANDOM__URL);
}

export async function getFavoritePhotos() {
  return axios.get(LOCAL_URL);
}

export async function addFavouritePhoto(photo) {
  return axios.post(LOCAL_URL, photo);
}
export async function getDetail(id) {
  const DETAILS_URL = `https://api.unsplash.com/photos/${id}/?client_id=6haNOSOrqVhRE77ErSFNZZdBasF0OL2rTb0oXgZbvqI`;

  return axios.get(DETAILS_URL);
}
export async function getFavouriteDetail(id) {
  const LOCAL__DETAILS_URL = `http://localhost:3001/photos/${id}`;

  return axios.get(LOCAL__DETAILS_URL);
}
export async function getUser(user) {
  const DETAILS_URL = `https://api.unsplash.com/users/${user}/?client_id=6haNOSOrqVhRE77ErSFNZZdBasF0OL2rTb0oXgZbvqI`;

  return axios.get(DETAILS_URL);
}

export async function deleteFavoritePhoto(id) {
  return axios.delete(LOCAL_URL + id);
}
export async function commentFavoritePhoto(id, comment) {
  return axios.patch(LOCAL_URL + id, { comment });
}
