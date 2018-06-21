import * as React from "react";
import { MovieList } from '../movie-list';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMoviesByGenre } from '../../actions';

export class MoviesByGenreComponent extends React.Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    this.props.getMoviesByGenre(this.props.genre);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.genre !== this.props.genre) {
      this.props.getMoviesByGenre(nextProps.genre);
    }
  }

  render() {
    return (
      <MovieList movies={this.props.moviesByGenre.data} isLoading={this.props.moviesByGenre.isLoading} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    moviesByGenre: state.moviesByGenre,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getMoviesByGenre }, dispatch);

export const MoviesByGenre = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesByGenreComponent);
