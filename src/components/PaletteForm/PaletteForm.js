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

const PaletteForm = () => {
  const classes = useStyles();
  const [currentColor, setCurrentColor] = useState('#22CFCF');
  const [colors, setColors] = useState([]);
  const [open, setOpen] = useState(true);
  const [newName, setName] = useState('');
  const [errors, setErrors] = useState({ required: '', uniqueName: '', uniqueColor: '' });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateCurrentColor = (newColor) => {
    setCurrentColor(newColor.hex);
  }

  const handleInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addNewColor();
    }
  }

  const validate = () => {
    const filteredColor = colors.filter(({ color }) => color.toLowerCase() === currentColor.toLowerCase());
    const filteredName = colors.filter(({ name }) => name.toLowerCase() === newName.toLowerCase());
    let temp = {};
    temp.required = newName ? '' : 'This field is required';
    if (colors.length !== 0) {
      temp.uniqueName = filteredName.length !== 0 ? 'Color name must be unique' : '';
      temp.uniqueColor = filteredColor.length !== 0 ? 'Color already used' : '';
    }
    setErrors({
      ...errors,
      ...temp
    });

    return Object.values(temp).every(err => err === '');
  }

  const addNewColor = () => {
    const newColor = {
      color: currentColor,
      name: newName
    }
    setColors([...colors, newColor]);
    setName('');
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
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
        <form onSubmit={(e) => { handleSubmit(e); }}>
          <TextField
            value={newName}
            onChange={e => { handleInput(e) }}
            error={errors.required !== '' || errors.uniqueName !== '' || errors.uniqueColor !== ''}
            helperText={errors.required || errors.uniqueName || errors.uniqueColor}
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