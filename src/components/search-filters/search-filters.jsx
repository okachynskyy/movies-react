import React from 'react';
import { SearchModeButton } from '../search-mode-button';

export class SearchFilters extends React.Component {
  render() {
    return (
      <div className="search-filters">
        <span className="filters-caption">Search by</span>
        <SearchModeButton mode='title'>Title</SearchModeButton>
        <SearchModeButton mode='genre'>Genre</SearchModeButton>
      </div>
    );
  }
}
