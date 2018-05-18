import React from 'react';
import { SearchLayout } from './search';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'

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
    const store = configureStore()({ movies: [{ id: '1' }] });

    const tree = renderer
      .create(<SearchLayout store={store} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
