import * as React from 'react';
import { SortItem } from './sort-item';

export class SortControls extends React.PureComponent {
  render() {
    return (
      <div className="sort-controls">
        Sort by
        <SortItem active={true}>release date</SortItem>
        <SortItem>rating</SortItem>
      </div>
    );
  }
}
