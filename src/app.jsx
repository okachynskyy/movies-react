import * as React from "react";
import { SearchLayout } from './layouts/search';
import { DetailsLayout } from './layouts/details';
import { ErrorBoundary } from './components/error-boundary';
import './app.scss';

export function App() {
  return (
    <ErrorBoundary>
      <SearchLayout />
    </ErrorBoundary>
  );
}
