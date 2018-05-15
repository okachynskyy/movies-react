import React from 'react';
import { SearchFilters } from './index';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

jest.mock('../search-mode-button/search-mode-button');

describe('SearchFilters', () => {
  it('renders', () => {
    const tree = renderer
      .create(<SearchFilters />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have default state', () => {
    const wrapper = shallow(<SearchFilters />);

    expect(wrapper.instance().state.isTitleEnabled).toEqual(true);
    expect(wrapper.instance().state.isGenreEnabled).toEqual(false);
  });

  it('should handle Genre Click', () => {
    const wrapper = shallow(<SearchFilters />);

    expect(wrapper.instance().state.isTitleEnabled).toEqual(true);
    expect(wrapper.instance().state.isGenreEnabled).toEqual(false);

    wrapper.instance().handleGenreClick();

    expect(wrapper.instance().state.isTitleEnabled).toEqual(false);
    expect(wrapper.instance().state.isGenreEnabled).toEqual(true);
  });

  it('should handle Title Click after Genre Click', () => {
    const wrapper = shallow(<SearchFilters />);
    wrapper.instance().handleGenreClick();

    expect(wrapper.instance().state.isTitleEnabled).toEqual(false);
    expect(wrapper.instance().state.isGenreEnabled).toEqual(true);

    wrapper.instance().handleTitleClick();

    expect(wrapper.instance().state.isTitleEnabled).toEqual(true);
    expect(wrapper.instance().state.isGenreEnabled).toEqual(false);
  });
});
