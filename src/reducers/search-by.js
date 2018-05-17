import { SET_SEARCH_BY } from "../actions";

export default function (state = 'title', action) {
  switch (action.type) {
    case SET_SEARCH_BY:
      return action.filed;
  }
  return state;
}
