import * as React from "react";

export class MovieBox extends React.PureComponent {
  render() {
    return (
      <div className="movie-box">
        <img className="movie-image" src={this.props.movie.poster_path} />
        <div className="movie-info">
          <div className="title">{this.props.movie.title}</div>
          <div className="year">{this.props.movie.release_date}</div>
          <div className="genres">{this.props.movie.genres.map(genre => (<span>{genre}</span>))}</div>
          <div></div>
        </div>
      </div>
    );
  }
}
