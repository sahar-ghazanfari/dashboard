"use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts";
import { Box } from "@mui/material";

const dataset = [
  { month: "Jan", goal: 50, reality: 40 },
  { month: "Feb", goal: 60, reality: 45 },
  { month: "Mar", goal: 70, reality: 55 },
  { month: "Apr", goal: 80, reality: 65 },
  { month: "May", goal: 90, reality: 75 },
  { month: "Jun", goal: 100, reality: 85 },
  { month: "Jul", goal: 110, reality: 95 },
  { month: "Aug", goal: 120, reality: 105 },
  { month: "Sept", goal: 130, reality: 115 },
  { month: "Oct", goal: 140, reality: 125 },
  { month: "Nov", goal: 150, reality: 135 },
  { month: "Dec", goal: 160, reality: 145 },
];

export function BarChart1() {
  const monthsToDisplay = dataset.slice(0, 4);

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "250px", sm: "100%" },
        overflow: "hidden",
      }}
    >
      <BarChart
        borderRadius={2}
        xAxis={[
          {
            scaleType: "band",
            data: monthsToDisplay.map((data) => data.month),
          },
        ]}
        leftAxis={null}
        series={[
          {
            data: monthsToDisplay.map((data) => data.goal),
            color: "#4AB58E",
          },
          {
            data: monthsToDisplay.map((data) => data.reality),
            color: "#FFCF00",
          },
        ]}
      />
    </Box>
  );
}
