import { configureStore } from '@reduxjs/toolkit';
import country from './slices/countrySlice';

const store = configureStore({
  reducer: { country },
});

export default store;
