export function createRequestParamsBasedOnCityName(cityName: string): object {
    return {
        params: {
        key: process.env.REACT_APP_WEATHERAPI_KEY,
        q: cityName,
        days: 6,
        aqi: 'no',
        alerts: 'no',
        lang: 'pt'
        }
    }
}