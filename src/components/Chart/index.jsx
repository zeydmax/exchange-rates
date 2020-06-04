import React, { useMemo } from "react";
import { Chart } from "react-charts";

import "./style.scss";

const ChartContainer = ({ data }) => {
  const getSeriesStyle = React.useCallback(
    () => ({
      transition: "all .5s ease",
    }),
    []
  );
  const getDatumStyle = React.useCallback(
    () => ({
      transition: "all .5s ease",
    }),
    []
  );

  const axes = useMemo(
    () => [
      { primary: true, type: "utc", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  const lineChart = (
    <div className="Chart">
      <div style={{ width: "400px", height: "320px" }}>
        <Chart
          data={data}
          getSeriesStyle={getSeriesStyle}
          getDatumStyle={getDatumStyle}
          axes={axes}
          tooltip
        />
      </div>
    </div>
  );
  return lineChart;
};

export default ChartContainer;
