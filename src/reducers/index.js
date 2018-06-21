import { combineReducers } from 'redux';
import searchForm from './search-form';
import movies from './movies';
import movieDetails from './movie-details';
import moviesByGenre from './movies-by-genre';

const rootReducer = combineReducers({
  searchForm,
  movies,
  movieDetails,
  moviesByGenre
});

export default rootReducer;
