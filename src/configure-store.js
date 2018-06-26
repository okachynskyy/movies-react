import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk'

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(ReduxThunk)
    )
  );

  return store;
};

export default configureStore;
