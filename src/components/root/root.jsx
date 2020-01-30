import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';

import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ErrorBoundary } from '../error-boundary';
import routes from '../../routes';

export function Root({ Router, location, context, store }) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router location={location} context={context}>
          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
}
