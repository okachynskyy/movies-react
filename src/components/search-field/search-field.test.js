import React from 'react';
import { SearchField } from './index';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme';

describe('SearchField', () => {
  it('renders', () => {
    const store = configureStore()({ searchForm: { term: 'searchTerm' } });
    const tree = renderer
      .create(<SearchField store={store} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it.skip('handle input change', () => {
    const store = configureStore()({ searchForm: { term: 'searchTerm' } });

    const wrapper = shallow(<SearchField store={store} />);
    const event = { target: { name: 'search-term', value: 'new-term' } };
    wrapper.find('.search-field').simulate('change', event);

    expect(wrapper.instance().state.term).toEqual('new-term');
  });

  it.skip('handle form submit', () => { });
});
