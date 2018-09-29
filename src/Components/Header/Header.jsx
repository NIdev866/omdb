import React, { Component } from 'react';
import './Header.css';

import Search from './Search/Search';
import FavouritesButton from './FavouritesButton/FavouritesButton';

class Header extends Component {
  render() {
    return (
    <div className="Header">
      <Search />
      <FavouritesButton />
    </div>
    );
  }
}

export default Header;
