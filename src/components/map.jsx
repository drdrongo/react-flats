import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { Marker } from './marker';

// const Marker = ({ text }) => <div className="marker">{text}</div>;

export class SimpleMap extends Component {
  static defaultProps = {
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map-container" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD8xVBCP_3TVfNjYLz7QJAiagKH3PXVZwk' }}
          defaultCenter={this.props.coords}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.coords.lat}
            lng={this.props.coords.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
