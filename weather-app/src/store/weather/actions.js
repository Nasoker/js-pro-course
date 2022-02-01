export const FETCH_WEATHER = 'weather/FETCH_WEATHER'
export const SET_WEATHER = 'weather/SET_WEATHER'
export const SET_FETCH_WEATHER_STATUS = "weather/SET_FETCH_WEATHER_STATUS";
export const SET_CITY = "weather/SET_CITY";

export const fetchWeather = () => ({
    type: FETCH_WEATHER
});

export const setFetchWeatherStatus = (status) => ({
    type: SET_FETCH_WEATHER_STATUS,
    payload: status,
})

export const setCity = (data) => ({
    type: SET_CITY,
    payload: data,
});

export const setWeather = (data) => ({
    type: SET_WEATHER,
    payload: data,
});
