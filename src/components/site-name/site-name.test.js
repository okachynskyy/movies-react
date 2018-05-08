import React from 'react';
import { SiteName } from './index';
import { shallow } from 'enzyme';

it('renders', () => {
  const wrapper = shallow(<SiteName />);
  expect(wrapper.find('span').text()).toEqual('netflixroulette');
});