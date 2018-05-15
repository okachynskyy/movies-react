import React from 'react';
import { SiteName } from './index';
import renderer from 'react-test-renderer';

describe('SiteName', () => {
  it('renders', () => {
    const tree = renderer
      .create(<SiteName />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
