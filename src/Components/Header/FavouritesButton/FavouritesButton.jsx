import React, { Component } from 'react';
import {connect} from 'react-redux';

import {favouritesVisibilityToggle} from '../../../Actions/Favourites';
import './FavouritesButton.css';

class FavouritesButton extends Component {
  render() {
    const props = this.props;
    return (
    <button
      onClick={() => props.dispatch(favouritesVisibilityToggle())}
      className="FavouritesButton"
    >
      My favourites
    </button>
    );
  }
}

export default connect()(FavouritesButton);
