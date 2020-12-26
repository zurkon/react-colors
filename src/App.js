import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './components/Palette/Palette';
import PaletteList from './components/PaletteList/PaletteList';
import ColorShadePalette from './components/ColorShadePalette/ColorShadePalette';
import PaletteForm from './components/PaletteForm/PaletteForm';

import ColorContextProvider from './contexts/ColorContext';

import seedColors from './seedColors';
import { generatePalette } from './colorHelpers.js';

class App extends React.Component {

  findPalette(id) {
    return seedColors.find((palette) => palette.id === id);
  }

  getShades(id, palette) {
    let paletteShades = {
      id: palette.id,
      paletteName: palette.paletteName,
      emoji: palette.emoji,
      shades: []
    };
    let colors = palette.colors;

    for (let level in colors) {
      paletteShades.shades = paletteShades.shades.concat(
        colors[level].filter(color => color.id === id)
      );
    }

    paletteShades.shades = paletteShades.shades.slice(1);

    return paletteShades;
  }

  render() {
    return (
      <ColorContextProvider>
        <Switch>
          <Route path="/palette/new" render={() => <PaletteForm />} />
          <Route
            path="/palette/:paletteId/:colorId"
            render={(routeProps) => (
              <ColorShadePalette
                palette={this.getShades(routeProps.match.params.colorId, generatePalette(this.findPalette(routeProps.match.params.paletteId)))}
              />
            )}
          />
          <Route
            path="/palette/:id"
            render={(routeProps) => (
              <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
            )}
          />
          <Route
            path="/"
            render={() => (
              <PaletteList palettes={seedColors} />
            )}
          />
        </Switch>
      </ColorContextProvider>
    );
  }
}

export default App;
