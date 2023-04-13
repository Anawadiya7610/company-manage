import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Paper } from "@material-ui/core";
import "./index.css";


const Piechart = () => {
  const [chartData, setChartData] = useState({
    series: [44, 55, 13, 77],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["America", "Asia", "Europe", "Africa"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div id="chart">
      
        
        
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="pie"
            width={350}
          />
       
     
    </div>
  );
};

export default Piechart;
