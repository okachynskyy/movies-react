export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_SEARCH_BY = 'SET_SEARCH_BY';
export const SET_SORT_BY = 'SET_SORT_BY';

export const setSearchBy = (searchBy) => {
  return {
    type: SET_SEARCH_BY,
    searchBy
  };
}

export const setSearchTerm = (term) => {
  return {
    type: SET_SEARCH_TERM,
    term
  };
}

export const setSortBy = (sortBy) => {
  return {
    type: SET_SORT_BY,
    sortBy
  };
}
