import React from 'react';
import { Provider } from 'react-redux';
import { App } from '../app';
import { ErrorBoundary } from '../error-boundary';

export function Root({ store }) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  )
};
