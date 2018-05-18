import * as React from "react";
import { Button } from '../button';
import { connect } from 'react-redux';
import { setSearchBy } from '../../actions';

class ModeButton extends React.PureComponent {
  render() {
    return (
      <Button
        onClick={this.props.onClick}
        size='sm'
        color={this.props.active
          ? 'red'
          : 'gray'}
        className="search-mode-btn">{this.props.children}
      </Button>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.mode === state.searchForm.searchBy
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(
        setSearchBy(ownProps.mode)
      );
    }
  };
};

export const SearchModeButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModeButton);
