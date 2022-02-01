import React from "react";
import { getWeekDay } from "../../../helpers/Time";
import './FooterDayCard.scss';

export function FooterDayCard({day}) {
    const date = new Date(day.datetime.substring(0,4),day.datetime.substring(6,7)-1,day.datetime.substring(8,10));
    return(
        <>
        <div className="card-day-info">
            <div className="weekday">{getWeekDay(date)}</div>
            <div className="weather-day"><img src={`./assets/weather-img/${day.conditions}.png`} alt="" className="condition-tomorrow"/>{day.conditions}</div>
            <div className="degrees-day">{Math.round(day.tempmax)}⁰<span className="degrees-day-min">/{Math.round(day.tempmin)}⁰</span></div>
        </div>
        </>
    )
}