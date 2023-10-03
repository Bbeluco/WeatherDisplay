import React, { useState } from "react";
import FormCityToCheckWeather from "../formCityToCheckWeather/FormCityToCheckWeather";
import ResultSpecificCityWeather from "../resultSpecificCityWeather/ResultSpecificCityWeather";
import useAxiosRequests from "../../requests/axiosRequests";

function SearchSpecificWeatherInCity(): React.JSX.Element {
    const [nameCity, setNameCity] = useState('')
    const { requestApiToCheckWeather } = useAxiosRequests()
    const [cityInformation, setCityInformation] = useState<any>()
    const [isAvailableToShow, setIsAvailableToShow] = useState(true)
    
    
    function onChangeInputField(event: any) {
        setNameCity(event.target.value)
    }

    async function loadInformationAboutCity() {
        const respose = await requestApiToCheckWeather(nameCity)
        setCityInformation(respose);
        setIsAvailableToShow(true)
    }

    function closeSpecificWeather(): undefined {
        setIsAvailableToShow(false)
        return undefined
    }

    return (
        <div>
            {isAvailableToShow && <ResultSpecificCityWeather cityInformation={cityInformation} closeSpecificWeather={closeSpecificWeather}/> }
            <br />
            <FormCityToCheckWeather 
                onChangeInputField={onChangeInputField} 
                loadInformationAboutCity={loadInformationAboutCity}
            />
        </div>
    )
}

export default SearchSpecificWeatherInCity