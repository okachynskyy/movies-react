import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

if (typeof window === 'undefined') {
  global.window = {};
}

const configureStore = (initialState) => {
  let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(ReduxThunk),
    ),
  );

  return store;
};

export default configureStore;
