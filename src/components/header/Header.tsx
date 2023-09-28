import React from "react";
import style from './Header.module.css'

function Header(): React.JSX.Element {
    return (
        <>
            <h1 className={style.headerTitle}>Previsao do tempo</h1>
        </>
    )
}

export default Header;