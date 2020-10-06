import React, { Component } from 'react';

export class Card extends Component {
  render() {
    const flatData = this.props.flatData
    const cardStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), ${`url(${flatData.imageUrl})`}`
    }
    return(
      <div style={ cardStyle } className="card">
        <div className="card-category">{flatData.price} {flatData.priceCurrency}</div>
        <div className="card-description">
          <h2>{flatData.name}</h2>
          <a href="#" className="card-link"></a>
        </div>
      </div>
    )
  }
}
