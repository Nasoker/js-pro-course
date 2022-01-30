import { all, call, put, takeEvery, take, fork, takeLeading, spawn, select } from "redux-saga/effects";
import { getWeather } from "../../api/weatherApi";
import { FETCH_WEATHER, setFetchWeatherStatus, setWeather } from "./actions";
import { FAILED, LOADING, SUCCESS } from "../../constants/statusses";

function* fetchWeatherWatcher() {
    yield takeEvery(FETCH_WEATHER, fetchWeatherWorker);
}

function* fetchWeatherWorker(action) {
    try {
        yield put(setFetchWeatherStatus(LOADING));

        const response = yield call(getWeather);

        yield put(setWeather(response.data));
        yield put(setFetchWeatherStatus(SUCCESS));
    } catch (e) {
        yield put(setFetchWeatherStatus(FAILED));
    }
}

export const weatherSaga = function* () {
    yield all([
        call(fetchWeatherWatcher),
    ]);
};