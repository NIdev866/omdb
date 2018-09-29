import {
  FAVOURITES_VISIBILITY_TOGGLE,
  ADD_TO_FAVOURITES
} from '../Actions/Favourites';

const defaultState = {
  favouritesModalVisible: false,
  favouritesItems: []
}

function AllPagesReducer(state = defaultState, action) {
  switch (action.type) {
    case FAVOURITES_VISIBILITY_TOGGLE:
      return {...state, favouritesModalVisible: !state.favouritesModalVisible};
    case ADD_TO_FAVOURITES:
      const newState = {...state};
      let movieIsAlreadyInFavourites = [];
      newState.favouritesItems.map(movie => {
        if(movie.Title === action.payload.Title) {
          movieIsAlreadyInFavourites.push(true);
        }
      })
      if(movieIsAlreadyInFavourites.length === 0) {
        newState.favouritesItems.push(action.payload);
      }
      return newState;
    default:
      return state;
  }
}

export default AllPagesReducer;