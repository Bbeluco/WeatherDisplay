import React from "react"


function MobileTableCapitalsWeather(city: any): React.JSX.Element {
    return (
        <table key={1 * Math.random()}>
            <tbody>
                <tr>
                    <th>Min</th>
                    <th>Máx</th>
                </tr>
            </tbody>
        {

        city.map((element: any, index: number) => {
            let min_temp = Math.round(element['forecast']['forecastday'][0]['day']['mintemp_c'])
            let max_temp = Math.round(element['forecast']['forecastday'][0]['day']['maxtemp_c'])
            return (
                <tbody key={(index + 1) * Math.random()}>
                    <tr key={(index + 1) * Math.random()}>
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
}

export default MobileTableCapitalsWeather;