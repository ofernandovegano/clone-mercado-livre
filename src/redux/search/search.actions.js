import SearchActionTypes from './search.types';

export const setSearchedItems = items => ({
  type: SearchActionTypes.SET_SEARCHED_ITEMS,
  payload: items
});