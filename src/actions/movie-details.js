import queryString from 'query-string';
import axios from 'axios';
import { API_URL } from '../../configs';

export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';

export const getMovieDetails = (movieId) => (dispatch) => {
  const url = `${API_URL}/movies/${movieId}`;

  return axios.get(url)
    .then(res => {
      return res.data;
    })
    .then(movieDetails => {
      dispatch({
        type: GET_MOVIE_DETAILS,
        movieDetails
      });
    })
}
