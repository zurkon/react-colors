import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { ChromePicker } from 'react-color';

const ColorPickerForm = ({ addNewColor, colors, paletteIsFull }) => {
  const [currentColor, setCurrentColor] = useState('#22CFCF');
  const [newColorName, setColorName] = useState('');
  const [errors, setErrors] = useState({
    required: '',
    uniqueName: '',
    uniqueColor: ''
  });

  const validate = () => {
    let temp = {};
    const filteredColor = colors.filter(({ color }) => color.toLowerCase() === currentColor.toLowerCase());
    const filteredName = colors.filter(({ name }) => name.toLowerCase() === newColorName.toLowerCase());
    temp.required = newColorName ? '' : 'This field is required';
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

  const handleColorSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newColor = {
        color: currentColor,
        name: newColorName
      }
      addNewColor(newColor);
      setColorName('');
    }
  }

  const handleColorName = (e) => {
    e.preventDefault();
    setColorName(e.target.value);
  }

  const updateCurrentColor = (newColor) => {
    setCurrentColor(newColor.hex);
  }

  return (
    <React.Fragment>
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
          error={errors.required !== '' || errors.uniqueName !== '' || errors.uniqueColor !== ''}
          helperText={errors.required || errors.uniqueName || errors.uniqueColor}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={paletteIsFull}
          style={{ backgroundColor: (paletteIsFull ? 'rgba(0, 0, 0, 0.12)' : currentColor) }}
          type="submit"
        >
          {paletteIsFull ? 'Palette Full' : 'Add Color'}
        </Button>
      </form>
    </React.Fragment>
  );
};

export default ColorPickerForm;