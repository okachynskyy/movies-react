import queryString from 'query-string';
import axios from "axios";

export const SET_SEARCH_BY = "SET_SEARCH_BY";
export const SEARCH_MOVIES = "SEARCH_MOVIES";

export const setSearchBy = (filed) => {
  return {
    type: SET_SEARCH_BY,
    filed
  };
}

export function searchMovies(params) {
  const API_URL = 'http://react-cdp-api.herokuapp.com';
  const url = `${API_URL}/movies?${queryString.stringify(params)}`;
  const request = axios.get(url);

  return {
    type: SEARCH_MOVIES,
    payload: request
  };
};
