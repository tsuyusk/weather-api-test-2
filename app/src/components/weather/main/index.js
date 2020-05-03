import React from "react";
import { Provider } from "react-redux";
import InputScreen from "../input";
import DataScreen from "../data";
import Store from "../../../redux/store";

const MainScreen = () => {
  return (
    <div>
      <Provider store={Store}>
        <InputScreen />
        <hr />
        <DataScreen />
      </Provider>
    </div>
  );
};

export default MainScreen;
