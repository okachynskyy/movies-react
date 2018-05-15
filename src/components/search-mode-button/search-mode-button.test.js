import React from 'react';
import { SearchModeButton } from './index';
import renderer from 'react-test-renderer';

jest.mock('../button/button');

describe('SearchModeButton', () => {
  it('renders red button for active mode', () => {
    const tree = renderer
      .create(<SearchModeButton active={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders gray button for non active mode', () => {
    const tree = renderer
      .create(<SearchModeButton active={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
