import * as React from "react";

export class Button extends React.PureComponent {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        type="button"
        className={"btn " + this.props.className}>{this.props.children}</button>
    );
  }
}
