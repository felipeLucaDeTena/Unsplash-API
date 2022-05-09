import axios from "axios";

const UNSPLASH_URL =
  "https://api.unsplash.com/photos/?client_id=6haNOSOrqVhRE77ErSFNZZdBasF0OL2rTb0oXgZbvqI&per_page=30";

const LOCAL_URL = "http://localhost:3001/photos";

export async function getHomePhotos() {
  return axios.get(UNSPLASH_URL);
}
export async function getFavoritePhotos() {
  return axios.get(LOCAL_URL);
}

export async function addFavouritePhoto(photo) {
  return axios.post(LOCAL_URL, photo);
}
export async function getDetail(id) {
  const DETAILS_URL = `https://api.unsplash.com/photos/${id}/?client_id=oo0I3DWICf63uyMkzE5gcA_pGOBCPC-dTUzkOcWXDJI`;

  return axios.get(DETAILS_URL);
}

export async function deleteFavoritePhoto(id) {
  return axios.delete(LOCAL_URL + id);
}
export async function commentFavoritePhoto(id, comment) {
  return axios.patch(LOCAL_URL + id, { comment });
}
