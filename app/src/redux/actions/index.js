export function changeCity(
  cityName,
  temp,
  feelsLike,
  weatherDescription,
  currentHumidity
) {
  return {
    type: "changeCity",
    cityName,
    temp,
    feelsLike,
    weatherDescription,
    currentHumidity
  };
}

export function declareError() {
  return {
    type: "declareError"
  };
}
