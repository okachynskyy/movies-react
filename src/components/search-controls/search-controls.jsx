import * as React from "react";
import { SearchBy } from '../search-by';
import { Button } from '../button';

export class SearchControls extends React.PureComponent {
  render() {
    return (
      <div className="search-controls">
        <SearchBy />
        <Button size='lg' color='red' className="search-button">Search</Button>
      </div>
    );
  }
}
