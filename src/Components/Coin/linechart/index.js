import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import convertNumber from "../../../Functions/convertNumber";

function LineChart({ chartData, priceType, multiAxis }) {
  let options;
  if (multiAxis) {
    options = {
      plugins: {
        legend: {
          display: multiAxis ? true : false,
        },
      },
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      scales: {
        coin1: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            callback: function (value, index, ticks) {
              if (priceType === "prices") return "$" + value.toLocaleString();
              else return "" + convertNumber(value);
            },
          },
        },
        coin2: {
          type: "linear",
          display: true,
          position: "right",
          ticks: {
            callback: function (value, index, ticks) {
              if (priceType === "prices") return "$" + value.toLocaleString();
              else return "" + convertNumber(value);
            },
          },
        },
      },
    };
  }
  else
  {
    options = {
        plugins: {
          legend: {
            display:  false,
          },
        },
        responsive: true,
        interaction: {
          mode: "index",
          intersect: false,
        },
        // scales: {
        //   coin1: {
        //     type: "linear",
        //     display: true,
        //     position: "left",
        //     ticks: {
        //       callback: function (value, index, ticks) {
        //         if (priceType === "prices") return "$" + value.toLocaleString();
        //         else return "" + convertNumber(value);
        //       },
        //     },
        //   }
         
        // }
      };
  }

  return <Line data={chartData} options={options} />;
}
export default LineChart;
