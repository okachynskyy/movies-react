import * as React from "react";
import { SearchLayout } from './layouts/search';
import './app.scss';

export class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <SearchLayout />
      </React.Fragment>
    );
  }
}
