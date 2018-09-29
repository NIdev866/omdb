import React from 'react';
import {connect} from 'react-redux';

import ListOfMovies from './ListOfMovies/ListOfMovies';
import './Catalog.css';

const Catalog = props => (
  <div className="Catalog">
    {Object.keys(props.SearchResult).length === 0 && (
      <div>
        Search for a movie from our library
      </div>
    )}
    {props.SearchResult.Response === '__LOADING__' && (
      <div>
        Loading...
      </div>
    )}
    {props.SearchResult.Response === 'False' && (
      <div>
        Please try again
      </div>
    )}
    {props.SearchResult.Response === 'True' && <ListOfMovies />}
  </div>
);

const mapStateToProps = store => ({
  SearchResult: store.SearchResult
})

export default connect(mapStateToProps)(Catalog);
