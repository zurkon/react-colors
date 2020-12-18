import React from 'react';
import Palette from './components/Palette/Palette';
import seedColors from './seedColors';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
