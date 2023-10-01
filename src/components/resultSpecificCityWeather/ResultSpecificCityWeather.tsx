import React from "react";

type Props = {
    cityInformation: any
}

function ResultSpecificCityWeather({ cityInformation }: Props): React.JSX.Element {
    
    if(!cityInformation) {
        return (<>
            <label></label>
        </>)
    }

    const futureDays = cityInformation['forecast']['forecastday'].slice(1)

    return (
        <>
            <label>{cityInformation['current']['feelslike_c']} Sensacao termica </label><br />
            <label>{cityInformation['current']['condition']['text']} Condicao climatica </label><br />
            <label>{cityInformation['current']['wind_kph']} Vento em km/h</label><br />
            <label>{cityInformation['current']['humidity']} Humidade</label><br />
                {futureDays.map((day: any, index: number) => {
                    return (
                        <div key={index}>
                            <label>{day['date'].split('-').slice(1).reverse().join('/')}</label><br/>
                            <label>{Math.round(day['day']['mintemp_c'])}° </label>
                            <label>{Math.round(day['day']['maxtemp_c'])}°</label>
                            <br />
                            <br />
                        </div>
                    )
                })}
        </>
    )
}

export default ResultSpecificCityWeather;