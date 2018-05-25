import queryString from 'query-string';
import axios from 'axios';
import { API_URL } from '../../configs';

export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export const searchMovies = (searchForm) => (dispatch, getState) => {
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
        type: SEARCH_MOVIES,
        movies
      });
    })
}
