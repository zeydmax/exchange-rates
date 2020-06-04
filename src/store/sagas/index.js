import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import { getExchangeRatesSaga } from "./saga";

export function* watchExchangeRates() {
  yield takeEvery(actionTypes.GET_EXCHANGE_RATES, getExchangeRatesSaga);
}
