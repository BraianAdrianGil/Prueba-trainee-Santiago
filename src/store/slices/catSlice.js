import { createSlice } from '@reduxjs/toolkit';

const emptyState = [];

const catSlice = createSlice({
  name: 'cats',
  initialState: emptyState,
  reducers: {
    addCatToState(state, action) {
      const data = action.payload;
      return [...state, { img: data }];
    },
  },
});

export const { addCatToState } = catSlice.actions;

export default catSlice.reducer;
