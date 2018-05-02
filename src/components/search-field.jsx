import * as React from "react";

export class SearchField extends React.PureComponent {
  render() {
    return (
      <div className="search-field">
        <input className='search-field' type="search" />
        <button className='search-field-button' type="submit"><i>&#8617;</i></button>
      </div>
    );
  }
}
