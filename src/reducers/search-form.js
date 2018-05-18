import { SET_SEARCH_TERM, SET_SEARCH_BY, SET_SORT_BY } from "../actions";

const defaultState = {
  term: '',
  searchBy: 'TITLE',
  sortBy: 'RELEASE_DATE'
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, term: action.term };
    case SET_SEARCH_BY:
      return { ...state, searchBy: action.searchBy };
    case SET_SORT_BY:
      return { ...state, sortBy: action.sortBy };
  }
  return state;
}
