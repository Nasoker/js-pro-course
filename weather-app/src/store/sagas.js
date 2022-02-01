import { all, spawn } from "redux-saga/effects";
import { weatherSaga } from "./weather/sagas";

const sagas = function* () {
    yield all([
        spawn(weatherSaga),
    ]);
}

export default sagas;