import * as React from "react";
import { connect } from 'react-redux';
import { setSortBy } from '../../actions';

export class SortItemComponent extends React.PureComponent {
  render() {
    return (
      <span
        onClick={this.props.onClick}
        className={"sort-item" + (this.props.active
          ? " active"
          : "")}>
        {this.props.children}
      </span>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.sortBy === state.searchForm.sortBy
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(
        setSortBy(ownProps.sortBy)
      );
      ownProps.onClick(ownProps.sortBy);
    }
  };
};

export const SortItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortItemComponent);
