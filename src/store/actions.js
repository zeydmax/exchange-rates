import * as actionTypes from "./actionTypes";

export const getRates = () => ({ type: actionTypes.GET_EXCHANGE_RATES });

export const updateData = (updatedData) => ({
  type: actionTypes.SET_EXCHANGE_RATES,
  data: updatedData,
});

export const getRatesFailed = () => ({
  type: actionTypes.GET_EXCHANGE_RATES_FAILED,
});
