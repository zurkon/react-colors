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

const PaletteFormNav = ({ handleDrawerOpen, savePalette, history, open, classes, colors, palettes }) => {
  const [newPaletteName, setPaletteName] = useState('');
  const [errors, setErrors] = useState({
    required: '',
    uniqueName: ''
  });

  const handlePaletteName = (e) => {
    e.preventDefault();
    setPaletteName(e.target.value);
  }

  const validate = () => {
    let temp = {};
    const filteredPalette = palettes.filter(({ paletteName }) => paletteName.toLowerCase() === newPaletteName.toLowerCase());
    temp.required = newPaletteName ? '' : 'This field is required';
    temp.uniqueName = filteredPalette.length !== 0 ? 'Palette name must be unique' : '';
    setErrors({
      ...errors,
      ...temp
    });

    return Object.values(temp).every(err => err === '');
  }

  const handleSave = (e) => {
    e.preventDefault();
    if (validate()) {
      const newPalette = {
        paletteName: newPaletteName,
        id: newPaletteName.toLowerCase().replace(/ /g, '-'),
        emoji: "🎨",
        colors: colors
      };
      savePalette(newPalette);
      history.push('/');
    }
  }

  return (
    <React.Fragment>
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
            Persistent drawer
          </Typography>
          <form name="palette" onSubmit={(e) => { handleSave(e); }}>
            <TextField
              label="Palette Name"
              autoComplete="off"
              value={newPaletteName}
              onChange={e => { handlePaletteName(e) }}
              error={errors.required !== '' || errors.uniqueName !== ''}
              helperText={errors.required || errors.uniqueName}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
            <Link to="/">
              <Button variant="contained" color="secondary">Go Back</Button>
            </Link>
          </form>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default PaletteFormNav;