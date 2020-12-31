import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import styles from './Navbar.styles';

const Navbar = ({ level, format, changeLevel, changeFormat, showSlide, classes }) => {
  const [open, setOpen] = useState(false);

  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <header className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">REACTCOLORS</Link>
      </div>
      {
        showSlide && (
          <div className={classes.sliderContainer}>
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider value={level} min={100} max={900} marks step={100} onChange={(e, val) => changeLevel(val)} />
            </div>
          </div>
        )
      }
      <div className={classes.selectContainer}>
        <Select value={format} onChange={(e) => { changeFormat(e.target.value); setOpen(true); }}>
          <MenuItem value="hex">HEX Format</MenuItem>
          <MenuItem value="rgb">RGB Format</MenuItem>
          <MenuItem value="rgba">RGBA Format</MenuItem>
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

export default withStyles(styles)(Navbar);