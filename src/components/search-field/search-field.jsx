import * as React from "react";
import { connect } from 'react-redux';
import { searchMovies } from "../../actions";

export class SearchFieldComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.searchMovies(this.state.term);
  }

  render() {
    return (
      <form className="search-field" onSubmit={this.onFormSubmit}>
        <input
          className='search-field'
          type="search"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <button className='search-field-button' type="submit"><i>&#8617;</i></button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchMovies: (term) => {
      dispatch(
        searchMovies({ search: term, searchBy: 'title' })
      );
    }
  };
};

export const SearchField = connect(
  null,
  mapDispatchToProps
)(SearchFieldComponent);
