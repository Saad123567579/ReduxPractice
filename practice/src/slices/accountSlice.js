import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 10,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    increment10: (state) => {
      state.amount += 10;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    decrement10: (state) => {
      state.amount -= 10;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, increment10,decrement10} = accountSlice.actions;

export default accountSlice.reducer;
