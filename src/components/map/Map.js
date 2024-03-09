// MapComponent.js
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ center, zoom }) => {
  const mapRef = useRef();
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!mapInstance.current) {
      // Initialize the map only if it's not already initialized
      mapInstance.current = L.map(mapRef.current).setView(center, zoom);

      // Add a tile layer with OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(mapInstance.current);

      // Add a marker at the specified location
      L.marker(center).addTo(mapInstance.current);
    } else {
      // Update the map view if it's already initialized
      mapInstance.current.setView(center, zoom);
    }

    // Clean up the map when the component is unmounted
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [center, zoom]);

  return <div ref={mapRef} className='card' style={{ width:'400px',height: '400px' }} />;
};

export default Map;
