import React, { Component } from 'react';
import {connect} from 'react-redux';

import './Favourites.css';

class Favourites extends Component {
  render() {
    const props = this.props;
    if(!props.favouritesModalVisible) return <div />
    return (
    <div className="Favourites">
      {props.favouritesItems.map(favouritesItem => (
        <div className='FavouritesItem'>
          {favouritesItem.Poster !== 'N/A' ? (
          <div style={{width: '100px'}}>
            <img style={{maxHeight: '40px', height: '40px', minHeight: '40px'}} src={favouritesItem.Poster} />
          </div>
          ) : <div style={{width: '100px', maxHeight: '40px', height: '40px', minHeight: '40px'}}>N/A</div>}
          {favouritesItem.Title}
        </div>
      ))}
    </div>
    );
  }
}

const mapStateToProps = store => ({
  favouritesModalVisible: store.Favourites.favouritesModalVisible,
  favouritesItems: store.Favourites.favouritesItems
})

export default connect(mapStateToProps)(Favourites);
