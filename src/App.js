import React from 'react';
import Palette from './components/Palette/Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers.js';

class App extends React.Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <div>
        <Palette {...seedColors[2]} />
      </div>
    );
  }
}

export default App;
