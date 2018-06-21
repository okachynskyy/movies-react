import * as React from "react";
import { withRouter } from 'react-router';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Header } from '../components/header';
import { Content } from '../components/content';
import { Footer } from '../components/footer';

import { Button } from '../components/button';

import { MovieDetails } from '../components/movie-details';
import { SubHeader } from '../components/sub-header';
import { MoviesByGenre } from '../components/movies-by-genre';

import { getMovieDetails } from '../actions';
import './details.scss';

export class Details extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.getMovieDetails(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.getMovieDetails(nextProps.match.params.id);
    }
  }

  constructor() {
    super(...arguments);
    this.returnToSearch = this.returnToSearch.bind(this);
  }

  returnToSearch() {
    this.props.history.push('/');
  }

  render() {
    return (
      <React.Fragment>

        <Header>
          <Button
            size="sm"
            color="white"
            className="top-search-button"
            onClick={this.returnToSearch}>
            Search
          </Button>

          <MovieDetails movie={this.props.movieDetails.data} isLoading={this.props.movieDetails.isLoading} />

        </Header>
        <SubHeader>
          {this.props.movieDetails.data.genres && !this.props.movieDetails.isLoading ?
            <span>Films by {this.props.movieDetails.data.genres[0]} genre</span>
            : ''}

        </SubHeader>

        <Content>
          {this.props.movieDetails.data.genres ? <MoviesByGenre genre={this.props.movieDetails.data.genres[0]} /> : ''}
        </Content>

        <Footer />

      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movieDetails: state.movieDetails
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getMovieDetails }, dispatch);

export const DetailsLayout = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Details));
