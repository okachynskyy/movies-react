import * as React from "react";
import { SearchLayout } from './layouts/search';
import { DetailsLayout } from './layouts/details';
import './app.scss';

export function App() {
  return (
    <React.Fragment>
      <SearchLayout />
    </React.Fragment>
  );
}
