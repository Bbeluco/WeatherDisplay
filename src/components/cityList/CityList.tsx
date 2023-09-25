import React from "react";
import CSS from 'csstype';
import useGetCapitalsCurrentWeatherInfo from "../../requests/axiosRequests";

function CityList(): React.JSX.Element {
    return (
        <>
            <h2 style={style}>Sou a lista de cidades</h2>
            {
                useGetCapitalsCurrentWeatherInfo().map((element: any, index: number) => {
                    return(
                        <div style={styleColumn}>
                            <label>{Math.round(element['timelines']['daily'][0]['values']['temperatureMax'])} </label>
                            <label>{Math.round(element['timelines']['daily'][0]['values']['temperatureMin'])}</label>
                            <ul style={styleListCapitals}>
                                <li key={index}>{element['location']['name']}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </>
    )
}


const style: CSS.Properties = {
    textAlign: 'center'
}

const styleColumn: CSS.Properties = {
    columnCount: 3,
    columnGap: '40px',
    justifyContent: 'center',
    alignItems: 'center'
}

const styleListCapitals: CSS.Properties = {
    listStyle: 'none'
}
export default CityList;