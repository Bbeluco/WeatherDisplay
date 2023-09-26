import axios from 'axios'
import { useEffect, useState } from 'react'

function useAxiosRequests() {
  const [city, setCity] = useState<string[]>([''])
  let aux: string[] = []
  
  function useGetCityWeather(cidade: string){
    
    useEffect(() => {
      axios.get('http://api.weatherapi.com/v1/forecast.json?key=&q=diadema&days=7&aqi=no&alerts=no')
        .then(response => {
          aux.push(response.data)
          setCity(aux)
        })
    }, [])

  }

  return { city, useGetCityWeather }
}

export default useAxiosRequests