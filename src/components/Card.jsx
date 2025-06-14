import React from 'react'
import { useWeather } from '../context/Weather'

const Card = () => {
    const weather=useWeather();
    const data = weather.data;
    if (!data) return <p>Search a city to see the weather.</p>;
    
  return (
    <div className="card">
      <img src={`https:${data.current.condition.icon}`} alt={data.current.condition.text} />
      <h2>{data.current.temp_c}°C / {data.current.temp_f}°F</h2>
      <h4>{data.current.condition.text}</h4>

      <h5>{data.location.name}, {data.location.region}, {data.location.country}</h5>
      <p><strong>Feels Like:</strong> {data.current.feelslike_c}°C</p>
      <p><strong>Humidity:</strong> {data.current.humidity}%</p>
      <p><strong>Wind:</strong> {data.current.wind_kph} kph {data.current.wind_dir}</p>
      <p><strong>UV Index:</strong> {data.current.uv}</p>
      <p><strong>Visibility:</strong> {data.current.vis_km} km</p>
      <p><strong>Local Time:</strong> {data.location.localtime}</p>
    </div>
  )
}

export default Card