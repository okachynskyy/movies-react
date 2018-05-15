import React from 'react';
import { MovieDetails } from './index';
import renderer from 'react-test-renderer';

describe('MovieDetails', () => {
  it('renders', () => {
    const movie = {
      "title": "title",
      "tagline": "tagline",
      "vote_average": 8,
      "release_date": "2007",
      "poster_path": "http://poster_path",
      "overview": "overview",
      "genres": [
        "genres", "genres"
      ],
      "runtime": 122
    };

    const tree = renderer
      .create(<MovieDetails movie={movie} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
