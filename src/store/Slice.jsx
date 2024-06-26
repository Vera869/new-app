import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    allItems: [],
    item: [],
    favItems: [],
    isLoad: true,
    errorMessage: "",
    isFiltered: false,
    currentItemId: null,
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
    setFavItems(state) {
      const items = state.allItems;
      const id = state.currentItemId;
      const favItems = state.favItems;
      if(id) {
        const currentItem = items.filter((el) => el.id === id);
        state.favItems = favItems.push(currentItem);
        localStorage.setItem("favItems", state.favItems);
      }
    },
    setCurrentItemId(state, action) {
      state.currentItemId = action.payload;
      localStorage.setItem("id", state.currentItemId);
    },
    setItem(state) {
      const items = state.allItems;
      const id = state.currentItemId;
      if(id) {
        const currentItem = items.filter((el) => el.id === id);
        state.item = currentItem;
      }
    },
    setDeleteItem(state) {
      const items = state.allItems;
      const id = state.currentItemId;
      if(id) {
        const newItems = items.filter((el) => el.id !== id);
        state.allItems = newItems;
      }
    },
  },
   
});
export const itemsReducer = itemsSlice.reducer;
export const { setAllItems, setIsLoad, setErrorMessage, setIsFiltered, setCurrentItemId, setItem,setFavItems, setDeleteItem } = itemsSlice.actions;