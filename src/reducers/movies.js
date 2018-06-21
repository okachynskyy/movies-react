import {
  SEARCH_MOVIES_LOADING,
  SEARCH_MOVIES_COMPLETED,
  SEARCH_MOVIES_FAILURE
} from '../actions';

const defaultState = {
  isLoading: false,
  data: [],
  error: {}
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case SEARCH_MOVIES_LOADING:
      return { ...state, isLoading: true };
    case SEARCH_MOVIES_COMPLETED:
      return { ...state, data: action.payload, isLoading: false };
    case SEARCH_MOVIES_FAILURE:
      return { ...state, error: action.error, isLoading: false };
  }
  return state;
}
