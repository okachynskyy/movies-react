import { combineReducers } from 'redux';
import searchForm from './search-form';
import movies from './movies';

const rootReducer = combineReducers({
  searchForm,
  movies
});

export default rootReducer;
