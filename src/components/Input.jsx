import React from "react";
import { useWeather } from "../context/Weather";

const Input = () => {
  const weather = useWeather();

  return (
    <input
      type="text"
      placeholder="Enter city name"
      value={weather.searchCity || ""}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
  );
};

export default Input;
