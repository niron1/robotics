import React, { useEffect, useState, useCallback } from "react";
import GoogleMapReact from "google-map-react";
import constants, { TRACTOR_STRING, DRONE_STRING } from "../consts";
import Tractor from "./Tractor";
import Drone from "./Drone";
import axios from 'axios';


const Map = () => {
  const [tools, setTools] = useState([]);

  const loadTools = useCallback(() => {
    axios.get('http://localhost:3001/robots').then((response) => {
      setTools(response.data);
    });
  }, []);

  useEffect(() => {
    
    let timer1 = setInterval(() => loadTools(), 1000)    
    return () => {
      clearTimeout(timer1)
    }    
  }, [loadTools]);

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: constants.GOOGLE_API_KEY }}
        defaultCenter={constants.CENTER}
        defaultZoom={constants.ZOOM}
      >
        {
          tools.map(item => {
            const {type, _id, updatedAt, location: {latitude: lat, longitude: lng}} = item;
            if (type === TRACTOR_STRING) {
              return <Tractor key={_id} lat={lat} lng={lng} updatedAt={updatedAt} />
            } else if (type === DRONE_STRING) {
              return <Drone key={_id} lat={lat} lng={lng} updatedAt={updatedAt}/>
            }
            return null;
          })
        }
        
      </GoogleMapReact>
    </div>
  );
};

export default Map;
