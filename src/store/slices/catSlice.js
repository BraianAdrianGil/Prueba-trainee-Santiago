import { createSlice } from '@reduxjs/toolkit';

const emptyState = [];

const catSlice = createSlice({
  name: 'cats',
  initialState: emptyState,
  reducers: {
    addCatToState(state, action) {
      const data = action.payload;
      const statusCodeSplit = data.split('/');
      const statusCode = statusCodeSplit.slice(statusCodeSplit.length - 1);
      return [...state, { img: data, statusCode }];
    },
  },
});

export const { addCatToState } = catSlice.actions;

export default catSlice.reducer;
