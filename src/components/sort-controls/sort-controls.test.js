import React from 'react';
import { SortControls } from './index';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

jest.mock('../sort-item/sort-item');

describe('SortControls', () => {
  it('renders', () => {
    const callback = () => { };
    const tree = renderer
      .create(<SortControls />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
