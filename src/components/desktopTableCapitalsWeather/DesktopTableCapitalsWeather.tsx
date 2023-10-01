import React from "react";
import style from "./DesktopTableCapitalsWeather.module.css"

function DesktopTableCapitalsWeather(city: any): React.JSX.Element {
    const first5 = city.slice(0, 5);
    const last5 = city.slice(5, 10);

    const tablesToConstruct = [first5, last5]

    return (
        <>
            {
                tablesToConstruct.map(table => {
                    return (
                        <table className={style.tableCapitals}>
                            <tr>
                                <th>Min</th>
                                <th>Máx</th>
                            </tr>
                            {
                                table.map((element: any, index: number) => {
                                    let min_temp = Math.round(element['forecast']['forecastday'][0]['day']['mintemp_c'])
                                    let max_temp = Math.round(element['forecast']['forecastday'][0]['day']['maxtemp_c'])
                                    return (
                                        <tbody key={(index + 1) * Math.random()}>
                        
                                            <tr>
                                                <td>{min_temp}°</td>
                                                <td>{max_temp}°</td>
                                                <td>{element['location']['name']}</td>
                                            </tr>
                        
                                        </tbody>
                                    )
                                    }
                                )
                            }
                        </table>
                    )
                })
            }
        
        </>
    )


}

export default DesktopTableCapitalsWeather;