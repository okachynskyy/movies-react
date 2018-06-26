import React from 'react';
import { Provider } from 'react-redux';
import { ErrorBoundary } from '../error-boundary';


import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../../routes';


export function Root({ store }) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </Router>
      </Provider>
    </ErrorBoundary>
  )
};
