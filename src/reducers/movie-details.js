import { GET_MOVIE_DETAILS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return action.movieDetails;
  }
  return state;
}
