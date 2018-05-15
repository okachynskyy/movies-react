import React from 'react';
import { SearchControls } from './index';
import renderer from 'react-test-renderer';

jest.mock('../button/button');
jest.mock('../search-filters');

describe('SearchControls', () => {
  it('renders', () => {
    const tree = renderer
      .create(<SearchControls />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
