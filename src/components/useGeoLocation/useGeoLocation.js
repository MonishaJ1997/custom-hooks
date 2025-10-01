import { useState, useEffect } from "react";

export const useGeoLocation = () => {
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if (!navigator.geolocation) return;

    const watcher = navigator.geolocation.watchPosition((pos) => {
      setPosition({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
    });

    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return position;
};
