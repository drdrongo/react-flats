import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { FlatList } from './flat_list';
import { SimpleMap } from './map';

import { flats as flatsData } from '../../data/flats';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 48.8606,
      lng: 2.3376
    };
  }

  retrieveCoords = (childData) => {
    this.setState({
      lat: childData.lat,
      lng: childData.lng
    })
  }

  render() {
    const coords = {
      lat: this.state.lat,
      lng: this.state.lng
    }
    return(
      <div>
        <FlatList sendCoords={this.retrieveCoords} flats={flatsData}/>
        <SimpleMap coords={coords}/>
        <p> {this.state.message} </p>
      </div>
    )
  }
}
