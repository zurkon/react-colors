import React from 'react';
import ColorBox from '../ColorBox/ColorBox';

import './Palette.css';

class Palette extends React.Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (<ColorBox {...color} />))
    return (
      <div className="palette">
        {/* {Navbar goes here} */}
        <div className="palette-colors">
          {colorBoxes}
        </div>
        {/* {footer eventually} */}
      </div>
    )
  }
}

export default Palette;