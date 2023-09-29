import React, {useState, useEffect} from "react";
import useAxiosRequests from "../../requests/axiosRequests";
import style from './CityList.module.css'
import MobileTableCapitalsWeather from "../mobileTableCapitalsWeather/MobileTableCapitalsWeather";


function CityList(): React.JSX.Element {
    const { city, useGetCapitalsWeather, isLoading } = useAxiosRequests()
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight
    ])

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight])
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    useGetCapitalsWeather()

    if(isLoading){
        return <div>Carregando a lista de cidades...</div>;
    }

    console.log(city)
    return (
        <div className={style.capitalsDiv}>
            <h2>Capitais</h2><br/>
            { windowSize[0] <= 600 && MobileTableCapitalsWeather(city)}
        </div>
    )
}

export default CityList;