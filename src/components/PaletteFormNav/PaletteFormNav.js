import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import PaletteDialog from '../PaletteDialog/PaletteDialog';

import useStyles from './PaletteFormNav.styles';

const PaletteFormNav = ({ handleDrawerOpen, savePalette, history, open, colors, palettes }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>

          <PaletteDialog savePalette={savePalette} colors={colors} palettes={palettes} history={history} />
          <Link to="/">
            <Button variant="contained" color="secondary">Go Back</Button>
          </Link>
        </div>
      </AppBar>
    </div>
  );
};

export default PaletteFormNav;