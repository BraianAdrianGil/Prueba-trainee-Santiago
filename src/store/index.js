import { configureStore } from '@reduxjs/toolkit';
import country from './slices/countrySlice';
import cat from './slices/catSlice';

const store = configureStore({
  reducer: { country, cat },
});

export default store;
