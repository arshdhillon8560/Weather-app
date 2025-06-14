import React, {createContext, useContext, useState} from 'react'
import {getWeatherDataForCity} from "../api/index"

export const useWeather =()=>{
     return useContext(WeatherContext);
}

const WeatherContext =createContext(null);
export const WeatherProvider = (props) => {
  const [data,setData]=useState(null);
  const [searchCity , setSearchCity] =useState(null);
   
  const fetchData= async()=>{
     const response=await getWeatherDataForCity(searchCity)
     setData(response);
     
  }

  return (
    <WeatherContext.Provider value={{searchCity,data,setSearchCity ,fetchData}}>
      {props.children}  
    </WeatherContext.Provider>
  )
}
