import * as React from "react";

export class SearchCounter extends React.PureComponent {
  render() {
    return (
      <div className="search-counter">
        {this.props.count} movie(s) found
      </div>
    );
  }
}
