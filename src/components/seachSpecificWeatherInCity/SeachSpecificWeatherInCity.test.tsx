import { fireEvent, render, screen } from "@testing-library/react"
import SeachSpecificWeatherInCity from "./SeachSpecificWeatherInCity"
import '@testing-library/jest-dom'

describe('<SeachSpecificWeatherInCity />', () => {
    it('should render only <FormCityToCheckWeather /> component', () => {
        render(<SeachSpecificWeatherInCity />)
        expect(screen.getByPlaceholderText('Insira aqui o nome da cidade')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.queryByTestId('specific_city_info')).not.toBeInTheDocument()
    })

    it('should render <ResultSpecificCityWeather /> and <FormCityToCheckWeather />', () => {
        const { rerender }= render(<SeachSpecificWeatherInCity />)
        const input = screen.getByPlaceholderText('Insira aqui o nome da cidade')
        fireEvent.change(input, { target: { value: 'Diadema' } })
        fireEvent.click(screen.getByRole('button'))
        
        rerender(<SeachSpecificWeatherInCity />)
        expect(screen.getByPlaceholderText('Insira aqui o nome da cidade')).toHaveValue('Diadema')
        expect(screen.getByTestId('specific_city_info')).toBeInTheDocument()
    })
})