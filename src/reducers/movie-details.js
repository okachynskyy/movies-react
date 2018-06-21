import {
  GET_MOVIE_DETAILS_LOADING,
  GET_MOVIE_DETAILS_COMPLETE,
  GET_MOVIE_DETAILS_FAILURE
} from '../actions';

const defaultState = {
  isLoading: false,
  data: {},
  error: {}
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_MOVIE_DETAILS_LOADING:
      return { ...state, isLoading: true };
    case GET_MOVIE_DETAILS_COMPLETE:
      return { ...state, data: action.movieDetails, isLoading: false };
    case GET_MOVIE_DETAILS_FAILURE:
      return { ...state, error: action.error, isLoading: false };
  }
  return state;
}