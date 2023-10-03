import React from "react";
import style from "./ResultSpecificCityWeather.module.css"
import FutureForecastDays from "../futureForecastDays/FutureForecastDays";

type Props = {
    cityInformation: any,
    closeSpecificWeather: () => undefined
}

function ResultSpecificCityWeather({ cityInformation, closeSpecificWeather }: Props): React.JSX.Element {
    
    if(!cityInformation) {
        return (<>
            <label>Carregando informacoes sobre a cidade</label>
        </>)
    }

    const futureDays = cityInformation['forecast']['forecastday'].slice(1)

    return (
        <div className={style.divSpecificCityWeather} data-testId="specific_city_info">
            <div className={style.headerSpecificCityWeather}>
                <label className={style.cityRegion}>{cityInformation['location']['name']},{cityInformation['location']['region']} - {cityInformation['location']['country']}</label>
                <button className={style.buttonCloseSpecificWeather} onClick={closeSpecificWeather}>X</button>
            </div>
            <h1>{cityInformation['current']['temp_c']}°C {cityInformation['current']['condition']['text']}</h1>
            <div className={style.divGrid}>
                <div>
                    <label><label className={style.arrow}>&#8595;</label>{cityInformation['forecast']['forecastday'][0]['day']['mintemp_c']}° </label>
                    <label><label className={style.arrow}>&#8593;</label>{cityInformation['forecast']['forecastday'][0]['day']['maxtemp_c']}°</label>
                </div>
                <label>Sensacao <b>{cityInformation['current']['feelslike_c']}°C</b></label><br/>
                <label>Vento <b>{cityInformation['current']['wind_kph']}km/h</b></label>
                <label>Humidade <b>{cityInformation['current']['humidity']}%</b></label>
            </div>
            <hr className={style.hrSpecificCity}/>
            <FutureForecastDays futureDays={futureDays}/>
        </div>
    )
}

export default ResultSpecificCityWeather;