import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import './FooterHours.scss';
import Loader from '../loader/Loader'
import { FooterCard } from "./footerCard/FooterCard";
import { getHours } from "../../helpers/Time";
import { fetchWeather } from '../../store/weather/actions'
import { FAILED, LOADING } from "../../constants/statusses";

export function FooterHours () {
    const dispatch = useDispatch(); 
    const city = useSelector(state => state.weather.city);
    const weather = useSelector(state => state.weather.weatherObj);
    const weatherStatus = useSelector(state => state.weather.fetchWeatherStatus);

    const isLoading = weatherStatus === LOADING;
    const isError = weatherStatus === FAILED;

    useEffect(() => {
        dispatch(fetchWeather());
    }, [city]);

    const showOnlyFutureHours = () => {
        const day = weather.days[0].hours;
        const hours = [];
        const now = getHours.toString()
        day.forEach(hoursObj => {
            hours.push(hoursObj.datetime.substring(0,2));
        }) 
        hours.splice(0,now);
        return hours
    }

    return(
        <>
        {isLoading && <Loader/>}
        {isError &&
                <span className="text">
                    You made a mistake in introducing a city or there is no such city!
                </span>
            }
        {!isLoading && !isError && !!weather &&
         <div className="footer">
            <div className="footer-info">
                <div className="title">Today</div>
                <NavLink to={"/7days"}><span className="footer-link">7 days  </span></NavLink>
            </div>
            <div className="footer-cards">
                {weather.days[0].hours.map(hour => {
                    const futureHours = showOnlyFutureHours();
                    const apiHour = hour.datetime.substring(0,2);
                    if (futureHours.includes(apiHour)){
                        return <FooterCard key={apiHour} hour={hour}/>
                    }
            })
            } 
            </div>     
        </div>
        }
    </>
    )
}
