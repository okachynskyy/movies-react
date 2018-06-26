import * as React from 'react';
import { connect } from 'react-redux';
import { SortItem } from '../sort-item';
import { sortByReleaseDate, sortByRating } from '../../constants';
import { searchMovies } from '../../actions';

export class SortControlsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSortItemClick = this.handleSortItemClick.bind(this);
  }

  handleSortItemClick() {
    this.props.onChange();
  }

  render() {
    return (
      <div className="sort-controls">
        Sort by
        <SortItem onClick={this.handleSortItemClick} sortBy={sortByReleaseDate}>release date</SortItem>
        <SortItem onClick={this.handleSortItemClick} sortBy={sortByRating}>rating</SortItem>
      </div >
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  searchMovies: () => {
    dispatch(
      searchMovies()
    );
  }
});

export const SortControls = connect(
  null,
  mapDispatchToProps
)(SortControlsComponent);
