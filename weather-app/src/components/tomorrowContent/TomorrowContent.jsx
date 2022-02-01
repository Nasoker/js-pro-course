import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"
import './TomorrowContent.scss';
import Loader from '../loader/Loader'
import { fetchWeather } from '../../store/weather/actions'
import { FAILED, LOADING } from "../../constants/statusses";

export function TomorrowContent () {
    const dispatch = useDispatch(); 
    const city = useSelector(state => state.weather.city);
    const weather = useSelector(state => state.weather.weatherObj);
    const weatherStatus = useSelector(state => state.weather.fetchWeatherStatus);

    const isLoading = weatherStatus === LOADING;
    const isError = weatherStatus === FAILED;

    useEffect(() => {
        dispatch(fetchWeather());
    }, [city]);

    return(
        <>
        {isLoading && <Loader/>}
        {isError &&
                <span className="text">
                    You made a mistake in introducing a city or there is no such city!
                </span>
            }
        {!isLoading && !isError && <div className="main">
            <div className="tomorrow-content">
                <div className="tomorrow-info">
                    <img src={`./assets/weather-img/${weather.days[1].conditions}.png`} alt="" className="tomorrow-photo" />
                    <div className="about-weather">
                        <div className='date'>Tomorrow</div>
                        <div className="degrees">{Math.round(weather.days[1].tempmax)}⁰<span className="degrees-min">/{Math.round(weather.days[0].tempmin)}⁰</span></div>
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
        </div> 
        }
     </>
    )
}