import { put, select, all, call } from "redux-saga/effects";
import * as actions from "../actions";
import { getExchangeRates } from "../../services/api";

export function* getExchangeRatesSaga(action) {
  const data = yield select((state) => state.data);

  try {
    let { USD, EUR } = yield all({
      USD: call(getExchangeRates, "USD"),
      EUR: call(getExchangeRates, "EUR"),
    });
    USD = USD.data.rates.RUB;
    EUR = EUR.data.rates.RUB;

    let updatedData = [];
    let newUSD = data[0];
    let newEUR = data[1];
    newUSD = {
      ...newUSD,
      data: [...newUSD.data, [new Date(), USD]],
    };
    newEUR = {
      ...newEUR,
      data: [...newEUR.data, [new Date(), EUR]],
    };
    updatedData = [newUSD, newEUR];
    yield put(actions.updateData(updatedData));
  } catch (error) {
    console.log(error);
    yield put(actions.getRatesFailed());
  }
}
