import React from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';

import './Palette.css';

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex",
      open: false
    };
  }

  changeLevel = (level) => {
    this.setState({ level: level });
  }

  changeFormat = (value) => {
    this.setState({ format: value, open: true });
  }

  closeSnackbar = () => {
    this.setState({ open: false });
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format, open } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox color={color[format]} name={color.name} moreUrl={`/palette/${id}/${color.id}`} key={color.id} />
    ));
    return (
      <div className="palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          format={format}
          changeFormat={this.changeFormat}
          open={open}
          closeSnackbar={this.closeSnackbar}
        />
        <div className="palette-colors">
          {colorBoxes}
        </div>
        <footer className="palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    )
  }
}

export default Palette;