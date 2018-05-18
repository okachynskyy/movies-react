import * as React from "react";
import { SearchBy } from '../search-by';
import { Button } from '../button';


export class SearchControls extends React.PureComponent {
  render() {
    return (
      <div className="search-controls">
        <SearchBy />
        <Button
          className="search-button"
          size="lg"
          color="red"
          onClick={this.props.onSearchClick}
        >
          Search
          </Button>
      </div>
    );
  }
}
