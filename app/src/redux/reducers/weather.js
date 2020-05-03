const initialState = {
  cityName: "...",
  temp: "...",
  feelsLike: "...",
  weatherDescription: "...",
  currentHumidity: "..."
};

export function weatherDesc(state = initialState, action) {
  switch (action.type) {
    case "changeCity":
      return {
        ...state,
        cityName: action.cityName,
        temp: action.temp,
        feelsLike: action.feelsLike,
        weatherDescription: action.weatherDescription,
        currentHumidity: action.currentHumidity
      };
    case "declareError":
      return {
        ...state,
        ...initialState,
        cityName: "The city was not found"
      };
    default:
      return state;
  }
}
