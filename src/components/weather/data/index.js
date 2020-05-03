import React from "react";
import { connect } from "react-redux";

const DataScreen = ({
  cityName,
  temp,
  feelsLike,
  weatherDescription,
  currentHumidity
}) => {
  return (
    <div style={{ fontSize: 16 }}>
      <h4>{cityName}</h4>
      <p>Temperature: {temp}°C</p>
      <p>Feels like: {feelsLike}°C</p>
      <p>Weather description: {weatherDescription}</p>
      <p>The current humidity: {currentHumidity}</p>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    cityName: state.weatherDesc.cityName,
    temp: state.weatherDesc.temp,
    feelsLike: state.weatherDesc.feelsLike,
    weatherDescription: state.weatherDesc.weatherDescription,
    currentHumidity: state.weatherDesc.currentHumidity
  };
};

export default connect(mapStatetoProps)(DataScreen);
