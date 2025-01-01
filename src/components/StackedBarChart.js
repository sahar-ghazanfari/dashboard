import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box } from "@mui/material";

const uData = [40000, 30000, 20000, 27080, 18900, 23900, 34900];
const pData = [24000, 13098, 30800, 30908, 48000, 38000, 40300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function StackedBarChart() {
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
          { data: pData, id: "pvId", stack: "total", color: "#00E096" },
          { data: uData, id: "uvId", stack: "total", color: "#0095FF" },
        ]}
        leftAxis={null}
        bottomAxis={null}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
      />
    </Box>
  );
}
