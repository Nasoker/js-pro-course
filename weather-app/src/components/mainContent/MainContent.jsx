import React, { useEffect, useState } from "react";
import './MainContent.scss';
import { getWeather } from "../../api/weatherApi";
import { getHours,getDate,getDayAndFullMonth } from "../../helpers/Time";
import Loader from '../loader/Loader'

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
        {isLoading && <Loader/>}
        {isError && "isError..."}
        {!isLoading && !isError &&<div className="main">

            <div className="main-content">
                <img src={`./assets/weather-img/${weather.days[0].hours[getHours].conditions}.png`} alt="" className="weather-photo" />
                <div className="main-info">
                    <div className="degrees">{Math.round(weather.days[0].hours[getHours].temp)}</div> 
                    <div className="weather">{weather.days[0].hours[getHours].conditions}</div> 
                    <div className='date'>Today, {getDate} {getDayAndFullMonth}</div>
                </div>
                <div className='secondary'>
                    <div className='card'>
                        <img src="./assets/svg/wind.svg" alt="" className="icon" />
                        <div className="info">{Math.round(weather.days[0].hours[getHours].windspeed)} kmph</div>
                        <div className="name">Wind</div>
                        </div> 
                    <div className='card'>
                    <img src="./assets/svg/humidity.svg" alt="" className="icon" />
                        <div className="info">{Math.round(weather.days[0].hours[getHours].humidity)} %</div>
                        <div className="name">Humidity</div>
                        </div> 
                    <div className='card'>
                        <img src="./assets/svg/precip.svg" alt="" className="icon" />
                        <div className="info">{Math.round(weather.days[0].hours[getHours].precip)}</div>
                        <div className="name">Precipitation</div>
                        </div> 
                </div>
            </div>
        </div>}
        </>
    )
}