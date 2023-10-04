import { useEffect, useState } from 'react'
import capitals from '../constants/brazilCapitals'

import { requestApiToCheckWeather } from './requestApiToCheckWeather'

function useAxiosRequests() {
  const [city, setCity] = useState<object[]>([])
  const [isLoading, setIsLoading] = useState(true)
  let aux: object[] = []

  function useGetCapitalsWeather(){
    
    useEffect(() => {
      capitals.forEach(async capital => {
        aux.push(await requestApiToCheckWeather(capital))
        setCity(aux)
        if(aux.length === capitals.length){
          setIsLoading(false);
        }
      })
    }, [])
  }


  return { city, useGetCapitalsWeather, isLoading, requestApiToCheckWeather }
}

export default useAxiosRequests