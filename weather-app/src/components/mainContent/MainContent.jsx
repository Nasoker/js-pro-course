import React, { useEffect, useState } from "react";
import './MainContent.scss';
import { Header } from './header/Header';
import { getWeather } from "../api/weatherApi";

export function MainContent () {
    const [weather, setWeather] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    

    useEffect(() => {
        async function fetchData () {
            try {
                const response = await getWeather();
                setWeather(response.data);
            } catch {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    return(
        <>
        <div className="main">
        <Header weather={weather}/>
        <div className="main-content">
            {isLoading && "Loading..."}
            {isError && "isError..."}
            {!isLoading && !isError && <img src={`./assets/${weather.days[0].conditions.replace(/\s+/g, '')}.png`} alt="" className="" /> }
            {/* {<div className="main-info">
            {isLoading && "Loading..."}
            {isError && "isError..."}
            {!isLoading && !isError &&<div className="degrees">{weather.days[0].temp}</div> }
                {isLoading && "Loading..."}
            {isError && "isError..."}
            {!isLoading && !isError && <div className="weather">{weather.days[0].conditions}</div> }
                {isLoading && "Loading..."}
            {isError && "isError..."}
            {!isLoading && !isError && <div className="today">{weather.days[0].datetime}</div>}
            </div>} */}
            <div className="secondary-info">
                
            </div>
            </div>
        </div>
        </>
    )
}