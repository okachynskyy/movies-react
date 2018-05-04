import * as React from "react";

export class Content extends React.PureComponent {
  render() {
    return (
      <main className="main-content">
        {this.props.children}
      </main>
    );
  }
}
