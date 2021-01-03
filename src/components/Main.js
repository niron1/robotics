import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import constants from '../consts';
import Tractor from './Tractor';
import Drone from './Drone';

class SimpleMap extends Component {

  render() {
    return (
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: constants.GOOGLE_API_KEY}}
          defaultCenter={constants.CENTER}
          defaultZoom={constants.ZOOM}
        >
          <Tractor
            lat={32.6778}
            lng={35.2417}
          />
          <Drone
            lat={32.6538}
            lng={35.2217}
          />

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;