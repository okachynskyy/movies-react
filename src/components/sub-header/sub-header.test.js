import React from 'react';
import { SubHeader } from './index';
import renderer from 'react-test-renderer';

describe('SubHeader', () => {
  it('renders', () => {
    const tree = renderer
      .create(<SubHeader />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
