import React from 'react';
import { SearchField } from './index';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'

describe('SearchField', () => {
  it('renders', () => {
    const store = configureStore()({ searchTerm: 'searchTerm' });
    const tree = renderer
      .create(<SearchField store={store} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
