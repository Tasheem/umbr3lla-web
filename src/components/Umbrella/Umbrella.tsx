import React, { FC } from 'react';
import './Umbrella.css';
import logo from '../../images/umbr3lla-logo.png'

interface UmbrellaProps {}

const Umbrella: FC<UmbrellaProps> = () => (
  <div className="Umbrella">
    <div className="heading-container">
      <img src={logo} className="umbrella-logo" alt="logo" />
      <h1 className="title">Ümbr3lla</h1>
    </div>
  </div>
);

export default Umbrella;
