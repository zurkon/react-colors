import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import PaletteFormNav from '../PaletteFormNav/PaletteFormNav';
import ColorPickerForm from '../ColorPickerForm/ColorPickerForm';
import DraggableColorList from '../DraggableColorList/DraggableColorList';
import arrayMove from 'array-move';

import useStyles from './PaletteForm.styles';

// Maybe i should have use a Class Component instead of a Function Component on this situation...
const PaletteForm = ({ savePalette, palettes, history }) => {
  const classes = useStyles();
  const [colors, setColors] = useState(palettes[0].colors);
  const [open, setOpen] = useState(true);
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
      <PaletteFormNav
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        savePalette={savePalette}
        history={history}
        colors={colors}
        palettes={palettes}
      />
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
        <div className={classes.container}>
          <Typography variant="h4">
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button variant="contained" color="secondary" onClick={clearColors}>Clear Palette</Button>
            <Button variant="contained" color="primary" disabled={colors.length >= maxColors} onClick={addRandomColor}>Random Color</Button>
          </div>
          <ColorPickerForm
            addNewColor={addNewColor}
            colors={colors}
            paletteIsFull={colors.length >= maxColors}
          />
        </div>
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