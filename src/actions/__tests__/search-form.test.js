import {
  setSearchBy, setSearchTerm, setSortBy,
  SET_SEARCH_BY, SET_SEARCH_TERM, SET_SORT_BY
} from '../search-form';

describe('search-form action creators', () => {
  describe('setSearchBy', () => {
    it('should create action object', async () => {
      const searchBy = 'searchBy';

      const createdAction = setSearchBy(searchBy);
      const expectedAction = {
        type: SET_SEARCH_BY,
        searchBy
      };

      expect(createdAction).toEqual(expectedAction);
    });
  });

  describe('setSearchTerm', () => {
    it('should create action object', async () => {
      const term = 'searchBy';

      const createdAction = setSearchTerm(term);
      const expectedAction = {
        type: SET_SEARCH_TERM,
        term
      };

      expect(createdAction).toEqual(expectedAction);
    });
  });

  describe('setSortBy', () => {
    it('should create action object', async () => {
      const sortBy = 'sortBy';

      const createdAction = setSortBy(sortBy);
      const expectedAction = {
        type: SET_SORT_BY,
        sortBy
      };

      expect(createdAction).toEqual(expectedAction);
    });
  });
});
