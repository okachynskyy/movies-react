import React from 'react';
import { SearchBlock } from './index';
import renderer from 'react-test-renderer';

jest.mock('../site-name/site-name');
jest.mock('../search-field/search-field');
jest.mock('../search-controls/search-controls');

describe('SearchBlock', () => {
  it('renders', () => {
    const tree = renderer
      .create(<SearchBlock />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
