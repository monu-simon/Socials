import React, { useEffect, useState } from 'react'
import Map from '../map/Map';

const Location = () => {

  const [locations, setlocation] = useState(null);

  useEffect(() => {
    const watchUserLocation = () => {
      if (navigator.geolocation) {
        const watchId = navigator.geolocation.watchPosition((position) => {
          const { latitude, longitude } = position.coords;
          console.log(position)
          setlocation({ latitude, longitude })
        },
          (error) => {
            console.error(error.message);
          })
          return () => {
            navigator.geolocation.clearWatch(watchId);
          };
      }else {
        console.error('Geolocation is not supported by your browser')
      }
    }
    watchUserLocation();
  }, []);

  return (
    <div>
            {locations && <Map center={[locations.latitude, locations.longitude]} zoom={13} />}
    </div>

  )
}

export default Location