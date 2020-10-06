import React, { Component } from 'react';

import { Card } from './card';

export class FlatList extends Component {
  renderList() {
    return this.props.flats.map(flat => {
      return <Card flatData={flat} key={[flat.lat, flat.lng]} className="card" />
    })
  }

  render() {
    return(
      <div className="flat-list">
        {this.renderList()}
      </div>
    )
  }
}