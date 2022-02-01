import axios from "axios";

export const getWeather = (city) => axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=R7EACTLF8RZREKWKCV5LAZ9FU&contentType=json`);