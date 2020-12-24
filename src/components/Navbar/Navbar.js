import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import './Navbar.css';

const Navbar = ({ level, format, changeLevel, changeFormat, showSlide }) => {
  const [open, setOpen] = useState(false);

  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">REACTCOLORS</Link>
      </div>
      {
        showSlide && (
          <div className="slider-container">
            <span>Level: {level}</span>
            <div className="slider">
              <Slider value={level} min={100} max={900} marks step={100} onChange={(e, val) => changeLevel(val)} />
            </div>
          </div>
        )
      }
      <div className="select-container">
        <Select value={format} onChange={(e) => { changeFormat(e.target.value); setOpen(true) }}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
        </Select>
      </div >
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={3000}
        message={<span id="message-id">Format Changed To {format.toUpperCase()}</span>}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        onClose={closeSnackbar}
        action={[
          <IconButton onClick={closeSnackbar} color='inherit' key="close" aria-label="close">
            <CloseIcon />
          </IconButton>
        ]}
      />
    </header >
  )
}

export default Navbar;