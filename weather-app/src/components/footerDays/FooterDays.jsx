import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import './FooterDays.scss';
import Loader from '../loader/Loader'
import { FooterDayCard } from "./footerDayCard/FooterDayCard";
import { fetchWeather } from '../../store/weather/actions'
import { FAILED, LOADING } from "../../constants/statusses";

export function FooterDays () {
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
        <div className="footer">
            <div className="footer-days-cards">
            {isLoading && <Loader/>}
            {isError &&
                <span className="text">
                    You made a mistake in introducing a city or there is no such city!
                </span>
            }
            {!isLoading && !isError && weather.days.map(day => {
                if(weather.days.indexOf(day) >= 2 && weather.days.indexOf(day) < 9){
                    return <FooterDayCard key={weather.days.indexOf(day)} day={day}/>
                }
            })
            } 
            </div>           
        </div>
        </>
    )
}
