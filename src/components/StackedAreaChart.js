"use client";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import { Box } from "@mui/material";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function StackedAreaChart() {
  return (
    <LineChart
      height={200}
      series={[
        {
          data: uData,
          area: true,
          stack: "total",
          showMark: false,
          lineWidth: 2,
          color: "#6eb8f5",
        },
        {
          data: pData,
          area: true,
          stack: "total",
          showMark: false,
          lineWidth: 2,
          color: "#82ff92",
        },
      ]}
      leftAxis={null}
      bottomAxis={null}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: "none",
        },
      }}
    />
  );
}
