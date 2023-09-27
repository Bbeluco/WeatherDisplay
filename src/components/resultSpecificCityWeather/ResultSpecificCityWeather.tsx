import React from "react";

type Props = {
    city: string
}

function ResultSpecificCityWeather({ city }: Props): React.JSX.Element {
    return (
        <>
            <label>{city}</label>
        </>
    )
}

export default ResultSpecificCityWeather;