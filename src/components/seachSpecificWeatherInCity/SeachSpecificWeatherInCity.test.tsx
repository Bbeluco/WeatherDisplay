import { fireEvent, render, screen } from "@testing-library/react"
import SeachSpecificWeatherInCity from "./SeachSpecificWeatherInCity"
import '@testing-library/jest-dom'

jest.mock("../../requests/axiosRequests", () => {

    function useAxiosRequests() {
        const requestApiToCheckWeather = () => {
            console.log('fui chamado')
        }

        return { requestApiToCheckWeather }
    }

    return useAxiosRequests
})

describe('<SeachSpecificWeatherInCity />', () => {
    it('should render only <FormCityToCheckWeather /> component', () => {
        render(<SeachSpecificWeatherInCity />)
        expect(screen.getByPlaceholderText('Insira aqui o nome da cidade')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.queryByTestId('specific_city_info')).not.toBeInTheDocument()
    })

    it('should render <ResultSpecificCityWeather /> and <FormCityToCheckWeather />', () => {        
        render(<SeachSpecificWeatherInCity />)
        const input = screen.getByPlaceholderText('Insira aqui o nome da cidade')
        fireEvent.change(input, { target: { value: 'Diadema' } })
        fireEvent.click(screen.getByRole('button'))

        expect(screen.getByPlaceholderText('Insira aqui o nome da cidade')).toHaveValue('Diadema')
        expect(screen.getByTestId('specific_city_info')).toBeInTheDocument()
    })
})