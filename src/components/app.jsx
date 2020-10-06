import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { FlatList } from './flat_list';
import { SimpleMap } from './map';

import { flats as flatsData } from '../../data/flats';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLat: 5,
      selectedLng: 5
    };
  }

  retrieveCoords = (childData) => {
    this.setState({
      selectedLat: childData.selectedLat,
      selectedLng: childData.selectedLng
    })
  }

  render() {
    return(
      <div>
        <FlatList sendCoords={this.retrieveCoords} flats={flatsData}/>
        <SimpleMap />
        <p style={{position: "absolute", color: "red"}}> {this.state.message} </p>
      </div>
    )
  }
}
