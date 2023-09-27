import { useState } from "react"

function useSpecificCityWeatherSearch(){
    const [nameCity, setNameCity] = useState('')

    function onChangeInputField(event: any) {
        setNameCity(event.target.value)
    }

    function getInfoSpecifCity() {
        console.log(nameCity)
    }

    return { nameCity,  onChangeInputField, getInfoSpecifCity }
}

export default useSpecificCityWeatherSearch