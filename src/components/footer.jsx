import * as React from "react";
import { SiteName } from './site-name';

export class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="main-footer">
        <div className="container">
          <SiteName />
        </div>
      </footer>
    );
  }
}
