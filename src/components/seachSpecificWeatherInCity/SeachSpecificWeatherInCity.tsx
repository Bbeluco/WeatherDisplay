import React, { useState } from "react";
import FormCityToCheckWeather from "../formCityToCheckWeather/FormCityToCheckWeather";
import ResultSpecificCityWeather from "../resultSpecificCityWeather/ResultSpecificCityWeather";
import useAxiosRequests from "../../requests/axiosRequests";

function SeachSpecificWeatherInCity(): React.JSX.Element {
    const [nameCity, setNameCity] = useState('')
    const { requestApiToCheckWeather } = useAxiosRequests()
    const [cityInformation, setCityInformation] = useState<any>()
    
    
    function onChangeInputField(event: any) {
        setNameCity(event.target.value)
    }

    async function loadInformationAboutCity() {
        const respose = await requestApiToCheckWeather(nameCity)
        setCityInformation(respose);
        console.log(respose)
    }

    return (
        <div>
            {<ResultSpecificCityWeather cityInformation={cityInformation} /> }
            <br />
            <FormCityToCheckWeather 
                onChangeInputField={onChangeInputField} 
                loadInformationAboutCity={loadInformationAboutCity}
            />
            
        </div>
    )
}

export default SeachSpecificWeatherInCity