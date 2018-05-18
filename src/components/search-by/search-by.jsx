import React from 'react';
import { SearchModeButton } from '../search-mode-button';
import { searchByTitle, searchByGenres } from '../../constants';

export class SearchBy extends React.Component {
  render() {
    return (
      <div className="search-by">
        <span className="caption">Search by</span>
        <SearchModeButton mode={searchByTitle}>Title</SearchModeButton>
        <SearchModeButton mode={searchByGenres}>Genre</SearchModeButton>
      </div>
    );
  }
}
