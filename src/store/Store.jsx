import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./Slice";
import getProructsApiReducer, { getProructsApi } from "../Api";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    [getProructsApi.reducerPath]: getProructsApiReducer,
  },
});