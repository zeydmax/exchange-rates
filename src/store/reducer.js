import * as actionTypes from "./actionTypes";
import { updateObject } from "../helpers/utilities";

const initialState = {
  data: [
    {
      label: "USD",
      data: [],
    },
    {
      label: "EUR",
      data: [],
    },
  ],
  loading: false,
  error: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.GET_EXCHANGE_RATES:
      return updateObject(state, { loading: true, error: false });
    case actionTypes.SET_EXCHANGE_RATES:
      return updateObject(state, {
        data: action.data,
        loading: false,
        error: false,
      });
    case actionTypes.GET_EXCHANGE_RATES_FAILED:
      return updateObject(state, { loading: false, error: true });
    default:
      return state;
  }
}
