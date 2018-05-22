import * as React from "react";

export class MovieBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate(date) {
    const jsDate = new Date(date);
    return jsDate.getFullYear();
  }
  render() {
    return (
      <div className="movie-box">
        <img className="movie-image" src={this.props.movie.poster_path} />
        <div className="movie-info">
          <div className="title">{this.props.movie.title}</div>
          <div className="year">{this.formatDate(this.props.movie.release_date)}</div>
          <div className="genres">
            {this.props.movie.genres.map(genre => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
