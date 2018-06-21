import * as React from "react";
import { MovieBox, MovieBoxPlaceholder } from '../movie-box';

export class MovieList extends React.Component {
  renderMovies() {
    return this.props.movies.map(movie => (
      <MovieBox movie={movie} key={movie.id} />
    ));
  }

  renderMoviesPlaceholder() {
    return Array.from({ length: this.props.movies.length || 10 }).map((value, index) => (
      <MovieBoxPlaceholder key={index} />
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
          {
            this.props.isLoading ? this.renderMoviesPlaceholder() :
              this.props.movies.length ? this.renderMovies() : this.renderMessage()
          }
        </div>
      </div>
    );
  }
}
