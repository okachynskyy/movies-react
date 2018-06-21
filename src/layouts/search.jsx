import * as React from "react";
import { Header } from '../components/header';
import { Content } from '../components/content';
import { Footer } from '../components/footer';

import { SearchBlock } from '../components/search-block';
import { SubHeader } from '../components/sub-header';
import { SearchCounter } from '../components/search-counter';
import { SortControls } from '../components/sort-controls';
import { MovieList } from '../components/movie-list'
import { ErrorBoundary } from '../components/error-boundary';
import './search.scss';

import { connect } from 'react-redux';

export class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>

        <Header>
          <SearchBlock />
        </Header>
        <SubHeader>
          <SearchCounter count={this.props.movies.data.length} />
          <SortControls />
        </SubHeader>

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
    movies: state.movies
  };
};

export const SearchLayout = connect(
  mapStateToProps,
  null
)(Layout);
