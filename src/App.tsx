import React, { ReactNode } from 'react';
import logo from './images/umbr3lla-logo.png';
import './App.css';
import WeatherButton from './components/WeatherButton/WeatherButton';
import Umbrella from './components/Umbrella/Umbrella';
import { Routes, Route, Link } from "react-router-dom";
import LocalWeather from './components/LocalWeather/LocalWeather';

class App extends React.Component {
  createButtons() {
    const labels = ['Local Weather', 'Weather By Zip'];

    const btns: JSX.Element[] = labels.map((label) => {
      const weatherBtn = <div className='row-container'><WeatherButton fontSize={40} weatherLabel={label} /></div>;
      return weatherBtn;
    })

    return btns;
  }

  render(): ReactNode {
    return(
      <div className='App'>
        <Umbrella />
        <Routes>
          <Route path='/' element={<LocalWeather />} />
          <Route path='about' element={
            <div className='btn-container'>
              <img src={logo} className="secondary-umbrella-logo" alt="logo" />
              {this.createButtons()}
            </div>
          } />
        </Routes>
      </div>
    )
  }
}

export default App;
