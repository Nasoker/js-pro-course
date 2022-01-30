import React, {useState, useEffect } from "react";
import './TomorrowContent.scss';
import { getWeather } from "../../api/weatherApi";
import Loader from '../loader/Loader'

export function TomorrowContent () {
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
        {!isLoading && !isError && 
        <div className="main">
            <div className="tomorrow-content">
                <div className="tomorrow-info">
                    <img src={`./assets/weather-img/${weather.days[1].conditions}.png`} alt="" className="tomorrow-photo" />
                    <div className="about-weather">
                        <div className='date'>Tomorrow</div>
                        <div className="degrees">{Math.round(weather.days[1].tempmax)}<span className="degrees-min">/{Math.round(weather.days[0].tempmin)}⁰</span></div>
                        <div className="weather">{weather.days[1].conditions}</div> 
                    </div>
                </div>
                <div className='tomorrow-secondary'>
                    <div className='card'>
                        <img src="./assets/svg/wind.svg" alt="" className="icon" />
                        <div className="info">{Math.round(weather.days[1].windspeed)} kmph</div>
                        <div className="name">Wind</div>
                        </div> 
                    <div className='card'>
                    <img src="./assets/svg/humidity.svg" alt="" className="icon" />
                        <div className="info">{Math.round(weather.days[1].humidity)} %</div>
                        <div className="name">Humidity</div>
                        </div> 
                    <div className='card'>
                        <img src="./assets/svg/precip.svg" alt="" className="icon" />
                        <div className="info">{Math.round(weather.days[1].precip)}</div>
                        <div className="name">Precipitation</div>
                        </div> 
                </div>
            </div>
        </div>}
        </>
    )
}