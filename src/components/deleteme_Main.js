import styled from 'styled-components';
import {Component} from 'react';
import GoogleMapReact, {GoogleApiWrapper} from 'google-maps-react';

const MainStyled = styled.div`
  border: solid 2px grey;
  height: 100vh;
`;
const mapStyles = {
  width: '70%',
  height: '70%',
  display: 'flex',
};

export class MapClass extends Component {
  render() {
    return <MainStyled>
      <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: -1.2884,
              lng: 36.8233
            }
          }
        />    
    </MainStyled>
  };
}


const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
      >
      </GoogleMapReact>
    </div>
  </div>
);

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} // our location object from earlier



const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

const center = {
    lat: 59.95,
    lng: 30.33
  };

const zoom =  11;

const Map2 = () => 
  <GoogleMapReact
    bootstrapURLKeys={{ key: "" }}
    defaultCenter={center}
    defaultZoom={zoom}
    yesIWantToUseGoogleMapApiInternals
    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
  >
  </GoogleMapReact>

const Main = () => <div>
  <Map2 location={location} zoomLevel={17} /> {/* include it here */}
</div>

export default GoogleApiWrapper({
  apiKey: ''
})(Main);