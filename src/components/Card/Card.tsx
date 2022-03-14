import React, { FC } from 'react';
import './Card.css';

interface CardProps {}

const Card: FC<CardProps> = () => (
  <div className="Card">
    <p>Temp: 76°</p>
    <p>Wind Speed: 10 MPH SW</p>
  </div>
);

export default Card;
