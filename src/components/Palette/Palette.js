import React from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';

import './Palette.css';

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
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="palette-colors">
          {colorBoxes}
        </div>
        {/* {footer eventually} */}
      </div>
    )
  }
}

export default Palette;