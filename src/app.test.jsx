import React from 'react';
import { App } from './app';
import renderer from 'react-test-renderer';

jest.mock('./app.scss', () => ({}));
jest.mock('./components/error-boundary/error-boundary');
jest.mock('./layouts/search');

describe('App', () => {
  it('renders', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
