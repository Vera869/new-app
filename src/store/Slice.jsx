import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    allItems: [],
    isLoad: true,
    errorMessage: "",
  },
  reducers: {
    setAllItems(state, action) {
      state.allItems = action.payload;
    },
    setIsLoad(state, action) {
      state.isLoad = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
   
});
export const itemsReducer = itemsSlice.reducer;
export const { setAllItems, setIsLoad, setErrorMessage } = itemsSlice.actions;