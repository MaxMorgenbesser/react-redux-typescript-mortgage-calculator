import { createSlice } from "@reduxjs/toolkit";
import { appSliceModel } from "../../Models/App.slice.model";

const initialState: appSliceModel = {
  housePrice: 0,
  interestRate: 5,
  downPayment: 0,
  years: 0,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setHousePrice(state, action) {
      state.housePrice = action.payload;
    },
    setInterestRate(state, action) {
      state.interestRate = action.payload;
    },
    setdownPayment(state, action) {
      state.downPayment = action.payload;
    },
    setYears(state, action) {
      state.years = action.payload;
    },
  },
});

export const { setHousePrice, setInterestRate, setYears, setdownPayment } =
  appSlice.actions;

export default appSlice.reducer;
