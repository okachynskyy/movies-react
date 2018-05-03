import * as React from "react";
import { MovieBox } from './movie-box';

export class MovieList extends React.Component {
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
  }
  render() {
    return (
      <div className="movie-list">
        <div className="container">
          {this.movies.map(movie => (
            <MovieBox movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
}
