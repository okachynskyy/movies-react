import {
  GET_MOVIES_BY_GENRE_LOADING,
  GET_MOVIES_BY_GENRE_COMPLETED,
  GET_MOVIES_BY_GENRE_FAILURE,
  CLEAN_MOVIES_BY_GENRE
} from '../actions';

const defaultState = {
  isLoading: false,
  data: [],
  error: {}
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_MOVIES_BY_GENRE_LOADING:
      return { ...state, isLoading: true };
    case GET_MOVIES_BY_GENRE_COMPLETED:
      return { ...state, data: action.payload, isLoading: false };
    case GET_MOVIES_BY_GENRE_FAILURE:
      return { ...state, error: action.error, isLoading: false };
    case CLEAN_MOVIES_BY_GENRE:
      return defaultState
  }
  return state;
}
