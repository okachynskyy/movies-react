import * as React from "react";
import { Header } from '../components/header';
import { SiteName } from '../components/site-name';
import { SearchField } from '../components/search-field';
import { SearchControls } from '../components/search-controls';
import { SubHeader } from '../components/sub-header';
import { MovieList } from '../components/movie-list'
import './search.scss';

export class SearchLayout extends React.Component {
  constructor() {
    super();
    this.movies = [
      {
        poster_path: 'https://image.tmdb.org/t/p/w500/6o0UWX2naW7HK45PDNYmoMIk5qs.jpg',
        title: 'No Country for Old Men',
        release_date: '2007',
        genres: [
          'Crime',
          'Drama',
          'Thriller'
        ],
      },
      {
        poster_path: 'https://image.tmdb.org/t/p/w500/6o0UWX2naW7HK45PDNYmoMIk5qs.jpg',
        title: 'No Country for Old Men',
        release_date: '2007',
        genres: [
          'Crime',
          'Drama',
          'Thriller'
        ],
      },
      {
        poster_path: 'https://image.tmdb.org/t/p/w500/6o0UWX2naW7HK45PDNYmoMIk5qs.jpg',
        title: 'No Country for Old Men',
        release_date: '2007',
        genres: [
          'Crime',
          'Drama',
          'Thriller'
        ],
      },
      {
        poster_path: 'https://image.tmdb.org/t/p/w500/6o0UWX2naW7HK45PDNYmoMIk5qs.jpg',
        title: 'No Country for Old Men',
        release_date: '2007',
        genres: [
          'Crime',
          'Drama',
          'Thriller'
        ],
      }
    ];

    // this.movies = [];
  }
  render() {
    return (
      <React.Fragment>
        <Header>
          <div className="container search-container">
            <SiteName />
            <h1 className="search-header">Find your movie</h1>
            <SearchField />
            <SearchControls />
          </div>
        </Header>
        <SubHeader>
          SubHeader
        </SubHeader>
        <MovieList movies={this.movies} />
      </React.Fragment>
    );
  }
}
