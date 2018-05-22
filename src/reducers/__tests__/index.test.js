import { combineReducers } from 'redux';
import rootReducer from '../index';

jest.mock('redux', () => ({
  combineReducers: jest.fn()
}));

jest.mock('../search-form', () => 'search-form');
jest.mock('../movies', () => 'movies');

describe('root reducer', () => {
  it('should call combineReducers', () => {
    expect(combineReducers).toBeCalledWith({
      movies: 'movies',
      searchForm: 'search-form'
    });
  });
});
