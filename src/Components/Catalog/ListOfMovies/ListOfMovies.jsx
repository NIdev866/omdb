import React  from 'react';
import {connect} from 'react-redux';

import './ListOfMovies.css';
import FavouritesButton from "./FavouritesButton/FavouritesButton";

const ListOfMovies = props => (
  <div className="ListOfMovies">
    {props.SearchResult.Search.map(movie => (
    <div key={movie.Title} style={{position: 'relative', fontSize: '14px', overflow: 'hidden', width: '110px',minWidth: '110px',maxWidth: '110px', height: '160px', minHeight: '160px', maxHeight: '160px', border: '1px solid black', margin: '5px', flex: 1}}>
      <div style={{height: '80px'}}>
        {movie.Poster !== 'N/A' ? (
          <img style={{maxHeight: '80px', height: '80px', minHeight: '80px', margin: '0 auto'}} src={movie.Poster} />
        ) : <div>N/A</div>}
      </div>
      {movie.Title}
      <FavouritesButton movie={movie}/>
    </div>
    ))}
  </div>
)

const mapStateToProps = store => ({
  SearchResult: store.SearchResult
})

export default connect(mapStateToProps)(ListOfMovies);

