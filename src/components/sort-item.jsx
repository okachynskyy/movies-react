import * as React from "react";

export class SortItem extends React.PureComponent {
  render() {
    return (
      <span className={"sort-item" + (this.props.active ? " active" : "")}>
        {this.props.children}
      </span>
    );
  }
}
