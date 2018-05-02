import * as React from "react";

export class Header extends React.PureComponent {
  render() {
    return (
      <header className="main-header">
        {this.props.children}
      </header>
    );
  }
}
