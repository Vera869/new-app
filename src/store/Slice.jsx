import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
   countries: [],
   isLoading: true,
   countryName: "",
   currentCountry: [],
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
    setCurrentCountry(state, action) {
      state.currentCountry = action.payload;
    },
  },
   
});
export const countriesReducer = countriesSlice.reducer;
export const { setCountries, setIsLoading, setCountryName, setCurrentCountry } = countriesSlice.actions;