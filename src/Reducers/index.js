import {combineReducers} from 'redux';
import SearchResult from './SearchResult';
import Favourites from './Favourites';

const Reducers = combineReducers({
  SearchResult,
  Favourites,
});

export default Reducers;