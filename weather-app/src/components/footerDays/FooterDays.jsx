import React, { useEffect, useState } from "react";
import './FooterDays.scss';
import { getWeather } from "../../api/weatherApi";
import { FooterDayCard } from "./footerDayCard/FooterDayCard";



export function FooterDays () {
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
        <div className="footer">
            <div className="footer-days-cards">
            {isLoading && "Loading..."}
            {isError && "isError..."}
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
