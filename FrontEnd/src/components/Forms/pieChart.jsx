import React from "react";
import { Line } from "react-chartjs-2";

function pieChart() {
  const data = {
    labels: ["jan", "feb", "march", "april", "may"],
    dataSets: [
      {
        label: "sales for 2020",
        data: [3, 2, 2, 1, 5],
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
}

export default pieChart;
