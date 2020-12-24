import React from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';

class ColorShadePalette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false
    };
  }

  changeFormat = (value) => {
    this.setState({ format: value, open: true });
  }

  closeSnackbar = () => {
    this.setState({ open: false });
  }
  render() {
    const { palette } = this.props;
    const { format, open } = this.state;
    return (
      <div className="palette">
        <Navbar
          format={format}
          changeFormat={this.changeFormat}
          open={open}
          closeSnackbar={this.closeSnackbar}
          showSlide={false}
        />
        <h1>Single Shade Color Palette</h1>
        <div className="palette-colors">
          {
            palette.map(color => (
              <ColorBox key={color.id} name={color.name} color={color[format]} showLink={false} />
            ))
          }
        </div>
      </div>
    );
  }
};

export default ColorShadePalette;