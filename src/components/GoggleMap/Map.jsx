// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import { FaMapMarkerAlt } from 'react-icons/fa'; 
// import App from '../../App';
// import Heading from "../common/heading/Heading"
// import Back from '../common/back/Back';


const AnyReactComponent = () => (
  <div style={{
    color: 'red',
    fontSize: '24px',
    transform: 'translate(-50%, -50%)'
  }}>
    <FaMapMarkerAlt />
  </div>
);

export default function SimpleMap() {
  // Default properties for the map
  const defaultProps = {
    center: {
      lat: 9.0266,
      lng: 7.6073,
    },
    zoom: 11
  };

  return (
    // Container for the map - setting explicit height and width
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }} // Your Google Maps API key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* Marker component placed at specified latitude and longitude */}
        <AnyReactComponent
          lat={9.0266}
          lng={7.6073}
        />
      </GoogleMapReact>
    </div>
  );
}

const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    <GoogleMapReact
    // bootstrapURLKeys={{ key: }}
    defaultCenter={this.props.center}
    defaultZoom={this.props.zoom}
    yesIWantToUseGoogleMapApiInternals
    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
  >
    <AnyReactComponent
      lat={59.955413}
      lng={30.337844}
      text="My Marker"
    />
  </GoogleMapReact>
  };


  