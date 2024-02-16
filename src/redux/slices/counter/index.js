import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => {
      return state + 1; // Use 'return' to return the new state
    },
    decrement: (state) => {
      return state - 1; // Use 'return' to return the new state
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
