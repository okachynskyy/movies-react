import React from 'react';
import { SearchField } from './index';
import renderer from 'react-test-renderer';

describe('SearchField', () => {
  it('renders', () => {
    const tree = renderer
      .create(<SearchField />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
