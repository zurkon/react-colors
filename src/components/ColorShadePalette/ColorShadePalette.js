import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import PaletteFooter from '../PaletteFooter/PaletteFooter';

import { ColorContext } from '../../contexts/ColorContext';

const styles = {
  palette: {
    height: '100vh',
    overflow: 'hidden'
  },
  colors: {
    height: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    background: '#dae1e4'
  },
  goBack: {
    width: '20%',
    height: '50%',
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    opacity: 1,
    background: 'black',
    '& a': {
      width: '100px',
      height: '30px',
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate( -50%, -50%)',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      color: 'white',
      textTransform: 'uppercase',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }
}

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