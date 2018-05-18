import { combineReducers } from 'redux';
import SearchBy from './search-by';
import SearchMovies from './search-movies';
import SearchTerm from './search-term';

const rootReducer = combineReducers({
  searchBy: SearchBy,
  movies: SearchMovies,
  searchTerm: SearchTerm
});

export default rootReducer;
