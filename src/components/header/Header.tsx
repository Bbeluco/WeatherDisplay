import React from "react";
import CSS from 'csstype';

function Header(): React.JSX.Element {
    return (
        <>
            <h1 style={style}>Previsao do tempo</h1>
        </>
    )
}

const style: CSS.Properties = {
    textAlign: 'center'
}

export default Header;