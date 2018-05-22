import React from 'react';
import { SortControls } from './index';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'

jest.mock('../sort-item/sort-item');

describe('SortControls', () => {
  it('renders', () => {
    const store = configureStore()({ searchForm: {} });

    const callback = () => { };
    const tree = renderer
      .create(<SortControls store={store} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
