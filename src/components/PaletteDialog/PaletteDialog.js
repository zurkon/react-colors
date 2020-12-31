import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SaveIcon from '@material-ui/icons/Save';

import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const PaletteDialog = ({ savePalette, history, colors, palettes, classes }) => {
  const [stage, setOpen] = useState('');
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

  const handleSave = (emoji) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      emoji: emoji.native,
      colors: colors
    };
    savePalette(newPalette);
    history.push('/');
  }

  const handleClickOpen = (e, name) => {
    e.preventDefault();
    if (name === 'palette') {
      setOpen(name);
    } else if (validate()) {
      setOpen(name);
    }
  };

  const handleClose = () => {
    setPaletteName('');
    setOpen('');
  };

  return (
    <React.Fragment>
      <Button startIcon={<SaveIcon />} classes={classes} variant="outlined" color="primary" onClick={(e) => { handleClickOpen(e, 'palette'); }}>
        <span className="labelText">
          Save
        </span>
      </Button>
      <Dialog open={stage === 'emoji'} onClose={handleClose}>
        <DialogTitle>
          Choose a Palette Emoji
        </DialogTitle>
        <Picker title="Pick a Emoji" emoji='sparkles' set={'twitter'} onSelect={(emoji) => { handleSave(emoji); }} />
      </Dialog>
      <Dialog open={stage === 'palette'} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new palette. The palette name must be unique.
          </DialogContentText>
          <form onSubmit={(e) => { handleClickOpen(e, 'emoji'); }}>
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
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>

      </Dialog>
    </React.Fragment>
  );
};

export default PaletteDialog;