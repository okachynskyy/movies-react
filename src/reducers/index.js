import { combineReducers } from 'redux';
import SearchByReducer from './search-by';
import SearchMovies from './search-movies';

const rootReducer = combineReducers({
  searchBy: SearchByReducer,
  movies: SearchMovies
});

export default rootReducer;
