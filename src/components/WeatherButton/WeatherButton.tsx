import React, { FC } from 'react';
import './WeatherButton.css';

interface WeatherButtonProps {
  weatherLabel: String
  fontSize: number
}

const WeatherButton: FC<WeatherButtonProps> = (props) => {
  const size = `${props.fontSize}px`;

  const btn = <div className="WeatherButton">
    <button style={{fontSize: size}} className="weather-btn">{props.weatherLabel}</button>
  </div>

  return btn;
}

export default WeatherButton;
