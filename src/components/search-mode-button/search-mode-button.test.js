import React from 'react';
import { SearchModeButton } from './index';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
jest.mock('../button/button');

describe('SearchModeButton', () => {
  it('renders red button if mode equal to searchBy in store', () => {
    const store = configureStore()({ searchBy: 'title' });
    const tree = renderer
      .create(
        <SearchModeButton mode='title' store={store}>Title </SearchModeButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders gray button if mode not equal to searchBy in store', () => {
    const store = configureStore()({ searchBy: 'title' });
    const tree = renderer
      .create(
        <SearchModeButton mode='other' store={store}>Title </SearchModeButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
