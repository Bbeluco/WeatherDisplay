import React from 'react';
import CityList from './components/cityList/CityList';
import Header from './components/header/Header';
import ResultSpecificCityWeather from './components/resultSpecificCityWeather/ResultSpecificCityWeather'
import InputSpecificCityToQuery from './components/inputSpecificCityToQuery/InputSpecificCityToQuery'

function App() {
  return (
    <div className="App">
      <Header />
      <ResultSpecificCityWeather />
      <br />
      <InputSpecificCityToQuery />
      <hr />
      {/* <CityList /> */}
    </div>
  );
}

export default App;
