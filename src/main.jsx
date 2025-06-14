import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { WeatherProvider } from "./context/Weather.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </ThemeProvider>
);
