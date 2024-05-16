import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name",
  initialState: {
    names: [],
  },
  reducers: {
    setNames(state, action) {
      state.names = action.payload;
    },
  },
   
});
export const nameReducer = nameSlice.reducer;
export const { setNames } = nameSlice.actions;