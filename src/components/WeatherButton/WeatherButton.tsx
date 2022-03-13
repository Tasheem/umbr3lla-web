import React, { FC } from 'react';
import './WeatherButton.css';

interface WeatherButtonProps {}

const WeatherButton: FC<WeatherButtonProps> = () => (
  <div className="WeatherButton">
    <button className="weather-btn">Local Weather</button>
  </div>
);

export default WeatherButton;
