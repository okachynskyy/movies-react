import React from 'react';
import { Content } from './index';
import renderer from 'react-test-renderer';

describe('Content', () => {
  it('renders', () => {
    const tree = renderer
      .create(<Content />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
