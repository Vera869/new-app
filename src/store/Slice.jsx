import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    allItems: [],
    favItems: [],
    isLoad: true,
    errorMessage: "",
    isFiltered: false,
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
    setIsFiltered(state) {
      state.isFiltered = !state.isFiltered;
    },
    setFavItems(state, action) {
      state.favItems = action.payload;
    },
    setDeleteItem(state, action) {
      state.favItems = action.payload;
    },
  },
   
});
export const itemsReducer = itemsSlice.reducer;
export const { setAllItems, setIsLoad, setErrorMessage, setIsFiltered } = itemsSlice.actions;