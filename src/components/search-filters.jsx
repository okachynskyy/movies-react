import * as React from "react";
import { Button } from './button';

export class SearchFilters extends React.PureComponent {
  render() {
    return (
      <div className="search-filters">
        <span className="filters-caption">Search by</span>
        <Button className="btn-sm btn-red filter-btn">Title</Button>
        <Button className="btn-sm btn-gray filter-btn">Genre</Button>
      </div>
    );
  }
}
