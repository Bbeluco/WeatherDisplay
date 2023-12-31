import React from "react";
import style from "./FutureForecastDays.module.css"

function FutureForecastDays({ futureDays }: any): React.JSX.Element {
    return(
        <div className={style.futureForecastDays} data-testid="forecast_future_days">
            {futureDays.map((day: any, index: number) => {
                    return (
                        <div key={index} className={style.dayForecast}>
                            <label><b>{day['date'].split('-').slice(1).reverse().join('/')}</b></label><br/>
                            <label>{Math.round(day['day']['mintemp_c'])}° </label>
                            <label>{Math.round(day['day']['maxtemp_c'])}°</label>
                        </div>
                    )
                })}
        </div>
    )
}

export default FutureForecastDays