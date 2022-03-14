import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './WeatherButton.css';

interface WeatherButtonProps {
  weatherLabel: String
  fontSize: number
  path: string
}

const WeatherButton: FC<WeatherButtonProps> = (props) => {
  const size = `${props.fontSize}px`;

  const btn = <div className="WeatherButton">
    <Link to={props.path}>
      <button style={{fontSize: size}} className="weather-btn">{props.weatherLabel}</button>
    </Link>
  </div>

  return btn;
}

export default WeatherButton;
