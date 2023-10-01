import React from "react";
import style from './FormCityToCheckWeather.module.css'

type Props = {
    onChangeInputField: (event: any) => void,
    loadInformationAboutCity: () => void
}

function FormCityToCheckWeather({ onChangeInputField, loadInformationAboutCity }: Props) {
    return (
        <div className={style.form}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <input className={style.inputField}
                id='input_cidade' 
                name='input_cidade' 
                placeholder='Insira aqui o nome da cidade'
                onChange={onChangeInputField}
            />
            <button onClick={loadInformationAboutCity} className={style.button}><i className="fa fa-search"></i></button>
        </div>
    )
}

export default FormCityToCheckWeather