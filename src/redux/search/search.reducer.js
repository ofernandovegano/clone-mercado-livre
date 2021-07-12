import SearchActionTypes from './search.types';

const INITIAL_STATE = {
  searchedItems: []
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.SET_SEARCHED_ITEMS:
      return {
        ...state,
        searchedItems: action.payload
      };
    default:
      return state;
  }
}

export default searchReducer;