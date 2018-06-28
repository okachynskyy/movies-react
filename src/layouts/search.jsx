import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import queryString from 'query-string';

import './search.scss';

import { Header } from '../components/header';
import { Content } from '../components/content';
import { Footer } from '../components/footer';

import { SearchBlock } from '../components/search-block';
import { SubHeader } from '../components/sub-header';
import { SearchCounter } from '../components/search-counter';
import { SortControls } from '../components/sort-controls';
import { MovieList } from '../components/movie-list';
import { ErrorBoundary } from '../components/error-boundary';
import { SearchForm } from '../components/search-form';

import {
  searchMovies, setSearchTerm, setSearchBy, setSortBy,
} from '../actions';

export class Layout extends React.Component {
  static firstTimeServer = false;

  static fetchData(store, match, query) {
    console.log('fetchData', query);

    if (Object.keys(query).length !== 0) {
      store.dispatch(setSearchTerm(query.term));
      store.dispatch(setSearchBy(query.searchBy));
      store.dispatch(setSortBy(query.sortBy));
    }
    return store.dispatch(searchMovies());
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);

    if (
      this.props.searchForm.term === values.term
      && this.props.searchForm.searchBy === values.searchBy
      && this.props.searchForm.sortBy === values.sortBy) {
      return;
    }

    if (values.term) {
      this.props.setSearchTerm(values.term);
    }

    if (values.searchBy) {
      this.props.setSearchBy(values.searchBy);
    }

    if (values.sortBy) {
      this.props.setSortBy(values.sortBy);
    }

    this.props.searchMovies();
  }

  onFormSubmit = (data) => {
    this.props.searchMovies();
    this.updateURL();
  }

  onSortByChange = () => {
    this.props.searchMovies();
    this.updateURL();
  }

  updateURL = () => {
    const search = queryString.stringify(this.props.searchForm);
    this.props.history.push({
      pathname: '/search/',
      search
    });
  }

  render() {
    return (
      <React.Fragment>

        <SearchForm onSubmit={this.onFormSubmit}>
          <Header>
            <SearchBlock />
          </Header>
          <SubHeader>
            <SearchCounter count={this.props.movies.data.length} />
            <SortControls onChange={this.onSortByChange} />
          </SubHeader>
        </SearchForm>

        <Content>
          <ErrorBoundary>
            <MovieList movies={this.props.movies.data} isLoading={this.props.movies.isLoading} />
          </ErrorBoundary>
        </Content>

        <Footer />

      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies,
    searchForm: state.searchForm
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ searchMovies, setSearchTerm, setSearchBy, setSortBy }, dispatch);

export const SearchLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Layout));
