import queryString from 'query-string';
import axios from 'axios';
import { API_URL } from '../../configs';

export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export function searchMovies(searchForm) {
  const params = {
    search: searchForm.term,
    searchBy: searchForm.searchBy,
    sortBy: searchForm.sortBy,
    sortOrder: 'desc'
  };

  const url = `${API_URL}/movies?${queryString.stringify(params)}`;
  const request = axios.get(url);

  return {
    type: SEARCH_MOVIES,
    payload: request
  };
};
