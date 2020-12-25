import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

import chroma from 'chroma-js';

import './ColorBox.css';

class ColorBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    }
  }

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { color, name, moreUrl, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(color).luminance() <= 0.07;
    const isLightColor = chroma(color).luminance() >= 0.7;
    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div style={{ background: color }} className="colorbox">
          <div style={{ background: color }} className={`copy-overlay ${copied ? 'show' : ''}`}></div>
          <div className={`copy-msg ${copied ? 'show' : ''}`}>
            <h1>copied!</h1>
            <p className={isLightColor ? 'dark-text' : ''}>{color.toUpperCase()}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor ? 'light-text' : ''}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor ? 'dark-text' : ''}`}>Copy</button>
          </div>
          {/* stopPropagation method prevent the CopyToClipboard event being fired */}
          {showLink && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={`see-more ${isLightColor ? 'dark-text' : ''}`}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;