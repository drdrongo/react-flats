import React, { Component } from 'react';

export class Card extends Component {
  constructor(props) {
    super(props);
    this.flatData = this.props.flatData
  }
  
  handleClick = () => {
    this.props.sendCoords({
      selectedLat: this.props.flatData.lat,
      selectedLng: this.props.flatData.lng
    })
  }

  render() {
    // const flatData = this.props.flatData
    const cardStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), ${`url(${this.flatData.imageUrl})`}`
    }
    return(
      <div style={ cardStyle } className="card">
        <div className="card-category">{this.flatData.price} {this.flatData.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.flatData.name}</h2>
          <a onClick={this.handleClick} className="card-link"></a>
        </div>
      </div>
    )
  }
}
