import {
  CATALOG_IS_LOADING,
  CATALOG_SEARCH_ERROR,
  CATALOG_LOADED_SUCCESSFULLY,
} from '../Actions/SearchResult';

const defaultState = {}

function AllPagesReducer(state = defaultState, action) {
  switch (action.type) {
    case CATALOG_IS_LOADING:
      return {Response: '__LOADING__'}
    case CATALOG_SEARCH_ERROR:
      return {Response: 'false'}
    case CATALOG_LOADED_SUCCESSFULLY:
      return action.payload
    default:
      return state;
  }
}

export default AllPagesReducer;