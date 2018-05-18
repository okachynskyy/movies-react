import * as React from 'react';
import { SortItem } from '../sort-item';

export class SortControls extends React.Component {
  render() {
    return (
      <div className="sort-controls">
        Sort by
        <SortItem sortBy='RELEASE_DATE'>release date</SortItem>
        <SortItem sortBy='RATING'>rating</SortItem>
      </div >
    );
  }
}
