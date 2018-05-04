import * as React from "react";
import {SearchLayout} from './layouts/search';
import {DetailsLayout} from './layouts/details';
import './app.scss';

export class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <DetailsLayout/>
      </React.Fragment>
    );
  }
}
