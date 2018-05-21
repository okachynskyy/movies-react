import React from 'react';
import { SearchBlock } from './index';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

jest.mock('../site-name/site-name');
jest.mock('../search-field/search-field');
jest.mock('../search-controls/search-controls');


import { searchMovies } from '../../actions';

jest.mock('../../actions', () => ({
  searchMovies: jest.fn().mockReturnValue({ type: '', payload: {} })
}));

describe('SearchBlock', () => {
  it('renders', () => {
    const store = configureStore()({ searchForm: {} });
    const tree = renderer
      .create(<SearchBlock store={store} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should dispatch searchMovies action in handleSearch method', () => {
    const searchForm = { item: 'value' };
    const store = configureStore()({ searchForm });
    const wrapper = shallow(<SearchBlock store={store} />);

    wrapper.first().dive().instance().handleSearch();

    expect(searchMovies).toHaveBeenCalledWith(searchForm);
  });
});
