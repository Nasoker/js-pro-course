import axios from "axios";

export const getWeather = () => axios.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London?unitGroup=metric&key=GHZA6PWGXUKM87HYDKVTWLW2T&contentType=json")