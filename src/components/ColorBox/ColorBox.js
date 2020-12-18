import React from 'react';

import './ColorBox.css';

class ColorBox extends React.Component {
  render() {
    const { color, name } = this.props;
    return (
      <div style={{ background: color }} className="colorbox">
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    );
  }
}

export default ColorBox;