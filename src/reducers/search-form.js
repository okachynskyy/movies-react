import { SET_SEARCH_TERM, SET_SEARCH_BY, SET_SORT_BY } from '../actions';
import { searchByTitle, sortByReleaseDate } from '../constants';

const defaultState = {
  term: '',
  searchBy: searchByTitle,
  sortBy: sortByReleaseDate
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      console.log(action, state);
      return { ...state, term: action.term };
    case SET_SEARCH_BY:
      console.log(action, state);
      return { ...state, searchBy: action.searchBy };
    case SET_SORT_BY:
      console.log(action, state);
      return { ...state, sortBy: action.sortBy };
  }
  return state;
}
