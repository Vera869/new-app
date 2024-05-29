import { configureStore } from "@reduxjs/toolkit";
import { countriesReducer } from "./Slice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});