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
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = { palettes: savedPalettes || seedColors };
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find((palette) => palette.id === id);
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

  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] }, this.syncLocalStorage);
  }

  syncLocalStorage() {
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
  }

  render() {
    return (
      <ColorContextProvider>
        <Switch>
          <Route
            path="/palette/new"
            render={(routerProps) => <PaletteForm savePalette={this.savePalette} palettes={this.state.palettes} {...routerProps} />}
          />
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
              <PaletteList palettes={this.state.palettes} />
            )}
          />
        </Switch>
      </ColorContextProvider>
    );
  }
}

export default App;
