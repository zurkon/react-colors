import React from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';

import './Palette.css';

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex"
    };
  }

  changeLevel = (level) => {
    this.setState({ level: level });
  }

  changeFormat = (value) => {
    this.setState({ format: value });
  }

  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (<ColorBox color={color[format]} name={color.name} />))
    return (
      <div className="palette">
        <Navbar level={level} changeLevel={this.changeLevel} format={format} changeFormat={this.changeFormat} />
        <div className="palette-colors">
          {colorBoxes}
        </div>
        {/* {footer eventually} */}
      </div>
    )
  }
}

export default Palette;