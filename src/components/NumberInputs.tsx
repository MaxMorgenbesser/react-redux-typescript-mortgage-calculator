import { useDispatch, useSelector } from "react-redux";
import { appSliceSelector } from "../Models/App.slice.model";
import {
  setdownPayment,
  setHousePrice,
  setYears,
} from "../redux/slice/app.slice";

import "./CSS/InterestCalculator.css";

const NumberInputs = () => {
  const dispatch = useDispatch();
  const housePrice = useSelector(
    (state: appSliceSelector) => state.app.housePrice
  );
  const years = useSelector((state: appSliceSelector) => state.app.years);
  const downPayment = useSelector(
    (state: appSliceSelector) => state.app.downPayment
  );
  return (
    <>
      <p>House Price</p>
      <input
        type="number"
        className="NumberInput"
        value={housePrice}
        onChange={(e) => {
          dispatch(setHousePrice(e.target.value));
        }}
      ></input>
      <p>Years of loan</p>
      <input
        type="number"
        className="NumberInput"
        value={years}
        onChange={(e) => {
          dispatch(setYears(e.target.value));
        }}
      ></input>
      <p>Down payment</p>
      <input
        type="number"
        className="NumberInput"
        value={downPayment}
        onChange={(e) => {
          dispatch(setdownPayment(e.target.value));
        }}
      ></input>
    </>
  );
};

export default NumberInputs;
