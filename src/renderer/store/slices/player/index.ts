import { createSlice } from "@reduxjs/toolkit";

// window.api;

export const counterSlice = createSlice({
  name: "player",
  initialState: {
    player: false,
  },
  reducers: {
    increment: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
