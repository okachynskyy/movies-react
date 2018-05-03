import * as React from "react";

export class Button extends React.PureComponent {
  render() {
    return (
      <button className={"btn " + this.props.className}>{this.props.children}</button>
    );
  }
}
