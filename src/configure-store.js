import { createStore, applyMiddleware } from 'redux';
import throttle from 'lodash/throttle';
import reducers from './reducers';
import { loadState, saveState } from './local-storage';
import promiseMiddleware from 'redux-promise';

const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(
    reducers,
    persistedState,
    applyMiddleware(promiseMiddleware)
  );

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000));

  return store;
};

export default configureStore;
