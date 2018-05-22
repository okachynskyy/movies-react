import searchFormReducer from '../search-form';
import { SET_SEARCH_TERM, SET_SEARCH_BY, SET_SORT_BY } from '../../actions';
import { searchByTitle, sortByReleaseDate } from '../../constants';

describe('search-form reducer', () => {
  it('should have default state', () => {
    const expectedState = {
      term: '',
      searchBy: searchByTitle,
      sortBy: sortByReleaseDate
    };
    const returnedState = searchFormReducer(undefined, {});
    expect(returnedState).toEqual(expectedState);
  });

  it('should handle SET_SEARCH_TERM action', () => {
    const action = {
      type: SET_SEARCH_TERM,
      term: 'new term'
    }

    const returnedState = searchFormReducer(undefined, action);
    expect(returnedState.term).toEqual(action.term);
  });

  it('should handle SET_SEARCH_BY action', () => {
    const action = {
      type: SET_SEARCH_BY,
      searchBy: 'searchBy'
    }

    const returnedState = searchFormReducer(undefined, action);
    expect(returnedState.searchBy).toEqual(action.searchBy);
  });

  it('should handle SET_SORT_BY action', () => {
    const action = {
      type: SET_SORT_BY,
      sortBy: 'sortBy'
    }

    const returnedState = searchFormReducer(undefined, action);
    expect(returnedState.sortBy).toEqual(action.sortBy);
  });
});
