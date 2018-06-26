import axios from 'axios';
import { API_URL } from '../../configs';

export const GET_MOVIE_DETAILS_LOADING = 'GET_MOVIE_DETAILS_LOADING';
export const GET_MOVIE_DETAILS_COMPLETE = 'GET_MOVIE_DETAILS_COMPLETE';
export const GET_MOVIE_DETAILS_FAILURE = 'GET_MOVIE_DETAILS_FAILURE';
export const CLEAN_MOVIE_DETAILS = 'CLEAN_MOVIE_DETAILS';

export const getMovieDetails = (movieId) => (dispatch) => {
  const url = `${API_URL}/movies/${movieId}`;

  dispatch({
    type: GET_MOVIE_DETAILS_LOADING,
    movieId
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

export const cleanMovieDetails = () => {
  return {
    type: CLEAN_MOVIE_DETAILS
  }
};
