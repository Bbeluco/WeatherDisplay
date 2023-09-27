import React from "react";

type Props = {
    cityInformation: any
}

function ResultSpecificCityWeather({ cityInformation }: Props): React.JSX.Element {

    if(!cityInformation) {
        return (<>
            <label></label>
        </>)
    }

    return (
        <>
            <label>{cityInformation['location']['name']}</label>
        </>
    )
}

export default ResultSpecificCityWeather;