import React from "react";
import CSS from 'csstype';
import useAxiosRequests from "../../requests/axiosRequests";


function CityList(): React.JSX.Element {
    const { city, useGetCityWeather } = useAxiosRequests()

    useGetCityWeather('Diadema')

    return (
        <>
            <h2 style={style}>Sou a lista de cidades</h2>
            {
                city.map((element: any, index: number) => {
                    console.log(element['forecast']['forecastday'])
                    // return(
                    //     <div style={styleColumn}>
                    //         <label>{element['forecast']['forecastday'][0]['day']['mintemp_c']}</label>
                    //         <label>{element['forecast']['forecastday'][0]['day']['maxtemp_c']}</label>
                    //         <label>{element['location']['name']}</label>
                    //     </div>
                    // )
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