import React, { useState } from "react";
import FormCityToCheckWeather from "../formCityToCheckWeather/FormCityToCheckWeather";
import ResultSpecificCityWeather from "../resultSpecificCityWeather/ResultSpecificCityWeather";

function SeachSpecificWeatherInCity(): React.JSX.Element {
    const [nameCity, setNameCity] = useState('')
    const [isSearchable, setIsSearchable] = useState(false)
    
    
    function onChangeInputField(event: any) {
        setNameCity(event.target.value)
    }

    function changeIsSearchable() {
        setIsSearchable(true)
        
    }

    return (
        <>
            {isSearchable && <ResultSpecificCityWeather city={nameCity} />}
            <br />
            <FormCityToCheckWeather 
                onChangeInputField={onChangeInputField} 
                changeIsSearchable={changeIsSearchable}
            />
            
        </>
    )
}

export default SeachSpecificWeatherInCity