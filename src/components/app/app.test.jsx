import React from 'react';
import { App } from './index';
import renderer from 'react-test-renderer';

jest.mock('../error-boundary/error-boundary');
jest.mock('../../layouts/search');

describe('App', () => {
  it('renders', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
