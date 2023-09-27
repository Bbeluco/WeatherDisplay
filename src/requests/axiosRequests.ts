import axios from 'axios'
import { useEffect, useState } from 'react'
import capitals from '../constants/brazilCapitals'


function useAxiosRequests() {
  const [city, setCity] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  let aux: string[] = []
  function useGetCityWeather(){
    
    useEffect(() => {
      capitals.forEach(async capital => {
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${capital}&days=7&aqi=no&alerts=no`)        
        aux.push(response.data)
        setCity(aux)
        if(aux.length === capitals.length){
          setIsLoading(false);
        }
      })
    }, [])
  }


  return { city, useGetCityWeather, isLoading }
}

export default useAxiosRequests