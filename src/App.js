import React, { Component } from 'react';
import './App.css';

import Favourites from './Components/Favourites/Favourites';
import FavouritesOverlay from './Components/FavouritesOverlay/FavouritesOverlay';
import Header from './Components/Header/Header';
import Catalog from './Components/Catalog/Catalog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Favourites />
        <FavouritesOverlay />
        <Header />
        <Catalog />
      </div>
    );
  }
}

export default App;
