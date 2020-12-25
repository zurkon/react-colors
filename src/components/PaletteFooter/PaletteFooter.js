import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './PaletteFooter.styles';

const PaletteFooter = ({ paletteName, emoji, classes }) => (
  <footer className={classes.paletteFooter}>
    {paletteName}
    <span className={classes.emoji}>{emoji}</span>
  </footer>
);

export default withStyles(styles)(PaletteFooter);