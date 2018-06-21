import queryString from 'query-string';
import axios from 'axios';
import { API_URL } from '../../configs';

export const SEARCH_MOVIES_LOADING = 'SEARCH_MOVIES_LOADING';
export const SEARCH_MOVIES_COMPLETED = 'SEARCH_MOVIES_COMPLETED';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';

export const searchMovies = () => (dispatch, getState) => {
  dispatch({
    type: SEARCH_MOVIES_LOADING
  });

  const params = {
    search: getState().searchForm.term,
    searchBy: getState().searchForm.searchBy,
    sortBy: getState().searchForm.sortBy,
    sortOrder: 'desc'
  };

  const url = `${API_URL}/movies?${queryString.stringify(params)}`;

  return axios.get(url)
    .then(res => {
      return res.data.data;
    })
    .then(movies => {
      dispatch({
        type: SEARCH_MOVIES_COMPLETED,
        payload: movies
      });
    })
    .catch(error => {
      dispatch({
        type: SEARCH_MOVIES_FAILURE,
        error
      });
    });
}
