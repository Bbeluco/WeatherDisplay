import axios from 'axios'
import { useEffect, useState } from 'react'
import capitals from '../constants/brazilCapitals'

function useAxiosRequests() {
  const [city, setCity] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  let aux: string[] = []
  function useGetCityWeather(){
    
    useEffect(() => {
      capitals.forEach(capital => {
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=&q=${capital}&days=7&aqi=no&alerts=no`)
          .then(response => {
            aux.push(response.data)
            setCity(aux)
          }).catch(error => {
            console.log(error)
          })
      })
      setIsLoading(false);
    }, [])

  }

  return { city, useGetCityWeather, isLoading }
}

export default useAxiosRequests