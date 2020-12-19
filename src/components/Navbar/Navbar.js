import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';

import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex'
    }
  }

  changeFormat = (event) => {
    event.preventDefault();
    this.setState({ format: event.target.value });
    this.props.handleChange(event.target.value);
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <header className="navbar">
        <div className="logo">
          <a href="#">reactuicolors</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider value={level} min={100} max={900} marks step={100} onChange={(e, val) => changeLevel(val)} />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.changeFormat}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
          </Select>
        </div >
      </header >
    )
  }
}

export default Navbar;