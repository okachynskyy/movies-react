import * as React from "react";
import { MovieBox } from './movie-box';

export class MovieList extends React.Component {
  constructor() {
    super();
  }

  renderMovies() {
    return this.props.movies.map(movie => (
      <MovieBox movie={movie} key={movie.id} />
    ));
  }

  renderMessage() {
    return (
      <div className="message">
        {this.props.message ? this.props.message : 'No films found'}
      </div>
    );
  }


  render() {
    return (
      <div className="movie-list">
        <div className="container">
          {this.props.movies.length ? this.renderMovies() : this.renderMessage()}
        </div>
      </div>
    );
  }
}
