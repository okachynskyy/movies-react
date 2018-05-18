import * as React from "react";

export class SortItem extends React.PureComponent {
  render() {
    return (
      <span
        onClick={this.props.onClick}
        className={"sort-item" + (this.props.active
          ? " active"
          : "")}>
        {this.props.children}
      </span>
    );
  }
}
