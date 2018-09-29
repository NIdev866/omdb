export const CATALOG_IS_LOADING = 'CATALOG_IS_LOADING';
export const CATALOG_SEARCH_ERROR = 'CATALOG_SEARCH_ERROR';
export const CATALOG_LOADED_SUCCESSFULLY = 'CATALOG_LOADED_SUCCESSFULLY';

export const catalogIsLoading = () => ({
  type: CATALOG_IS_LOADING
});

export const catalogSearchError = () => ({
  type: CATALOG_SEARCH_ERROR
});

export const catalogLoadedSuccessfully = searchResult => ({
  type: CATALOG_LOADED_SUCCESSFULLY,
  payload: searchResult
});