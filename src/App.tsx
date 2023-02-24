import InterestCalculator from "./components/InterestCalculator.screen";

import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <InterestCalculator />
    </Provider>
  );
}

export default App;
