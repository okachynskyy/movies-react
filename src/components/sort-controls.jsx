import * as React from 'react';
import { SortItem } from './sort-item';

export class SortControls extends React.Component {
  state = {
    isReleaseDateEnabled: true,
    isRatingEnabled: false
  };

  handleReleaseDateClick = () => {
    this.setState({ isReleaseDateEnabled: true, isRatingEnabled: false });
  }

  handleRatingClick = () => {
    this.setState({ isReleaseDateEnabled: false, isRatingEnabled: true });
  }

  render() {
    return (
      <div className="sort-controls">
        Sort by
        <SortItem
          active={this.state.isReleaseDateEnabled}
          onClick={this.handleReleaseDateClick}>release date</SortItem>
        <SortItem
          active={this.state.isRatingEnabled}
          onClick={this.handleRatingClick}>rating</SortItem>
      </div>
    );
  }
}
