import axios from 'axios';
import { API_URL } from '../../configs';

export const GET_MOVIE_DETAILS_LOADING = 'GET_MOVIE_DETAILS_LOADING';
export const GET_MOVIE_DETAILS_COMPLETE = 'GET_MOVIE_DETAILS_COMPLETE';
export const GET_MOVIE_DETAILS_FAILURE = 'GET_MOVIE_DETAILS_FAILURE';

export const getMovieDetails = (movieId) => (dispatch) => {
  const url = `${API_URL}/movies/${movieId}`;

  dispatch({
    type: GET_MOVIE_DETAILS_LOADING
  });

  return axios.get(url)
    .then(res => {
      return res.data;
    })
    .then(movieDetails => {
      dispatch({
        type: GET_MOVIE_DETAILS_COMPLETE,
        movieDetails
      });
    })
    .catch(error => {
      dispatch({
        type: GET_MOVIE_DETAILS_FAILURE,
        error
      });
    });
}
