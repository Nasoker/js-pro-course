export const FETCH_WEATHER = "users/FETCH_WEATHER";
export const SET_FETCH_WEATHER_STATUS = "users/SET_FETCH_WEATHER_STATUS";
export const SET_WEATHER = "users/SET_WEATHER";

export const fetchWeather = () => ({
    type: FETCH_WEATHER
});

export const setFetchWeatherStatus = (status) => ({
    type: SET_FETCH_WEATHER_STATUS,
    payload: status,
})

export const setWeather = (data) => ({
    type: SET_WEATHER,
    payload: data,
});