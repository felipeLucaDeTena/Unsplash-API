import { actionTypes } from "./action-types";

export function photosReducer(
  // eslint-disable-next-line default-param-last
  state = { apiPhotos: [], favPhotos: [] },
  action
) {
  switch (action.type) {
    case actionTypes.load:
      return {
        ...state,
        apiPhotos: [...action.payload],
      };
    case actionTypes.loadFavourites:
      return {
        ...state,
        favPhotos: [...action.payload],
      };
    case actionTypes.addFavourite:
      return {
        ...state,
        favPhotos: [...state.favPhotos, action.payload],
      };
    case actionTypes.deleteFavourite:
      return {
        ...state,
        favPhotos: state.favPhotos.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case actionTypes.updateFavourite:
      console.log("actionpay", action.payload);
      console.log("state", state.favPhotos);

      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
