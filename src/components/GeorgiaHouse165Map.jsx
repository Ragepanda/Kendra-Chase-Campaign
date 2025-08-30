import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import geoData from "../assets/ga_hd_165.json";

// Auto-zoom helper
const FitBoundsOnData = ({ geoData }) => {
  const map = useMap();
  useEffect(() => {
    if (geoData && geoData.features?.length) {
      const layer = L.geoJSON(geoData);
      map.fitBounds(layer.getBounds(), { padding: [20, 20] });
    }
  }, [geoData, map]);
  return null;
};

const GeorgiaHouse165Map = () => {
  const [geoData, setGeoData] = useState(null);
  useEffect(() => {
    const fetchGeoJSON = async () => {
      try {
        const response = await fetch("./ga_hd_165.geojson"); // Path relative to public directory
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGeoData(data);
      } catch (error) {
        console.error("Error fetching GeoJSON:", error);
      }
    };

    fetchGeoJSON();
  }, []);

  return (
    <MapContainer
      className="flex-1"
      style={{ height: "100%", width: "100%" }}
      center={[32, -81]}
      zoom={10}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors'
      />
      {geoData && (
        <>
          <GeoJSON
            data={geoData}
            style={{
              color: "#005FAD",
              weight: 2,
              fillColor: "#005fad",
              fillOpacity: 0.45,
            }}
          />
          <FitBoundsOnData geoData={geoData} />
        </>
      )}
    </MapContainer>
  );
};

export default GeorgiaHouse165Map;
