import { Photo } from "../data/model";
import { actionTypes } from "./action-types";

export function photosReducer(
  // eslint-disable-next-line default-param-last
  state = { photos: [], favouritePhotos: [] },
  action
) {
  switch (action.type) {
    case actionTypes.load:
      return { ...state, photos: [...action.payload] };
    case actionTypes.loadFavorites:
      return {
        ...state,
        favoritePhotos: [...action.payload],
      };
    case actionTypes.addFavourite:
      return {
        ...state,
        favoritePhotos: [...state.payload, action.payload],
      };
    case actionTypes.deleteFavourite:
      return {
        ...state,
        favoritePhotos: state.favoritePhotos.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case actionTypes.updateFavourites:
      return {
        ...state,
        favoritePhotos: state.favoritePhotos.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    default:
      return state;
  }
}
