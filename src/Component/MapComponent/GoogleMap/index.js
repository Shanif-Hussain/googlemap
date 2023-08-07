import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import DrawingManager from './DrawingManager';

export default function ReactGoogleMap(props) {

  const { showDefaultToolBar } = props;
  const [GMap, setGMap] = useState(null);                        // Hold Google Map Reference
  const containerStyle = { width: '100vw', height: '100vh' };     // Default Setting Google Map Container Style
  const center = { lat: -26.766137, lng: 134.5458682 };          // Default Center position for Map to point on initial Load

  //On Google Map Load
  const onLoad = (map) => {
    return new Promise((resolve) => {
      setGMap(map);
      resolve();
    });
  }

  return (
    //Default Settings need for Google Map
    <LoadScript
      googleMapsApiKey=""
      libraries={["drawing"]}
    >
      {/* Google Map Component */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={async (map) => { await onLoad(map); }}
        //onLoad={onLoad}
        options={{
          streetViewControl: false,
          mapTypeControl: false
        }}
      >
        <DrawingManager GMap={GMap} showDefaultToolBar={showDefaultToolBar} />
      </GoogleMap>
    </LoadScript>
  );
}
