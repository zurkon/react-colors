import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';

import './Navbar.css';

const Navbar = ({ level, format, changeLevel, changeFormat }) => {
  return (
    <header className="navbar">
      <div className="logo">
        <a href="/">reactuicolors</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider value={level} min={100} max={900} marks step={100} onChange={(e, val) => changeLevel(val)} />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={(e) => { changeFormat(e.target.value); }}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
        </Select>
      </div >
    </header >
  )
}

export default Navbar;