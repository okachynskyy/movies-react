import * as React from "react";
import { SearchFilters } from './search-filters';
import { Button } from './button';

export class SearchControls extends React.PureComponent {
  render() {
    return (
      <div className="search-controls">
        <SearchFilters />
        <Button className="btn-lg btn-red search-button">Search</Button>
      </div>
    );
  }
}
