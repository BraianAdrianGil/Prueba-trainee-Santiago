import { createSlice } from '@reduxjs/toolkit';

const emptyState = [];

const countrySlice = createSlice({
  name: 'countries',
  initialState: emptyState,
  reducers: {
    setCountries(state, action) {
      const data = action.payload;
      return data;
    },
  },
});

export const { setCountries } = countrySlice.actions;

export default countrySlice.reducer;
