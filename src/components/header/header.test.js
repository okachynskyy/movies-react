import React from 'react';
import { Header } from './index';
import renderer from 'react-test-renderer';

describe('Header', () => {
  it('renders', () => {
    const tree = renderer
      .create(<Header />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
