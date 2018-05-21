import queryString from 'query-string';
import axios from 'axios';
import { searchMovies, SEARCH_MOVIES } from '../movies';

jest.mock('query-string', () => ({
  stringify: jest.fn(params => 'query-params')
}));

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue('data')
}));

jest.mock('../../../configs', () => ({
  API_URL: 'API_URL'
}));

describe('searchMovies action creator', () => {
  it('should create action object', async () => {
    const searchForm = {
      term: 'term',
      searchBy: 'searchBy',
      sortBy: 'sortBy'
    };

    const createdAction = searchMovies(searchForm);

    expect(createdAction.type).toEqual(SEARCH_MOVIES);
    expect(await createdAction.payload).toEqual('data');

    expect(queryString.stringify).toHaveBeenCalledWith({
      search: searchForm.term,
      searchBy: searchForm.searchBy,
      sortBy: searchForm.sortBy,
      sortOrder: 'desc'
    });

    expect(axios.get).toHaveBeenCalledWith(
      'API_URL/movies?query-params'
    );
  });
});
