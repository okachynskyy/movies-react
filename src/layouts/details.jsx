import * as React from "react";
import { withRouter } from 'react-router';
import PropTypes from 'prop-types'

import { Header } from '../components/header';
import { Content } from '../components/content';
import { Footer } from '../components/footer';

import { Button } from '../components/button';

import { MovieDetails } from '../components/movie-details';
import { SubHeader } from '../components/sub-header';
import { MovieList } from '../components/movie-list'
import './details.scss';

export class Details extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor() {
    super();
    this.returnToSearh = this.returnToSearh.bind(this);
    this.movies = [];
    this.movie = {};
  }

  returnToSearh() {
    this.props.history.push('/');
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <React.Fragment>

        <Header>
          <Button
            size="sm"
            color="white"
            className="top-search-button"
            onClick={this.returnToSearh}>
            Search
          </Button>
          <MovieDetails movie={this.movie} />
        </Header>
        <SubHeader>
          Films by {this.genre} genre
        </SubHeader>

        <Content>
          <MovieList movies={this.movies} />
        </Content>

        <Footer />

      </React.Fragment>
    );
  }
}

export const DetailsLayout = withRouter(Details);
