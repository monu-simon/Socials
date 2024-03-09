import React, { useEffect, useState } from 'react'

const Location = () => {

    const [locations,setlocation] = useState(null);

    useEffect(() => {
        if(navigator.geolocation) {
            navigator.geolocation.watchPosition((position) => {
                console.log(position)
            })
        }
    },[]);

  return (
    <div>Location</div>
  )
}

export default Location