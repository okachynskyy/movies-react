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

  handleSortItemClick(sortBy) {
    this.props.searchMovies(this.props.searchForm, sortBy);
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

const mapStateToProps = (state, ownProps) => ({
  searchForm: state.searchForm
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  searchMovies: (searchForm, sortBy) => {
    dispatch(
      searchMovies({ ...searchForm, sortBy })
    );
  }
});

export const SortControls = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortControlsComponent);
