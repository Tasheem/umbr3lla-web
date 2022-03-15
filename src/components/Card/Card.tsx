import React, { FC, useEffect, useState } from 'react';
import './Card.css';

interface CardProps {
  zip: number | null;
  city: string | null;
}

const Card: FC<CardProps> = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState([]);

  useEffect(() => {
    const apiKey = '0af6e62f4ea0c9d0d46f5e69e763805d';

    let url = '';
    if(props.city === null)
      url = `http://api.openweathermap.org/data/2.5/weather?zip=${props.zip},us&appid=${apiKey}&units=imperial`;
    else
      url = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

    const headers = {
        method: 'GET'
    }

    fetch(url, headers)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
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
  }, [props.zip])

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="Card">
        <p>City: {(weatherInfo as any).name}</p>
        <p>Temp: {(weatherInfo as any).main?.temp}°</p>
        <p>Wind Speed: {(weatherInfo as any).wind?.speed} MPH</p>
      </div>
    );
  }
}

export default Card;
