import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import PaletteFooter from '../PaletteFooter/PaletteFooter';

import { ColorContext } from '../../contexts/ColorContext';

import styles from './ColorShadePalette.styles';

const ColorShadePalette = ({ palette: { emoji, paletteName, shades, id }, classes }) => {
  const { format, changeFormat } = useContext(ColorContext);

  return (
    <div className={classes.palette}>
      <Navbar
        format={format}
        changeFormat={changeFormat}
        showSlide={false}
      />
      <div className={classes.colors}>
        {
          shades.map(color => (
            <ColorBox key={color.name.replace(/ /g, '-')} name={color.name} color={color[format]} showLink={false} />
          ))
        }
        <div className={classes.goBack}>
          <Link className="back-button" to={`/palette/${id}`}>GO BACK</Link>
        </div>
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default withStyles(styles)(ColorShadePalette);