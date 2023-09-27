import React from 'react';
import CityList from './components/cityList/CityList';
import Header from './components/header/Header';
import ResultSpecificCityWeather from './components/resultSpecificCityWeather/ResultSpecificCityWeather'
import SeachSpecificWeatherInCity from './components/seachSpecificWeatherInCity/SeachSpecificWeatherInCity'

function App() {

  return (
    <div className="App">
      <Header />
      <SeachSpecificWeatherInCity />
      <hr />
      {/* <CityList /> */}
    </div>
  );
}

export default App;
