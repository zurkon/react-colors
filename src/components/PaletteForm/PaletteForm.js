import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import TextField from '@material-ui/core/TextField';

import { ChromePicker } from 'react-color';
import DraggableColorBox from '../DraggableColorBox/DraggableColorBox';

import useStyles from './PaletteForm.styles';

// Maybe i should have use a Class Component instead of a Function Component on this situation...
const PaletteForm = ({ savePalette, palettes, history }) => {
  const classes = useStyles();
  const [currentColor, setCurrentColor] = useState('#22CFCF');
  const [colors, setColors] = useState([]);
  const [open, setOpen] = useState(true);
  const [newColorName, setColorName] = useState('');
  const [newPaletteName, setPaletteName] = useState('');
  const [errors, setErrors] = useState({
    color: { required: '', uniqueName: '', uniqueColor: '' },
    palette: { required: '', uniqueName: '' }
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateCurrentColor = (newColor) => {
    setCurrentColor(newColor.hex);
  }

  const handleColorName = (e) => {
    e.preventDefault();
    setColorName(e.target.value);
  }

  const handlePaletteName = (e) => {
    e.preventDefault();
    setPaletteName(e.target.value);
  }

  const handleColorSubmit = (e) => {
    e.preventDefault();
    if (validate(e.target.name)) {
      addNewColor();
    }
  }

  const validate = (name) => {
    let temp = {};
    if (name === 'color') {
      const filteredColor = colors.filter(({ color }) => color.toLowerCase() === currentColor.toLowerCase());
      const filteredName = colors.filter(({ name }) => name.toLowerCase() === newColorName.toLowerCase());
      temp.required = newColorName ? '' : 'This field is required';
      if (colors.length !== 0) {
        temp.uniqueName = filteredName.length !== 0 ? 'Color name must be unique' : '';
        temp.uniqueColor = filteredColor.length !== 0 ? 'Color already used' : '';
      }
    } else {
      const filteredPalette = palettes.filter(({ paletteName }) => paletteName.toLowerCase() === newPaletteName.toLowerCase());
      temp.required = newPaletteName ? '' : 'This field is required';
      temp.uniqueName = filteredPalette.length !== 0 ? 'Palette name must be unique' : '';
    }
    setErrors({
      ...errors,
      [name]: { ...errors[name], ...temp }
    });

    return Object.values(temp).every(err => err === '');
  }

  const addNewColor = () => {
    const newColor = {
      color: currentColor,
      name: newColorName
    }
    setColors([...colors, newColor]);
    setColorName('');
  }

  const handleSave = (e) => {
    e.preventDefault();
    if (validate(e.target.name)) {
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
            Persistent drawer
          </Typography>
          <form name="palette" onSubmit={(e) => { handleSave(e); }}>
            <TextField
              label="Palette Name"
              autoComplete="off"
              value={newPaletteName}
              onChange={e => { handlePaletteName(e) }}
              error={errors.palette.required !== '' || errors.palette.uniqueName !== ''}
              helperText={errors.palette.required || errors.palette.uniqueName}
            />
            <Button variant="contained" color="primary" type="submit">Save Palette</Button>
          </form>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">
          Design Your Palette
        </Typography>
        <div>
          <Button variant="contained" color="secondary">Clear Palette</Button>
          <Button variant="contained" color="primary">Random Color</Button>
        </div>
        <ChromePicker
          color={currentColor}
          disableAlpha
          onChange={updateCurrentColor}
        />
        <form name="color" onSubmit={(e) => { handleColorSubmit(e); }}>
          <TextField
            label="Color Name"
            autoComplete="off"
            value={newColorName}
            name="color"
            onChange={e => { handleColorName(e) }}
            error={errors.color.required !== '' || errors.color.uniqueName !== '' || errors.color.uniqueColor !== ''}
            helperText={errors.color.required || errors.color.uniqueName || errors.color.uniqueColor}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: currentColor }}
            type="submit"
          >Add Color</Button>
        </form>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {
          colors.map(({ color, name }) => (
            <DraggableColorBox color={color} name={name} key={name} />
          ))
        }
      </main>
    </div>
  );
};

export default PaletteForm;