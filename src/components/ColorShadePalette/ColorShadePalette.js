import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import PaletteFooter from '../PaletteFooter/PaletteFooter';

import { ColorContext } from '../../contexts/ColorContext';

const ColorShadePalette = ({ palette: { emoji, paletteName, shades, id } }) => {
  const { format, changeFormat } = useContext(ColorContext);

  return (
    <div className="colorshade palette">
      <Navbar
        format={format}
        changeFormat={changeFormat}
        showSlide={false}
      />
      <div className="palette-colors">
        {
          shades.map(color => (
            <ColorBox key={color.name.replace(/ /g, '-')} name={color.name} color={color[format]} showLink={false} />
          ))
        }
        <div className="go-back colorbox">
          <Link className="back-button" to={`/palette/${id}`}>GO BACK</Link>
        </div>
      </div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}

export default ColorShadePalette;