import { configureStore } from "@reduxjs/toolkit";
import { nameReducer } from "./Slice";

export const store = configureStore({
  reducer: {
    name: nameReducer,
  },
});