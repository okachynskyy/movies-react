import React from 'react';
import { SearchCounter } from './index';
import { shallow } from 'enzyme';

describe('Search Counter', () => {
  it('renders', () => {
    const wrapper = shallow(<SearchCounter count={5} />);
    expect(wrapper.find('.search-counter').text()).toEqual('5 movie(s) found');
  });
});
