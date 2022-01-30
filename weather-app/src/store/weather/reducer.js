import cloneDeep from "lodash.clonedeep";
import { 
    SET_WEATHER,
    SET_FETCH_WEATHER_STATUS,
} from "./actions";

const defaultState = {
    weather: [],
    fetchWeatherStatus: null,
};

export const weatherReducer = (state = defaultState, action) => {

    switch (action?.type)
    {
        case SET_WEATHER: {
            const clone = cloneDeep(state);
            clone.weather = action.payload;
            return clone;
        }
        case SET_FETCH_WEATHER_STATUS: {
            const clone = cloneDeep(state);
            clone.fetchWeatherStatus = action.payload;
            return clone;
        }
        default: return state;
    }
}