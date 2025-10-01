

import React from "react";
import { useGeolocation } from "./useGeoLocation.js";

const GeolocationExample = () => {
  const { latitude, longitude } = useGeolocation();

  return (
    <p>
      Latitude: {latitude ?? "loading..."}, Longitude: {longitude ?? "loading..."}
    </p>
  );
};

export default GeolocationExample;

