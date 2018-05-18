import { SET_SEARCH_TERM } from '../actions';

export default function (state = '', action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.term;
  }
  return state;
}
