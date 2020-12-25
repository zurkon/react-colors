import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import styles from './MiniPalette.styles';

const MiniPalette = ({ classes, palette: { id, paletteName, emoji, colors }, history }) => {
  const miniColorBoxes = colors.map(color => (
    <div className={classes.miniColor} style={{ backgroundColor: color.color }} key={color.name}></div>
  ));

  return (
    <div className={classes.root} onClick={() => history.push(`/palette/${id}`)}>
      <div className={classes.colors}>
        {miniColorBoxes}
      </div>
      <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
    </div>
  )
};

export default withRouter(withStyles(styles)(MiniPalette));