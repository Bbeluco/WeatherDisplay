import React from 'react';
import CityList from './components/cityList/CityList';
import Header from './components/header/Header';
import SearchSpecificWeatherInCity from './components/searchSpecificWeatherInCity/SearchSpecificWeatherInCity'
import style from "./App.module.css"

function App() {

  return (
    <div className={style.app}>
      <Header />
      <SearchSpecificWeatherInCity />
      <hr />
      <CityList />
    </div>
  );
}

export default App;
