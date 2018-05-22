import React from 'react';
import { SearchControls } from './index';
import renderer from 'react-test-renderer';

jest.mock('../button/button');
jest.mock('../search-by/search-by');

describe('SearchControls', () => {
  it('renders', () => {
    const callback = jest.fn();
    const tree = renderer
      .create(<SearchControls onSearchClick={callback} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
