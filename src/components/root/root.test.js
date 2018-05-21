import React from 'react';
import { Root } from './index';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

jest.mock('../app/app');

describe('Root Component', () => {
  it('renders', () => {
    const store = configureStore()({});
    const tree = renderer
      .create(<Root store={store} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
