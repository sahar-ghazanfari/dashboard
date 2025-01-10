"use client";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box } from "@mui/material";

const uData = [50, 80, 34, 90, 110];
const pData = [100, 200, 300, 400];
const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export function SimpleLineChart() {
  return (
    <LineChart
      height={200}
      series={[{ data: pData }, { data: uData }]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}

// import * as React from "react";
// import { LineChart } from "@mui/x-charts/LineChart";

// const uData = [50, 80, 34, 90, 110];
// const pData = [100, 200, 300, 400];
// const xLabels = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Sept",
//   "Oct",
//   "Nov",
//   "Des",
// ];

// export function SimpleLineChart() {
//   return (
//     <div style={{ width: "100%", height: "100%"} }}>
//       <LineChart
//         series={[{ data: pData }, { data: uData }]}
//         xAxis={[{ scaleType: "point", data: xLabels }]}
//       />
//     </div>
//   );
// }
