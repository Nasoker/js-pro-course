import React, { useEffect, useState } from "react";
import './Header.scss'

export function Header ({weather}) {

    return(
        <div className="header">
            <button></button>
            <div className="city">{weather.address}</div>
            <button></button>
        </div>
    )
}