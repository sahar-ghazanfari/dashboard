import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box } from "@mui/material";

const uData = [40000, 35000, 25000, 40000, 38000, 40000, 20000];
const pData = [15000, 18000, 25000, 10000, 18000, 18000, 20000];
const xLabels = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

export default function SimpleBarChart() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "250px", sm: "100%" },
        overflow: "hidden",
      }}
    >
      <BarChart
        series={[
          { data: pData, id: "pvId" },
          { data: uData, id: "uvId" },
        ]}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
      />
    </Box>
  );
}