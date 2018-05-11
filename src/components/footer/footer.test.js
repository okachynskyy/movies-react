import React from 'react';
import { Footer } from './index';
import renderer from 'react-test-renderer';

describe('Footer', () => {
  it('renders', () => {
    const tree = renderer
      .create(<Footer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
