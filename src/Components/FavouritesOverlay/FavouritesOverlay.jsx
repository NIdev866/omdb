import React, { Component } from 'react';
import {connect} from 'react-redux';

import './FavouritesOverlay.css';
import {favouritesVisibilityToggle} from '../../Actions/Favourites';

class FavouritesOverlay extends Component {
  render() {
    const props = this.props;
    if(!props.favouritesModalVisible) return <div />
    return (
      <div
        onClick={() => props.dispatch(favouritesVisibilityToggle())}
        className="FavouritesOverlay"
      />
    );
  }
}

const mapStateToProps = store => ({
  favouritesModalVisible: store.Favourites.favouritesModalVisible
})

export default connect(mapStateToProps)(FavouritesOverlay);






