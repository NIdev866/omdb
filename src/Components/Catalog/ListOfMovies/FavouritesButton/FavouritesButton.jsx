import React, { Component } from 'react';
import {connect} from 'react-redux';

import {addToFavourites} from '../../../../Actions/Favourites';
import './FavouritesButton.css';

class FavouritesButton extends Component {
  constructor(props) {
    super(props);
    this.state = {hover: false}
  }
  render() {
    const state = this.state;
    const props = this.props;
    return (
      <button
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}
        onClick={() => props.dispatch(addToFavourites(props.movie))}
        className={state.hover ? 'Favouritesbutton--hover' : 'Favouritesbutton'}
      >
        Add to favourites
      </button>
    );
  }
}

export default connect()(FavouritesButton);
