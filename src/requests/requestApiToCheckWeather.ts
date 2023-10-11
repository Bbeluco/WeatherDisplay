import { createRequestParamsBasedOnCityName } from './createRequestParamsBasedOnCityName'
import axios from 'axios'

export async function requestApiToCheckWeather(cityName: string): Promise<object> {
    const response = await axios.get('http://api.weatherapi.com/v1/forecast.json', 
        createRequestParamsBasedOnCityName(cityName))        
    return response.data
}