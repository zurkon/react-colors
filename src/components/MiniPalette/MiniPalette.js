import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import styles from './MiniPalette.styles';

const MiniPalette = ({ classes, palette: { id, paletteName, emoji, colors }, history, handleDelete }) => {
  const miniColorBoxes = colors.map(color => (
    <div className={classes.miniColor} style={{ backgroundColor: color.color }} key={color.name}></div>
  ));

  const handleClick = (e) => {
    e.stopPropagation();
    handleDelete(id);
  }

  return (
    <div className={classes.root} onClick={() => history.push(`/palette/${id}`)}>
      <div id="delete" className={classes.delete}>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={(e) => { handleClick(e) }}
        />
      </div>
      <div className={classes.colors}>
        {miniColorBoxes}
      </div>
      <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
    </div>
  )
};

export default withRouter(withStyles(styles)(MiniPalette));