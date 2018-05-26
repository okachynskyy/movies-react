import { combineReducers } from 'redux';
import searchForm from './search-form';
import movies from './movies';
import movieDetails from './movie-details';

const rootReducer = combineReducers({
  searchForm,
  movies,
  movieDetails
});

export default rootReducer;
