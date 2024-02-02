import React, { useState, useEffect } from "react";

const useGeolocation = () => {
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);

  useEffect(() => {
    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLatitude(position.coords.latitude);
        setCurrentLongitude(position.coords.longitude);
      });
    };

    fetchLocation(); // Call the function when the component using this hook mounts

    // You can include cleanup logic here if needed
  }, []); // Empty dependency array ensures that the effect runs once after the initial render

  return { currentLatitude, currentLongitude };
};

export default useGeolocation;
