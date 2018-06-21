import * as React from "react";
import { TextRow, TextBlock, RectShape } from 'react-placeholder/lib/placeholders';

export class MovieDetails extends React.PureComponent {
  processDate(fullDate) {
    const dateObj = new Date(fullDate);
    return dateObj.getFullYear();
  }

  renderMovieDetails() {
    return (
      <div className="movie-details">
        <img className="movie-image" src={this.props.movie.poster_path} />
        <div className="movie-info">
          <div className="title">{this.props.movie.title}</div>
          <div className="rating">{this.props.movie.vote_average}</div>
          <div className="tagline">{this.props.movie.tagline}</div>
          <div className="year">{this.processDate(this.props.movie.release_date)}</div>
          <div className="duration">
            {this.props.movie.runtime}
            {this.props.movie.runtime ? " min" : ""}
          </div>
          <div className="overview">{this.props.movie.overview}</div>
        </div>
      </div>
    );
  }

  renderPlaceholder() {
    return (
      <div className="movie-details-placeholder">
        <div className="left-side">
          <RectShape style={{ width: 300, height: 450 }} />
        </div>
        <div className="right-side">
          <br />
          <TextRow color="#8c8c8c"/>
          <br />
          <TextRow color="#8c8c8c" />
          <br />
          <TextBlock color="#8c8c8c" rows={12} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        {this.props.isLoading ? this.renderPlaceholder() : this.renderMovieDetails()}
      </div>
    );
  }
}
