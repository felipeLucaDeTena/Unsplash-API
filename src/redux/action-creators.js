import { actionTypes } from "./action-types";

export const loadPhotos = (photos) => ({
  type: actionTypes.load,
  payload: photos,
});
export const loadFavouritesPhotos = (photos) => ({
  type: actionTypes.loadFavourites,
  payload: photos,
});

export const addPhoto = (photo) => ({
  type: actionTypes.addFavourites,
  payload: photo,
});
export const removePhoto = (photo) => ({
  type: actionTypes.deleteFavourite,
  payload: photo,
});

export const updatePhoto = (photo) => ({
  type: actionTypes.updateFavourites,
  payload: photo,
});
