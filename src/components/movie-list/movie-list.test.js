import React from 'react';
import { MovieList } from './index';
import renderer from 'react-test-renderer';

jest.mock('../movie-box/movie-box');

describe('MovieList', () => {
  it('renders movie list', () => {
    const movies = [
      { id: '1' },
      { id: '2' }
    ];

    const tree = renderer
      .create(<MovieList movies={movies} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders default message about empty movie list', () => {
    const movies = [];

    const tree = renderer
      .create(<MovieList movies={movies} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders message from props about empty movie list', () => {
    const movies = [];

    const tree = renderer
      .create(<MovieList movies={movies} message='test message' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
