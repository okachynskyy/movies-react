import React from 'react';
import { SearchField, SearchFieldComponent } from './search-field';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme';

import { setSearchTerm } from '../../actions';

jest.mock('../../actions', () => ({
  setSearchTerm: jest.fn().mockReturnValue({ type: '', payload: {} })
}));

describe('SearchField', () => {
  it('renders', () => {
    const store = configureStore()({ searchForm: { term: 'searchTerm' } });
    const tree = renderer
      .create(<SearchField store={store} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handle input change', () => {
    const setSearchTerm = () => { };
    const wrapper = shallow(<SearchFieldComponent setSearchTerm={setSearchTerm} />);
    const event = { target: { name: 'search-term', value: 'new-term' } };
    wrapper.find('.search-field').simulate('change', event);

    expect(wrapper.instance().state.term).toEqual('new-term');
  });

  it('dispatch event on input change', () => {
    const store = configureStore()({ searchForm: { term: 'searchTerm' } });
    const wrapper = shallow(<SearchField store={store} />);
    const event = { target: { name: 'search-term', value: 'new-term' } };

    wrapper.first().dive().instance().onInputChange(event);

    expect(setSearchTerm).toHaveBeenCalledWith('new-term');
  });

  it('handle form submit', () => {
    const onSubmit = jest.fn();
    const wrapper = shallow(<SearchFieldComponent onSubmit={onSubmit} />);
    const event = { preventDefault() { } };

    wrapper.find('.search-form').simulate('submit', event);
    expect(onSubmit).toHaveBeenCalled();
  });

  it('dispatch event on input change', () => {
    const store = configureStore()({ searchForm: { term: 'searchTerm' } });
    const onSubmit = jest.fn();
    const wrapper = shallow(<SearchField store={store} onSubmit={onSubmit} />);
    const event = { preventDefault() { } };

    wrapper.first().dive().instance().onFormSubmit(event);

    expect(onSubmit).toHaveBeenCalled();
  });
});
