import React from 'react';
import { SortControls } from './index';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('SortControls', () => {
  it('renders', () => {
    const callback = () => { };
    const tree = renderer
      .create(<SortControls />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have default state', () => {
    const wrapper = shallow(<SortControls />);

    expect(wrapper.instance().state.isReleaseDateEnabled).toEqual(true);
    expect(wrapper.instance().state.isRatingEnabled).toEqual(false);
  });

  it('should handle Rating Click', () => {
    const wrapper = shallow(<SortControls />);

    expect(wrapper.instance().state.isReleaseDateEnabled).toEqual(true);
    expect(wrapper.instance().state.isRatingEnabled).toEqual(false);

    wrapper.instance().handleRatingClick();

    expect(wrapper.instance().state.isReleaseDateEnabled).toEqual(false);
    expect(wrapper.instance().state.isRatingEnabled).toEqual(true);
  });

  it('should handle ReleaseDate Click after Rating Click', () => {
    const wrapper = shallow(<SortControls />);
    wrapper.instance().handleRatingClick();

    expect(wrapper.instance().state.isReleaseDateEnabled).toEqual(false);
    expect(wrapper.instance().state.isRatingEnabled).toEqual(true);

    wrapper.instance().handleReleaseDateClick();

    expect(wrapper.instance().state.isReleaseDateEnabled).toEqual(true);
    expect(wrapper.instance().state.isRatingEnabled).toEqual(false);
  });
});
