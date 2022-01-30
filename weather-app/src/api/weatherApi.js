import axios from "axios";

export const getWeather = () => axios.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Minsk?unitGroup=metric&key=GHZA6PWGXUKM87HYDKVTWLW2T&contentType=json");
export const defineNewWeather = (city) => axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=GHZA6PWGXUKM87HYDKVTWLW2T&contentType=json`);