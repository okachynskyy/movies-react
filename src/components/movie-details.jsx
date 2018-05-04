import * as React from "react";

export class MovieDetails extends React.PureComponent {
  render() {
    return (
      <div className="movie-details container">
        <img className="movie-image" src={this.props.movie.poster_path} />
        <div className="movie-info">
          <div className="title">{this.props.movie.title}</div>
          <div className="rating">{this.props.movie.vote_average}</div>
          <div className="tagline">{this.props.movie.tagline}</div>
          <div className="year">{this.props.movie.release_date}</div>
          <div className="duration">{this.props.movie.runtime}
            min</div>
          <div className="overview">{this.props.movie.overview}</div>
        </div>
      </div>
    );
  }
}
