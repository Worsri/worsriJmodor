import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useGeolocation from "./useGeolocation"
const MapComponent = () => {
  const { currentLatitude, currentLongitude } = useGeolocation();

  // Define the map center using the current location
  const mapCenter = [currentLatitude || 0, currentLongitude || 0];

  return (
    <MapContainer
      center={mapCenter}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      {/* Add a tile layer, e.g., OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Display a marker for the current location */}
      <Marker position={mapCenter}>
        <Popup>Your Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
