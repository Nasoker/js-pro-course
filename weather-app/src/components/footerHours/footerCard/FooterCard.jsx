import React from "react";
import './FooterCard.scss';

export function FooterCard({hour}) {

    return(
        <>
        <div className="card-info">
            <div className="temperature">{Math.round(hour.temp)}⁰</div>
            <img src={`./assets/weather-img/${hour.conditions}.png`} alt="" className="condition"/>
            <div className="time">{hour.datetime.substring(0, 5)}</div>
        </div>
        </>
    )
}