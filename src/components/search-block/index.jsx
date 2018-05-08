import * as React from "react";
import { SiteName } from '../site-name';
import { SearchField } from '../search-field';
import { SearchControls } from '../search-controls';

export class SearchBlock extends React.PureComponent {
  render() {
    return (
      <div className="container search-container">
        <SiteName />
        <h1 className="search-header">Find your movie</h1>
        <SearchField />
        <SearchControls />
      </div>
    );
  }
}
