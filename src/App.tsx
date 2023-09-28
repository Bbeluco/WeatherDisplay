import React from 'react';
import CityList from './components/cityList/CityList';
import Header from './components/header/Header';
import SeachSpecificWeatherInCity from './components/seachSpecificWeatherInCity/SeachSpecificWeatherInCity'
import style from "./App.module.css"

function App() {

  return (
    <div className={style.app}>
      <Header />
      {/* <SeachSpecificWeatherInCity />
      <hr />
      <CityList /> */}
    </div>
  );
}

export default App;
