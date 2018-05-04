import * as React from "react";
import { Header } from '../components/header';
import { Content } from '../components/content';
import { Footer } from '../components/footer';

import { SearchBlock } from '../components/search-block';
import { SubHeader } from '../components/sub-header';
import { SearchCounter } from '../components/search-counter';
import { SortControls } from '../components/sort-controls';
import { MovieList } from '../components/movie-list'
import './search.scss';

export class SearchLayout extends React.Component {
  constructor() {
    super();
    this.movies = [
      {
        id: '1',
        poster_path: 'https://image.tmdb.org/t/p/w500/6o0UWX2naW7HK45PDNYmoMIk5qs.jpg',
        title: 'No Country for Old Men',
        release_date: '2007',
        genres: ['Crime', 'Drama', 'Thriller']
      }, {
        id: '2',
        poster_path: 'https://image.tmdb.org/t/p/w500/6o0UWX2naW7HK45PDNYmoMIk5qs.jpg',
        title: 'No Country for Old Men',
        release_date: '2007',
        genres: ['Crime', 'Drama', 'Thriller']
      }, {
        id: '3',
        poster_path: 'https://image.tmdb.org/t/p/w500/6o0UWX2naW7HK45PDNYmoMIk5qs.jpg',
        title: 'No Country for Old Men',
        release_date: '2007',
        genres: ['Crime', 'Drama', 'Thriller']
      }, {
        id: '4',
        poster_path: 'https://image.tmdb.org/t/p/w500/6o0UWX2naW7HK45PDNYmoMIk5qs.jpg',
        title: 'No Country for Old Men',
        release_date: '2007',
        genres: ['Crime', 'Drama', 'Thriller']
      }
    ];

    // this.movies = [];
  }
  render() {
    return (
      <React.Fragment>

        <Header>
          <SearchBlock />
          <SubHeader>
            <SearchCounter count={4} />
            <SortControls />
          </SubHeader>
        </Header>

        <Content>
          <MovieList movies={this.movies} />
        </Content>

        <Footer />

      </React.Fragment>
    );
  }
}
