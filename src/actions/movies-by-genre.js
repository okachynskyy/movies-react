import queryString from 'query-string';
import axios from 'axios';
import { API_URL } from '../../configs';
import { searchByGenres } from '../constants';

export const GET_MOVIES_BY_GENRE_LOADING = 'GET_MOVIES_BY_GENRE_LOADING';
export const GET_MOVIES_BY_GENRE_COMPLETED = 'GET_MOVIES_BY_GENRE_COMPLETED';
export const GET_MOVIES_BY_GENRE_FAILURE = 'GET_MOVIES_BY_GENRE_FAILURE';

export const getMoviesByGenre = (genre) => (dispatch, getState) => {
  dispatch({
    type: GET_MOVIES_BY_GENRE_LOADING
  });

  const params = {
    search: genre,
    searchBy: searchByGenres,
    sortBy: getState().searchForm.sortBy,
    sortOrder: 'desc'
  };

  const url = `${API_URL}/movies?${queryString.stringify(params)}`;

  return axios.get(url)
    .then(moviesByGenre => {
      dispatch({
        type: GET_MOVIES_BY_GENRE_COMPLETED,
        payload: moviesByGenre.data.data
      });
    })
    .catch(error => {
      dispatch({
        type: GET_MOVIES_BY_GENRE_FAILURE,
        error
      });
    })
}
