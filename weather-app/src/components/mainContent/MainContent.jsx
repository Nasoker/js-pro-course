import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"
import './MainContent.scss';
import { getHours,getDate,getDayAndFullMonth } from "../../helpers/Time";
import Loader from '../loader/Loader'
import { fetchWeather } from '../../store/weather/actions'
import { FAILED, LOADING } from "../../constants/statusses";

export function MainContent () {

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
        {!isLoading && !isError && !!weather &&
        <div className="main">
            <div className="main-content">
                 <img src={`./assets/weather-img/${weather.days[0].hours[getHours].conditions}.png`} alt="" className="weather-photo" />
                <div className="main-info">
                    <div className="degrees">{Math.round(weather.days[0].hours[getHours].temp)}⁰</div> 
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
        </div>
        }
        </>
    )
}