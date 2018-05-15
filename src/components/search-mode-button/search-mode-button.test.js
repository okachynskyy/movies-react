import React from 'react';
import { SearchModeButton } from './index';
import renderer from 'react-test-renderer';

jest.mock('../button/button');

describe('SearchModeButton', () => {
  it('renders', () => {
    const tree = renderer
      .create(<SearchModeButton />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
