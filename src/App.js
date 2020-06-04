import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getRates } from "./store/actions";

import Chart from "./components/Chart/";
import useInterval from "./hooks/useInterval";
import Display from "./components/Display";
import Error from "./components/Error";
import Controls from "./components/Controls";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state);

  const USD = data[0].data[data[1].data.length - 1];
  const EUR = data[1].data[data[1].data.length - 1];
  const showChart = data[0].data.length > 0 && data[1].data.length > 0;

  const handleGet = () => dispatch(getRates());

  useEffect(() => {
    handleGet();
  }, []);

  useInterval(handleGet, 18000000);

  return (
    <div className="App">
      <header className="App-header">Ruble Exchange Rate</header>
      <Display USD={USD ? USD[1] : ""} EUR={EUR ? EUR[1] : ""} />
      {showChart && <Chart data={data} />}
      {error && <Error />}
      <Controls handleButton={handleGet} loading={loading} />
    </div>
  );
}

export default App;
