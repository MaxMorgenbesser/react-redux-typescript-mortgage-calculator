import Slider from "./Slider";

import "./CSS/InterestCalculator.css";
import NumberInputs from "./NumberInputs";
import PaymentCalculator from "./PaymentCalculator";
const InterestCalculator = () => {
  return (
    <div className="container">
      <div className="sliderContainer">
        <Slider />
      </div>
      <NumberInputs />
      <PaymentCalculator />
    </div>
  );
};

export default InterestCalculator;
