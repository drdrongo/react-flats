import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { Marker } from './marker';

// const Marker = ({ text }) => <div className="marker">{text}</div>;

export class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map-container" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD8xVBCP_3TVfNjYLz7QJAiagKH3PXVZwk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
