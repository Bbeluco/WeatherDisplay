import { render, screen, fireEvent } from "@testing-library/react"
import FormCityToCheckWeather from "./FormCityToCheckWeather"

describe('<FormCityToCheckWeather />', () => {
    const baseProps = {
        onChangeInputField: jest.fn(),
        loadInformationAboutCity: jest.fn()
    }

    it('should call onChange function on input field', () => {
        render(<FormCityToCheckWeather 
            onChangeInputField={baseProps.onChangeInputField}
            loadInformationAboutCity={baseProps.loadInformationAboutCity} 
            />)

        const input = screen.getByPlaceholderText('Insira aqui o nome da cidade')
        fireEvent.change(input, { target: { value: 'Diadema' } })
        expect(baseProps.onChangeInputField).toBeCalledTimes(1)
    })

    it('should call onClick function on button', () => {
        render(<FormCityToCheckWeather 
            onChangeInputField={baseProps.onChangeInputField}
            loadInformationAboutCity={baseProps.loadInformationAboutCity} 
            />)

        const button = screen.getByRole('button');
        fireEvent.click(button)

        expect(baseProps.loadInformationAboutCity).toBeCalledTimes(1)
    })
})