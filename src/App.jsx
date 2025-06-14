import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import ThemeToggle from './components/ThemeToggle';
import { useWeather } from './context/Weather';

function App() {
  const weather = useWeather();

  return (
    <div className="container">
      <h1 className="title">Weather App</h1>
      <ThemeToggle />
      <div className="search-bar">
        <Input />
        <Button onClick={weather.fetchData} value="Search" />
      </div>
      <Card />
    </div>
  );
}

export default App;
