import { requestApiToCheckWeather } from './requestApiToCheckWeather'
import { useStateHooks } from './hooks/stateHooks'

function useAxiosRequests() {
  const { city, isLoading, useGetCapitalsWeather } = useStateHooks.useHooks()

  return { city, useGetCapitalsWeather, isLoading, requestApiToCheckWeather }
}

export default useAxiosRequests