import axios from 'axios'
import { useEffect, useState } from 'react'
import capitals from '../constants/brazilCapitals'

function useAxiosRequests() {
  const [city, setCity] = useState<object[]>([])
  const [isLoading, setIsLoading] = useState(true)
  let aux: object[] = []

  function createRequestParamsBasedOnCityName(cityName: string): object {
    return {
      params: {
        key: process.env.REACT_APP_WEATHERAPI_KEY,
        q: cityName,
        days: 7,
        aqi: 'no',
        alerts: 'no'
      }
    }
  }

  async function requestApiToCheckWeather(cityName: string): Promise<object> {
    const response = await axios.get('http://api.weatherapi.com/v1/forecast.json', createRequestParamsBasedOnCityName(cityName))        
    return response.data
  }

  function useGetCapitalsWeather(){
    
    useEffect(() => {
      capitals.forEach(async capital => {
        aux.push(await requestApiToCheckWeather(capital))
        setCity(aux)
        console.log(aux)
        if(aux.length === capitals.length){
          setIsLoading(false);
        }
      })
    }, [])
  }


  return { city, useGetCapitalsWeather, isLoading }
}

export default useAxiosRequests