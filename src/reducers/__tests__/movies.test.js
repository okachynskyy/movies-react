import moviesReducer from '../movies';
import { SEARCH_MOVIES } from "../../actions";

describe('movies reducer', () => {
  it('should have default state empty array', () => {
    const expectedState = [];
    const returnedState = moviesReducer(undefined, {});
    expect(returnedState).toEqual(expectedState);
  });

  it('should handle SEARCH_MOVIES action', () => {
    const action = {
      type: SEARCH_MOVIES,
      payload: { data: { data: 'payloadData' } }
    }
    const returnedState = moviesReducer(undefined, action);
    expect(returnedState).toEqual('payloadData');
  });
});
