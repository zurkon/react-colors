import React from 'react';

import useStyles from './DraggableColorBox.styles';

const DraggableColorBox = ({ color, name }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      {name}
    </div>
  );
};

export default DraggableColorBox;