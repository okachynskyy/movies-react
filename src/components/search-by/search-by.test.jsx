import React from 'react';
import { SearchBy } from './index';
import renderer from 'react-test-renderer';

jest.mock('../search-mode-button/search-mode-button');

describe('SearchBy', () => {
  it('renders', () => {
    const tree = renderer
      .create(<SearchBy />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
