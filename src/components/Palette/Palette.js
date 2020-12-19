import React from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Slider from 'rc-slider';

import './Palette.css';
import 'rc-slider/assets/index.css';

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    };
  }

  changeLevel = (level) => {
    this.setState({ level: level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (<ColorBox {...color} />))
    return (
      <div className="palette">
        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={this.changeLevel} />
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