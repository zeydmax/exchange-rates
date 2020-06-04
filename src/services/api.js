import axios from "axios";

const api = axios.create({ baseURL: "https://api.exchangeratesapi.io" });

export const getExchangeRates = (base = "USD") =>
  api
    .get(`/latest?&symbols=RUB&${base ? "base=" + base : ""}`)
    .then((response) => response)
    .catch((err) => err);
