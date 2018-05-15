import React from 'react';
import { MovieList } from './index';
import renderer from 'react-test-renderer';

describe('MovieList', () => {
  it('renders movie list', () => {
    const movies = [
      {
        id: '1',
        poster_path: 'https://image.tmdb.org/t/p/w500/6o0UWX2naW7HK45PDNYmoMIk5qs.jpg',
        title: 'No Country for Old Men',
        release_date: '2007',
        genres: ['Crime', 'Drama', 'Thriller']
      }, {
        id: '2',
        poster_path: 'https://image.tmdb.org/t/p/w500/6o0UWX2naW7HK45PDNYmoMIk5qs.jpg',
        title: 'No Country for Old Men',
        release_date: '2007',
        genres: ['Crime', 'Drama', 'Thriller']
      }];

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
