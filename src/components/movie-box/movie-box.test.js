import React from 'react';
import { MovieBox } from './index';
import renderer from 'react-test-renderer';

describe('MovieBox', () => {
  it('renders', () => {
    const movie = {
      id: '1',
      poster_path: 'https://image.tmdb.org/t/p/w500/6o0UWX2naW7HK45PDNYmoMIk5qs.jpg',
      title: 'No Country for Old Men',
      release_date: '2007',
      genres: ['Crime', 'Drama', 'Thriller']
    };

    const tree = renderer
      .create(<MovieBox movie={movie} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
