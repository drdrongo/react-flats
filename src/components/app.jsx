import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { FlatList } from './flat_list';
import { SimpleMap } from './map';

import { flats as flatsData } from '../../data/flats';

export class App extends Component {
  render() {
    return(
      <div>
        <FlatList flats={flatsData}/>
        <SimpleMap />
      </div>
    )
  }
}
