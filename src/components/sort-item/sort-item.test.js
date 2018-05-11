import React from 'react';
import { SortItem } from './index';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('SortItem', () => {
  it('renders with active class', () => {
    const callback = () => { };
    const tree = renderer
      .create(<SortItem active={true} onClick={callback} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without active class', () => {
    const callback = () => { };
    const tree = renderer
      .create(<SortItem active={false} onClick={callback} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should run callback on click', () => {
    const callback = jest.fn();

    const wrapper = shallow(<SortItem onClick={callback} />);
    wrapper.find('span').simulate('click', { preventDefault() { } });

    expect(callback.mock.calls.length).toEqual(1);
  });
});
