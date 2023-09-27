import React from "react";
import useSpecificCityWeatherSearch from './hooks/hooks'

function InputSpecificCityToQuery(): React.JSX.Element {
    const { onChangeInputField, getInfoSpecifCity } = useSpecificCityWeatherSearch()

    return (
        <>
            <input 
                id='input_cidade' 
                name='input_cidade' 
                placeholder='Insira aqui o nome da cidade'
                onChange={onChangeInputField}
            />
            <button onClick={getInfoSpecifCity}>pesquisar</button>
        </>
    )
}

export default InputSpecificCityToQuery