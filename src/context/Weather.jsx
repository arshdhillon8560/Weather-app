import React, {createContext, useContext, useState} from 'react'
import {getWeatherDataForCity} from "../api/index"

export const useWeather =()=>{
     return useContext(WeatherContext);
}

const WeatherContext =createContext(null);
export const WeatherProvider = (props) => {
  const [data,setData]=useState(null);
  const [searchCity , setSearchCity] =useState(null);
   
 const fetchData = async () => {
  try {
    const response = await getWeatherDataForCity(searchCity);
    if (response && !response.error) {
      setData(response);
    } else {
      alert("City not found. Please try again.");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <WeatherContext.Provider value={{searchCity,data,setSearchCity ,fetchData}}>
      {props.children}  
    </WeatherContext.Provider>
  )
}
