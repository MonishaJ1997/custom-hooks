

import React from "react";
import { useGeoLocation } from "./useGeoLocation.js";

const GeoLocationExample = () => {
  const { latitude, longitude } = useGeoLocation();

  return (
    <p>
      Latitude: {latitude ?? "loading..."}, Longitude: {longitude ?? "loading..."}
    </p>
  );
};

export default GeoLocationExample;

