"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  Typography,
} from "@mui/material";

const products = [
  {
    rank: 1,
    name: "Home Decor Range",
    popularity: 45,
    sales: 45,
    color: "blue",
  },
  {
    rank: 2,
    name: "Disney Princess Pink Bag 16'",
    popularity: 29,
    sales: 29,
    color: "green",
  },
  {
    rank: 3,
    name: "Bathroom Essentials",
    popularity: 18,
    sales: 18,
    color: "purple",
  },
  {
    rank: 4,
    name: "Apple Smartwatches",
    popularity: 25,
    sales: 25,
    color: "orange",
  },
];

export default function TopProductsTable() {
  return (
    <TableContainer component={Paper} style={{ height: "100%", width: "100%" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Popularity</TableCell>
            <TableCell>Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.rank}>
              <TableCell>{`0${product.rank}`}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={product.popularity}
                    style={{
                      width: "100%",
                      height: "8px",
                      borderRadius: "4px",
                      backgroundColor: "#f0f0f0",
                    }}
                  />
                </div>
              </TableCell>
              <TableCell>
                <Typography
                  style={{
                    color: product.color,
                    fontWeight: "bold",
                  }}
                >
                  {`${product.sales}%`}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
