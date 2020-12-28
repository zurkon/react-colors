import React from 'react';
import DraggableColorBox from '../DraggableColorBox/DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

import useStyles from './DraggableColorList.styles';

const DraggableColorList = ({ colors, removeColor }) => {
  const classes = useStyles();
  return (
    <div className={classes.colors}>
      {
        colors.map(({ color, name }, i) => (
          <DraggableColorBox index={i} color={color} name={name} key={name} handleClick={removeColor} />
        ))
      }
    </div>
  )
};

export default SortableContainer(DraggableColorList);