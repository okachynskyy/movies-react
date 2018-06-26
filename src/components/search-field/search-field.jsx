import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSearchTerm } from '../../actions';

export class SearchFieldComponent extends React.PureComponent {
  constructor() {
    super(...arguments);
  }

  onInputChange = (event) => {
    this.props.setSearchTerm(event.target.value);
  }

  render() {
    return (
      <div className="search-field-wrapper">
        <input
          name="term"
          className="search-field"
          type="search"
          value={this.props.term}
          onChange={this.onInputChange}
          placeholder="Enter search term..."
        />
        <span className="search-field-icon">&#8617;</span>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  term: state.searchForm.term
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    setSearchTerm
  }, dispatch);

export const SearchField = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFieldComponent);
