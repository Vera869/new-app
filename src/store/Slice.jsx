import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
   countries: [],
   isLoading: true,
   countryName: "",
  },
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setCountryName(state, action) {
      state.countryName = action.payload;
    },
   //  setCountries(state, action) {
   //    state.countries = action.payload;
   //  },
  },
   
});
export const countriesReducer = countriesSlice.reducer;
export const { setCountries, setIsLoading, setCountryName } = countriesSlice.actions;