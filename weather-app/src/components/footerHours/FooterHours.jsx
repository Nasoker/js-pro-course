import React, { useEffect, useState } from "react";
import './FooterHours.scss';
import { getWeather } from "../../api/weatherApi";
import { FooterCard } from "./footerCard/FooterCard";
import { getHours } from "../../helpers/Time";
import { NavLink } from "react-router-dom";

export function FooterHours () {
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
        <div className="footer">
            <div className="footer-info">
                <div className="title">Today</div>
                <NavLink to={"/7days"}><a className="footer-link">7 days  </a></NavLink>
            </div>
            <div className="footer-cards">
            {isLoading && "Loading..."}
            {isError && "isError..."}
            {!isLoading && !isError && weather.days[0].hours.map(hour => {
                const futureHours = showOnlyFutureHours();
                const apiHour = hour.datetime.substring(0,2);
                if (futureHours.includes(apiHour)){
                    return <FooterCard key={apiHour} hour={hour}/>
                }
            })
            } 
            </div>           
        </div>
        </>
    )
}
