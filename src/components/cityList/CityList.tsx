import React from "react";
import CSS from 'csstype';
import useAxiosRequests from "../../requests/axiosRequests";


function CityList(): React.JSX.Element {
    const { city, useGetCityWeather, isLoading } = useAxiosRequests()

    useGetCityWeather()

    if(isLoading){
        return <div>Carregando a lista de cidades...</div>;
    }

    return (
        <>
            <h2 style={style}>Sou a lista de cidades</h2>
            {
                city.map((element: any, index: number) => {
                    let min_temp = Math.round(element['forecast']['forecastday'][0]['day']['mintemp_c'])
                    let max_temp = Math.round(element['forecast']['forecastday'][0]['day']['maxtemp_c'])
                        return (
                            <div style={styleColumn} key={(index + 1) * Math.random()}>
                                <label key={(index + 1) * Math.random()}>{min_temp} </label>
                                <label key={(index + 1) * Math.random()}>{max_temp} </label>
                                <label key={(index + 1) * Math.random()}>{element['location']['name']}</label>
                            </div>
                        )
                    }
                )
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

export default CityList;