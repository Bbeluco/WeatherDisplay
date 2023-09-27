import React from "react";

type Props = {
    onChangeInputField: (event: any) => void,
    loadInformationAboutCity: () => void
}

function FormCityToCheckWeather({ onChangeInputField, loadInformationAboutCity }: Props) {
    return (
        <>
            <input 
                id='input_cidade' 
                name='input_cidade' 
                placeholder='Insira aqui o nome da cidade'
                onChange={onChangeInputField}
            />
            <button onClick={loadInformationAboutCity}>pesquisar</button>
        </>
    )
}

export default FormCityToCheckWeather