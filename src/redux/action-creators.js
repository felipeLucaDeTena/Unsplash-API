import { actionTypes } from "./action-types";

export const load = (photos) => ({
  type: actionTypes.load,
  payload: photos,
});

export const loadFavourites = (photos) => ({
  type: actionTypes.loadFavourites,
  payload: photos,
});

export const addFavourite = (photo) => ({
  type: actionTypes.addFavourite,
  payload: photo,
});
export const deleteFavourite = (photo) => ({
  type: actionTypes.deleteFavourite,
  payload: photo,
});

export const updateFavourite = (photo) => ({
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
