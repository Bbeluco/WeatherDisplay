import { useState, useEffect } from "react"
import capitals from "../../constants/brazilCapitals"
import { requestApiToCheckWeather } from "../requestApiToCheckWeather"

export const useStateHooks = {
    useHooks() {
        const [city, setCity] = useState<object[]>([])
        const [isLoading, setIsLoading] = useState(true)

        function useGetCapitalsWeather() {
            let aux: object[] = []
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

        return { city, isLoading, useGetCapitalsWeather}
    }

//     function useGetCapitalsWeather(){
//     let aux: object[] = []
//     useEffect(() => {
//       capitals.forEach(async capital => {
//         aux.push(await requestApiToCheckWeather(capital))
//         setCity(aux)
//         if(aux.length === capitals.length){
//           setIsLoading(false);
//         }
//       })
//     }, [])
//   }

    // return {city, isLoading, useGetCapitalsWeather}
}