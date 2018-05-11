import React from 'react';
import { ErrorBoundary } from './index';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe('Error Boundary', () => {
  it('renders', () => {
    const tree = renderer
      .create(<ErrorBoundary>Test</ErrorBoundary>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display error if error is intercepted during lifecycle hook', done => {
    const wrapper = mount(<ErrorBoundary>Test</ErrorBoundary>);
    wrapper.instance().componentDidCatch();

    process.nextTick(() => {
      wrapper.update();
      expect(wrapper.find('h1').text()).toEqual('Something went wrong :(Please, refresh page.');
      done();
    })
  });
});
