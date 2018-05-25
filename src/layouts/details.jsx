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
    this.genre = 'Dramma';

    this.movies = [
      {
        poster_path: 'https://image.tmdb.org/t/p/w500/6o0UWX2naW7HK45PDNYmoMIk5qs.jpg',
        title: 'No Country for Old Men',
        release_date: '2007',
        genres: ['Crime', 'Drama', 'Thriller']
      }, {
        poster_path: 'https://image.tmdb.org/t/p/w500/6o0UWX2naW7HK45PDNYmoMIk5qs.jpg',
        title: 'No Country for Old Men',
        release_date: '2007',
        genres: ['Crime', 'Drama', 'Thriller']
      }, {
        poster_path: 'https://image.tmdb.org/t/p/w500/6o0UWX2naW7HK45PDNYmoMIk5qs.jpg',
        title: 'No Country for Old Men',
        release_date: '2007',
        genres: ['Crime', 'Drama', 'Thriller']
      }, {
        poster_path: 'https://image.tmdb.org/t/p/w500/6o0UWX2naW7HK45PDNYmoMIk5qs.jpg',
        title: 'No Country for Old Men',
        release_date: '2007',
        genres: ['Crime', 'Drama', 'Thriller']
      }
    ];

    this.movie = {
      "title": "No Country for Old Men",
      "tagline": "There are no clean getaways.",
      "vote_average": 7.8,
      "release_date": "2007",
      "poster_path": "https://image.tmdb.org/t/p/w500/6o0UWX2naW7HK45PDNYmoMIk5qs.jpg",
      "overview": "Llewelyn Moss stumbles upon dead bodies, $2 million and a hoard of heroin in a T" +
        "exas desert, but methodical killer Anton Chigurh comes looking for it, with loca" +
        "l sheriff Ed Tom Bell hot on his trail. The roles of prey and predator blur as t" +
        "he violent pursuit of money and justice collide.",
      "genres": [
        "Crime", "Drama", "Thriller"
      ],
      "runtime": 122
    };

    this.returnToSearh = this.returnToSearh.bind(this);
  }

  returnToSearh() {
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
