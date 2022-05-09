import { configureStore } from "@reduxjs/toolkit";
import { photosReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
});
