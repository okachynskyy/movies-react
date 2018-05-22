import { createStore, applyMiddleware, compose } from 'redux';
import throttle from 'lodash/throttle';
import reducers from './reducers';
import { loadState, saveState } from './local-storage';
import promiseMiddleware from 'redux-promise';

const configureStore = () => {
  const persistedState = loadState();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    persistedState,
    composeEnhancers(
      applyMiddleware(promiseMiddleware)
    )
  );

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000));

  return store;
};

export default configureStore;
