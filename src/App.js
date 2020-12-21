import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette/Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers.js';

class App extends React.Component {

  findPalette(id) {
    return seedColors.find((palette) => palette.id === id);
  }

  render() {
    return (
      <Switch>
        {/* <Route path="/palette/:id" render={(props) => {
          console.log(props)
        }} /> */}
        <Route path="/palette/:id" render={(routeProps) => (<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />)} />
        <Route path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>} />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
