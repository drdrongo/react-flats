import React, { Component } from 'react';

export class Marker extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log(this);
  }

  render() {
    return(
      <div className="marker" onClick={this.handleClick}></div>
    )
  }
}