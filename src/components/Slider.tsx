import { Slider as IncomeSlider } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { appSliceSelector } from "../Models/App.slice.model";
import { setInterestRate } from "../redux/slice/app.slice";

const Slider = () => {
  const interestRate = useSelector(
    (state: appSliceSelector) => state.app.interestRate
  );
  const dispatch = useDispatch();

  return (
    <>
      <IncomeSlider
        min={0}
        max={12}
        step={0.5}
        size="small"
        defaultValue={interestRate}
        onChange={(event: Event, value: number | number[]) => {
          dispatch(setInterestRate(value));
        }}
        aria-label="Small"
        valueLabelDisplay="off"
      />
      <h3>interest rate {interestRate}%</h3>
    </>
  );
};

export default Slider;
