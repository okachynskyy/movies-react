import * as React from "react";
import {SearchModeButton} from './search-mode-button';

export class SearchFilters extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isTitleEnabled: true,
      isGenreEnabled: false
    }
  }
  handleTitleClick() {
    this.setState({isTitleEnabled: true, isGenreEnabled: false});
  }

  handleGenreClick() {
    this.setState({isTitleEnabled: false, isGenreEnabled: true});
  }

  render() {
    return (
      <div className="search-filters">
        <span className="filters-caption">Search by</span>
        <SearchModeButton
          active={this.state.isTitleEnabled}
          onClick={this
          .handleTitleClick
          .bind(this)}>Title</SearchModeButton>
        <SearchModeButton
          active={this.state.isGenreEnabled}
          onClick={this
          .handleGenreClick
          .bind(this)}>Genre</SearchModeButton>
      </div>
    );
  }
}
