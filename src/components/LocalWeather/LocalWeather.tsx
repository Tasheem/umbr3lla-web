import React, { FC } from 'react';
import Card from '../Card/Card';
import WeatherButton from '../WeatherButton/WeatherButton';
import './LocalWeather.css';

interface LocalWeatherProps {}

const LocalWeather: FC<LocalWeatherProps> = () => (
  <div className="LocalWeather">
    <h2 className='local-weather-heading'>Weather At Your Location</h2>
    <Card zip={null} city={"Birmingham"} />

    <div className="btn-container">
      <WeatherButton path='/' fontSize={20} weatherLabel={"Advanced Stats"} />
    </div>
  </div>
);

export default LocalWeather;
