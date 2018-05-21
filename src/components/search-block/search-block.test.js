import React from 'react';
import { SearchBlock } from './index';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'

jest.mock('../site-name/site-name');
jest.mock('../search-field/search-field');
jest.mock('../search-controls/search-controls');

describe('SearchBlock', () => {
  it('renders', () => {
    const store = configureStore()({ searchForm: {} });
    const tree = renderer
      .create(<SearchBlock store={store} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
