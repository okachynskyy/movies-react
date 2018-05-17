import * as React from "react";
import { SearchLayout } from '../../layouts/search';
import { DetailsLayout } from '../../layouts/details';
import { ErrorBoundary } from '../error-boundary';

export function App() {
  return (
    <ErrorBoundary>
      <SearchLayout />
    </ErrorBoundary>
  );
}
