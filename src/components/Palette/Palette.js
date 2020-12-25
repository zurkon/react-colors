import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';

import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import PaletteFooter from '../PaletteFooter/PaletteFooter';

import { ColorContext } from '../../contexts/ColorContext';

import styles from './Palette.styles';

const Palette = ({ palette, classes }) => {
  const { colors, paletteName, emoji, id } = palette;
  const { level, format, changeFormat, changeLevel } = useContext(ColorContext);
  const colorBoxes = colors[level].map(color => (
    <ColorBox color={color[format]} name={color.name} moreUrl={`/palette/${id}/${color.id}`} key={color.id} showLink={true} />
  ));
  return (
    <div className={classes.palette}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        format={format}
        changeFormat={changeFormat}
        showSlide={true}
      />
      <div className={classes.colors}>
        {colorBoxes}
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default withStyles(styles)(Palette);