import * as React from "react";
import { connect } from 'react-redux';
import { searchMovies } from '../../actions';
import { SiteName } from '../site-name';
import { SearchField } from '../search-field';
import { SearchControls } from '../search-controls';

export class SearchBlockComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    this.props.searchMovies(this.props.searchForm);
  }

  render() {
    return (
      <div className="container search-container">
        <SiteName />
        <h1 className="search-header">Find your movie</h1>
        <SearchField onSubmit={this.handleSearch} />
        <SearchControls onSearchClick={this.handleSearch} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  searchForm: state.searchForm
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  searchMovies: (searchForm) => {
    dispatch(
      searchMovies(searchForm)
    );
  }
});

export const SearchBlock = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBlockComponent);
