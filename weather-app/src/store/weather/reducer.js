import cloneDeep from "lodash.clonedeep";
import { 
    SET_CITY,
    SET_FETCH_WEATHER_STATUS,
    SET_WEATHER,
} from "./actions";

const defaultState = {
    city: JSON.parse(localStorage.getItem('city')),
    weatherObj: null,    
    fetchWeatherStatus: null,
};

export const weatherReducer = (state = defaultState, action) => {

    switch (action?.type)
    {
        case SET_CITY: {
            const clone = cloneDeep(state);
            clone.city = action.payload;
            return clone;
        }
        case SET_FETCH_WEATHER_STATUS: {
            const clone = cloneDeep(state);
            clone.fetchWeatherStatus = action.payload;
            return clone;
        }
        case SET_WEATHER: {
            const clone = cloneDeep(state);
            clone.weatherObj = action.payload;
            return clone;
        }
        default: return state;
    }
}