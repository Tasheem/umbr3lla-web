import React, { FC, useEffect, useState } from 'react';
import Card from '../Card/Card';
import WeatherButton from '../WeatherButton/WeatherButton';
import './WeatherQuery.css';

interface WeatherQueryProps {
}

class WeatherQuery extends React.Component<{}, { zipCode: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      zipCode: 35218
    };
  }

  componentDidMount() {
    const input = document.querySelector('.query-input') as HTMLInputElement;
    input?.addEventListener('keyup', this.getWeather);
  }

  getWeather = (e: KeyboardEvent): void => {
    if(e.key !== 'Enter')
      return;
  
    const userZip = Number((e.target as HTMLInputElement).value);
    if(userZip === NaN)
      return;

    this.setState({zipCode: userZip});
  }

  render() {
    return (
      <div className="WeatherQuery">
        <h2 className='query-heading'>Check Weather At Zip:</h2>
        <input className='query-input' type="text" />

        <Card zip={this.state.zipCode} city={null} />
        <WeatherButton weatherLabel={"Advanced Stats"} fontSize={20} path="/query" />
      </div>
    )
  }
}

export default WeatherQuery;
