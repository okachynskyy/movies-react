import React from 'react';
import { SearchLayout } from './search';
import renderer from 'react-test-renderer';

jest.mock('./search.scss', () => ({}));
jest.mock('../components/header/header');
jest.mock('../components/content/content');
jest.mock('../components/footer/footer');
jest.mock('../components/search-block/search-block');
jest.mock('../components/sub-header/sub-header');
jest.mock('../components/search-counter/search-counter');
jest.mock('../components/sort-controls/sort-controls');
jest.mock('../components/movie-list/movie-list');
jest.mock('../components/error-boundary/error-boundary');

describe('SearchLayout', () => {
  it('renders', () => {
    const tree = renderer
      .create(<SearchLayout />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
