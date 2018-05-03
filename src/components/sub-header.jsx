import * as React from "react";

export class SubHeader extends React.PureComponent {
  render() {
    return (
      <div className="sub-header">
        <div className="container sub-header-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
