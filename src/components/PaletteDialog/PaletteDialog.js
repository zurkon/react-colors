import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SaveIcon from '@material-ui/icons/Save';

const PaletteDialog = ({ savePalette, history, colors, palettes }) => {
  const [open, setOpen] = useState(false);
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button startIcon={<SaveIcon />} variant="outlined" color="primary" onClick={handleClickOpen}>
        Save Palette
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new palette. The palette name must be unique.
          </DialogContentText>
          <form onSubmit={(e) => { handleSave(e); }}>
            <TextField
              autoFocus
              fullWidth
              label="Palette Name"
              autoComplete="off"
              value={newPaletteName}
              onChange={e => { handlePaletteName(e) }}
              error={errors.required !== '' || errors.uniqueName !== ''}
              helperText={errors.required || errors.uniqueName}
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Save Palette
              </Button>
            </DialogActions>
          </form>
        </DialogContent>

      </Dialog>
    </React.Fragment>
  );
};

export default PaletteDialog;