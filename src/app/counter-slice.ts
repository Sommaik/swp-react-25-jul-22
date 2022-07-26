import { createSlice } from "@reduxjs/toolkit";

interface ICounter {
  value: number;
}

const initialState: ICounter = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: ICounter) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
