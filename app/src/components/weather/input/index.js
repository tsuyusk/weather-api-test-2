import React, {  useState, useEffect } from "react";
import { Form, Input, Button, Spinner } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as weatherActions from "../../../redux/actions";

const InputScreen = ({ changeCity, declareError }) => {
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = e => setInputValue(e.target.value);
  const [spinnerDisplay, setSpinnerDisplay] = useState("none");

  const searchCity = async searchedName => {
    setSpinnerDisplay("block");
    try {
      const response = await fetch(
        `https://openweathermap.org/data/2.5/weather?q=${searchedName}&appid=439d4b804bc8187953eb36d2a8c26a02`
      );
      setSpinnerDisplay("none");
      const data = await response.json();
      const importantData = [
        data.name + ", " + data.sys.country,
        Math.round(data.main.temp),
        Math.round(data.main.feels_like),
        data.weather[0].description,
        data.main.humidity + "%"
      ];
      changeCity(
        ...importantData
      );
    } catch (err) {
      setSpinnerDisplay("none");
      declareError();
    }
  };

  useEffect(() => {
    searchCity("London");
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    searchCity(inputValue);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input value={inputValue} onChange={handleOnChange} />
      <br />
      <Button color="primary">Search city</Button>
      <br />
      <br />
      <Spinner
        color="primary"
        style={{ display: spinnerDisplay, margin: "auto" }}
      />
      <br />
    </Form>
  );
};

const mapDispatchtoProps = dispatch =>
  bindActionCreators(weatherActions, dispatch);

export default connect(
  null,
  mapDispatchtoProps
)(InputScreen);
