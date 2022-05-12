import { actionTypes } from "./action-types";
import * as api from "../services/api";

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
  type: actionTypes.updateFavourite,
  payload: photo,
});

// export const addPhoto = (photo) => (dispatch) => {
//   api.addFavouritePhoto(photo).then((resp) => {
//     dispatch({
//       type: actionTypes.addFavourite,
//       payload: resp.data,
//     });
//   });
// };
