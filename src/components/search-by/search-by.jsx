import React from 'react';
import { SearchModeButton } from '../search-mode-button';

export class SearchBy extends React.Component {
  render() {
    return (
      <div className="search-by">
        <span className="caption">Search by</span>
        <SearchModeButton mode='title'>Title</SearchModeButton>
        <SearchModeButton mode='genre'>Genre</SearchModeButton>
      </div>
    );
  }
}
