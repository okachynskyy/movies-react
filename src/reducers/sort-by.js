import { SET_SORT_BY } from '../actions';

export default function (state = 'RELEASE_DATE', action) {
  switch (action.type) {
    case SET_SORT_BY:
      return action.sortBy;
  }
  return state;
}
