import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    setCount(state, { payload }) {
      state.count = payload;
    },
  },
});

export const counterReducer = counterSlice.reducer;
