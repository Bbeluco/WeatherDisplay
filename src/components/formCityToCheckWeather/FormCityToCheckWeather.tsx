import React from "react";

type Props = {
    onChangeInputField: (event: any) => void,
    changeIsSearchable: () => void
}

function FormCityToCheckWeather({ onChangeInputField, changeIsSearchable}: Props) {
    return (
        <>
            <input 
                id='input_cidade' 
                name='input_cidade' 
                placeholder='Insira aqui o nome da cidade'
                onChange={onChangeInputField}
            />
            <button onClick={changeIsSearchable}>pesquisar</button>
        </>
    )
}

export default FormCityToCheckWeather