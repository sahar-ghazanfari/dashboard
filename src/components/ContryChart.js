"use client";
import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const iranGeoJSON = {
  type: "Feature",
  properties: { name: "Iran" },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [44.1092, 39.4281],
        [44.79399, 39.713002],
        [47.3733, 37.3853],
        [48.567971, 37.974685],
        [53.9225, 37.198918],
        [53.92159, 35.312398],
        [50.842354, 34.014402],
        [49.10116, 32.72786],
        [47.33467, 32.46916],
        [44.1092, 39.4281],
      ],
    ],
  },
};

const iranStyle = {
  color: "blue", 
  weight: 2, 
  opacity: 1, 
  fillColor: "rgba(0, 0, 255, 0.3)", 
  fillOpacity: 0.4, 
};

export default function SalesMap() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        center={[33.4279, 53.688]}
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON data={iranGeoJSON} style={iranStyle} />
      </MapContainer>
    </div>
  );
}
