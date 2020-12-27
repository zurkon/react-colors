import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './DraggableColorBox.styles';

const DraggableColorBox = ({ color, name, handleClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={() => handleClick(name)} />
      </div>
    </div>
  );
};

export default DraggableColorBox;