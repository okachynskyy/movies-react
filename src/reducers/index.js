import { combineReducers } from 'redux';
import searchBy from './search-by';
import movies from './search-movies';
import searchTerm from './search-term';
import sortBy from './sort-by';

const rootReducer = combineReducers({
  searchBy,
  movies,
  searchTerm,
  sortBy
});

export default rootReducer;
