import React, { FC, useEffect, useState } from 'react';
import './Card.css';

interface CardProps {}

const Card: FC<CardProps> = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState([]);
  let count = 0

  useEffect(() => {
    const cityName = 'Birmingham';
    const apiKey = '0af6e62f4ea0c9d0d46f5e69e763805d';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
    const headers = {
        method: 'GET'
    }

    fetch(url, headers)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          result.key = 1;
          setWeatherInfo(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="Card" key={1}>
        <p>Temp: {(weatherInfo as any).main?.temp}°</p>
        <p>Wind Speed: {(weatherInfo as any).wind?.speed} MPH</p>
      </div>
    );
  }
}

export default Card;
