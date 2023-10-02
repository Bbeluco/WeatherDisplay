import { render, screen } from "@testing-library/react"
import SeachSpecificWeatherInCity from "./SeachSpecificWeatherInCity"
import '@testing-library/jest-dom'

describe('<SeachSpecificWeatherInCity />', () => {
    it('should render only <FormCityToCheckWeather /> component', () => {
        render(<SeachSpecificWeatherInCity />)
        expect(screen.getByPlaceholderText('Insira aqui o nome da cidade')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.queryByTestId('specific_city_info')).not.toBeInTheDocument()
    })
})