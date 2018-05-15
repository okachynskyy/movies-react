import React from 'react';
import { Button } from './index';
import renderer from 'react-test-renderer';

jest.mock('./button.scss', () => ({
  btn: 'btn'
}));

describe('Button', () => {
  it('renders', () => {
    const tree = renderer
      .create(<Button />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
