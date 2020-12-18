import React from 'react';

import './ColorBox.css';

class ColorBox extends React.Component {
  render() {
    return (
      <div style={{ background: this.props.color }} className="colorbox">
        <span>{this.props.name}</span>
        <span>MORE</span>
      </div>
    );
  }
}

export default ColorBox;