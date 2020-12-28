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

import ColorPickerForm from '../ColorPickerForm/ColorPickerForm';
import DraggableColorList from '../DraggableColorList/DraggableColorList';
import arrayMove from 'array-move';

import useStyles from './PaletteForm.styles';

// Maybe i should have use a Class Component instead of a Function Component on this situation...
const PaletteForm = ({ savePalette, palettes, history }) => {
  const classes = useStyles();
  const [colors, setColors] = useState(palettes[0].colors);
  const [open, setOpen] = useState(true);
  const [newPaletteName, setPaletteName] = useState('');
  const [errors, setErrors] = useState({
    required: '',
    uniqueName: ''
  });
  const maxColors = 20;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (newColor) => {
    setColors([...colors, newColor]);
  }

  const removeColor = (colorName) => {
    setColors(colors.filter(color => color.name !== colorName));
  }

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

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  }

  const clearColors = () => {
    setColors([]);
  }

  const addRandomColor = () => {
    // flat() joins all arrays into a big one Array
    const allColors = palettes.map(p => p.colors).flat();
    let rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    setColors([...colors, randomColor]);
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
              error={errors.required !== '' || errors.uniqueName !== ''}
              helperText={errors.required || errors.uniqueName}
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
          <Button variant="contained" color="secondary" onClick={clearColors}>Clear Palette</Button>
          <Button variant="contained" color="primary" disabled={colors.length >= maxColors} onClick={addRandomColor}>Random Color</Button>
        </div>
        <ColorPickerForm
          addNewColor={addNewColor}
          colors={colors}
          paletteIsFull={colors.length >= maxColors}
        />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList colors={colors} removeColor={removeColor} axis='xy' onSortEnd={onSortEnd} />
      </main>
    </div>
  );
};

export default PaletteForm;