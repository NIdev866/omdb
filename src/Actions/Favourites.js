export const FAVOURITES_VISIBILITY_TOGGLE = 'FAVOURITES_VISIBILITY_TOGGLE';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';

export const favouritesVisibilityToggle = () => ({
  type: FAVOURITES_VISIBILITY_TOGGLE
});

export const addToFavourites = movie => ({
  type: ADD_TO_FAVOURITES,
  payload: movie
});